import ProjectCard from "./ProjectCard";
import { projects } from "../../data/ProjectsData";

const ProjectsSection = () => {
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
