import { useNavigate } from "react-router-dom";

const ProjectItem = ({ color, name, projectId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${projectId}`, { state: { projectName: name, color } });
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-3 px-3 py-2 hover:bg-gray-200 rounded-md cursor-pointer"
    >
      <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
      <span className="text-base text-gray-950 font-medium">{name}</span>
    </div>
  );
};

export default ProjectItem;
