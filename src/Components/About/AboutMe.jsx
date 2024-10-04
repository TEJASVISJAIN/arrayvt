import React, { useEffect } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Instagram,
} from "react-bootstrap-icons";

import { Link } from "react-router-dom";
import personalInfoThumb from "../../assets/img/about/personal-infothumb.png";

import AOS from "aos";
import "aos/dist/aos.css";

const contactInfo = [
  // {
  //   id: 1,
  //   system: "Founders",
  //   contact: "ronit_chawla21@berkeley.edu",
  // },
  // {
  //   id: 2,
  //   system: "Phone",
  //   contact: "+1 (510)7178577",
  // },
  {
    id: 3,
    system: "Every Vision",
    contact: "needs Liquidity",
  },
  {
    id: 4,
    system: "Follow",
    socalContact: [
      <Facebook />,
      <Twitter />,
      <Linkedin />,
      <Globe />,
      <Instagram />,
    ],
  },
];
const AboutMe = ({ isTabActive }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={`tabitem ${isTabActive === "about" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center" >
          <div className="col-lg-5">
            <div
              className="about__onethumb"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <img src={personalInfoThumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2
                className="h2-head"
                data-aos="fade-up"
                data-aos-duration="500"
                >
                We bring the 2nd wave of customers
              </h2>
              <p
                className="p-descrip"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Array Ventures is focused on solving impactful problems using revolutionary technology. Often that means category-leading startups that take advantage of data, analytics, workflows, and new platforms to change the way an industry works.

We invest in smart people with a bold mission who take big risks in large or new markets. We want entrepreneurs to tell us what the world is going to look like in 2, 5, 10 years, and why they are going to be to be a winner in that world.
              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {contactInfo.map(({ id, contact, socalContact, system }) => {
                    return (
                      <div
                        key={id}
                        className="col-xxl-6 col-xl-6 col-lg-12 col-md-6"
                        data-aos="zoom-in"
                      >
                        <div className="abox">
                          <div className="about__contbox__item">
                            <span className=" fz-18 mb-20 d-block" style={{color: "var(--white)"}}>
                              {system}
                            </span>
                            <Link to={""}>{contact}</Link>
                            {socalContact && (
                              <ul className="d-flex align-items-center gap-2 gap-xl-4">
                                {socalContact.map((info, index) => (
                                  <li key={index}>
                                    <Link to={""}>{info} </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
