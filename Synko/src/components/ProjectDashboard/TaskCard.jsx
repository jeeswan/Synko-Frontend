const tagColors = {
  Design: "bg-purple-100 text-purple-700",
  Bug: "bg-red-100 text-red-700",
  Feature: "bg-blue-100 text-blue-700",
  Enhancement: "bg-green-100 text-green-700",
  Documentation: "bg-yellow-100 text-yellow-700",
};

const borderColors = {
  red: "border-red-500",
  orange: "border-orange-500",
  yellow: "border-yellow-400",
  green: "border-green-500",
};

const TaskCard = ({ task }) => {
  return (
    <div
      className={`bg-white rounded-lg p-3 border-l-4 ${borderColors[task.color]} shadow-sm`}
    >
      <p className="text-sm font-medium mb-2">{task.title}</p>

      <div className="flex flex-wrap gap-2 mb-2">
        {task.tags.map((tag) => (
          <span
            key={tag}
            className={`text-xs px-2 py-0.5 rounded ${tagColors[tag]}`}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center text-xs text-gray-500">
        {task.date && <span>📅 {task.date}</span>}
        <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
          {task.assignee}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
