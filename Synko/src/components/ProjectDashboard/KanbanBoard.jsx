// import { boardData } from "../../data/TaskData";
import KanbanColumn from "./KanbanColumn";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTask } from "../../context/TaskContext";

const KanbanBoard = () => {
  const { id } = useParams();
  const { tasks, getTasks } = useTask();

  useEffect(() => {
    getTasks(id);
  }, [id]);

  // Group tasks by status
  const columns = [
    {
      id: "todo",
      title: "To Do",
      tasks: tasks.filter((t) => t.status === "To Do"),
    },
    {
      id: "progress",
      title: "In Progress",
      tasks: tasks.filter((t) => t.status === "In Progress"),
    },
    {
      id: "review",
      title: "Review",
      tasks: tasks.filter((t) => t.status === "Review"),
    },
    {
      id: "done",
      title: "Done",
      tasks: tasks.filter((t) => t.status === "Done"),
    },
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
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
