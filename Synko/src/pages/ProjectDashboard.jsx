import React from 'react'
import ProjectHeader from '../components/ProjectDashboard/ProjectHeader'
import KanbanBoard from '../components/ProjectDashboard/KanbanBoard'

const ProjectDashboard = () => {
  return (
    <div>
      <ProjectHeader />
      <KanbanBoard />
    </div>
  )
}

export default ProjectDashboard