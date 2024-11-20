import "../styles/navigation-bar.css";

export default function NavigationBar() {
  return (
    <div className="navigation-bar">
      <a className="navigation-bar-button" href="/">Home</a>
      <a className="navigation-bar-button" href="/projects">Projects</a>
    </div>
  );
}
