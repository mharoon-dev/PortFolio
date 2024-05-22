import React from "react";
import { Link } from "react-router-dom";

const SingleProject = ({ project }) => {
  const projectName = project.name;
  console.log(projectName);

  return (
    <>
      <div className="projects__row">
        <div className="projects__row-img-cont">
          <img
            src={project.image}
            alt="Software Screenshot"
            className="projects__row-img"
            loading="lazy"
          />
        </div>
        <div className="projects__row-content">
          <h3 className="projects__row-content-title">{project.name}</h3>
          <p className="projects__row-content-desc">{project.description}</p>
          <Link
            to={`/project/${projectName}`}
            className="btn btn--med btn--theme dynamicBgClr"
          >
            Case Study
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleProject;
