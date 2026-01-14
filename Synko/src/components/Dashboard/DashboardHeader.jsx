import React from 'react'
import { Plus } from 'lucide-react'

const DashboardHeader = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Dashboard</h1>

        <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
          <Plus size={16} />
          New Project
        </button>
      </div>
      <div className='pb-4'>
        <p className='text-sm text-gray-400 font-light'>Welcome back! Here’s an overview of your projects.</p>
      </div>
    </div>
  )
}

export default DashboardHeader
