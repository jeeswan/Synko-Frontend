import StarredItem from "./StarredItem"; // use the correct component
import { useProject } from "../../context/ProjectContext";

const StarredList = () => {
  const { loading, starredProjects } = useProject();

  if (loading) return null;

  const unarchivedStarredProjects = starredProjects.filter(p => !p.is_archived);

  return (
    <div>
      {unarchivedStarredProjects.map((project) => (
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