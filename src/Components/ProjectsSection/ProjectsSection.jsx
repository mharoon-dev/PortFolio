import { Link } from "react-router-dom";
import "./ProjectsSection.css";
import { projects } from "../../data.jsx";
import SingleProject from "../SingleProject/SingleProject.jsx";

function ProjectsSection() {
  return (
    <>
      <section id="projects" className="projects sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-bg">
            <span className="heading-sec__main">Projects</span>
            <span className="heading-sec__sub">
              Here are some of the projects I have worked on
              <br />
              Check them out!
            </span>
          </h2>

          <div className="projects__content">
            {projects.map((project) => {
              return <SingleProject key={project.name} project={project} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsSection;
