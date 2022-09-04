import "./main-screen.scss";
import image from "./classes-image.jpg";
// import video from "./main-video.mp4";

import { motion } from "framer-motion";

const MainScreen = () => {
  return (
    <>
      <video autoPlay={true} muted loop id="main-video">
        <source src='/video/main-video.mp4' />
      </video>
      <div className="intro-section" style={{ backgroundColor: "#121212" }}>
        <div className="container" style={{ position: "relative" }}>
          <div className="row align-items-center d-flex">
            <div
              className="col-lg-8 mx-auto text-center aos-init aos-animate"
              data-aos="fade-up"
            >
              <h1 style={{ textAlign: "center" }}>
                <span>Welcome to</span> MOV.space
              </h1>
              <div className="scroll"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container main-info">
        <div className="row mb-5" style={{ paddingTop: "5rem" }}>
          <div className="col-lg-3">
            <div className="counter d-flex align-items-start mb-5">
              <div className="icon-wrap">
                <span className="flaticon-muscle text-primary"></span>
              </div>
              <div className="counter-text">
                <strong>2,260</strong>
                <span>Members</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="counter d-flex align-items-start">
              <div className="icon-wrap">
                <span className="flaticon-stationary-bike text-primary"></span>
              </div>
              <div className="counter-text">
                <strong>210</strong>
                <span>Daily Visitors </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="counter d-flex align-items-start mb-5">
              <div className="icon-wrap">
                <span className="flaticon-banana text-primary"></span>
              </div>
              <div className="counter-text">
                <strong>887</strong>
                <span>Health Program</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="counter d-flex align-items-start">
              <div className="icon-wrap">
                <span className="flaticon-heart text-primary"></span>
              </div>
              <div className="counter-text">
                <strong>1,920</strong>
                <span>Heart Beat</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 mr-auto mb-5 align-self-center">
            <div className="mb-5">
              <h2 className="section-title">Step Up Your Fitness</h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                possimus distinctio ex. Natus totam voluptatibus animi
                aspernatur ducimus quas obcaecati mollitia quibusdam temporibus
                culpa dolore molestias blanditiis consequuntur sunt nisi.
              </p>
              <p>
                <a
                  href="#contact-section"
                  className="btn btn-primary smoothscroll py-3 px-4"
                >
                  Get In Touch
                </a>
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="image-absolute-box">
              <img
                src={image}
                alt="step up your fitness"
                className="img-fluid img-shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainScreen;
