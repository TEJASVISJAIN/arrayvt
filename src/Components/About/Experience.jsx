import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png"

const Experience = ({isTabActive}) => {
  return (
    <div className={`tabitem ${isTabActive === "experience" ? "active":""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>As Seen in ...</h2>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                consectetur.
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">Lookout for this Bay Area VC Fund</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">New York Times</h4>
                    <p className="fz-18 pra d-block">6th Sep, 2018</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">Array VC is new whale in town</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Silicon Times</h4>
                    <p className="fz-18 pra d-block">14th Aug, 2022</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">Venture Ecosystems new Oasis</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Newspaper times</h4>
                    <p className="fz-18 pra d-block">21st Aug, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
