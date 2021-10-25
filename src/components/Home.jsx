import { useEffect } from "react";

export default function Home(props) {

  useEffect(() => {
    props.setTitle("Tim Zheng | Full-Stack Web Developer")
    // document.title = "Tim Zheng - Personal Portfolio Page"
  }, []);
  
  return (
    <div>
      <h1>HOME PAGE</h1>
    </div>
  );
}