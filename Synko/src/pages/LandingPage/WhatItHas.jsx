import React from 'react'
import { FolderKanban, Monitor, TrendingUp, User2 } from 'lucide-react'

const WhatItHas = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
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
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition duration-300">
          <FolderKanban className="w-12 h-12 mb-4 text-blue-500 border border-gray-100 bg-gray-100 rounded-2xl p-3" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Create Projects & Tasks
          </h3>
          <p className="text-gray-600">
            Manage everything in one place. Break down complex projects into
            simple, actionable steps.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition duration-300">
          <User2 className="w-12 h-12 mb-4 text-green-500 border border-gray-100 bg-gray-100 rounded-2xl p-3" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Assign Tasks
          </h3>
          <p className="text-gray-600">
            Keep your team accountable. Clear ownership ensures everyone knows
            what they need to do.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition duration-300">
          <TrendingUp className="w-12 h-12 mb-4 text-purple-500 border border-gray-100 bg-gray-100 rounded-2xl p-3" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Track Progress
          </h3>
          <p className="text-gray-600">
            See status at a glance. Visual indicators help you spot bottlenecks
            before they become blockers.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition duration-300">
          <Monitor className="w-12 h-12 mb-4 text-red-500 border border-gray-100 bg-gray-100 rounded-2xl p-3" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Simple Dashboard
          </h3>
          <p className="text-gray-600">
            Overview without clutter. Get straight to work with a distraction-free
            environment.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhatItHas