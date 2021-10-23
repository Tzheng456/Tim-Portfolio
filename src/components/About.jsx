import { useEffect } from "react";

export default function About(props) {

  useEffect(() => {
    document.title = "About me"
  }, []);

  return (
    <div>
      <h1>ABOUT PAGE</h1>
    </div>
  );
}