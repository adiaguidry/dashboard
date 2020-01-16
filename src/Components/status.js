import React from "react";
import NivoDoughnut from "./nivoDoughnut";
import NivoPie from "./nivoPie";
//put days of the week and cals for the week into state and map over it

const Status = () => {
  return (
    <React.Fragment>
      <h2>Last Weeks Status</h2>
      <p>Here's a look at how last week went for you.</p>

      <div className="row">
        <div className="col-md-4 p-3">
          <div className=" text-center card" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">Target Calories</h5>
              <h6 className="card-subtitle mb-2 text-muted">2000</h6>
              <p className="card-text">
                <div className="row">
                  <div className="col-md-4">
                    <p>Sun</p>
                  </div>
                  <div className="col-md-8">
                    <div class="progress">
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "100%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        2067 cals
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <p>Mon</p>
                  </div>
                  <div className="col-md-8">
                    <div class="progress">
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "100%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        2067 cals
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <p>Tues</p>
                  </div>
                  <div className="col-md-8">
                    <div class="progress">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "93%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        1867 cals
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <p>Wednes</p>
                  </div>
                  <div className="col-md-8">
                    <div class="progress">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "83%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        1663 cals
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <p>Thurs</p>
                  </div>
                  <div className="col-md-8">
                    <div class="progress">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "93%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        1867 cals
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <p>Fri</p>
                  </div>
                  <div className="col-md-8">
                    <div class="progress">
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "100%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        2067 cals
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <p>Sat</p>
                  </div>
                  <div className="col-md-8">
                    <div class="progress">
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "100%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        2067 cals
                      </div>
                    </div>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-3">
          <div className=" card" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">Intermittent fasting</h5>
              <h6 className="card-subtitle mb-2 text-muted">Goal 14 hours</h6>
              <p className="card-text text-center">
                <div class="card">
                  <NivoDoughnut />
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-3">
          <div className=" card" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">Ketosis</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                You were in ketosis on these days.
              </h6>
              <p className="card-text text-center">
                <i class="fa fa-calendar-check-o fa-2x"></i>
                Wednesday
              </p>
              <NivoPie />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Status;
