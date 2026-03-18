// import { boardData } from "../../data/TaskData";
import KanbanColumn from "./KanbanColumn";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useTask } from "../../context/TaskContext";
import CreateTask from "../CreateTask";
import { useProject } from "../../context/ProjectContext";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

const KanbanBoard = ({ projectId, searchQuery, showArchived }) => {
  const { tasks, getTasks, canEditTask, updateTask } = useTask();
  const { user } = useProject();

  const [showTaskModal, setShowTaskModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  const handleTaskClick = (task) => {
    if (!canEditTask(task, user)) {
      alert("You are not assigned to this task.");
      return;
    }
    setEditingTask(task);
    setShowTaskModal(true);
  };

  useEffect(() => {
    getTasks(projectId);
  }, [projectId, getTasks]);

  // Group tasks by status
  let projectTasks = tasks.filter((t) => t.project_id === Number(projectId));

  projectTasks = projectTasks.filter((t) =>
    showArchived
      ? (t.is_archived === 1 || t.is_archived === true)
      : (t.is_archived === 0 || !t.is_archived)
  );

  if (searchQuery.trim()) {
    projectTasks = projectTasks.filter(t => t.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }

  const columns = [
    { id: "todo", title: "To Do", tasks: projectTasks.filter(t => t.status === "To Do") },
    { id: "progress", title: "In Progress", tasks: projectTasks.filter(t => t.status === "In Progress") },
    { id: "review", title: "Review", tasks: projectTasks.filter(t => t.status === "Review") },
    { id: "done", title: "Done", tasks: projectTasks.filter(t => t.status === "Done") },
  ];

  const handleDragEnd = async (event) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id; // draggable task id
    const newStatus = over.data?.current?.status; // column title e.g. 'In Progress'

    if (!newStatus) return;

    const task = tasks.find((t) => t.id.toString() === taskId);

    if (task && task.status !== newStatus) {
      try {
        const payload = {
          name: task.name,
          description: task.description,
          priority: task.priority,
          status: newStatus,
          due_date: task.due_date,
          project_id: task.project_id,
          label_ids: task.labels?.map((l) => l.id) || [],
          user_ids: task.users?.map((u) => u.id) || [],
        };
        // This calls your backend updateTask
        await updateTask(task.id, payload);
      } catch (err) {
        console.error("Failed to update task status:", err);
        alert("Could not move task. Please try again.");
      }
    }
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="flex p-4 gap-6 h-full overflow-auto">
        {columns.map((column) => (
          <SortableContext
            key={column.id}
            items={column.tasks.map((t) => t.id.toString())}
            strategy={verticalListSortingStrategy}
          >
            <KanbanColumn
              column={{
                ...column,
                count: column.tasks.length,
              }}
              onTaskClick={handleTaskClick}
            />
          </SortableContext>
        ))}

        {showTaskModal && (
          <CreateTask
            task={editingTask}
            onClose={() => {
              setShowTaskModal(false);
              setEditingTask(null);
            }}
          />
        )}
      </div>
    </DndContext>
  );
};

export default KanbanBoard;
