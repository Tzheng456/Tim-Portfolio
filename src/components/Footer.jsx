import "./Footer.scss";

export default function Footer(props) {
  return (
    <div className="footer-container">
      <div className="social-links-container">
        <div className="social-link-item">  
          <a className="link-item" href="http://github.com/Tzheng456"><i className="fab fa-github-square"></i> GitHub</a>
        </div>
        <div className="social-link-item">
          <a className="link-item" href="https://www.linkedin.com/in/tim-zheng-084510217/"><i className="fab fa-linkedin"></i> LinkedIn</a>
        </div>
        <div className="social-link-item">
          <a className="link-item" href="mailto:Tzheng456@gmail.com"><i className="fas fa-envelope-square"></i> Contact Me</a>
        </div>
      </div>
      <div className="copyright-msg">
        <p>
          © 2021 <a href="http://github.com/Tzheng456">Tim Zheng</a>. All rights reserved.
        </p>
      </div>
    </div>
  );
}