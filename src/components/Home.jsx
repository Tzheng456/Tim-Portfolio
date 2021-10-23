import { useEffect } from "react";

export default function Home(props) {

  useEffect(() => {
    document.title = "Tim Zheng - Personal Portfolio Page"
  }, []);
  
  return (
    <div>
      <h1>HOME PAGE</h1>
    </div>
  );
}