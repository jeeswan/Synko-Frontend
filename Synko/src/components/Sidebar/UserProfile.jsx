import { Settings } from "lucide-react";

const UserProfile = () => {
  return (
    <div className="border-t px-4 py-3 flex items-center gap-3">
      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
        JB
      </div>

      <div className="flex-1">
        <p className="text-sm font-medium">Jeeswan Bajracharya</p>
        <p className="text-xs text-gray-500">bajrajeeswan@gmail.com</p>
      </div>

      <Settings size={16} className="text-gray-500 cursor-pointer" />
    </div>
  );
};

export default UserProfile;
