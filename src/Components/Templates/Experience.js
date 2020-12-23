import React, { Fragment } from "react";

import ExperienceSections from "../Organisms/ExperienceSections";

const Experience = () => {
  return (
    <Fragment>
      <div id="exprience" class="exprience-section section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="section-title">
                <h1>My Exprience</h1>
              </div>
            </div>
            <div class="col-md-8">
              <div class="text-info">
                <h4>8 Years Exprience</h4>
                <p>
                  Experienced Analytics Consultant/Advisor with a demonstrated history of working with startups and within the financial
                  services industry. Skilled in end-to-end automation, empowering management, and advancing strategic insights.
                </p>
              </div>
              <ExperienceSections />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Experience;
