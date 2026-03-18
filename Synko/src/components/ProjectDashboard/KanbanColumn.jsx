import TaskCard from "./TaskCard";
import { Plus } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const KanbanColumn = ({ column, onTaskClick }) => {
  const { setNodeRef } = useDroppable({
    id: column.title,
    data: {
      status: column.title,
    },
  });

  return (
    <div
      ref={setNodeRef}
      data-status={column.title} // important for drag end
      className="w-80 bg-gray-100 rounded-xl p-4 flex-shrink-0 border border-gray-200"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">
          {column.title} <span className="text-xs text-gray-500">{column.count}</span>
        </h3>
        <Plus size={16} className="cursor-pointer text-gray-500" />
      </div>

      <div className="space-y-4">
        {column.tasks.map((task) => (
          <SortableTaskCard key={task.id} task={task} onClick={onTaskClick} />
        ))}
      </div>
    </div>
  );
};

// Wrapper for sortable
const SortableTaskCard = ({ task, onClick }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: task.id.toString(),
    data: {
      status: task.status,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <TaskCard task={task} onClick={onClick} />
    </div>
  );
};

export default KanbanColumn;