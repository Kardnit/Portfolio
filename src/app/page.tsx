export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">
        Atilla Borga Iskender
      </h1>
      <p className="mt-2 text-lg sm:text-xl">
        Software Engineer / Game Developer
      </p>
      <div className="mt-8 text-base">
        <p>
          I am an ICT student at Fontys Univeristy of Applied Science. I have
          specialized in "Software Engineering" and "Game Design and
          Technology".
        </p>
        <br />
        <p className="mb-8">
          This is my portfolio website. Check the{' '}
          <a
            target="_blank"
            className="font-heading underline"
            href="https://github.com/Kardnit?tab=repositories"
          >
            github repo
          </a>{' '}
          for more info.
        </p>
      </div>

      <h2 className="mt-6 text-xl font-heading sm:text-3xl">Skills</h2>
      <h3 className="mt-4 text-base sm:text-xl">Languages:</h3>
      <p className="mt-2 text-base">
        My mother tongue is Turkish and I am fluent English
      </p>
      <h3 className="mt-4 text-base sm:text-xl">Programming Languages:</h3>
      <p className="mt-2 text-base">
        C#, C++, JavaScript, TypeScript, PHP, SQL, MATLAB
      </p>
      <h3 className="mt-4 text-base sm:text-xl">Game Engines:</h3>
      <p className="mt-2 text-base">Unity, Phaser</p>
      <h3 className="mt-4 text-base sm:text-xl">Frameworks:</h3>
      <p className="mt-2 text-base">
        .NET, Spring Boot, NodeJS ,ReactJS, NextJS, Angular, Phaser
      </p>
      <h3 className="mt-4 text-base sm:text-xl">Services/Tools:</h3>
      <p className="mt-2 text-base">
        GitHub, GitHub Actions, Auth0, AWS Cloud, Docker, Kubernetes, Postgres,
        MongoDB, Visual Studio, Visual Studio Code
      </p>
      <h3 className="mt-4 text-base sm:text-xl">Concepts:</h3>
      <p className="mt-2 text-base">
        Agile Scrum/Kanban, OOD, DevOps, Full-Stack, Micro-services,
        Event-driven Architecture, Authentication/Authorization, SQL/NoSQL
      </p>
      <h3 className="mt-4 text-base sm:text-xl">Game Development Concepts:</h3>
      <p className="mt-2 text-base">
        Game Physics, Procedural Generation, Game Optimization, Game State
        Management, Animation Systems, Scripting for Game Mechanics, 2D and 3D
        Rendering, Shader Development, Level Design, Asset Management
      </p>

      <h2 className="mt-6 text-xl font-heading sm:text-3xl">Experiences</h2>
      <h3 className="mt-4 mb-2 text-base sm:text-xl">Companies:</h3>
      <p className="mb-2">
        TaleWorlds - I have tested and helped them with the game called Mount &
        Blade
      </p>
      <p className="mb-2">Azerion - I worked as an intern game developer</p>
      <p className="mb-2">
        Cansbuns - I have created the frontend of their website and helped with
        the backend
      </p>
    </div>
  )
}
