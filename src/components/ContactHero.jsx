export default function ContactHero() {
  return (
    <section
      className="relative text-white pt-32 pb-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/aboutus.png')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/40 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 min-h-[10vh] flex items-center justify-center">
        <div>
          <h1 className="text-5xl font-bold tracking-wide">
          Contact us
          </h1>
        </div>
      </div>
    </section>
  );
}