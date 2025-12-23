import { useState } from "react";
import { NavLink } from "react-router-dom";


const linkInactive = "opacity-90";
const linkActive = "opacity-100";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="z-10 bg-blue-600 text-white ">
      <nav className="mb-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="fixed h-25 top-0 left-0 w-full bg-blue-600 text-white flex justify-between items-center px-8 py-4 z-50 shadow-md">
          {/* Brand */}
          <NavLink to="/" className="font-semibold text-2xl">
            Ebola Info Center
          </NavLink>

          {/* Desktop menu */}
          <ul className="ml-auto hidden md:flex gap-6 text-sm font-med font-semibold ">
            <li className="flex gap-8 text-[17px] font-semibold">
            <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-green-400" : "hover:text-yellow-300"
          }
        >
          About Ebola
        </NavLink>

        <NavLink
          to="/symptoms"
          className={({ isActive }) =>
            isActive ? "text-green-400" : "hover:text-yellow-300"
          }
        >
          Symptoms
        </NavLink>

        <NavLink
          to="/prevention"
          className={({ isActive }) =>
            isActive ? "text-green-400" : "hover:text-yellow-300"
          }
        >
          Prevention
        </NavLink>

        <NavLink
          to="/live-updates"
          className={({ isActive }) =>
            isActive ? "text-green-400" : "hover:text-yellow-300"
          }
        >
          Live Updates
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-green-400" : "hover:text-yellow-300"
          }
        >
          Contact
        </NavLink>
            </li>
          </ul>

          {/* Right side */}
          <div className=" flex ml-7 items-center gap-3">
            <a
              href="#"
              className=" hidden md:inline-block rounded-md bg-yellow-400 px-3 py-1.5 text-gray-900 font-semibold hover:bg-yellow-300 transition"
            >
              Subscribe
            </a>

            {/* Mobile toggle */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-blue-500">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 space-y-2">
            <NavLink to="/about" onClick={() => setOpen(false)} className="block py-1 hover:underline">About Ebola</NavLink>
            <NavLink to="/symptoms" onClick={() => setOpen(false)} className="block py-1 hover:underline">Symptoms</NavLink>
            <NavLink to="/prevention" onClick={() => setOpen(false)} className="block py-1 hover:underline">Prevention</NavLink>
            <NavLink to="/live-updates" onClick={() => setOpen(false)} className="block py-1 hover:underline">Live Updates</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className="block py-1 hover:underline">Contact</NavLink>
            <a
              href="#"
              className="inline-block rounded-md bg-yellow-400 px-3 py-1.5 text-gray-900 font-semibold hover:bg-yellow-300 transition"
            >
              Subscribe
            </a>
          </div>
        </div>
      )}
    </header>
  );
}