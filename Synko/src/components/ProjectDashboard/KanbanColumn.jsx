import TaskCard from "./TaskCard";
import { Plus } from "lucide-react";

const KanbanColumn = ({ column, onTaskClick }) => {
  return (
    <div className="w-80 bg-gray-100 rounded-xl p-4 flex-shrink-0 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">
          {column.title}{" "}
          <span className="text-xs text-gray-500">
            {column.count}
          </span>
        </h3>
        <Plus size={16} className="cursor-pointer text-gray-500" />
      </div>

      <div className="space-y-4">
        {column.tasks.map((task) => (
          <TaskCard key={task.id} task={task} onClick={onTaskClick} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
