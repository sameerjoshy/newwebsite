import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">About Growth Engineers</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-lg text-gray-700">
          Growth Engineers exists to rewire how SaaS companies think about revenue. We don’t just design go-to-market strategies — we engineer intelligent, AI-first growth systems that win.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">What Makes Us Different</h2>
        <ul className="text-left list-disc list-inside text-gray-700 space-y-2">
          <li>Not another cookie-cutter agency.</li>
          <li>Not driven by billable hours, but by measurable outcomes.</li>
          <li>Deep operator DNA — we’ve been inside the belly of the beast, from AWS to startups.</li>
          <li>We blend GTM strategy, RevOps, product, and execution — not just slides and hype.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Meet the Founder</h2>
        <div className="text-left text-gray-700">
          <h3 className="text-xl font-bold">Sameer Joshi, Founder & Chief Growth Engineer</h3>
          {/* Add a photo here if available */}
          <p className="mt-2 italic">
            “I’ve spent the last two decades building and scaling SaaS businesses — from Amazon and Dell to AWS and VC-backed startups. I’ve seen what works, what fails, and why. Growth Engineers was born to fix the broken playbooks and help bold founders build systems that actually grow revenue — without the fluff.”
          </p>
          <ul className="mt-4 list-disc list-inside space-y-1">
            <li>Ex-Amazon, Dell, AWS | Startup COO | Growth Engineer.</li>
            <li>Led 0→1 and 10→100 journeys across startups and global enterprises.</li>
            <li>Builds playbooks that drive real revenue, not just vanity metrics.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
