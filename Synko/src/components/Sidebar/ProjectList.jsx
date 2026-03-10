import ProjectItem from "./ProjectItem";
import { useProject } from "../../context/ProjectContext";

const ProjectList = () => {
  const { projects = [], loading } = useProject();

  if (loading) return null;

  const unarchivedProjects = projects.filter(p => !p.is_archived);

  return (
    <div>
      {unarchivedProjects.map((project) => (
        <ProjectItem
          key={project.id}
          color={project.color}
          name={project.name}
          projectId={project.id}
        />
      ))}
    </div>
  );
};

export default ProjectList;
