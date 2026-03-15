import { ArrowBigLeft, ArrowRight } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-white via-blue-50 to-blue-100 items-center justify-center text-center gap-6 px-5 py-35">
      <h1 className="bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 bg-clip-text text-4xl md:text-5xl font-bold text-transparent leading-snug py-3">
        Organize your projects.<br />
        Track your tasks.<br />
        Stay productive.
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-xl py-2">
        Simple task and project management for teams that want to focus on doing the work, not managing it.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 py-3">
        <a href='/signup' className="items-center text-white rounded-3xl bg-blue-600 hover:bg-blue-700 py-3 px-6 text-lg font-semibold hover:text-gray-300 transition">
          Get Started <ArrowRight className="inline-block ml-2" />
        </a>
        <a href="#what-it-has" className="rounded-3xl border border-gray-900 text-gray-700 hover:bg-gray-200 py-3 px-4 font-semibold">
          Learn More
        </a>
      </div>
    </div>
  )
}

export default Hero