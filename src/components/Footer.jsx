import "./Footer.scss";

export default function Footer(props) {
  return (
    <div className="footer-container">
      <div className="social-links-container">
        <div className="social-link-item">  
          <a className="link-item" href="http://github.com/Tzheng456"><i className="fab fa-github"></i></a>
        </div>
        <div className="social-link-item">
          <a className="link-item" href="https://www.linkedin.com/in/tim-zheng-084510217/"><i className="fab fa-linkedin"></i></a>
        </div>
        <div className="social-link-item">
          <a className="link-item" href="https://www.facebook.com/tim.zheng.37/"><i className="fab fa-facebook"></i></a>
        </div>
        <div className="social-link-item">
          <a className="link-item" href="mailto:Tzheng456@gmail.com"><i className="fas fa-envelope"></i></a>
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