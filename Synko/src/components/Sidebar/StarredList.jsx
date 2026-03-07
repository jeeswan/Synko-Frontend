import StarredItem from "./StarredItem"; // use the correct component
import { useProject } from "../../context/ProjectContext";

const StarredList = () => {
  const { loading, starredProjects } = useProject();

  if (loading) return null;

  return (
    <div>
      {starredProjects.map((project) => (
        <StarredItem
          key={project.id}
          color={project.color}
          name={project.name}
          projectId={project.id}
        />
      ))}
    </div>
  );
};

export default StarredList;