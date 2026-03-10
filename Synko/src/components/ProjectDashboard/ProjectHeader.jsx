import React, { useState } from 'react'
import { Star, Search, Filter, Plus, Users } from "lucide-react";
import CreateTask from '../CreateTask'
import { useParams } from "react-router-dom";
import { useProject } from "../../context/ProjectContext";

import { useTask } from "../../context/TaskContext";

const getInitials = (name) => {
  if (!name) return "?";
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const ProjectHeader = ({ projectId, searchQuery, setSearchQuery, showArchived, setShowArchived }) => {
  const { projects, toggleStarProject, user } = useProject();
  const { tasks } = useTask();

  const project = projects.find((p) => p.id === Number(projectId));
  
  const [openTask, setOpenTask] = useState(false);

  // Dynamic Members: current user + any distinct assigned users in this project's tasks
  const projectTasks = tasks.filter((t) => t.project_id === Number(projectId));
  const memberMap = new Map();
  if (user) {
    memberMap.set(user.id, user);
  }
  projectTasks.forEach(t => {
    if (t.users) {
      t.users.forEach(u => memberMap.set(u.id, u));
    }
  });
  const members = Array.from(memberMap.values());

  return (
    <div className="w-full flex items-center justify-between px-5 h-16 bg-white border-b-2 border-gray-300 shadow z-50">
      <div className="flex items-center gap-3">
        <span className={`w-3 h-3 rounded-full ${project?.color || "bg-blue-600"}`} />
        <h1 className="text-xl font-semibold">
          {project?.name || "Project"}
        </h1>
        <span
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              toggleStarProject(project.id);
            }}
          >
          <Star size={18} className={project?.is_starred ? "text-yellow-400" : "text-gray-500"}
              fill={project?.is_starred ? "currentColor" : "none"} />
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
          <input
            placeholder="Search tasks..."
            className="pl-9 pr-3 py-2 rounded-md border text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <button 
          className={`flex items-center gap-2 px-3 py-2 border rounded-md text-sm ${showArchived ? 'bg-gray-100 border-gray-400 text-gray-800' : 'text-gray-600'} cursor-pointer`}
          onClick={() => setShowArchived(!showArchived)}
        >
          <Filter size={16} /> 
          {showArchived ? "Hide Archived" : "Show Archived"}
        </button>

        {/* Members */}
        <div className="flex items-center gap-2">
          <Users size={18} className="text-gray-600" />
          <div className="flex -space-x-2">
            {members.slice(0, 5).map((m, i) => {
              const displayName = m.name || `${m.first_name} ${m.last_name}`;
              return (
              <div
                key={m.id || i}
                className="w-7 h-7 rounded-full bg-blue-600 text-white text-[10px] font-medium flex items-center justify-center border-2 border-white"
                title={displayName}
              >
                {getInitials(displayName)}
              </div>
            )})}
            {members.length > 5 && (
              <div className="w-7 h-7 rounded-full bg-gray-200 text-gray-600 text-xs font-medium flex items-center justify-center border-2 border-white">
                +{members.length - 5}
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => setOpenTask(true)}
          className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-md cursor-pointer text-sm hover:bg-blue-600 transition">
          <Plus size={16} /> Add Task
        </button>
      </div>
      {openTask && <CreateTask onClose={() => setOpenTask(false)} />}
    </div>
  )
}

export default ProjectHeader
