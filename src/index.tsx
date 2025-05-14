import { render } from "preact";
import "./index.css";
import App from "./app";

const setVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};
setVh();
window.addEventListener("resize", setVh);

render(<App />, document.getElementById("app")!);
