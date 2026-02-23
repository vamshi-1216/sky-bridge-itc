export default function Services() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl font-bold text-blue-800">
        Your Premier Staffing & Technology Partner
        </h2>
        <div className="w-200 h-[2px] bg-gray-300 mx-auto mt-4 rounded"></div>

        <p className="mt-4 text-gray-700">
        Skybridge is dedicated to delivering exceptional staffing and advanced tech solutions
        <br /> tailored to your needs.
        </p>

       
        <div className="mt-12 grid grid-cols-3 gap-8">

          <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition">
            <img
              src="/icons/staffingbg.png"
              alt="IT Staffing"
              className="mx-auto h-24 mb-6"
            />
            <h3 className="text-xl font-semibold text-blue-800">
              IT Staffing Solutions
            </h3>
            <p className="mt-3 text-gray-600">
              Expert talent for your IT needs.
            </p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition">
            <img
              src="/icons/consultingbg.png"
              alt="Consulting"
              className="mx-auto h-24 mb-6"
            />
            <h3 className="text-xl font-semibold text-blue-800">
              Technology Consulting
            </h3>
            <p className="mt-3 text-gray-600">
              Innovative strategies & solutions.
            </p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition">
            <img
              src="/icons/managedbg.png"
              alt="Managed Services"
              className="mx-auto h-24 mb-6"
            />
            <h3 className="text-xl font-semibold text-blue-800">
            Managed Services
            </h3>
            <p className="mt-3 text-gray-600">
            Comprehensive IT support.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}