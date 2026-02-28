import { boardData } from "../../data/TaskData";
import KanbanColumn from "./KanbanColumn";

const KanbanBoard = () => {
  return (
    // full height container with both axis auto scroll; horizontal for columns, vertical for overflowing cards
    <div className="flex gap-6 h-full overflow-auto">
      {boardData.map((column) => (
        <KanbanColumn key={column.id} column={column} />
      ))}
    </div>
  );
};

export default KanbanBoard;
