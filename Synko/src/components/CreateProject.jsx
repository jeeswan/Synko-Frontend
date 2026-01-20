import { X } from "lucide-react";
import { useState } from "react";

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
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-[420px] rounded-xl p-6 shadow-lg z-10">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Create New Project</h2>
          <button onClick={onClose}>
            <X className="text-gray-500 hover:text-gray-800 cursor-pointer" size={18} />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Project Name</label>
            <input
              type="text"
              placeholder="Enter Project name"
              className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea
              rows="3"
              placeholder="Enter project description (optional)"
              className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Color Picker */}
          <div>
            <label className="text-sm font-medium block mb-2">Color</label>
            <div className="flex gap-2 flex-wrap">
              {colors.map(color => (
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
            className="px-4 py-2 border rounded-md text-sm"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
