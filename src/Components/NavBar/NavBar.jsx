import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [isSmallMenuActive, setIsSmallMenuActive] = useState(false);
  const [isToggleVisible, setIsToggleVisible] = useState(false);
  const [crossbtnDisplay, setcrossbtnDisplay] = useState(false);

  const toggleSmallMenu = () => {
    setIsSmallMenuActive(!isSmallMenuActive);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsToggleVisible(window.innerWidth <= 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img
              src="/assets/me.jpg"
              alt="Ram Maheshwari Logo Image"
              className="header__logo-img"
            />
          </div>
          <Link to="/">
            <span className="header__logo-sub">M.Haroon</span>
          </Link>
        </div>
        <div className="header__main" style={{ marginTop: "0.25rem" }}>
          <div
            className={`header__main-ham-menu-cont ${
              isToggleVisible ? "" : "d-none"
            }`}
            onClick={() => {
              setcrossbtnDisplay(!crossbtnDisplay);
              toggleSmallMenu();
            }}
          >
            <img
              src="/assets/svg/ham-menu.svg"
              alt="hamburger menu"
              className={`header__main-ham-menu ${
                crossbtnDisplay ? "d-none" : ""
              } `}
            />
            <img
              src="./assets/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              className={`header__main-ham-menu-close ${
                isSmallMenuActive ? "" : "d-none"
              }`}
            />
          </div>
          <ul className={`header__links ${isToggleVisible ? "d-none" : ""}`}>
            <li className="header__link-wrapper">
              <a className="header__link">
                <Link to="/"> Home</Link>{" "}
              </a>
            </li>
            <li className="header__link-wrapper">
              <a className="header__link">
                <Link to="/about">About</Link>{" "}
              </a>
            </li>
            <li className="header__link-wrapper">
              <a className="header__link">
                <Link to="/projects">Projects</Link>
              </a>
            </li>
            <li className="header__link-wrapper">
              <a className="header__link">
                {" "}
                <Link to="/contact">Contact</Link>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`header__sm-menu ${
          isSmallMenuActive ? "header__sm-menu--active" : ""
        }`}
      >
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li
              className="header__sm-menu-link"
              onClick={() => {
                setIsSmallMenuActive(false);
              }}
            >
              <a href="./index.html">
                {" "}
                <Link to="/">Home</Link>{" "}
              </a>
            </li>
            <li
              className="header__sm-menu-link"
              onClick={() => {
                setIsSmallMenuActive(false);
              }}
            >
              <a href="./index.html#about">
                {" "}
                <Link to="/about"> About</Link>{" "}
              </a>
            </li>
            <li
              className="header__sm-menu-link"
              onClick={() => {
                setIsSmallMenuActive(false);
              }}
            >
              <a href="./index.html#projects">
                {" "}
                <Link to="/projects">Projects</Link>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
