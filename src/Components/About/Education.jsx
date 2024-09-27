import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png"

const Education = ({isTabActive}) => {
  return (
    <div className={`tabitem ${isTabActive === "education" ? "active":""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>Hear from us:</h2>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                consectetur. afa 
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">Check Out NY Bestseller :</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white"> Book Title</h4>
                    <p className="fz-18 pra d-block">- Shruti Gandhi</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">Our Podcast</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">   $3.5B Invested</h4>
                    <p className="fz-18 pra d-block">Roland Reynolds</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">Third title goes HERE!</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Newest by us</h4>
                    <p className="fz-18 pra d-block">Array VC's team</p>
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

export default Education;
