import { LayoutGrid, Star, ChevronDown, Archive, Plus } from "lucide-react";
import { NavLink } from "react-router-dom";
import ProjectList from "./ProjectList";

const SidebarNav = () => {
  return (
    <div className="flex-1 px-4 space-y-3 overflow-y-auto border-b">
      {/* Main */}
      <NavItem
        icon={<LayoutGrid size={18} />}
        label="Dashboard"
        to="/dashboard"
      />

      <NavItem
        icon={<Star size={18} />}
        label="Starred"
        to="/starred"
      />

      {/* Projects */}
      <div>
        <NavItem
          icon={<ChevronDown size={18} />}
          label="Projects"
          to="/projects"
          rightIcon={
            <Plus
              size={14}
              className="cursor-pointer text-gray-500 hover:text-gray-800"
            />
          }
        />
        <ProjectList />
      </div>

      {/* Archived */}
      <NavItem
        icon={<Archive size={18} />}
        label="Archived"
        to="/archived"
      />
    </div>
  );
};

const NavItem = ({ icon, label, to, rightIcon }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center justify-between px-3 py-2 rounded-md cursor-pointer transition
        ${
          isActive
            ? "bg-gray-300 font-medium text-gray-900"
            : "text-gray-600 hover:bg-gray-200"
        }`
      }
    >
      <div className="flex items-center gap-3">
        {icon}
        <span>{label}</span>
      </div>
      {rightIcon}
    </NavLink>
  );
};

export default SidebarNav;
