import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";
import UserProfile from "./UserProfile";

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 border-r border-gray-300 h-full w-64 transition-all duration-300">
      <div className="flex flex-col h-full">
        <SidebarHeader />
        <SidebarNav />
        <UserProfile />
      </div>
    </aside>
  );
};

export default Sidebar;
