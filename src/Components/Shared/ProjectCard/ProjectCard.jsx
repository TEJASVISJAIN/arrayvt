import React from "react";
import { ArrowUpRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const ProjectCard = ({
  image,
  heading,
  subHeading,
  index,
  openLightbox,
  website,
}) => {
  return (
    <div
      className={`project__item ${index !== 2 && "cus__mb60"}`}
      data-aos="fade-up"
      data-aos-duration="1000"
      style={{
        width: "300px",  
        height: "400px",
      }}
    >
      <div
        onClick={() => openLightbox(index)}
        className="thumb mb-30 imgc"
        style={{
          width: "100%", 
          height: "75%", 
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          alt="img"
          style={{
            objectFit: "contain", 
            width: "100%",        
            height: "100%",      
          }}
        />
      </div>
      <div className="content d-flex align-items-center justify-content-between gap-2"
           style={{ height: "25%" }}>  {/* 25% of the card height for the content */}
        <Link to={"/portfolio"} className="left__cont">
          <span className="base mb-2 mb-xxl-3 d-block text-uppercase">
            {heading}
          </span>
          <h3>{subHeading}</h3>
        </Link>
        <div
          onClick={() => {
            if (website.length > 0)
              window.open(website, "_blank", "noopener,noreferrer");
          }}
          className="common__icon imgc"
        >
          <ArrowUpRight className="icon" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
