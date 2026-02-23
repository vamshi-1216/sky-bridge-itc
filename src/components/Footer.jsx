export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white pt-20 pb-10 shadow-[0_-8px_25px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-12 border-b border-blue-800 pb-12">

          <div className="max-w-sm">
            <h3 className="text-xl font-semibold tracking-wide mb-3">
            About Our Company
            </h3>
            <div className="w-12 h-[2px] bg-blue-500 mb-5"></div>

            <p className="text-blue-200 leading-relaxed text-[15px]">
            Our years in staffing and consulting unveiled a critical industry gap —
            a genuine, hands-on partner focused on creating perfect employer-employee matches.
            </p>
          </div>

          <div className="md:pl-12">
            <h3 className="text-xl font-semibold tracking-wide mb-3">
              Quick Links
            </h3>
            <div className="w-12 h-[2px] bg-blue-500 mb-5"></div>

            <ul className="space-y-3 text-blue-200 text-[15px]">
              {["Home", "About Us", "Services", "Contact"].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-white transition duration-300 hover:translate-x-1"
                >
                  › {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold tracking-wide mb-3">
              Contact Us
            </h3>
            <div className="w-12 h-[2px] bg-blue-500 mb-5"></div>

            <div className="space-y-4 text-blue-200 text-[15px] leading-relaxed">
              <a
                href="mailto:Contact@skybridgeitc.in"
                className="flex items-start gap-2 hover:text-white transition duration-300"
              >
                <span className="text-lg">✉️</span>
                Contact@skybridgeitc.in
              </a>

              <p className="flex items-start gap-2">
                <span className="text-lg">📍</span>
                Helios Business Park, Gate No 2 Tech Building,
                Kadubeesanahalli, Bangalore – 560103
              </p>
            </div>
          </div>

        </div>

        <div className="text-center mt-10 text-blue-400 text-sm tracking-wide">
          © 2026 Skybridge ITC. All rights reserved.
        </div>

      </div>
    </footer>
  );
}