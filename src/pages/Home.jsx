// src/pages/Home.jsx
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gray-50">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 text-gray-900">
          Growth Engineers
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6 text-gray-600">
          AI-first revenue engine design for unstoppable SaaS growth.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/services"
            className="px-6 py-3 text-white bg-black hover:bg-gray-800 rounded-full font-medium transition"
          >
            Explore Services
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-gray-800 text-gray-800 hover:bg-gray-100 rounded-full font-medium transition"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Placeholder for next sections */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Trusted by Top SaaS Teams</h2>
        <p className="text-gray-500 mb-8">[Logos or testimonials section coming soon]</p>
      </section>
    </div>
  );
}
