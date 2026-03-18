import { useNavigate } from "react-router-dom";
import { useTask } from "../../context/TaskContext";
import { Star, MoreHorizontal, Archive, Trash2 } from "lucide-react";
import { useState, useMemo } from "react";
import { useProject } from "../../context/ProjectContext";

const getInitials = (name) => {
  if (!name) return "?";
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const { tasks } = useTask();
  const { toggleStarProject, deleteProject, archiveProject, user } = useProject();
  const [openMenu, setOpenMenu] = useState(false);

  const { totalTasks, completedTasks, progress, members } = useMemo(() => {
    const projectTasks = (tasks || []).filter(
      (t) => Number(t.project_id) === Number(project.id)
    );

    const total = projectTasks.length;
    const done = projectTasks.filter((t) => t.status === "Done").length;

    // Build dynamic members list
    const memberMap = new Map();

    // Add current user
    if (user) {
      memberMap.set(user.id, user);
    }

    // Add assigned users from project tasks
    projectTasks.forEach((t) => {
      if (t.users) {
        t.users.forEach((u) => memberMap.set(u.id, u));
      }
    });

    return {
      totalTasks: total,
      completedTasks: done,
      progress: total ? Math.round((done / total) * 100) : 0,
      members: Array.from(memberMap.values()),
    };
  }, [tasks, project.id, user]);

  const handleArchive = async (e) => {
    e.stopPropagation();
    await archiveProject(project.id);
    setOpenMenu(false);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteProject(project.id);
    setOpenMenu(false);
  };

  const handleClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="relative bg-gray-100 border border-gray-200 rounded-xl p-4 shadow-md cursor-pointer hover:shadow-xl transition"
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${project?.color}`} />
          <h3 className="text-sm font-semibold">{project.name}</h3>
        </div>

        <div className="flex items-center gap-3 text-gray-700 relative">
          <span
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              toggleStarProject(project.id);
            }}
          >
            <Star
              size={16}
              className={project.is_starred ? "text-yellow-400" : "text-gray-500"}
              fill={project.is_starred ? "currentColor" : "none"}
            />
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
                onClick={handleArchive}
                className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-200 rounded-md cursor-pointer"
              >
                <Archive size={14} />
                Archive
              </div>

              <div
                onClick={handleDelete}
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
        <div className="flex -space-x-2">
          {members.slice(0, 5).map((m, i) => {
            const displayName =
              m.name || `${m.first_name || ""} ${m.last_name || ""}`.trim();

            return (
              <div
                key={m.id || i}
                className="w-7 h-7 rounded-full bg-blue-600 text-white text-[10px] font-medium flex items-center justify-center border-2 border-white"
                title={displayName}
              >
                {getInitials(displayName)}
              </div>
            );
          })}

          {members.length > 5 && (
            <div className="w-7 h-7 rounded-full bg-gray-200 text-gray-600 text-xs font-medium flex items-center justify-center border-2 border-white">
              +{members.length - 5}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;