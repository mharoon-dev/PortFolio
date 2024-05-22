import "./AboutSection.css";
import { skills } from "../../data.jsx";

function AboutSection() {
  return (
    <>
      <section id="about" className="about sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main">About Me</span>
            <span className="heading-sec__sub">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology.
            </span>
          </h2>
          <div className="about__content">
            <div className="about__content-main">
              <h3 className="about__content-title">Get to know me!</h3>
              <div className="about__content-details">
                <p className="about__content-details-para">
                  I'm a <strong> MERN-Stack Web Developer </strong> building and
                  managing the Websites that leads to the success of the overall
                  product. Check out some of my work in the{" "}
                  <strong> Projects </strong>section.
                </p>
                <p className="about__content-details-para">
                  I also like sharing content related to the stuff that I have
                  learned over the years in <strong> Web Development </strong>{" "}
                  so it can help other people of the Dev Community. Feel free to
                  Connect or Follow me on my{" "}
                  <a
                    href="https://www.linkedin.com/in/muhammad-haroon-73ba8227b/"
                    target="_blank"
                    className="about__content-details-highlight"
                  >
                    {" "}
                    Linkedin{" "}
                  </a>{" "}
                  where I post useful content related to Web Development and
                  Programming.
                </p>
              </div>
              <a
                href="./#contact"
                className="btn btn--med btn--theme dynamicBgClr"
              >
                Contact
              </a>
            </div>
            <div className="about__content-skills">
              <h3 className="about__content-title">My Skills</h3>
              <div className="skills">
                {skills.map((skill) => (
                  <div className="skills__skill">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
