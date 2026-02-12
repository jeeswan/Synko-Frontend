import { useState } from "react";
import { Settings, LogOut, User } from "lucide-react"; // optional icons

const UserProfile = ({ onLogout }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className="relative border-t-gray-50 px-4 py-3 flex items-center gap-3">
      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
        JB
      </div>

      <div className="flex-1">
        <p className="text-sm font-medium">Jeeswan Bajracharya</p>
        <p className="text-xs text-gray-500">bajrajeeswan@gmail.com</p>
      </div>

      <div className="relative">
        <Settings
          size={16}
          className="text-gray-500 cursor-pointer"
          onClick={toggleMenu}
        />

        {open && (
          <div className="absolute bottom-full left-0 mt-2 w-40 bg-gray-200 shadow-lg rounded-md border border-gray-300 z-10">
            <ul>
              <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-300 cursor-pointer">
                <User size={16} />
                Profile
              </li>
              <a href="/logout">
                <li
                  className="px-4 py-2 flex items-center gap-2 hover:bg-gray-300 cursor-pointer"
                  onClick={onLogout}
                >
                  <LogOut size={16} />
                  Logout
                </li>
              </a>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
