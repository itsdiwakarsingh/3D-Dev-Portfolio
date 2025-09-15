import { myProjects } from "../constants/index.js";
import Project from "../components/Project.jsx";
const Projects = () => {
  return (
    <section className="relative c-space section-spacing">
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="mt-12 space-y-12">
        {myProjects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            subDescription={project.subDescription}
            herf={project.href}
            image={project.image}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
