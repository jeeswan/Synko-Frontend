import { ChartLine, ListTodo, UserPlus } from 'lucide-react'
import React from 'react'

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How It Works
        </h2>
        <p className="text-gray-600 text-lg">
          Three simple steps to project clarity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Step 1 */}
        <div className="text-center">
          <div className="relative w-fit mx-auto mb-4">
            <UserPlus
              className="text-blue-500 bg-gray-100 rounded-full p-4"
              size={64}
            />
            <div className="absolute -top-2 -right-2 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shadow-md">
              1
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Sign up & create project
          </h3>
          <p className="text-gray-600">
            Get started in 30 seconds. No credit card required.
          </p>
        </div>

        {/* Step 2 */}
        <div className="text-center">
          <div className="relative w-fit mx-auto mb-4">
            <ListTodo
              className="text-green-500 bg-gray-100 rounded-full p-4"
              size={64}
            />
            <div className="absolute -top-2 -right-2 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shadow-md">
              2
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Add tasks & assign users
          </h3>
          <p className="text-gray-600">
            Invite your team and delegate responsibilities.
          </p>
        </div>

        {/* Step 3 */}
        <div className="text-center">
          <div className="relative w-fit mx-auto mb-4">
            <ChartLine
              className="text-purple-500 bg-gray-100 rounded-full p-4"
              size={64}
            />
            <div className="absolute -top-2 -right-2 bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shadow-md">
              3
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Track progress in dashboard
          </h3>
          <p className="text-gray-600">
            Watch your project move seamlessly from to-do to done.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks