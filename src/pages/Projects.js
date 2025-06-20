import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";
import "./Projects.css";

// Dynamic image loading from assets
const images = require.context('../assets', false, /\.(png|jpe?g|svg)$/);
const importImage = (name) => {
  try {
    return images(`./${name}`);
  } catch {
    return images('./default.png');
  }
};

function Projects() {
  return (
    <div className="projects-wrapper">
      <h1>Projects</h1>
      <p>Check out some of my featured work below.</p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={importImage(project.image)}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;

