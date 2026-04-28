import React from 'react'

export default function Contact() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white py-10">

      <div className="max-w-6xl w-full mx-auto px-6 lg:px-8">

        <div className="overflow-hidden rounded-2xl shadow-xl">

          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Left Section */}
            <div className="p-8 bg-gray-100">

              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight">
                Get in touch
              </h1>

              <p className="mt-3 text-lg text-gray-600">
                Fill in the form to start a conversation
              </p>

              {/* Address */}
              <div className="flex items-center mt-8 text-gray-600">

                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />

                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                <div className="ml-4 text-md font-semibold tracking-wide">
                  Gorakhpur, Uttar Pradesh, India
                </div>

              </div>

              {/* Phone */}
              <div className="flex items-center mt-6 text-gray-600">

                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>

                <div className="ml-4 text-md font-semibold tracking-wide">
                  +91 9876543210
                </div>

              </div>

              {/* Email */}
              <div className="flex items-center mt-6 text-gray-600">

                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />

                  <path d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>

                <div className="ml-4 text-md font-semibold tracking-wide">
                  shivam@example.com
                </div>

              </div>
            </div>

            {/* Right Section - Form */}
            <form className="p-8 bg-white flex flex-col justify-center">

              {/* Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="mt-2 py-3 px-4 rounded-lg border border-gray-300 text-gray-800 font-medium focus:border-orange-500 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col mt-4">
                <label htmlFor="email" className="hidden">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="mt-2 py-3 px-4 rounded-lg border border-gray-300 text-gray-800 font-medium focus:border-orange-500 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col mt-4">
                <label htmlFor="tel" className="hidden">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Phone Number"
                  className="mt-2 py-3 px-4 rounded-lg border border-gray-300 text-gray-800 font-medium focus:border-orange-500 focus:outline-none"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col mt-4">
                <label htmlFor="message" className="hidden">
                  Message
                </label>

                <textarea
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  className="mt-2 py-3 px-4 rounded-lg border border-gray-300 text-gray-800 font-medium focus:border-orange-500 focus:outline-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="md:w-40 bg-orange-700 text-white font-bold py-3 px-6 rounded-lg mt-6 hover:bg-orange-600 transition duration-300"
              >
                Submit
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>
  )
}