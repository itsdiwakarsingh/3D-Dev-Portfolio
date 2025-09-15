import { myProjects } from "../constants/index.js";
const Projects = () => {
  return (
    <section className="realtive c-space section-spacing">
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full">
        {myProjects.map((Project) => (
          <Project key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
