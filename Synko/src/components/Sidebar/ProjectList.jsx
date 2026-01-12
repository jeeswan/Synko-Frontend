import { Plus } from "lucide-react";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <p className="text-xs text-gray-500">PROJECTS</p>
        <Plus size={14} className="cursor-pointer text-gray-500" />
      </div>

      <ProjectItem color="bg-blue-500" name="Website Redesign" />
      <ProjectItem color="bg-green-500" name="Mobile App v2" />
      <ProjectItem color="bg-red-500" name="API Integration" />
      <ProjectItem color="bg-yellow-400" name="Customer Portal" />
    </div>
  );
};

export default ProjectList;
