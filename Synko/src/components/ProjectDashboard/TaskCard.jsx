import { Calendar, Lock } from "lucide-react";
import { useTask } from "../../context/TaskContext";
import { useProject } from "../../context/ProjectContext";

const borderColors = {
  Urgent: "border-red-500",
  High: "border-orange-500",
  Medium: "border-yellow-400",
  Low: "border-green-500",
};

const TaskCard = ({ task, onClick }) => {
  const borderColor = borderColors[task.priority] || "border-gray-300";
  const { canEditTask } = useTask();
  const { user } = useProject();

  const canEdit = canEditTask(task, user);

  return (
    <div onClick={() => canEdit && onClick && onClick(task)} className={`bg-white rounded-xl p-4 border-l-4 ${borderColor} shadow-sm ${canEdit ? "cursor-pointer hover:shadow-md" : "cursor-not-allowed opacity-80"} hover:shadow-md transition`}>
      <div className="flex justify-between items-center mb-3">
        <p className="text-sm font-medium text-gray-800">{task.name}</p>

        {!canEdit && (
          <Lock size={14} className="text-gray-400" />
        )}
      </div>

      {/* Labels */}
      {task.labels && task.labels.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {task.labels.map((label) => (
            <span
              key={label.id}
              className="text-xs px-2.5 py-1 rounded-md bg-[#a855f7] text-white font-medium shadow-sm"
            >
              {label.name}
            </span>
          ))}
        </div>
      )}

      {/* Date + Assignee */}
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-1.5 text-xs text-[#ef4444] font-medium">
          {task.due_date && (
            <>
              <Calendar size={14} className="opacity-80" />
              <span>{new Date(task.due_date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
            </>
          )}
        </div>

        <div className="flex -space-x-2">
          {task.users?.map((u) => {
            const first = (u.first_name?.[0] || u.name?.[0] || "").toUpperCase();
            const last = (u.last_name?.[0] || "").toUpperCase();
            const initials = first + last || "?";

            return (
              <span key={u.id} className="w-7 h-7 rounded-full bg-[#3b82f6] text-white border-2 border-white flex items-center justify-center text-xs font-semibold" title={u.name || `${u.first_name} ${u.last_name}`}>
                {initials}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
