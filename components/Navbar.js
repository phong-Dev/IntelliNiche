import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const router = useRouter();

  const isActive = (r) => {
    if (r === router.pathname) {
      return " active";
    } else {
      return "";
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  });

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="container">
          <div className="d-flex">
            <Link href="/" onClick={closeMobileMenu}>
              <a className="navbar-logo">
                <Image
                  src="/picture/logo.svg"
                  alt="logo"
                  width={69}
                  height={66}
                />
              </a>
            </Link>
          </div>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} aria-hidden />
          </div>
          <div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link href="/about" onClick={closeMobileMenu}>
                  <a className={"nav-links" + isActive("/about")}>About us</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/service" onClick={closeMobileMenu}>
                  <a className={"nav-links" + isActive("/service")}>Services</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/career" onClick={closeMobileMenu}>
                  <a className={"nav-links" + isActive("/career")}>Careers</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" onClick={closeMobileMenu}>
                  <a className={"nav-links" + isActive("/contact")}>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-links-mobile">
            <Image src="/picture/AU.svg" alt="AU" width={42} height={29} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
