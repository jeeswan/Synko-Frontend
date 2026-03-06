import { useState } from "react";
import { Archive, Trash2, X } from "lucide-react";
import { useParams } from "react-router-dom";
import { useTask } from "../context/TaskContext";

const CreateTask = ({ onClose }) => {
  const { id } = useParams();
  const { createTask } = useTask();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    priority: "Medium",
    status: "To Do",
    dueDate: "",
    labels: [],
    assignees: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "labels" || name === "assignees") {
      // Convert comma-separated input to array
      setFormData({ ...formData, [name]: value.split(",").map(v => v.trim()) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCreateTask = async () => {
    if (!formData.name.trim()) {
      alert("Task name is required");
      return;
    }

    const payload = {
      name: formData.name,
      description: formData.description,
      priority: formData.priority,
      status: formData.status,
      due_date: formData.dueDate,
      project_id: id
    };

    try {
      await createTask(payload);
      onClose();
    } catch (err) {
      console.error("Failed to create task:", err);
      alert("Failed to create task. Check console for details.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white w-[600px] h-[600px] rounded-xl p-6 shadow-xl z-10 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Create New Task</h2>
          <button onClick={onClose}>
            <X className="text-gray-500 hover:text-gray-800 cursor-pointer" size={20} />
          </button>
        </div>

        {/* Form */}
        <div className="flex flex-row gap-6 flex-1 overflow-y-auto">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Task Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Task Title</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter task name"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                rows="3"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Add a more detailed description..."
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Labels */}
            <div>
              <label className="block text-sm font-medium mb-1">Labels</label>
              <input
                type="text"
                name="labels"
                value={formData.labels.join(", ")}
                onChange={handleChange}
                placeholder="e.g. Bug, Feature, Enhancement"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Assignees */}
            <div>
              <label className="block text-sm font-medium mb-1">Assignees</label>
              <input
                type="text"
                name="assignees"
                value={formData.assignees.join(", ")}
                onChange={handleChange}
                placeholder="e.g. Alex Chen, Sarah Miller"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-48 flex flex-col gap-4">
            {/* Priority */}
            <div>
              <label className="block mb-1 text-sm font-medium">Priority</label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Urgent</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block mb-1 text-sm font-medium">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm"
              >
                <option>To Do</option>
                <option>In Progress</option>
                <option>Review</option>
                <option>Done</option>
              </select>
            </div>

            {/* Due Date */}
            <div>
              <label className="block mb-1 text-sm font-medium">Due Date</label>
              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between pt-4 border-t mt-4">
            <div className="flex justify-start gap-3">
                <div className="flex items-center gap-1 cursor-pointer text-gray-600 hover:text-gray-800">
                    <Archive size={16} />
                    <span className="text-sm">Archive</span>
                </div>
                <div className="flex items-center gap-1 cursor-pointer text-red-600 hover:text-red-800">
                    <Trash2 size={16} />
                    <span className="text-sm">Delete</span>
                </div>
            </div>
          
            <div className="flex justify-end gap-3">
                <button
                    onClick={onClose}
                    className="px-4 py-2 border rounded-md text-sm cursor-pointer hover:bg-gray-100"
                >
                    Cancel
                </button>
                <button
                    onClick={handleCreateTask}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm cursor-pointer hover:bg-blue-700"
                >
                    Create Task
                </button>
            </div>
          </div>  
        </div>
    </div>
  );
};

export default CreateTask;