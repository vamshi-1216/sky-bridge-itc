import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="bg-gradient-to-r from-blue-900/95 to-blue-600/95 backdrop-blur-md shadow-md">
        <div className="mx-auto max-w-7xl px-7 h-20 flex items-center justify-between">

          
          <NavLink to="/" className="flex flex-col items-center leading-none">
            <img
              src="/favicon2.png"
              alt="SkyBridge ITC"
              className="h-9 w-9 object-contain"
            />

            <h1 className="text-white text-lg font-semibold tracking-wide -mt-1">
              SkyBridge <span className="font-light">ITC</span>
            </h1>
          </NavLink>

          {/* Navigation Links */}
          <ul className="flex gap-10 text-white font-medium items-center">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative group transition ${
                    isActive ? "text-white" : "text-white/90"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </ul>

         
          <button className="bg-blue-500 hover:bg-blue-400 transition px-6 py-2 rounded-lg text-white font-semibold shadow-lg">
            Get Started
          </button>

        </div>
      </div>
    </nav>
  );
}