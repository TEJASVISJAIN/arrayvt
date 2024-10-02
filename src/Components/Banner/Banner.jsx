import React, { useEffect, useState } from "react";
import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  PlayFill,
  Twitter,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import bannerMan from "../../assets/img/banner/banner-man.png";

const socalIcon = [
  { id: 1, icon: <Facebook /> },
  { id: 2, icon: <Twitter /> },
  { id: 3, icon: <Linkedin /> },
  { id: 4, icon: <Globe /> },
  { id: 5, icon: <Instagram /> },
];

const wordArray = ["Future", "B2B SaaS", "Cybersecurity", "Ed Tech", "AI"];

const Banner = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [position, setPosition] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [fadeEffect, setFadeEffect] = useState("fade-in");

  // Handle scrolling to make the bannerMan image scroll slower
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const bannerManImage = document.querySelector(".banner__thumb img");

      bannerManImage.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!position) {
      setPosition(true);
    }
  }, [position]);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  // Word carousel logic with fade effect
 
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeEffect("fade-out"); // Trigger fade-out

      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordArray.length);
        setFadeEffect("fade-in"); // Trigger fade-in
      }, 500); // Wait for the fade-out animation to finish
    }, 4000); // Change word every 4 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="home">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="banner__content">
              <Link to={""} className="bn__currently">
                <span className="d-block">Vision needs</span>
                <span className="d-flex gap-4 align-items-center">
                  Liquidity
                  <i className="bi bi-arrow-up-right"></i>
                </span>
              </Link>
              <h1>
                <span className="hone"> Empowering</span>
                <span
                  className={`d-block designers word-carousel ${fadeEffect}`}
                  data-text={wordArray[currentWordIndex]}
                  style={{ minWidth: '200px', display: 'inline-block' }}
                >
                  {wordArray[currentWordIndex]}
                </span>
                <span className="hone">Founders</span>
              </h1>
              <div className="video__area">
                <div onClick={openLightbox} className="video__80 video-btn">
                  <i>
                    <PlayFill />
                  </i>
                </div>
                <span className="proces">Latest News</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="banner__thumb">
              <img src={bannerMan} alt="man-img" />
            </div>
          </div>
        </div>
      </div>
      {/* Other parts of the Banner component remain unchanged */}
    </section>
  );
};

export default Banner;
