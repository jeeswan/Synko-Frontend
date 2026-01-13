import { Plus } from "lucide-react";
import ProjectItem from "./ProjectItem";

const projects = [
  { color: "bg-blue-500", name: "Website Redesign" },
  { color: "bg-green-500", name: "Mobile App v2" },
  { color: "bg-red-500", name: "API Integration" },
  { color: "bg-yellow-400", name: "Customer Portal" },
];

const ProjectList = () => {
  return (
    <div>
      {/* <div className="flex justify-between items-center mb-2">
        <p className="text-xs text-gray-500">PROJECTS</p>
        <Plus size={14} className="cursor-pointer text-gray-500" />
      </div> */}

      {projects.map((project, index) => (
        <ProjectItem key={index} color={project.color} name={project.name} />
      ))}
    </div>
  );
};

export default ProjectList;
export { projects };
