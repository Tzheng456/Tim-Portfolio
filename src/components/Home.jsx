import { useEffect } from "react";
import "./Home.scss";

export default function Home(props) {

  useEffect(() => {
    props.setTitle("Tim Zheng | Full-Stack Web Developer")
  }, []);
  
  return (
    <div className="home-main-container">
      <div className="name-and-introduction-container">
        <h1>Tim Zheng</h1>
        <h3>Full-Stack Web Developer</h3>
      </div>
    </div>
  );
}