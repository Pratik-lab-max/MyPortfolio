import React from "react";

const Education = () => {
  return (
    <section className="p-4" id="education">
      <div className="container">
        <div className="row align-items-center pb-5 gx-5">
          <div className="col-12">
            <div className="d-flex justify-content-center mt-4 mb-5">
              <span className="border border-thick-primary-theme rounded-4 px-5 py-1 text-uppercase text-primary-theme fw-bold fs-xl glow-lg-theme">
                Education
              </span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="container">
              <div className="d-flex flex-column gap-4">
                <p className="text-primary-theme fs-lg fw-bold">Lorem Ipsum</p>
                <p className="text-primary-theme mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
                <div>
                  <span className="btn btn-lg btn-primary-theme glow-theme rounded-4 fw-bold text-dark px-4">
                    Read more
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="container">
              <div className="d-flex flex-column gap-4">
                <p className="text-primary-theme fs-lg fw-bold">Lorem Ipsum</p>
                <p className="text-primary-theme mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
                <div>
                  <span className="btn btn-lg btn-primary-theme glow-theme rounded-4 fw-bold text-dark px-4">
                    Read more
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
