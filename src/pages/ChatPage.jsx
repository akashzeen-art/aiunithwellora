import { useEffect, useMemo, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { findGuideById } from '../data/categories'
import './ChatPage.css'

const UNITH = {
  api_base: 'https://chat-origin.api.unith.live',
  org_id: 'track',
  head_id: 'david-1468',
  language: 'en-US',
  theme: 'dark',
  font: 'Nunito',
  time_pressure: 'false',
  embed: 'false',
  api_key: '73553e4089854cd4b38a271c50b36fe1',
  vm_version: '1',
  message_feedback: 'true',
  subs_enabled: 'true',
  mic_enabled: 'true',
  username: 'nserve',
  tag: 'content.aiwellora.com',
}

const STYLE_IDS = ['unith-bundle-css', 'unith-th-css', 'unith-th-overwrite-css']
const SCRIPT_IDS = ['unith-speech-js', 'unith-bundle-js']

function ensureStylesheet(id, href) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('link')
    el.id = id
    el.rel = 'stylesheet'
    document.head.appendChild(el)
  }
  el.href = href
}

function loadScript(id, src) {
  return new Promise((resolve, reject) => {
    document.getElementById(id)?.remove()
    const script = document.createElement('script')
    script.id = id
    script.src = src
    script.async = false
    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`Failed to load ${src}`))
    document.body.appendChild(script)
  })
}

function cleanupUnithAssets() {
  SCRIPT_IDS.forEach((id) => document.getElementById(id)?.remove())
  STYLE_IDS.forEach((id) => document.getElementById(id)?.remove())
  document.body.style.backgroundColor = ''
  document.body.classList.remove('chat-active')
}

export default function ChatPage() {
  const { guideId } = useParams()
  const hostRef = useRef(null)
  const guide = useMemo(() => findGuideById(guideId), [guideId])
  const title = guide?.name || 'Guide'

  useEffect(() => {
    let cancelled = false
    const host = hostRef.current
    if (!host) return undefined

    document.body.classList.add('chat-active')
    ensureStylesheet(STYLE_IDS[0], '/chat/bundle.css')
    ensureStylesheet(STYLE_IDS[1], '/chat/th.css')
    ensureStylesheet(STYLE_IDS[2], '/chat/th_overwrite.css')

    host.innerHTML = ''
    const head = document.createElement('div')
    head.id = 'talking-head'
    Object.entries(UNITH).forEach(([key, value]) => {
      head.setAttribute(`data-${key}`, value)
    })
    host.appendChild(head)

    const boot = async () => {
      await new Promise((r) => requestAnimationFrame(r))
      if (cancelled) return
      try {
        await loadScript(
          SCRIPT_IDS[0],
          `/chat/microsoft-speech-recognition.js?t=${Date.now()}`,
        )
        if (cancelled) return
        await loadScript(SCRIPT_IDS[1], `/chat/bundle.js?t=${Date.now()}`)
      } catch (err) {
        console.error(err)
      }
    }

    boot()

    return () => {
      cancelled = true
      if (host) host.innerHTML = ''
      cleanupUnithAssets()
    }
  }, [guideId])

  return (
    <div className="chat-page">
      <div className="chat-page-inner">
        <div className="chat-heading">
          <Link to={guide?.sectionPath || '/'} className="chat-back">
            ← Back
          </Link>
          <h1 className="chat-title">{title}</h1>
        </div>

        <div ref={hostRef} className="talking-head-host" />
      </div>
    </div>
  )
}
