import "./Hero.css";

function Hero() {
  return (
    <>
      <section class="home-hero">
        <div class="home-hero__content">
          <h1 class="heading-primary">Hey, My name is M.Haroon</h1>
          <div class="home-hero__info">
            <p class="text-primary">
            A Result-Oriented Web Developer building and managing Websites that leads to the success of the overall product
            </p>
          </div>
          <div class="home-hero__cta">
            <a href="./#projects" class="btn btn--bg">
              Projects
            </a>
          </div>
        </div>
        <div class="home-hero__socials">
          <div class="home-hero__social">
            <a href="#" class="home-hero__social-icon-link">
              <img
                src="./assets/png/linkedin-ico.png"
                alt="icon"
                class="home-hero__social-icon"
              />
            </a>
          </div>
          <div class="home-hero__social">
            <a href="#" class="home-hero__social-icon-link">
              <img
                src="./assets/png/github-ico.png"
                alt="icon"
                class="home-hero__social-icon"
              />
            </a>
          </div>
          <div class="home-hero__social">
            <a href="#" class="home-hero__social-icon-link">
              <img
                src="./assets/png/twitter-ico.png"
                alt="icon"
                class="home-hero__social-icon"
              />
            </a>
          </div>
          <div class="home-hero__social">
            <a href="#" class="home-hero__social-icon-link">
              <img
                src="./assets/png/yt-ico.png"
                alt="icon"
                class="home-hero__social-icon"
              />
            </a>
          </div>
          <div class="home-hero__social">
            <a
              href="#"
              class="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
            >
              <img
                src="./assets/png/insta-ico.png"
                alt="icon"
                class="home-hero__social-icon"
              />
            </a>
          </div>
        </div>
        <div class="home-hero__mouse-scroll-cont">
          <div class="mouse"></div>
        </div>
      </section>
    </>
  );
}

export default Hero;
