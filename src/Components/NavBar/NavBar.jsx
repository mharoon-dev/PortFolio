import React, { useState, useEffect } from 'react';
import './NavBar.css';

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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container" onClick={() => { window.location.href = 'index.html'; }}>
          <div className="header__logo-img-cont">
            <img
              src="./assets/png/john-doe.png"
              alt="Ram Maheshwari Logo Image"
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-sub">M.Haroon</span>
        </div>
        <div className="header__main" style={{ marginTop: '0.25rem' }}>
          <div className={`header__main-ham-menu-cont ${isToggleVisible ? '' : 'd-none'}`} onClick={() => {
             setcrossbtnDisplay(!crossbtnDisplay)
             toggleSmallMenu()
             }}>
            <img 
              src="./assets/svg/ham-menu.svg"
              alt="hamburger menu"
              className={`header__main-ham-menu ${crossbtnDisplay ? 'd-none' : ''} `}
            />
            <img
              src="./assets/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              className={`header__main-ham-menu-close ${isSmallMenuActive ? '' : 'd-none'}`}
            />
          </div>
          <ul className={`header__links ${isToggleVisible ? 'd-none' : ''}`}>
            <li className="header__link-wrapper">
              <a href="./index.html" className="header__link"> Home </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./index.html#about" className="header__link">About </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./index.html#projects" className="header__link">
                Projects
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./index.html#contact" className="header__link"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`header__sm-menu ${isSmallMenuActive ? 'header__sm-menu--active' : ''}`}>
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link" onClick={() => { setIsSmallMenuActive(false); }}>
              <a href="./index.html"> Home </a>
            </li>
            <li className="header__sm-menu-link" onClick={() => { setIsSmallMenuActive(false); }}>
              <a href="./index.html#about"> About </a>
            </li>
            <li className="header__sm-menu-link" onClick={() => { setIsSmallMenuActive(false); }}>
              <a href="./index.html#projects"> Projects </a>
            </li>
            <li className="header__sm-menu-link" onClick={() => { setIsSmallMenuActive(false); }}>
              <a href="./index.html#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
