import { useEffect, useMemo, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { findGuideById } from '../data/categories'
import './ChatPage.css'

const OPENAI_URL = 'https://api.openai.com/v1/chat/completions'
const MODEL = 'gpt-4o-mini'

async function askOpenAI(messages) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY
  if (!apiKey) {
    throw new Error('Missing VITE_OPENAI_API_KEY in .env')
  }

  const res = await fetch(OPENAI_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: MODEL,
      messages,
      temperature: 0.7,
    }),
  })

  const data = await res.json()
  if (!res.ok) {
    throw new Error(data?.error?.message || `OpenAI error (${res.status})`)
  }

  return data.choices?.[0]?.message?.content?.trim() || ''
}

export default function ChatPage() {
  const { guideId } = useParams()
  const guide = useMemo(() => findGuideById(guideId), [guideId])
  const title = guide?.name || 'Guide'
  const listRef = useRef(null)

  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [messages, setMessages] = useState([])

  const systemPrompt = useMemo(
    () =>
      `You are a warm, supportive wellness guide for AI Wellora. The current topic is "${title}". Keep answers clear, practical, and kind. Do not claim to be a doctor. If the user needs medical help, suggest contacting a professional.`,
    [title],
  )

  useEffect(() => {
    setMessages([
      {
        role: 'assistant',
        content: `Hi — I'm here to chat about ${title}. What would you like to talk about?`,
      },
    ])
    setInput('')
    setError('')
  }, [guideId, title])

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages, busy])

  const send = async (e) => {
    e?.preventDefault()
    const text = input.trim()
    if (!text || busy) return

    const nextUser = { role: 'user', content: text }
    const history = [...messages, nextUser]
    setMessages(history)
    setInput('')
    setBusy(true)
    setError('')

    try {
      const reply = await askOpenAI([
        { role: 'system', content: systemPrompt },
        ...history.map(({ role, content }) => ({ role, content })),
      ])
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }])
    } catch (err) {
      setError(err.message || 'Something went wrong')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="chat-page">
      <div className="chat-page-inner chat-page-inner--text">
        <div className="chat-heading">
          <Link to={guide?.sectionPath || '/'} className="chat-back">
            ← Back
          </Link>
          <h1 className="chat-title">{title}</h1>
          <p className="chat-subtitle">Text chat only (Unith avatar hidden)</p>
        </div>

        <div className="text-chat">
          <div className="text-chat-messages" ref={listRef}>
            {messages.map((msg, i) => (
              <div
                key={`${msg.role}-${i}`}
                className={`text-chat-bubble text-chat-bubble--${msg.role}`}
              >
                {msg.content}
              </div>
            ))}
            {busy ? (
              <div className="text-chat-bubble text-chat-bubble--assistant text-chat-typing">
                Thinking…
              </div>
            ) : null}
          </div>

          {error ? <p className="text-chat-error">{error}</p> : null}

          <form className="text-chat-form" onSubmit={send}>
            <input
              className="text-chat-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Ask about ${title}…`}
              disabled={busy}
              autoComplete="off"
            />
            <button className="text-chat-send" type="submit" disabled={busy || !input.trim()}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
