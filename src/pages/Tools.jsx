import React from 'react'

export default function Tools() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Free AI GTM Tools</h1>
      <p style={{ marginBottom: '2rem' }}>
        Explore our suite of free tools built for founders, revenue leaders, and GTM teams. These tools are designed to accelerate your go-to-market execution.
      </p>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <div style={cardStyle}>
          <h2>🎧 GTM Insight Extractor</h2>
          <p>Paste a YouTube or podcast link and get the summarized GTM takeaways from founder interviews.</p>
          <p><i>Coming soon</i></p>
        </div>

        <div style={cardStyle}>
          <h2>✍️ Meeting Intelligence Agent</h2>
          <p>Upload a transcript and get summarized notes, follow-up emails, CRM-ready insights, and Slack updates.</p>
          <p><i>Coming soon</i></p>
        </div>

        <div style={cardStyle}>
          <h2>🚀 Growth Agent OS (Outbound SDR Bot)</h2>
          <p>Define your ICP, targeting, and persona — this tool will generate smart, automated outbound campaigns.</p>
          <p><i>Coming soon</i></p>
        </div>
      </div>
    </div>
  )
}

const cardStyle = {
  padding: '1.25rem',
  borderRadius: '0.75rem',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 0 10px rgba(0,0,0,0.05)',
}
