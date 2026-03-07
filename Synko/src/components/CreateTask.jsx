import { useState } from "react";
import { Archive, Tag, Trash2, X } from "lucide-react";
import { useParams } from "react-router-dom";
import { useTask } from "../context/TaskContext";
import api from "../services/api";

const CreateTask = ({ onClose, task }) => {
  const { id } = useParams();
  const { createTask, updateTask } = useTask();
  const [searchUser, setSearchUser] = useState("");
  const [userResults, setUserResults] = useState([]);

  const [formData, setFormData] = useState({
    name: task?.name || "",
    description: task?.description || "",
    priority: task?.priority || "Medium",
    status: task?.status || "To Do",
    dueDate: task?.due_date || "",
    labels: task?.labels?.map(l => l.name) || [],
    labelIds: task?.labels?.map(l => l.id) || [],
    assignees: task?.users || [],
    userIds: task?.users?.map(u => u.id) || [],
  });

  const [labelOptions, setLabelOptions] = useState([
    { id: 1, name: "Bug"},
    { id: 2, name: "Feature"},
    { id: 3, name: "Enhancement"},
    { id: 4, name: "Documentation"},
    { id: 5, name: "Design"},
  ]);

  const [newLabel, setNewLabel] = useState("");

  const toggleLabel = (label) => {
    setFormData((prev) => {
      const exists = prev.labels.includes(label.name);
      return {
        ...prev,
        labels: exists
          ? prev.labels.filter((l) => l !== label.name)
          : [...prev.labels, label.name],
        labelIds: exists
          ? prev.labelIds.filter((id) => id !== label.id)
          : [...prev.labelIds, label.id],
      };
    });
  };

  const addNewLabel = () => {
    if (!newLabel.trim()) return;
    const label = { id: Date.now(), name: newLabel.trim() }; // temp id
    setLabelOptions((prev) => [...prev, label]);
    setFormData((prev) => ({
      ...prev,
      labels: [...prev.labels, label.name],
      labelIds: [...prev.labelIds, label.id],
    }));
    setNewLabel("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCreateTask = async () => {
    if (!formData.name.trim()) return alert("Task name required");

    const payload = {
      name: formData.name,
      description: formData.description,
      priority: formData.priority,
      status: formData.status,
      due_date: formData.dueDate,
      project_id: id,
      label_ids: formData.labelIds,
      user_ids: formData.assignees?.map(u => u.id),
    };

    try {
      if (task) {
        await updateTask(task.id, payload);
      } else {
        await createTask(payload);
      }
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to submit task");
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
          <h2 className="text-lg font-semibold">{task ? "Update Task" : "Create New Task"}</h2>
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
              <label className="block text-sm font-medium mb-2">Labels</label>

              {/* Create new label */}
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={newLabel}
                  onChange={(e) => setNewLabel(e.target.value)}
                  placeholder="Create new label..."
                  className="flex-1 border rounded-md px-3 py-2 text-sm"
                />
                <button
                  type="button"
                  onClick={addNewLabel}
                  className="px-3 py-2 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-900"
                >
                  Add
                </button>
              </div>

              {/* Label Chips */}
              <div className="flex flex-wrap gap-2">
                {labelOptions.map((label) => {
                  const selected = formData.labels.includes(label.name);
                  return (
                    <button
                      key={label.id}
                      type="button"
                      onClick={() => toggleLabel(label)}
                      className={`flex items-center gap-1 px-3 py-1 text-sm rounded-full border transition ${
                        selected
                          ? "bg-blue-100 border-blue-400 text-blue-700"
                          : "bg-gray-50 border-gray-300 text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Tag size={13} /> {label.name}
                    </button>
                  );
                })}
              </div>
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

            {/* Assignees */}
            <div>
              <label className="block text-sm font-medium mb-1">Assignees</label>
              <input
                type="text"
                placeholder="Search user by email..."
                value={searchUser}
                onChange={async (e) => {
                  const val = e.target.value;
                  setSearchUser(val);

                  if (!val.trim()) return setUserResults([]);
                  // hit your backend to check emails
                  const res = await api.get(`/users/search?email=${val}`);
                  setUserResults(res.data);
                }}
                className="w-full border rounded-md px-3 py-2 text-sm mb-1"
              />

              <div className="max-h-32 overflow-y-auto border rounded-md">
                {userResults.map((user) => {
                  const selected = formData.assignees.find((u) => u.id === user.id);
                  return (
                    <div
                      key={user.id}
                      onClick={() => {
                        if (!selected) {
                          setFormData({
                            ...formData,
                            assignees: [...formData.assignees, user],
                          });
                        }
                      }}
                      className={`px-3 py-1 cursor-pointer hover:bg-gray-100 ${
                        selected ? "bg-gray-200" : ""
                      }`}
                    >
                      {user.name} ({user.email})
                    </div>
                  );
                })}
              </div>

              {/* Show selected assignees */}
              <div className="flex flex-wrap gap-2 mt-1">
                {formData.assignees.map((u) => (
                  <span
                    key={u.id}
                    className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full flex items-center gap-1"
                  >
                    {u.name}
                    <button
                      onClick={() =>
                        setFormData({
                          ...formData,
                          assignees: formData.assignees.filter((x) => x.id !== u.id),
                        })
                      }
                    >
                      x
                    </button>
                  </span>
                ))}
              </div>
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
                    {task ? "Update Task" : "Create Task"}
                </button>
            </div>
          </div>  
        </div>
    </div>
  );
};

export default CreateTask;