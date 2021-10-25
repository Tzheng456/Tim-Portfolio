import { useEffect } from "react";

export default function Projects(props) {

  useEffect(() => {
    props.setTitle("My Projects")
    // document.title = "My Projects"
  }, []);

  return (
    <div>
      <h1>PROJECTS PAGE</h1>
    </div>
  );
}