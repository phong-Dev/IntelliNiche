import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    // <footer>
    //   <div className="row">
    //     <div className="col-md-4 footer4">
    //       <div className="row">
    //         <div className="col-md-6">
    //           <br />
    //           <img id="footerlogo" src="/picture/IntelliNiche_logo1.svg"></img>
    //         </div>
    //         <div className="col-md-6">
    //           <br />
    //           <div>
    //             <h5>
    //               <a href="#">Home</a>
    //             </h5>
    //           </div>
    //           <div>
    //             <h5>
    //               <a href="#">Services</a>
    //             </h5>
    //           </div>
    //           <div>
    //             <h5>
    //               <a href="#">About </a>
    //             </h5>
    //           </div>
    //           <div>
    //             <h5>
    //               <a href="#">Carrers</a>
    //             </h5>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="col-md-8 verticalLine footer8">
    //       <br />
    //       <h5>
    //         <b>ABOUT US</b>
    //       </h5>
    //       <br />
    //       <p>
    //         We're A Global Team
    //         <br />
    //         IntelliNiche Is Headquartered In The VietNam, With Regional
    //         Operations In Europe And Asia. Our Primary Focus Is The Agile
    //         Development Of Cloud-Connected Web And Mobile Apps.
    //       </p>
    //     </div>
    //   </div>

    //   <div className="">
    //     <span>
    //       Copyright 2020 All rights reserved. Designed by IntelliNiche
    //     </span>
    //     <span classNameName="iconthree">
    //       &nbsp;&nbsp;&nbsp;&nbsp;<i className="fab fa-twitter"></i>
    //       &nbsp;&nbsp;&nbsp;&nbsp;
    //       <i className="fab fa-facebook-square"></i>&nbsp;&nbsp;&nbsp;&nbsp;
    //       <i className="fab fa-linkedin"></i>
    //     </span>
    //   </div>
    // </footer>
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
        <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook-square"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          
        </span>
      </div></div>
        
      </div>
    </footer>
  );
};

export default Footer;
