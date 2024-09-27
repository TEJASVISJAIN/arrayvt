import React from "react";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import Form from "../../Components/Shared/Form/Form";
import { ScrollRestoration } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <PageHeader
        heading={"Start Scaling your Startup "}
        page={"Get in Touch!"}
      />
      <section className="contact__section">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-lg-8"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="contact__box">
                <Form isColTwo={false} />
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="contact__rightside cmn__bg">
                <h4 className="mb-30">Contact Us</h4>
                <div className="contact__item mb-20">
                  <span className="he1">Email</span>
                  <a href="#0">funding@array.vc</a>
                </div>
                <div className="contact__item mb-20">
                  <span className="he1">Phone</span>
                  <a href="#0">+(1) 510 7XXXX34</a>
                </div>
                <div className="contact__item">
                  <span className="he1">Address</span>
                  <span className="address">950 Natoma St, SF 94704</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollRestoration />
    </>
  );
};

export default Contact;
