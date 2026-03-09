// import { boardData } from "../../data/TaskData";
import KanbanColumn from "./KanbanColumn";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTask } from "../../context/TaskContext";
import CreateTask from "../CreateTask";

const KanbanBoard = () => {
  const { id } = useParams();
  const { tasks, getTasks } = useTask();

  const [showTaskModal, setShowTaskModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleTaskClick = (task) => {
    setEditingTask(task);
    setShowTaskModal(true);
  };

  useEffect(() => {
    getTasks(id);
  }, [id]);

  // Group tasks by status
  const projectTasks = tasks.filter((t) => t.project_id === Number(id));

  const columns = [
    { id: "todo", title: "To Do", tasks: projectTasks.filter(t => t.status === "To Do") },
    { id: "progress", title: "In Progress", tasks: projectTasks.filter(t => t.status === "In Progress") },
    { id: "review", title: "Review", tasks: projectTasks.filter(t => t.status === "Review") },
    { id: "done", title: "Done", tasks: projectTasks.filter(t => t.status === "Done") },
  ];

  return (
    <div className="flex p-4 gap-6 h-full overflow-auto">
      {columns.map((column) => (
        <KanbanColumn
          key={column.id}
          column={{
            ...column,
            count: column.tasks.length,
          }}
          onTaskClick={handleTaskClick}
        />
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
  );
};

export default KanbanBoard;
