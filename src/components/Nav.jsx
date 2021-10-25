import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

export default function Nav(props) {
  return(
    <Fragment>
      <div className="navbar-container">
        <div id="menu-primary-menu">
          <div className="navbar-pages">
            <Link to="/" className="menu-item">Home</Link>
            <Link to="/projects" className="menu-item">Projects</Link>
          </div>
          <div className="navbar-socials">
            <a className="menu-item" href="http://github.com/Tzheng456"><i className="fab fa-github fa-lg"></i></a>
            <a className="menu-item" href="https://www.linkedin.com/in/tim-zheng-084510217/"><i className="fab fa-linkedin fa-lg"></i></a>
            <a className="menu-item" href="https://www.facebook.com/tim.zheng.37/"><i className="fab fa-facebook fa-lg"></i></a>
            <a className="menu-item" href="mailto:Tzheng456@gmail.com"><i className="fas fa-envelope fa-lg"></i></a>
          </div>
          {/* <Link to="/about" className="menu-item">About</Link> */}
        </div>
      </div>
      <div id="nav-bar-spacer"></div>
    </Fragment>
  );
}