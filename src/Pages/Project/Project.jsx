import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import "./Project.css";
import {projects} from "../../data.jsx"
const Project = () => {
  const  projectName = useParams().projectName
  console.log(projectName)
  const project = projects.find((project) => project.name === projectName)
  console.log(project)
  return (
    <>
    <NavBar />
      <section className="project-cs-hero">
        <div className="project-cs-hero__content">
          <h1 className="heading-primary">{project.name}</h1>
          <div className="project-cs-hero__info">
            <p className="text-primary">
              {project.description}
            </p>
          </div>
          <div className="project-cs-hero__cta">
            <a className="btn btn--bg" href={project.liveUrl} target="_blank">
              Live Link
            </a>
          </div>
        </div>
      </section>
      <section className="project-details">
        <div className="main-container">
          <div className="project-details__content">
            <div className="project-details__showcase-img-cont">
              <img
                src={"." + project.image}
                alt="Project Image"
                className="project-details__showcase-img"
              />
            </div>
            <div className="project-details__content-main">
              <div className="project-details__desc">
                <h3 className="project-details__content-title">
                  Project Overview
                </h3>
                <p className="project-details__desc-para">
                  
                </p>
                <p className="project-details__desc-para">
                  {project.aboutProject}
                </p>
              </div>
              <div className="project-details__tools-used">
                <h3 className="project-details__content-title">Tools Used</h3>
                <div className="skills">
                  {
                    project.tools.map((tool) => {
                      return <div className="skills__skill">{tool}</div>
                    })
                  }
                </div>
              </div>
              <div className="project-details__links">
                <h3 className="project-details__content-title">See Live</h3>
                <a
                  className="btn btn--med btn--theme project-details__links-btn"
                  target="_blank"
                  href={project.liveUrl}
                >
                  Live Link
                </a>
                <a
                  className="btn btn--med btn--theme-inv project-details__links-btn"
                  target="_blank"
                  href={project.githubUrl}
                >
                  Code Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Project;
