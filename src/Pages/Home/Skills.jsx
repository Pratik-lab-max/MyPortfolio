import React from "react";

const Skills = ({ lightMode }) => {
  return (
    <section
      className={`p-4 ${lightMode ? "bg-light" : "bg-dark-theme"}`}
      id="skills"
    >
      <div className="container py-3">
        <div className="row g-5 align-items-center">
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center gap-5">
              <div className="custom-badge">
                <div className="custom-logo">
                  <span>HTML</span>
                  <span className="custom-number">5</span>
                </div>
                <div className="custom-text">
                  Lorem ipsum dolor sit amet, consectetur ad
                </div>
              </div>

              <div className="custom-badge">
                <div className="custom-logo">
                  <span>HTML</span>
                  <span className="custom-number">5</span>
                </div>
                <div className="custom-text">
                  Lorem ipsum dolor sit amet, consectetur ad
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <div
              className="d-flex align-items-center justify-content-center rounded-circle border-thick-theme"
              style={{ height: "200px", width: "200px" }}
            >
              <span className="btn btn-lg btn-primary-theme pointer-none text-dark text-uppercase fw-bold rounded-5 glow-lg-theme">
                Skills
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center gap-5">
              <div className="custom-badge">
                <div className="custom-logo">
                  <span>HTML</span>
                  <span className="custom-number">5</span>
                </div>
                <div className="custom-text">
                  Lorem ipsum dolor sit amet, consectetur ad
                </div>
              </div>

              <div className="custom-badge">
                <div className="custom-logo">
                  <span>HTML</span>
                  <span className="custom-number">5</span>
                </div>
                <div className="custom-text">
                  Lorem ipsum dolor sit amet, consectetur ad
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
