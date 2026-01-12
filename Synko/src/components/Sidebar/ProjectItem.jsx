const ProjectItem = ({ color, name }) => {
  return (
    <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-200 rounded-md cursor-pointer">
      <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
      <span className="text-sm text-gray-700">{name}</span>
    </div>
  );
};

export default ProjectItem;
