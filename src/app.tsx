import { useState, useRef, useLayoutEffect } from "preact/hooks";
import Router, { Route } from "preact-router";
import Navbar from "./components/navbar";
import NotFound from "./routes/not-found";
import Home from "./routes/home";
import Projects from "./routes/projects";
import Info from "./routes/info";
import Contact from "./routes/contact";
import Background from "./components/background";
import Intro from "./components/intro";
import gsap from "gsap";

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [route, setRoute] = useState<string | undefined>(undefined);
  const [isMonochrome, setIsMonochrome] = useState(false);

  const mainRef = useRef<HTMLDivElement>(null);
  const routeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!showLoader && mainRef.current) {
      gsap.to(mainRef.current, {
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      });
    }
  }, [showLoader]);

  useLayoutEffect(() => {
    if (!showLoader && routeRef.current) {
      gsap.fromTo(
        routeRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
          ease: "power2.out",
        }
      );
    }
  }, [showLoader, route]);

  return (
    <>
      {showLoader && <Intro onFinish={() => setShowLoader(false)} />}

      <main
        ref={mainRef}
        class="fade-in"
        style={{
          opacity: showLoader ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <button
          onClick={() => setIsMonochrome((prev) => !prev)}
          class="fixed top-1 right-3 z-50 text-white"
        >
          {isMonochrome ? "Polychrome" : "Monochrome"}
        </button>

        <div
          class="w-screen flex items-center justify-center p-8"
          style={{ height: "calc(var(--vh, 1vh) * 100)" }}
        >
          <div
            class={`relative w-full h-full sm:w-[95%] sm:h-[95%] p-4 sm:p-6 overflow-hidden transition-colors duration-300 ${
              isMonochrome ? "text-black" : "text-white"
            }`}
          >
            <Background isMonochrome={isMonochrome} />
            <Navbar />

            <div class="absolute top-0 left-0 w-full h-full pl-30 pr-6 pb-6 pointer-events-none">
              <div class="h-full w-full pointer-events-auto">
                <div key={route} ref={routeRef} class="h-full w-full opacity-0">
                  <Router onChange={(e) => setRoute(e.url)}>
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
        </div>
      </main>
    </>
  );
}
