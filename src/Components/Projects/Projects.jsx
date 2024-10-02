import React, { useEffect, useState } from "react";

import Title from "../Shared/Title/Title";
import Lightbox from "../Shared/LightBox/LightBox";
import ProjectCard from "../Shared/ProjectCard/ProjectCard";
import { imagesList, projectList } from "../../Utlits/projectList";
import { Link } from "react-router-dom";

const Projects = () => {
  const [currentId, setCurrentId] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentId(index);
    setLightboxOpen(true);
  };
  const [visibleCount, setVisibleCount] = useState(6);
  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 3);
  };

  return (
    <section className="project__section pt-120 pb-120" id="projects">
      <div className="container">
        <Title
          mainTitle={"Look at my portfolio and give me your feedback"}
          sortTitle={"Complete Project"}
        />

<div className="project__wrapone">
      {projectList.slice(0, visibleCount).map(({ heading, id, image, subHeading, website }, index) => (
        <ProjectCard
          key={id}
          image={image}
          heading={heading}
          subHeading={subHeading}
          openLightbox={openLightbox}
          index={index}
          website={website}
        />
      ))}

     
    </div>
    <div className="show-more-container d-flex justify-content-center">
  {visibleCount < projectList.length && (
    <div className="show-more">
      <button className="d-flex fw-500 cmn--btn align-items-center gap-2" onClick={handleShowMore}>
        <span className="get__text">Show More</span>
      </button>
    </div>
  )}
</div>


        <div className="custom__hover">
          <Link to={"/portfolio"}
            className="hover__circle mauto"
            data-aos="zoom-out-down"
            data-aos-duration="2000"
          >
            <span className="box">
              <i className="bi bi-arrow-up-right"></i>
              <span className="textmore"> View Full Portfolio </span>
            </span>
          </Link>
        </div>
      </div>
      {lightboxOpen && (
        <Lightbox
          images={imagesList}
          setLightboxOpen={setLightboxOpen}
          currentId={currentId}
        />
      )}
    </section>
  );
};

export default Projects;
