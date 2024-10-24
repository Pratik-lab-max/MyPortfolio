import React from "react";

const MyWork = ({ lightMode }) => {
  return (
    <section className="p-4" id="work">
      <div className="container">
        <div className="row align-items-center pb-5 gx-5 gy-4">
          <div className="col-12">
            <div className="d-flex justify-content-center mt-4 mb-2">
              <span className="text-uppercase text-primary-theme fw-bold fs-xl glow-lg-theme shadow-none">
                My Work
              </span>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className={`card custom-card-shadow ${
                lightMode ? "bg-light" : "bg-dark-theme"
              }`}
            >
              <div className="card-body text-primary-theme">
                <p className="fs-lg fw-bold">Lorem Ipsum</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className={`card custom-card-shadow ${
                lightMode ? "bg-light" : "bg-dark-theme"
              }`}
            >
              <div className="card-body text-primary-theme">
                <p className="fs-lg fw-bold">Lorem Ipsum</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className={`card custom-card-shadow ${
                lightMode ? "bg-light" : "bg-dark-theme"
              }`}
            >
              <div className="card-body text-primary-theme">
                <p className="fs-lg fw-bold">Lorem Ipsum</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className={`card custom-card-shadow ${
                lightMode ? "bg-light" : "bg-dark-theme"
              }`}
            >
              <div className="card-body text-primary-theme">
                <p className="fs-lg fw-bold">Lorem Ipsum</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
