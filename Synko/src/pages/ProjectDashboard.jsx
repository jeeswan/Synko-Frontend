import React from 'react'
import ProjectHeader from '../components/ProjectDashboard/ProjectHeader'
import KanbanBoard from '../components/ProjectDashboard/KanbanBoard'
import { useParams } from "react-router-dom";

const ProjectDashboard = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col h-full">
      <ProjectHeader projectId={id} />
      <div className="flex-1 overflow-auto p-6">
        <KanbanBoard projectId={id} />
      </div>
    </div>
  );
};

export default ProjectDashboard