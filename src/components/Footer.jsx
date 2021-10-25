import "./Footer.scss";

export default function Footer(props) {
  return (
    <div className="footer-container">
      <ul className="social-links-container">
        <li className="social-link-item">
          
          <a className="link-item" href="http://github.com/Tzheng456"><i className="fa-brands fa-github-square"></i>GitHub</a>
        </li>
        <li className="social-link-item">
          <i className="fa-brands fa-linkedin"></i>
          <a className="link-item" href="https://www.linkedin.com/in/tim-zheng-084510217/">LinkedIn</a>
        </li>
        <li className="social-link-item">
          <i className="fa-solid fa-square-envelope"></i>
          <a className="link-item" href="mailto:Tzheng456@gmail.com">Contact Me</a>
        </li>
      </ul>
      <div className="copyright-msg">
        <p>
          © 2021 <a href="http://github.com/Tzheng456">Tim Zheng</a>. All rights reserved.
        </p>
      </div>
    </div>
  );
}