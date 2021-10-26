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
      <div className="home-body-text intro">
        <p>
          Welcome to my portfolio.<br/><br/>
          I am a Full-Stack Web Developer who earned a diploma from Lighthouse Labs. I transitioned to programming from an Arts degree at the University of British Columbia in Vancouver, BC, Canada.
        </p>
      </div>
      <div className="home-body-text skills">
        <h1>Skillset</h1>
        <p>
        Languages I've worked with:
        </p>
      </div>
    </div>
  );
}