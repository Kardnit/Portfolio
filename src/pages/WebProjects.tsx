import { ProjectCard } from "../components/ProjectCard";
import "../styles/projects.css";

interface ProjectsProps {
  path?: string;
}

export function WebProjects(_props: ProjectsProps) {
  return (
    <div className="projectsPage">
      <ProjectCard
        title="Portfolio"
        bodyText="This is my portfolio website, which you are currently viewing."
        imageUrl="../assets/images/project9.png"
        repoUrl="https://github.com/Kardnit/Portfolio"
        showButton={true}
      />
      <ProjectCard
        title="Omniweb"
        bodyText="This is a website project that I am making for my own company. It is a Full-stack web development company, and the background has falling snippets of code that builds the website."
        imageUrl="../assets/images/project8.png"
        repoUrl="https://github.com/Kardnit/company-frontend"
        showButton={true}
      />
      <ProjectCard
        title="Cansbuns"
        bodyText="This is a website project that I made for a Dutch food company"
        imageUrl="../assets/images/project7.png"
        repoUrl=""
        showButton={false}
      />
      <ProjectCard
        title="TLC Quantum Games"
        bodyText="This online tournament website is a school project that we built for TLC Quantum Games"
        imageUrl="../assets/images/project6.png"
        repoUrl=""
        showButton={false}
      />
    </div>
  );
}
