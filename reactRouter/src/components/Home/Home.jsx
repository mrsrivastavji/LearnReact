import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4">

      {/* Hero Section */}
      <aside className="relative overflow-hidden bg-gradient-to-r from-orange-100 to-white rounded-3xl sm:mx-6 mx-2 py-12 sm:py-20 shadow-lg">

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">

            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">

              Download Now

              <span className="block text-orange-700 mt-2">
                React Router Project
              </span>

            </h2>

            <p className="text-gray-600 text-lg">
              Build modern React applications using React Router,
              dynamic routes, loaders, and Tailwind CSS.
            </p>

            {/* Button */}
            <Link
              to="/github"
              className="inline-flex items-center px-6 py-3 font-medium text-white bg-orange-700 rounded-lg hover:bg-orange-800 transition duration-300 shadow-md"
            >

              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="mr-2"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>

              Download Now

            </Link>

          </div>
        </div>

        {/* Hero Image */}
       <div className="absolute top-6 left-6 opacity-90">
        <img
        className="w-20 sm:w-28 object-contain"
        src="https://cdn-icons-png.flaticon.com/512/919/919851.png"
        alt="React Illustration"
        />

        </div>

      </aside>

      {/* Bottom Image */}
      <div className="grid place-items-center mt-16">

        <img
          className="sm:w-96 w-56"
          src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
          alt="Developer Illustration"
        />

      </div>

      {/* Heading */}
      <h1 className="text-center text-3xl sm:text-5xl py-10 font-bold text-gray-800">
        Welcome to My React Router Project
      </h1>

    </div>
  )
}