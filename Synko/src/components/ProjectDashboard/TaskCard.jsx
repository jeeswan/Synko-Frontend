const borderColors = {
  Urgent: "border-red-500",
  High: "border-orange-500",
  Medium: "border-yellow-400",
  Low: "border-green-500",
};

const TaskCard = ({ task, onClick }) => {
  const borderColor = borderColors[task.priority] || "border-gray-300";
  return (
    <div onClick={() => onClick && onClick(task)} className={`bg-white rounded-lg p-3 border-l-4 ${borderColor} shadow-sm`}>
      <p className="text-sm font-medium mb-2">{task.name}</p>

      {/* Labels */}
      <div className="flex flex-wrap gap-2 mb-2">
        {task.labels?.map((label) => (
          <span
            key={label.id}
            className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700"
          >
            {label.name}
          </span>
        ))}
      </div>

      {/* Date + Assignee */}
      <div className="flex justify-between items-center text-xs text-gray-500">
        {task.due_date && <span>📅 {task.due_date}</span>}

        {task.users?.[0] && (
          <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
            {task.users[0].name.charAt(0)}
          </span>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
