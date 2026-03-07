import { useNavigate, useLocation } from "react-router-dom";

const StarredItem = ({ color, name, projectId }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate(`/project/${projectId}`, {
      state: { projectName: name, color }
    });
  };

  const isActive = location.pathname.startsWith(
    `/project/${projectId}`
  );

  return (
    <div
      onClick={handleClick}
      className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition ${
        isActive
          ? "bg-gray-300 font-medium text-gray-900"
          : "text-gray-600 hover:bg-gray-300"
      }`}
    >
      <span
        className={`w-3 h-3 rounded-full ${color}`}
      />
      <span>{name}</span>
    </div>
  );
};

export default StarredItem;