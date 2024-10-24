import React from "react";

const About = ({ lightMode }) => {
  return (
    <section
      className={`p-4 ${lightMode ? "bg-light" : "bg-dark-theme"}`}
      id="about_me"
    >
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="container d-flex align-items-center justify-content-center">
            <div className="img-container-small-16-9 rounded-circle border-thick-theme">
              <img
                className="img-cover"
                src="https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className={`d-flex flex-column ${lightMode ? "" : "text-white"}`}
          >
            <p className="fs-lg fw-bold">
              About&nbsp;
              <span className="text-primary-theme">Me</span>
            </p>
            <p className="fs-lg fw-bold">Frontend Developer</p>
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <div>
              <span className="btn btn-primary-theme glow-theme rounded-3 fw-bold text-dark">
                See more
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
