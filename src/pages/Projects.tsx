import { ProjectCard } from "../components/ProjectCard";
import "../styles/projects.css";

interface ProjectsProps {
  path?: string;
}

export function Projects(_props: ProjectsProps) {
  return (
    <div className="projectsPage">
      <ProjectCard
        title="Magic & Dash"
        bodyText="Magic & Dash is a 2D platformer game with a hardcore difficulty"
        imageUrl="../assets/images/project1.png"
        repoUrl="https://github.com/Kardnit/Magic-Dash"
        showButton={true}
      />
      <ProjectCard
        title="Gun Wars"
        bodyText="Gun Wars is a top-down PvP shooter game"
        imageUrl="../assets/images/project2.png"
        repoUrl=""
        showButton={false}
      />
      <ProjectCard
        title="Accursed Vow"
        bodyText="Accursed Vow is an FPS RPG game where the players defeat monsters with magic and swords. The unique thing about this game is the magic system, where the player draws spells and shoots them instead of clicking a button"
        imageUrl="../assets/images/project3.png"
        repoUrl=""
        showButton={false}
      />
      <ProjectCard
        title="Liberdius"
        bodyText="Liberdius is the continuation of Magic & Dash, where the magic system is converted into a pattern recognition draw-to-cast system"
        imageUrl="../assets/images/project4.png"
        repoUrl="https://github.com/Kardnit/Liberdius/tree/development"
        showButton={true}
      />
      <ProjectCard
        title="VFX"
        bodyText="This project is about the VFX I create"
        imageUrl="../assets/images/project5.png"
        repoUrl="https://github.com/Kardnit/UnityVFX/tree/development"
        showButton={true}
      />
      <ProjectCard
        title="TLC Quantum Games"
        bodyText="This online tournament website is a school project that we built for TLC Quantum Games"
        imageUrl="../assets/images/project6.png"
        repoUrl=""
        showButton={false}
      />
      <ProjectCard
        title="Cansbuns"
        bodyText="This is a website project that was made for a Dutch food company"
        imageUrl="../assets/images/project7.png"
        repoUrl=""
        showButton={false}
      />
    </div>
  );
}
