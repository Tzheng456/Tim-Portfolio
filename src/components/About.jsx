import { useEffect } from "react";

export default function About(props) {

  useEffect(() => {
    props.setTitle("About me")
  }, []);

  return (
    <div>
      <h1>ABOUT PAGE</h1>
    </div>
  );
}