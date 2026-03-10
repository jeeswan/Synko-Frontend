import React, { useState } from 'react'
import ProjectHeader from '../components/ProjectDashboard/ProjectHeader'
import KanbanBoard from '../components/ProjectDashboard/KanbanBoard'
import { useParams } from "react-router-dom";

const ProjectDashboard = () => {
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [showArchived, setShowArchived] = useState(false);

  return (
    <div className="flex flex-col h-full">
      <ProjectHeader
        projectId={id}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        showArchived={showArchived}
        setShowArchived={setShowArchived}
      />
      <div className="flex-1 overflow-auto p-6">
        <KanbanBoard projectId={id} searchQuery={searchQuery} showArchived={showArchived} />
      </div>
    </div>
  );
};

export default ProjectDashboard