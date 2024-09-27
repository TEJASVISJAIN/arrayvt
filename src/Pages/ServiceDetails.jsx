import React from "react";
import { PlayFill, ArrowRight } from "react-bootstrap-icons";
import PageHeader from "../Components/Shared/PageHeader/PageHeader";
import Accordion from "../Components/Accordion/Accordion";

import serDv1 from "../assets/img/project/ser-dv1.png";
import serDv2 from "../assets/img/project/ser-dv2.png";
import detialcontact from "../assets/img/contact/ser-detialcontact.png";
import { ScrollRestoration } from "react-router-dom";

const accordionList = [
  {
    id: "cmnid4",
    heading: "What does Array bring to the table?",
    para: ` All the Lorem Ipsum generators on the Internet tend
    to repeat predefined chunks as necessary, making
    this the first true generator on the Internet. It
    uses a dictionary of over words, combined with a
    handful of model structures, to generate Lorem Ipsum
    which looks reasonable.`,
  },
  {
    id: "cmnid5",
    heading: "When should I pursure Array?",
    para: ` All the Lorem Ipsum generators on the Internet tend
    to repeat predefined chunks as necessary, making
    this the first true generator on the Internet. It
    uses a dictionary of over words, combined with a
    handful of model structures, to generate Lorem Ipsum
    which looks reasonable.`,
  },
  {
    id: "cmnid6",
    heading: "How to apply for Funding?",
    para: ` All the Lorem Ipsum generators on the Internet tend
    to repeat predefined chunks as necessary, making
    this the first true generator on the Internet. It
    uses a dictionary of over words, combined with a
    handful of model structures, to generate Lorem Ipsum
    which looks reasonable.`,
  },
];
const ServiceDetails = () => {

  return (
    <>
 
      <PageHeader heading={"Array in the News"} page={"News"} />
      <section className="service__details overhid pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="ser__left__details">
                <div className="thumb">
                  <img src={serDv1} alt="img" />
                </div>
                <div
                  className="text__box mb__cus60"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <h3 className="textt36 d-block">
                    Our latest Acquisitions
                  </h3>
                  <p className="fz-16 pra ttext__one">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni voluptatem sequi
                    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                    dolor sit amet, consectetur, adipisci velit, numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                  </p>
                  <p className="fz-16 pra">
                    Quis nostrum exercitationem ullam corporis suscipit
                    laboriosam, nisi ut aliquid ex ea commodi reprehenderit qui
                    in ea voluptate velit esse quam nihil molestiae consequatur,
                    vel illum qui dolorem fugiat quo voluptas nulla the Lorem
                    Ipsum generators on the Internet tend to repeat predefined
                    chunks
                  </p>
                </div>
                <div
                  className="text__box mb__cus60"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <h3 className="textt36 d-block">
                    Team Philosophy
                  </h3>
                  <p className="fz-16 pra">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a you
                    need to be sure there isn't anything embarrassing hidden in
                    the middle of text. All the generators on the Internet tend
                    to repeat predefined chunks as necessary, Making this the
                    first true generator on the Internet. It uses a dictionary
                    of over combined with a handful of structures, to generate
                    Lorem Ipsum which looks reasonable. The generated Lorem
                    Ipsum is therefore always free from injected humour, or
                    non-characteristic words etc.
                  </p>
                </div>
                <div className="paythumb position-relative">
                  <img src={serDv2} alt="img" />
                  <a
                    href="https://www.youtube.com/watch?v=zFuJgOiUEso&amp;ab_channel=SujithRajendran"
                    className="video__80 video-btn"
                  >
                    <i>
                      <PlayFill />
                    </i>
                  </a>
                </div>
                <div className="ser__components">
                  <h2 className="whites mb-5">Questions? You're Covered</h2>
                  <div className="accordion" id="accordionExample">
                    {accordionList.map(({ id, heading, para }) => (
                      <Accordion key={id} id={id} heading={heading} para={para} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service__right__wrap">
                <div className="service__rightbox mb-30">
                  <h3>Resources</h3>
                  <a href="#0" className="link__box mb-15">
                    Startup Mentorship
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <a href="#0" className="link__box mb-15">
                    Title of Book
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <a href="#0" className="link__box mb-15">
                    Podcast
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <a href="#0" className="link__box mb-15">
                    Art19 on Stitcher
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <a href="#0" className="link__box mb-15">
                    Meet Us
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  {/* <a href="#0" className="link__box">
                    Web Development
                    <i className="bi bi-chevron-right"></i>
                  </a> */}
                </div>
                <div className="service__rightbox">
                  <div className="thumb">
                    <img
                      src={detialcontact}
                      alt="img"
                    />
                    <a href="#0" className="cmn--btn">
                      <span>Contact Us</span>
                      <span>
                        <i>
                          <ArrowRight/>
                        </i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollRestoration/>
    </>
  );
};

export default ServiceDetails;
