import "./styles/index.css";
import { render } from "preact";
import Router from "preact-router";
import { Home } from "./pages/Home.tsx";
import { WebProjects } from "./pages/WebProjects.tsx";
import { GameProjects } from "./pages/GameProjects.tsx";
import NavigationBar from "./components/NavigationBar.tsx";


function Index() {
  return (
    <>
      <NavigationBar />
      <Router>
        <Home path="/" />
        <WebProjects path="/web-projects" />
        <GameProjects path="/game-projects" />
      </Router>
    </>
  );
}

render(<Index />, document.getElementById("home")!);
