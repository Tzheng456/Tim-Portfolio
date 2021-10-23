import { useEffect } from "react";

export default function Projects(props) {

  useEffect(() => {
    document.title = "My Projects"
  }, []);

  return (
    <div>
      <h1>PROJECTS PAGE</h1>
    </div>
  );
}