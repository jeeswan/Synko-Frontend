import ProjectCard from "./ProjectCard";
import { useProject } from "../../context/ProjectContext";
import { useTask } from "../../context/TaskContext";
import { useEffect } from "react";

const ProjectsSection = () => {
  const { projects, loading } = useProject();
  const { getTasks } = useTask();

  useEffect(() => {
    if (projects.length) {
      projects.forEach((project) => {
        getTasks(project.id);
      });
    }
  }, [projects]);

  if (loading) return null;
  return (
    <section className="mt-8">
      <h2 className="text-lg font-semibold mb-4">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
