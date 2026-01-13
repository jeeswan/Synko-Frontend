import { LayoutGrid, Star, ChevronDown, Archive, Plus } from "lucide-react";
import ProjectList from "./ProjectList";

const SidebarNav = () => {
  return (
    <div className="flex-1 px-4 space-y-3 overflow-y-auto">

      {/* Main */}
        <NavItem icon={<LayoutGrid size={18} />} label="Dashboard" active />
        <NavItem icon={<Star size={18} />} label="Starred" />

      <div>
        <NavItem icon={<ChevronDown size={18} />} label="Project" rightIcon={<Plus size={14} className="cursor-pointer text-gray-500" />} />
        {/* Projects */}
        <ProjectList />
      </div>

      {/* Archived */}
      <NavItem icon={<Archive size={18} />} label="Archived" />
    </div>
  );
};

const NavItem = ({ icon, label, active, rightIcon }) => (
  <div
    className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer
      ${active ? "bg-gray-300 font-medium" : "text-gray-600 hover:bg-gray-200"}`}
  >
    <div className="flex items-center gap-3">
      {icon}
      {label}
    </div>
    {rightIcon}
  </div>
);

export default SidebarNav;
