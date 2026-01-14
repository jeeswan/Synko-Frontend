import React from 'react'
import { Folder, CircleCheck, Clock, CircleAlert } from 'lucide-react'
import DashboardHeader from '../components/Dashboard/DashboardHeader.jsx'
import StatSection from '../components/Dashboard/StatSection.jsx'
import ProjectsSection from '../components/Dashboard/ProjectsSection.jsx'

const Dashboard = () => {
  return (
    <div className="space-y-1">
      <DashboardHeader />
      <StatSection />
      <ProjectsSection />

      {/* Projects Overviews
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-8">
        <div className="h-32 bg-white rounded-2xl shadow">
          <div className='flex flex-row pt-8 px-8 justify-between'>
            <p>Total Projects</p>
            <Folder size={24} color='#2D53EA'/>
          </div>
          <p className='px-8 pt-1 text-2xl font-semibold'>4</p>
        </div>

        <div className="h-32 bg-white rounded-2xl shadow">
          <div className='flex flex-row pt-8 px-8 justify-between'>
            <p>Completed Tasks</p>
            <CircleCheck size={24} color='#00E65C'/>
          </div>
          <p className='px-8 pt-1 text-2xl font-semibold'>10</p>
        </div>

        <div className="h-32 bg-white rounded-2xl shadow">
          <div className='flex flex-row pt-8 px-8 justify-between'>
            <p>In Progress</p>
            <Clock size={24} color='#E06C00'/>
          </div>
          <p className='px-8 pt-1 text-2xl font-semibold'>4</p>
        </div>

        <div className="h-32 bg-white rounded-2xl shadow">
          <div className='flex flex-row pt-8 px-8 justify-between'>
            <p>Overdue</p>
            <CircleAlert size={24} color='#C40000'/>
          </div>
          <p className='px-8 pt-1 text-2xl font-semibold'>4</p>
        </div>
      </div> */}

      {/* <div className="pb-8">
        <h1 className="text-2xl font-semibold">Projects</h1>
      </div>

      
      <div className="space-y-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Website Redesign</h2>
          <p className="text-gray-600 mb-2">Status: In Progress</p>
          <p className="text-gray-600 mb-2">Due Date: 2024-09-30</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Website Redesign</h2>
          <p className="text-gray-600 mb-2">Status: In Progress</p>
          <p className="text-gray-600 mb-2">Due Date: 2024-09-30</p>
        </div>
       
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Website Redesign</h2>
          <p className="text-gray-600 mb-2">Status: In Progress</p>
          <p className="text-gray-600 mb-2">Due Date: 2024-09-30</p>
        </div>
       
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Website Redesign</h2>
          <p className="text-gray-600 mb-2">Status: In Progress</p>
          <p className="text-gray-600 mb-2">Due Date: 2024-09-30</p>
        </div>
      </div> */}
    </div>
  )
}

export default Dashboard
