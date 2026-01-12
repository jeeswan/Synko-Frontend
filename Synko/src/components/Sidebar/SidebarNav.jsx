import { Home, Star, Archive, Plus } from "lucide-react";
import ProjectList from "./ProjectList";

const SidebarNav = () => {
  return (
    <div className="flex-1 px-4 space-y-6 overflow-y-auto">

      {/* Main */}
      <div>
        <p className="text-xs text-gray-500 mb-2">MAIN</p>

        <NavItem icon={<Home size={18} />} label="Dashboard" active />
        <NavItem icon={<Star size={18} />} label="Starred" />
      </div>

      {/* Projects */}
      <ProjectList />

      {/* Archived */}
      <NavItem icon={<Archive size={18} />} label="Archived" />
    </div>
  );
};

const NavItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer
      ${active ? "bg-gray-300 font-medium" : "text-gray-600 hover:bg-gray-200"}`}
  >
    {icon}
    {label}
  </div>
);

export default SidebarNav;
