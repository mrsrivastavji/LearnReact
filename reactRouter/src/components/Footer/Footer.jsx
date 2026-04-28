import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white border-t shadow-sm">

      <div className="mx-auto w-full max-w-screen-xl p-6 lg:py-8">

        <div className="md:flex md:justify-between">

          {/* Logo Section */}
          <div className="mb-6 md:mb-0">

            <Link to="/" className="flex items-center">

              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                className="h-14 mr-3"
                alt="React Logo"
              />

              <span className="text-2xl font-bold text-gray-800">
                ShivamDev
              </span>

            </Link>

          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">

            {/* Resources */}
            <div>

              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>

              <ul className="text-gray-500 font-medium">

                <li className="mb-4">
                  <Link to="/" className="hover:text-orange-600 transition">
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className="hover:text-orange-600 transition"
                  >
                    About
                  </Link>
                </li>

              </ul>

            </div>

            {/* Follow Us */}
            <div>

              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow Me
              </h2>

              <ul className="text-gray-500 font-medium">

                <li className="mb-4">
                  <a
                    href="https://github.com/mrsrivastavji"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-orange-600 transition"
                  >
                    GitHub
                  </a>
                </li>

                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-orange-600 transition"
                  >
                    LinkedIn
                  </a>
                </li>

              </ul>

            </div>

            {/* Legal */}
            <div>

              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>

              <ul className="text-gray-500 font-medium">

                <li className="mb-4">
                  <Link to="#" className="hover:text-orange-600 transition">
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link to="#" className="hover:text-orange-600 transition">
                    Terms & Conditions
                  </Link>
                </li>

              </ul>

            </div>

          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200 lg:my-8" />

        {/* Bottom Section */}
        <div className="sm:flex sm:items-center sm:justify-between">

          <span className="text-sm text-gray-500 sm:text-center">
            © 2026{" "}
            <a
              href="https://github.com/mrsrivastavji"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Shivam Srivastav
            </a>
            . All Rights Reserved.
          </span>

          {/* Social Icons */}
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">

            {/* GitHub */}
            <a
              href="https://github.com/mrsrivastavji"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-black transition"
            >
              <span className="sr-only">GitHub</span>

              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.648.5.5 5.648.5 12A11.5 11.5 0 0 0 8.207 22.95c.6.111.793-.261.793-.58 0-.287-.011-1.244-.017-2.256-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.071 1.835 2.81 1.305 3.495.998.108-.776.419-1.306.762-1.606-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.469-2.382 1.236-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.49 11.49 0 0 1 12 6.318c1.02.005 2.047.138 3.006.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.48 5.921.43.372.814 1.102.814 2.222 0 1.606-.015 2.901-.015 3.296 0 .322.19.697.8.578A11.502 11.502 0 0 0 23.5 12C23.5 5.648 18.352.5 12 .5Z" />
              </svg>

            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}