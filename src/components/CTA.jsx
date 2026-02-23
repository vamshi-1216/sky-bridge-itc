export default function CTA() {
  return (
    <section className="relative overflow-hidden pt-40 pb-14 text-white bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500">

      {/* Top Half Moon Curve */}
      <div
        className="absolute top-0 left-0 w-full h-32 bg-gray-100"
        style={{ clipPath: "ellipse(75% 100% at 50% 0%)" }}
      ></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">
          Ready to Build Your Dream Team?
        </h2>

        <p className="mt-4 text-blue-100">
          Partner with Skybridge ITC today and take the first step
          toward innovative staffing and technology solutions.
        </p>

        <button className="mt-8 bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Get Started Today
        </button>
      </div>
    </section>
  );
}