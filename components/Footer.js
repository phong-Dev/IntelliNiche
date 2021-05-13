import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 footer-left">
            <div className="row pt-3">
              <div className="col-md-6">
                <Link href="/">
                  <a>
                    <Image
                      src="/picture/IntelliNiche_logo1.svg"
                      alt="logo"
                      width={69}
                      height={66}
                    />
                  </a>
                </Link>
              </div>
              <div className="col-md-6">
                <ul className="footer-menu">
                  <li>
                    <Link href="/">
                      <a className="footer-link">Homepage</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <a className="footer-link">Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a className="footer-link">About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/career">
                      <a className="footer-link">Careers</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9 pt-3">
            <h5>
              <b>ABOUT US</b>
            </h5>
            <p>
              We're A Global Team
              <br />
              IntelliNiche Is Headquartered In The VietNam, With Regional
              Operations In Europe And Asia. Our Primary Focus Is The Agile
              Development Of Cloud-Connected Web And Mobile Apps.
            </p>
          </div>
        </div>
        
      </div>
      <div className="footer-bottom">
      <div className="container">
      <div className="d-flex justify-content-between py-3">
<span>
          Copyright 2020 All rights reserved. Designed by IntelliNiche
        </span>
        <span>
        <a href="https://www.facebook.com/"><i className="fab fa-twitter" aria-hidden></i></a>
          <a href="https://www.facebook.com/"><i className="fab fa-facebook-square" aria-hidden></i></a>
          <a href="https://www.facebook.com/"><i className="fab fa-linkedin" aria-hidden></i></a>
          
        </span>
      </div></div>
        
      </div>
    </footer>
  );
};

export default Footer;
