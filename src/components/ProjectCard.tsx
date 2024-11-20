import { FunctionalComponent } from "preact";
import "../styles/project-card.css";

interface ProjectCardProps {
  title: string;
  bodyText: string;
  imageUrl: string;
  repoUrl?: string;
  showButton?: boolean;
}

export const ProjectCard: FunctionalComponent<ProjectCardProps> = ({
  title,
  bodyText,
  imageUrl,
  repoUrl,
  showButton,
}) => {
  return (
    <div className="project-card-container">
      <img src={imageUrl} alt="Card Image" className="project-card-image" />

      <div className="project-card-text-section">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-body-text">{bodyText}</p>
      </div>

      {showButton && repoUrl && (
        <div className="project-card-button-container">
          <a
            href={repoUrl}
            className="project-card-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </div>
      )}
    </div>
  );
};
