import Router, { Route } from "preact-router";
import Navbar from "./components/navbar";
import NotFound from "./routes/not-found";
import Home from "./routes/home";
import Projects from "./routes/projects";
import Info from "./routes/info";
import Contact from "./routes/contact";
import Background from "./components/background";

export default function App() {
  return (
    <>
      <div
        class="w-screen flex items-center justify-center p-8 bg-[#0d0d0d] text-white"
        style={{ height: "calc(var(--vh, 1vh) * 100)" }}
      >
        <div class="relative w-full h-full sm:w-[95%] sm:h-[95%] p-4 sm:p-6 overflow-hidden">
          <Background />
          <Navbar />

          <div class="absolute top-0 left-0 w-full h-full pl-30 pr-6 pb-6 pointer-events-none">
            <div class="h-full w-full pointer-events-auto">
              <Router>
                <Route default component={NotFound} />
                <Route path="/" component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/info" component={Info} />
                <Route path="/contact" component={Contact} />
              </Router>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
