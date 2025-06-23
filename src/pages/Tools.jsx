import React from 'react'

export default function Tools() {
  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Free AI Tools
      </h1>
      <p style={{ marginBottom: '2rem' }}>
        Explore our collection of free, AI-powered tools designed to accelerate your GTM motion. Built for founders, operators, and revenue leaders.
      </p>

      <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <li style={toolStyle}>
          <h3 style={{ margin: 0 }}>🎙️ AI Podcast Summarizer</h3>
          <p style={{ margin: '0.5rem 0' }}>
            Drop a podcast or YouTube link. Get a transcript and GTM-ready summary.
          </p>
          <a href="#" style={linkStyle}>Launch Tool →</a>
        </li>

        <li style={toolStyle}>
          <h3 style={{ margin: 0 }}>🤖 Growth Agent SDR Bot</h3>
          <p style={{ margin: '0.5rem 0' }}>
            Automate outbound using ICP data, personalization, and scheduling. Integrates with Gmail + Notion.
          </p>
          <a href="#" style={linkStyle}>Coming Soon</a>
        </li>

        <li style={toolStyle}>
          <h3 style={{ margin: 0 }}>🧠 GTM Framework Wizard</h3>
          <p style={{ margin: '0.5rem 0' }}>
            Generate structured GTM strategies by answering a few questions. Frameworks + Notion export included.
          </p>
          <a href="#" style={linkStyle}>Coming Soon</a>
        </li>
      </ul>
    </div>
  )
}

const toolStyle = {
  backgroundColor: '#f8f8f8',
  padding: '1rem',
  borderRadius: '0.5rem',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
}

const linkStyle = {
  textDecoration: 'none',
  color: '#0070f3',
  fontWeight: 'bold'
}
