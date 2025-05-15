import { route } from "preact-router";
import { useEffect, useState } from "preact/hooks";

export default function Navbar() {
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    const handleRoute = () => {
      setActivePath(window.location.pathname);
    };

    handleRoute();
    window.addEventListener("popstate", handleRoute);

    return () => {
      window.removeEventListener("popstate", handleRoute);
    };
  }, []);

  const navigateTo = (path: string) => {
    route(path);
    setActivePath(path);
  };

  return (
    <nav class="absolute">
      <div class="text-4xl">
        Atilla Borga <span class="block sm:inline">Iskender</span>
      </div>
      <div class="block font-bold opacity-60">
        Software Developer & <span class="block sm:inline">Web Designer</span>
      </div>

      <div class="mt-8">
        {["Home", "Projects", "Info", "Contact"].map((item) => {
          const path =
            item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;
          const isActive = activePath === path;

          return (
            <div
              class={`cursor-pointer font-bold ${
                isActive ? "opacity-40" : "opacity-100 hover:opacity-60"
              }`}
              onClick={() => navigateTo(path)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
