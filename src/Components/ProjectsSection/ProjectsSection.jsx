import "./ProjectsSection.css";

function ProjectsSection() {
  return (
    <>
      <section id="projects" className="projects sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-bg">
            <span className="heading-sec__main">Projects</span>
            <span className="heading-sec__sub">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              facilis tempora explicabo quae quod deserunt eius sapiente
            </span>
          </h2>

          <div className="projects__content">
            <div className="projects__row">
              <div className="projects__row-img-cont">
                <img
                  src="./assets/projectsImg/socailMedia.png"
                  alt="Software Screenshot"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">Socail Media</h3>
                <p className="projects__row-content-desc">
                  Socail Media MERN Stack Application with Authentication and
                  CRUD Operations.
                </p>
                <a
                  href=""
                  className="btn btn--med btn--theme dynamicBgClr"
                  target="_blank"
                >
                  Case Study
                </a>
              </div>
            </div>
            <div className="projects__row">
              <div className="projects__row-img-cont">
                <img
                  src="./assets/projectsImg/linkedin.png"
                  alt="Software Screenshot"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">Linkedin</h3>
                <p className="projects__row-content-desc">
                  Linkedin with FireBase and Reactjs with Authentication and basic CRUD Operations
                </p>
                <a
                  href="./project-2.html"
                  className="btn btn--med btn--theme dynamicBgClr"
                  target="_blank"
                >
                  Case Study
                </a>
              </div>
            </div>
            <div className="projects__row">
              <div className="projects__row-img-cont">
                <img
                  src="./assets/projectsImg/hiringMine.png"
                  alt="Software Screenshot"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">Hiring Mine</h3>
                <p className="projects__row-content-desc">
                  Jobs website with MERN Stack Development 
                </p>
                <a
                  href=""
                  className="btn btn--med btn--theme dynamicBgClr"
                  target="_blank"
                >
                  Case Study
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsSection;
