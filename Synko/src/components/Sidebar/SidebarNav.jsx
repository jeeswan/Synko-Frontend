import { LayoutGrid, Star, ChevronDown, Archive, Plus } from "lucide-react";
import { NavLink } from "react-router-dom";
import ProjectList from "./ProjectList";
import { useState } from "react";
import CreateProject from "../CreateProject";
import StarredList from "./StarredList";

const SidebarNav = () => {
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [openProject, setOpenProject] = useState(false);

  return (
    <div className="flex-1 px-4 space-y-3 overflow-y-auto border-b">
      {/* Main */}
      <NavItem icon={<LayoutGrid size={18} />} label="Dashboard" to="/dashboard" className="text-gray-600 hover:bg-gray-300" />

      {/* Starred (not a link, just label) */}
      <div className="flex items-center gap-3 px-3 py-2 text-gray-600 cursor-default">
        <Star size={18} />
        <span>Starred</span>
      </div>
      <StarredList />

      {/* Projects (expandable) */}
      <div>
        <div
          className="flex items-center justify-between px-3 py-2 text-gray-600 cursor-pointer hover:bg-gray-200 rounded-md"
        >
          <div className="flex items-center gap-3" onClick={() => setProjectsOpen(!projectsOpen)}>
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ease-in-out ${
                projectsOpen ? "rotate-0" : "-rotate-90"
              }`}
            />
            <span>Projects</span>
          </div>
          <Plus size={14} className="text-gray-500 hover:text-gray-800" onClick={() => setOpenProject(true)}/>
        </div>
        {projectsOpen && <ProjectList />}
        {openProject && <CreateProject onClose={() => setOpenProject(false)} />}
      </div>

      {/* Archived */}
      <NavItem icon={<Archive size={18} />} label="Archived" to="/archived" className="text-gray-600 hover:bg-gray-300" />
    </div>
  );
};

const NavItem = ({ icon, label, to, className = "" }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition
      ${isActive ? "bg-gray-300 font-medium text-gray-900" : "text-gray-600 hover:bg-gray-200"} ${className}`
    }
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

export default SidebarNav;