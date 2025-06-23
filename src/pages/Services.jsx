import React from 'react'

export default function Services() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Our Services</h1>
      <p style={{ marginBottom: '2rem' }}>We offer end-to-end GTM transformation services tailored for ambitious startups and evolving enterprises.</p>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <div style={cardStyle}>
          <h2>📈 GTM Strategy & Playbook</h2>
          <p>Crafted blueprints for market entry, ICP definition, messaging, and winning positioning.</p>
        </div>
        <div style={cardStyle}>
          <h2>🤖 RevOps & AI Automation</h2>
          <p>Modernize your revenue engine with AI-first tools, analytics, and automated workflows.</p>
        </div>
        <div style={cardStyle}>
          <h2>💡 Sales & Marketing Enablement</h2>
          <p>Hands-on systems for lead generation, onboarding, pipeline management, and deal acceleration.</p>
        </div>
        <div style={cardStyle}>
          <h2>🌍 Expansion & Growth Advisory</h2>
          <p>Scale across geos or verticals — with expert-backed plans, partners, and playbooks.</p>
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
