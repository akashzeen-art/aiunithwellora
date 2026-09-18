import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

function localChatApi() {
  return {
    name: 'local-chat-api',
    configureServer(server) {
      server.middlewares.use('/api/chat', async (req, res, next) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        try {
          const chunks = []
          for await (const chunk of req) chunks.push(chunk)
          const body = JSON.parse(Buffer.concat(chunks).toString() || '{}')
          const messages = body.messages

          if (!Array.isArray(messages) || messages.length === 0) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'messages array is required' }))
            return
          }

          const env = loadEnv(server.config.mode, process.cwd(), '')
          const apiKey = env.OPENAI_API_KEY || process.env.OPENAI_API_KEY

          if (!apiKey) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'OPENAI_API_KEY is not configured' }))
            return
          }

          const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model: 'gpt-4o-mini',
              messages,
              temperature: 0.7,
            }),
          })

          const data = await openaiRes.json()
          res.statusCode = openaiRes.status
          res.setHeader('Content-Type', 'application/json')

          if (!openaiRes.ok) {
            res.end(
              JSON.stringify({
                error: data?.error?.message || 'OpenAI request failed',
              }),
            )
            return
          }

          res.end(
            JSON.stringify({
              content: data.choices?.[0]?.message?.content?.trim() || '',
            }),
          )
        } catch (err) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: err.message || 'Server error' }))
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), localChatApi()],
})
