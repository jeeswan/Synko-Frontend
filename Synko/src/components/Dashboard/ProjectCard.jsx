import { useNavigate } from "react-router-dom";
import { useTask } from "../../context/TaskContext";
import { Star, MoreHorizontal, Archive, Trash2 } from "lucide-react";
import { useState } from "react";
import { useProject } from "../../context/ProjectContext";

const ProjectCard = ({ project, onDelete, onArchived }) => {
  const navigate = useNavigate();
  const { tasks } = useTask();
  const { toggleStarProject } = useProject();
  const [openMenu, setOpenMenu] = useState(false);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === "Done").length;

  const progress =
    totalTasks > 0
      ? Math.round((completedTasks / totalTasks) * 100)
      : 0;

  const handleClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="relative bg-gray-100 border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-xl transition"
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${project?.color}`} />
          <h3 className="text-sm font-semibold">{project.name}</h3>
        </div>

        <div className="flex items-center gap-3 text-gray-700 relative">
          <span
            className={`cursor-pointer ${project.is_starred ? "text-yellow-300" : "text-gray-700"}`}
            onClick={(e) => {
              e.stopPropagation();       
              toggleStarProject(project.id);
            }}
          >
            <Star size={16} />
          </span>

          <span
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setOpenMenu(!openMenu);
            }}
          >
            <MoreHorizontal size={16} />
          </span>

          {openMenu && (
            <div
              className="absolute right-0 top-6 w-32 bg-gray-100 border border-gray-200 rounded-md shadow-md z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                onClick={onArchived}
                className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-200 rounded-md cursor-pointer"
              >
                <Archive size={14} />
                Archive
              </div>

              <div
                onClick={onDelete}
                className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-200 text-gray-700 cursor-pointer"
              >
                <Trash2 size={14} />
                Delete
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-500 mt-2 line-clamp-2">
        {project.description}
      </p>

      {/* Progress info */}
      <div className="flex justify-between text-xs text-gray-500 mt-4">
        <span>
          {completedTasks} out of {totalTasks} tasks
        </span>
        <span>{progress}%</span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-gray-200 rounded-full mt-2">
        <div
          className="h-full bg-blue-600 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Members */}
      <div className="flex items-center gap-2 mt-4">
        {project.members?.map((m, i) => (
          <div
            key={i}
            className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center"
          >
            {m}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;