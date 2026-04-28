import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 shadow-md">

      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-3">

        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

          {/* Logo */}
          <Link to="/" className="flex items-center">

            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
              className="h-12 mr-3"
              alt="React Logo"
            />

            <span className="text-2xl font-bold text-gray-800">
              ShivamDev
            </span>

          </Link>

          {/* Buttons */}
          <div className="flex items-center lg:order-2">

            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 transition"
            >
              Log in
            </Link>

            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 transition"
            >
              Get Started
            </Link>

          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex lg:w-auto lg:order-1">

            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

              {/* Home */}
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 
                    ${
                      isActive
                        ? 'text-orange-700'
                        : 'text-gray-700'
                    }
                    hover:text-orange-700`
                  }
                >
                  Home
                </NavLink>
              </li>

              {/* About */}
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 
                    ${
                      isActive
                        ? 'text-orange-700'
                        : 'text-gray-700'
                    }
                    hover:text-orange-700`
                  }
                >
                  About
                </NavLink>
              </li>

              {/* Contact */}
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 
                    ${
                      isActive
                        ? 'text-orange-700'
                        : 'text-gray-700'
                    }
                    hover:text-orange-700`
                  }
                >
                  Contact
                </NavLink>
              </li>

              {/* Github */}
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 
                    ${
                      isActive
                        ? 'text-orange-700'
                        : 'text-gray-700'
                    }
                    hover:text-orange-700`
                  }
                >
                  Github
                </NavLink>
              </li>

            </ul>

          </div>

        </div>

      </nav>

    </header>
  )
}