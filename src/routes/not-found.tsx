import { route } from "preact-router";
import { useEffect } from "preact/hooks";

export default function NotFound() {
  useEffect(() => {
    route("/", true);
  }, []);

  return null;
}
