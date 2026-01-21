import { boardData } from "../../data/TaskData";
import KanbanColumn from "./KanbanColumn";

const KanbanBoard = () => {
  return (
    <div className="flex gap-6 overflow-x-auto">
      {boardData.map((column) => (
        <KanbanColumn key={column.id} column={column} />
      ))}
    </div>
  );
};

export default KanbanBoard;
