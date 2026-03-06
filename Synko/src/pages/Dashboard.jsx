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
    </div>
  )
}

export default Dashboard
