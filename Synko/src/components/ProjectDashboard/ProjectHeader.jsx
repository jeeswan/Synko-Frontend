import React, { useState } from 'react'
import { Star, Search, Filter, Plus, Users } from "lucide-react";
import CreateTask from '../CreateTask'
import { useParams } from "react-router-dom";
import { useProject } from "../../context/ProjectContext";

const getInitials = (name) => {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const ProjectHeader = () => {
  const { id } = useParams();
  const { projects } = useProject();

  const project = projects.find((p) => p.id === Number(id));
  
  const [openTask, setOpenTask] = useState(false);
    const members = [
        "Jeeswan Bajracharya",
        "Riya Karki",
        "Kunal Thapa",
    ];
  return (
    <div className="w-full flex items-center justify-between px-5 h-16 bg-white border-b-2 border-gray-300 shadow z-50">
      <div className="flex items-center gap-3">
        <span className={`w-3 h-3 rounded-full ${project?.color || "bg-blue-600"}`} />
        <h1 className="text-xl font-semibold">
          {project?.name || "Project"}
        </h1>
        <Star size={18} className="text-yellow-400" />
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
          <input
            placeholder="Search tasks..."
            className="pl-9 pr-3 py-2 rounded-md border text-sm"
          />
        </div>

        <button className="flex items-center gap-2 px-3 py-2 border rounded-md text-sm">
          <Filter size={16} /> Filter
        </button>

        {/* Members */}
        <div className="flex items-center gap-2">
          <Users size={18} className="text-gray-600" />
          <div className="flex -space-x-2">
            {members.map((name, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-medium flex items-center justify-center border-2 border-gray-100"
                title={name}
              >
                {getInitials(name)}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => setOpenTask(true)}
          className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md text-sm">
          <Plus size={16} /> Add Task
        </button>
      </div>
      {openTask && <CreateTask onClose={() => setOpenTask(false)} />}
    </div>
  )
}

export default ProjectHeader
