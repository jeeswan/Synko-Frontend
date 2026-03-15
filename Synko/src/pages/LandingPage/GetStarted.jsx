import React from 'react'

const GetStarted = () => {
  return (
    <section className="bg-gradient-to-r from-red-300 via-yellow-200 to-green-300 py-24 px-6">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl text-center py-16 px-6 md:px-12">
        <span className="inline-block mb-4 px-4 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full">
          Organize smarter with Synko
        </span>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
          Start your first project now
        </h2>

        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Create projects, assign tasks, and collaborate with your team effortlessly using Synko.
        </p>

        <a
          href="/signup"
          className="inline-block bg-gray-900 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:scale-105 hover:bg-black transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}

export default GetStarted