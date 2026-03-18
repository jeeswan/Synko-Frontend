import { X, Loader2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProject } from "../context/ProjectContext";
import { useDashboard } from "../context/DashboardController";

const colors = [
  "bg-blue-600",
  "bg-green-600",
  "bg-purple-600",
  "bg-red-600",
  "bg-orange-500",
  "bg-yellow-400",
  "bg-pink-500",
  "bg-emerald-500",
];

const CreateProject = ({ onClose }) => {
  const navigate = useNavigate();
  const { createProject } = useProject();
  const { fetchStats } = useDashboard();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedColor, setSelectedColor] = useState("bg-blue-600");
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateProject = async () => {
    if (!name.trim()) return;
    
    setIsLoading(true);
    try {
      const newProject = await createProject({
        name,
        description,
        color: selectedColor,
      });

      await fetchStats();

      navigate(`/project/${newProject.id}`);
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to create project");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white w-[420px] rounded-xl p-6 shadow-lg z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Create New Project</h2>
          <button onClick={onClose}>
            <X
              className="text-gray-500 hover:text-gray-800 cursor-pointer"
              size={18}
            />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Project Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Project name"
              className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter project description (optional)"
              className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Color Picker */}
          <div>
            <label className="text-sm font-medium block mb-2">Color</label>
            <div className="flex gap-2 flex-wrap">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-7 h-7 rounded-full ${color}
                    ${selectedColor === color ? "ring-2 ring-offset-2 ring-blue-500" : ""}
                  `}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            disabled={isLoading}
            className="px-4 py-2 border rounded-md text-sm cursor-pointer hover:bg-gray-100 disabled:opacity-50"
          >
            Cancel
          </button>
          <button 
          onClick={handleCreateProject}
          disabled={isLoading}
          className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm cursor-pointer hover:bg-blue-700 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
            {isLoading && <Loader2 className="animate-spin" size={16} />}
            {isLoading ? "Creating..." : "Create Project"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
