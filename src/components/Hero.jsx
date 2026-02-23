export default function Hero() {
  return (
    <section
      className="relative text-white pt-32 pb-48 bg-cover bg-center"
      style={{ 
        backgroundImage: "url('/images/hero-bg.png')",
        // This creates the "half-moon" curve at the bottom
        clipPath: "ellipse(150% 100% at 50% 0%)" 
      }}
    >
      {/* 1. Dark Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/40 to-transparent"></div>

      {/* 2. Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 min-h-[40vh] flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold leading-tight">
            Building Bridges Between
            <br /> Talent and Technology
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Connecting top professionals with innovative solutions
            to drive your business success.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-500 px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition shadow-lg">
              Our Services
            </button>

            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}