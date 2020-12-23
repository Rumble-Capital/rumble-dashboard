import React, { Component, Fragment } from "react";

//this is that center image between the footer
const LandingHeadlineHeader = ({ headline }) => (
  <Fragment>
    {headline.map((D, num) => (
      <Fragment>
        <div key={num} className="hero-content text-center">
          <div className="app-img">
            <img
              className="img-circle wow fadeInUp"
              src={D.featured_image_url || "https://advent.site44.com/assets/logos/app-logo.png"}
              width="80"
              alt="App Logo"
            />
          </div>
          <div className="app-info wow fadeInUp">
            <h1 className="wow fadeInUp" dangerouslySetInnerHTML={{ __html: D.title }} />
            <h4 className="wow fadeInUp" dangerouslySetInnerHTML={{ __html: D.content }} />
          </div>
          {/* <div className="download-buttons wow fadeInUp">
            <a href="#">
              <img src="https://advent.site44.com/assets/logos/appstore.png" width="150" alt="Download from App Store" />
            </a>
            <a href="#">
              <img src="https://advent.site44.com/assets/logos/playstore.png" width="150" alt="Download from Play Store" />
            </a>
          </div> */}
        </div>
      </Fragment>
    ))}
  </Fragment>
);

export const LandingHeadlineContainer = ({ children }) => (
  <div className="hero-section">
    <div className="container nopadding">
      <div className="col-md-12">{children}</div>
      <div className="col-md-12 wow fadeIn">
        {/* <img className="img-responsive" src="https://advent.site44.com/assets/images/app-hero.png" alt="Hero Image" /> */}
      </div>
    </div>
  </div>
);

export const LandingHeadLine = ({ headline }) => (
  <LandingHeadlineContainer>
    <LandingHeadlineHeader headline={headline} />
  </LandingHeadlineContainer>
);
