import React from 'react'
import { FolderKanban, Monitor, TrendingUp, User2 } from 'lucide-react'

const WhatItHas = () => {
  return (
    <section id='what-it-has' className="py-20 px-6 md:px-12 bg-gray-50">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Everything you need, nothing you don’t
        </h2>
        <p className="text-gray-600 text-lg">
          We stripped away the complexity of traditional project management tools
          to give you an interface that just works.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300">
          <FolderKanban className="w-18 h-18 mb-5 text-blue-500 border border-gray-100 bg-gray-100 rounded-2xl p-3" />
          <h3 className="text-2xl font-semibold text-gray-700 mb-3">
            Create Projects & Tasks
          </h3>
          <p className="text-gray-500 text-xl">
            Manage everything in one place. Break down complex projects into
            simple, actionable steps.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300">
          <User2 className="w-18 h-18 mb-5 text-green-500 border border-gray-100 bg-gray-100 rounded-2xl p-3" />
          <h3 className="text-2xl font-semibold text-gray-700 mb-3">
            Assign Tasks
          </h3>
          <p className="text-gray-500 text-xl">
            Keep your team accountable. Clear ownership ensures everyone knows
            what they need to do.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300">
          <TrendingUp className="w-18 h-18 mb-5 text-purple-500 border border-gray-100 bg-gray-100 rounded-2xl p-3" />
          <h3 className="text-2xl font-semibold text-gray-700 mb-3">
            Track Progress
          </h3>
          <p className="text-gray-500 text-xl">
            See status at a glance. Visual indicators help you spot bottlenecks
            before they become blockers.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300">
          <Monitor className="w-18 h-18 mb-5 text-red-500 border border-gray-100 bg-gray-100 rounded-2xl p-3" />
          <h3 className="text-2xl font-semibold text-gray-700 mb-3">
            Simple Dashboard
          </h3>
          <p className="text-gray-500 text-xl">
            Overview without clutter. Get straight to work with a distraction-free
            environment.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhatItHas