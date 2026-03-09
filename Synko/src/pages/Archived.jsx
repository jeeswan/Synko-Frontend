import React from "react";
import { useProject } from "../context/ProjectContext";
import { Archive, ArrowDownCircleIcon, Trash } from "lucide-react";

const Archived = () => {
  const { projects, archiveProject, deleteProject } = useProject();

  const archivedProjects = projects.filter(p => p.is_archived);

  const handleRestore = async (id) => {
    await archiveProject(id); // toggles archive status
  };

  const handleDelete = async (id) => {
    await deleteProject(id);
  };

  return (
    <div className="space-y-4">
      <div className="pb-4">
        <h1 className="text-2xl font-semibold">Archived Projects</h1>
        <p className="text-sm text-gray-500 font-light">
          Manage your archived projects. Restore or permanently delete them.
        </p>
      </div>

      {archivedProjects.length === 0 ? (
        <div className="border border-gray-100 bg-gray-50 rounded-md shadow-md">
          <Archive size={48} className="text-gray-500 mx-auto mt-10" />
          <h2 className="text-center text-lg font-medium mt-4">
            No archived projects yet
          </h2>
          <p className="text-center text-sm text-gray-500 mt-2 mb-10">
            Projects that are archived will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-2 p-4">
          {archivedProjects.map((project) => (
            <div
              key={project.id}
              className="flex justify-between items-center bg-white border border-gray-200 rounded-md p-4 hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-3 h-3 rounded-full ${
                    project.color || "bg-green-500"
                  }`}
                />
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    {project.name}
                  </h3>
                  <p className="text-xs text-gray-500">{project.description}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleRestore(project.id)}
                  className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-100"
                >
                  <ArrowDownCircleIcon className="w-4 h-4" />
                  Restore
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="flex items-center gap-1 px-3 py-1 border border-red-200 rounded text-sm text-red-600 hover:bg-red-50"
                >
                  <Trash className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Archived;