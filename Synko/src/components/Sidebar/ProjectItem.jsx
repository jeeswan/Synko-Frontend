import { useNavigate, useLocation } from "react-router-dom";

const ProjectItem = ({ color, name, projectId }) => {
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
          ? "bg-blue-100 text-blue-600 font-semibold"
          : "hover:bg-gray-200 text-gray-800"
      }`}
    >
      <span
        className="w-2.5 h-2.5 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span>{name}</span>
    </div>
  );
};

export default ProjectItem;