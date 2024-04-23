import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__content">
          <h1 className="heading-primary">Hey, My name is M.Haroon</h1>
          <div className="home-hero__info">
            <p className="text-primary">
              A Result-Oriented Web Developer building and managing Websites
              that leads to the success of the overall product
            </p>
          </div>
          <div className="home-hero__cta">
            <Link to="/projects">
              <a className="btn btn--bg">Projects</a>
            </Link>
          </div>
        </div>


        <div className="home-hero__socials">
          <div className="home-hero__social">
            <a href="https://www.linkedin.com/in/muhammad-haroon-73ba8227b/"   
            target="_blank"  className="home-hero__social-icon-link">
              <img
                src="./assets/png/linkedin-ico.png"
                alt="icon"
                className="home-hero__social-icon"
              />
            </a>
          </div>
          <div className="home-hero__social">
            <a href="https://github.com/mharoon-dev"
            target="_blank" className="home-hero__social-icon-link">
              <img
                src="./assets/png/github-ico.png"
                alt="icon"
                className="home-hero__social-icon"
              />
            </a>
          </div>
          {/* <div className="home-hero__social">
            <a href="#" className="home-hero__social-icon-link">
              <img
                src="./assets/png/twitter-ico.png"
                alt="icon"
                className="home-hero__social-icon"
              />
            </a>
          </div> */}
          {/* <div className="home-hero__social">
            <a href="#" className="home-hero__social-icon-link">
              <img
                src="./assets/png/yt-ico.png"
                alt="icon"
                className="home-hero__social-icon"
              />
            </a>
          </div> */}
          {/* <div className="home-hero__social">
            <a
              href="#"
              className="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
            >
              <img
                src="./assets/png/insta-ico.png"
                alt="icon"
                className="home-hero__social-icon"
              />
            </a>
          </div> */}
        </div>


        <div className="home-hero__mouse-scroll-cont">
          <div className="mouse"></div>
        </div>
      </section>
    </>
  );
}

export default Hero;
