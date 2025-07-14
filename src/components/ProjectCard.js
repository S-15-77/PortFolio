import './ProjectCard.css';

function ProjectCard({ image,title,description,tech,link }) {
    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-image" />
            <h2>{title}</h2>
            <div className="description">{description}</div>
            <div className="tech">{tech}</div>
            <a href={link} target="_blank" rel='Open in a new tab'>View Project <span className="arrow">➜</span> </a>
        </div>
    );
}

export default ProjectCard;