import React from "react";
import { ArrowUpRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Service = ({ image, heading, subHeading, para, id }) => {
  return (
    <div
      className="service__unique__item pb-40 pt-40"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="left__service">
        {/* Image section */}
        <div className="service__image">
          <img src={image} alt={`${heading}'s profile`} />
        </div>
        
        <div className="serial__adjust" style={{color: "var(--base)"}}>
          <span> {id} </span>
          <div className="cont">
            <h5 style={{color: "var(--base)"}}>{subHeading}</h5>
            <h2>
              <Link to={"/service-details"} style={{color: "var(--base)"}}> {heading} </Link>
            </h2>
          </div>
        </div>
        <p className="pra" >{para}</p>
      </div>
      <Link to={"/service-details"} className="common__icon">
        <ArrowUpRight className="i" />
      </Link>
    </div>
  );
};

export default Service;
