import React, { Component, Fragment } from "react";

//this is that center image between the pillar
const LandingPillarsHeader = ({ pillars_headline }) => (
  <Fragment>
    {pillars_headline.map((D, num) => (
      <div className="pricing-intro">
        <h1 dangerouslySetInnerHTML={{ __html: D.title }} className="wow fadeInUp" data-wow-delay="0s" />
        <p className="wow fadeInUp" data-wow-delay="0.2s" dangerouslySetInnerHTML={{ __html: D.content }} />
      </div>
    ))}
  </Fragment>
);

//this is all the side pillar
const LandingPillarsPillar = ({ pillars }) => (
  <Fragment>
    {pillars.map((D, num) => (
      <div className="col-sm-3">
        <div className="table-left wow fadeInUp" data-wow-delay="0.4s">
          <div className="icon">
            <img src={D.featured_image_url || "https://advent.site44.com/assets/logos/pricing1.png"} alt="Icon" />
          </div>
          <div className="pricing-details">
            <h2 dangerouslySetInnerHTML={{ __html: D.title }} />
            <span dangerouslySetInnerHTML={{ __html: D.content }} />

            {/* <span>Free</span>
            <ul>
              <li>First basic feature </li>
              <li>Second feature goes here</li>
              <li>Any other third feature</li>
              <li>And the last one goes here</li>
            </ul>
            <button className="btn btn-primary btn-action btn-fill">Get Plan</button> */}
          </div>
        </div>
      </div>
    ))}
  </Fragment>
);

export const LandingPillarsContainer = ({ children }) => (
  <div id="pricing" className="pricing-section text-center">
    <div className="container">
      <div className="col-md-12 col-sm-12 nopadding">{children}</div>
    </div>
  </div>
);

export const LandingPillars = ({ pillars, pillars_headline }) => (
  // <LandingPillarsContainer />
  <LandingPillarsContainer>
    <LandingPillarsHeader pillars_headline={pillars_headline || []} />

    <LandingPillarsPillar pillars={pillars || []} />
  </LandingPillarsContainer>
);
