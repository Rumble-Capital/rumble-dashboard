import React, { Fragment } from "react";

import ExperienceSections from "../Organisms/ExperienceSections";

const About = () => {
  return (
    <Fragment>
      <div id="about" class="about-section section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="section-title">
                <h1>Chris Cruz</h1>
              </div>
            </div>
            <div class="col-md-8">
              <div class="about-info">
                <p>
                  Experienced Analytics Consultant/Advisor with a demonstrated history of working with startups and within the financial
                  services industry. Skilled in end-to-end automation, empowering management, and advancing strategic insights.
                </p>
                <div class="signature">
                  <h1>Chris Cruz</h1>
                </div>
              </div>
              <address>
                <p>
                  <span>Nick Name:</span> Chris Cruz
                </p>
                <p>
                  <span>Email:</span> cruzc09@gmail.com
                </p>
                <p>
                  <span>Phone:</span> (978)-786-5132
                </p>
                {/* <p>
                  <span>Date of Birth:</span> Jan 13, 1982
                </p> */}
                <p>
                  <span>Address:</span> Philadelphia, PA 19103
                </p>
              </address>
              {/* <ul class="achievement">
                <li class="achievement-info">
                  <span class="counter">35</span>
                  <h4>Projects completed</h4>
                </li>
                <li class="achievement-info">
                  <span class="counter counter1">19</span>
                  <h4>Winning Awards</h4>
                </li>
                <li class="achievement-info">
                  <span class="counter counter2">229</span>
                  <h4>Happy Clients</h4>
                </li>
                <li class="achievement-info">
                  <span class="counter counter3">19</span>
                  <h4>Running Projects</h4>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
