import "../styles/home.css";

interface HomeProps {
  path?: string;
}

export function Home(_props: HomeProps) {
  return (
    <div className="homePage">
      <h1>Atilla Borga Iskender</h1>
      <h2 className="specializations">Software Engineer / Game Developer</h2>
      <p>
        I am an ICT student at Fontys University of Applied Science I have
        specialized in "Software Engineering" and "Game Design and Technology".
      </p>
      <p>
        This is my portfolio website. Check the{" "}
        <a
          className="github-link"
          href="https://github.com/Kardnit?tab=repositories"
        >
          GitHub repository
        </a>{" "}
        for more info.
      </p>
      <h2 className="skills-title">Skills</h2>
      <h3>Languages:</h3>
      <p>My mother tongue is Turkish, and I am fluent in English</p>
      <h3>Programming Languages:</h3>
      <p>C#, C++, JavaScript, TypeScript, PHP, SQL, MATLAB</p>
      <h3>Game Engines:</h3>
      <p>Unity, Phaser</p>
      <h3>Frameworks:</h3>
      <p>.NET, Spring Boot, NodeJS, ReactJS, NextJS, Angular, Phaser</p>
      <h3>Services/Tools:</h3>
      <p>
        GitHub, GitHub Actions, Auth0, AWS Cloud, Docker, Kubernetes, Postgres,
        MongoDB, Visual Studio, Visual Studio Code
      </p>
      <h3>Concepts:</h3>
      <p>
        Agile Scrum/Kanban, OOD, DevOps, Full-Stack, Micro-services,
        Event-driven Architecture, Authentication/Authorization, SQL/NoSQL
      </p>
      <h3>Game Development Concepts:</h3>
      <p>
        Game Physics, Procedural Generation, Game Optimization, Game State
        Management, Animation Systems, Scripting for Game Mechanics, 2D and 3D
        Rendering, Shader Development, Level Design, Asset Management
      </p>
      <h2 className="experiences-title">Experiences</h2>
      <h3>Companies:</h3>
      <p>
        TaleWorlds - I have tested and helped them with the game called Mount &
        Blade
      </p>
      <p>Azerion - I worked as an intern game developer</p>
      <p>
        Cansbuns - I have created the frontend of their website and helped with
        the backend
      </p>
    </div>
  );
}
