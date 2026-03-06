import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";
import UserProfile from "./UserProfile";

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 border-r border-gray-300 h-screen w-64 sticky top-0">
      <div className="flex flex-col h-screen">
        <SidebarHeader />
        <SidebarNav />
        <UserProfile />
      </div>
    </aside>
  );
};

export default Sidebar;
