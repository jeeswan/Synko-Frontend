const colorMap = {
  blue: "bg-blue-600",
  green: "bg-green-600",
  red: "bg-red-600",
  yellow: "bg-yellow-400",
};

const ProjectCard = ({ project }) => {
  const progress = Math.round((project.completed / project.total) * 100);

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-xl transition">
      
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${colorMap[project.color]}`} />
          <h3 className="text-sm font-semibold">{project.title}</h3>
        </div>

        <div className="flex items-center gap-3 text-gray-400">
          <span className="cursor-pointer">★</span>
          <span className="cursor-pointer">⋯</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-500 mt-2 line-clamp-2">
        {project.description}
      </p>

      {/* Progress info */}
      <div className="flex justify-between text-xs text-gray-500 mt-4">
        <span>
          {project.completed} out of {project.total} tasks
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
        {project.members.map((m, i) => (
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
