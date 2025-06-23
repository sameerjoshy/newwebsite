import React from 'react'

export default function Resources() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Resources</h1>
      <p style={{ marginBottom: '2rem' }}>
        A curated collection of insights, playbooks, and case studies from the trenches of revenue operations, GTM strategy, and startup growth.
      </p>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <div style={cardStyle}>
          <h2>📐 Rev Engine OS</h2>
          <p>Our flagship GTM and Revenue Operating System — a structured blueprint for scaling SaaS revenue efficiently using AI and RevOps.</p>
          <p><i>Coming soon as downloadable whitepaper</i></p>
        </div>

        <div style={cardStyle}>
          <h2>📊 Case Studies</h2>
          <p>Deep-dive examples of how we’ve helped startups scale revenue, optimize GTM execution, and transform growth engines.</p>
          <p><i>Coming soon</i></p>
        </div>

        <div style={cardStyle}>
          <h2>🎯 Framework Library</h2>
          <p>Browse through our structured, field-tested frameworks like the 360° GTM Map, Sales Flywheel, and more.</p>
          <p><i>Interactive version launching shortly</i></p>
        </div>
      </div>
    </div>
  )
}

const cardStyle = {
  padding: '1.25rem',
  borderRadius: '0.75rem',
  backgroundColor: '#f4f4f4',
  boxShadow: '0 0 10px rgba(0,0,0,0.05)',
}
