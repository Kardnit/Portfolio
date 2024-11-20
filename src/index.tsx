import "./styles/index.css";
import { render } from "preact";
import Router from "preact-router";
import { Home } from "./pages/Home.tsx";
import { Projects } from "./pages/Projects.tsx";
import NavigationBar from "./components/NavigationBar.tsx";

function Index() {
  return (
    <>
      <NavigationBar />
      <Router>
        <Home path="/" />
        <Projects path="/projects" />
      </Router>
    </>
  );
}

render(<Index />, document.getElementById("home")!);
