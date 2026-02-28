import React from 'react'
import ProjectHeader from '../components/ProjectDashboard/ProjectHeader'
import KanbanBoard from '../components/ProjectDashboard/KanbanBoard'

const ProjectDashboard = () => {
  return (
    // full-height container so we can scroll the board independently
    <div className="flex flex-col h-full">
      <ProjectHeader />
      {/* keep the header fixed, make the board fill remaining space */}
      <div className="flex-1 overflow-auto">
        <KanbanBoard />
      </div>
    </div>
  )
}

export default ProjectDashboard