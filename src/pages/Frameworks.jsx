import React from 'react'

export default function Frameworks() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Our Proprietary Frameworks</h1>
      <p style={{ marginBottom: '2rem' }}>
        We've built high-impact frameworks that accelerate growth, operational clarity, and GTM excellence.
      </p>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <div style={cardStyle}>
          <h2>🎯 360° GTM Framework</h2>
          <p>End-to-end strategy covering ICP, messaging, sales playbooks, RevOps, enablement, and retention. A complete commercial OS.</p>
        </div>
        <div style={cardStyle}>
          <h2>🏹 Bowtie Revenue Model</h2>
          <p>Map your pre-sale and post-sale motions, aligning marketing, sales, and CS into one seamless customer journey.</p>
        </div>
        <div style={cardStyle}>
          <h2>📊 Growth Scorecard</h2>
          <p>A structured scoring model for readiness, expansion potential, and RevOps maturity — used in audits and diagnostics.</p>
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
