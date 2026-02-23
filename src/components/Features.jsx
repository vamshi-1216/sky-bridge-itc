export default function Features() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-blue-800">
          Why Choose Skybridge?
        </h2>

        {/* Divider */}
        <div className="w-100 h-1 bg-gray-300 mx-auto mt-4 rounded"></div>

        {/* Features Row */}
        <div className="mt-12 grid md:grid-cols-4 gap-10">
          {[
            { img: "/icons/industry.png", title: "Industry Expertise", desc: "Years of experience." },
            { img: "/icons/client.png", title: "Client-Centric", desc: "Tailored solutions." },
            { img: "/icons/qualitytalent.png", title: "Quality Talent", desc: "Top-tier professionals." },
            { img: "/icons/fastdelivery.png", title: "Fast Delivery", desc: "Quick & efficient." }
          ].map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-16 mb-4 mx-auto transition duration-300 group-hover:scale-110"
              />
              <h3 className="text-xl font-semibold text-blue-800">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}