import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

export default function Nav(props) {
  return(
    <Fragment>
      <div className="navbar-container">
        <div id="menu-primary-menu">
          <Link to="/" className="menu-item">Home</Link>
          <Link to="/projects" className="menu-item">Projects</Link>
          <Link to="/about" className="menu-item">About</Link>
        </div>
      </div>
      <div id="nav-bar-spacer"></div>
    </Fragment>
  );
}