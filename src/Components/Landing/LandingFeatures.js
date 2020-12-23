import React, { Component, Fragment } from "react";

//the purpose of this component is to iterate through features array and then create the necessary parts
// need to do something for the icon logo
const LandingFeaturesBullets = ({ features }) => (
  <div className="row">
    {features.map((D, num) => (
      <div key={num} className="col-md-4 wow fadeInUp">
        <div className="f-single">
          <div className="f-icon pull-left" style={{ verticalAlign: "middle" }}>
            <img
              style={{ verticalAlign: "middle" }}
              src={D.featured_image_url || "https://advent.site44.com/assets/logos/logo.png"}
              width="30"
              height="50"
              alt="Advent"
            />
          </div>
          <div className="f-content">
            <h2 dangerouslySetInnerHTML={{ __html: D.title }} />
            <p dangerouslySetInnerHTML={{ __html: D.content }} />
          </div>
        </div>
      </div>
    ))}
  </div>
);

//purpose here is to create the features header
const LandingFeaturesHeader = ({ features_headline }) => (
  <Fragment>
    {features_headline.map((D, num) => (
      <div key={num} className="icon-features-intro">
        {/* <h1 className="wow fadeInUp">{D.title}</h1>
        <p className="wow fadeInUp" >{D.content}</p> */}
        <h1 className="wow fadeInUp" dangerouslySetInnerHTML={{ __html: D.title }} />
        <p className="wow fadeInUp" dangerouslySetInnerHTML={{ __html: D.content }} />
      </div>
    ))}
  </Fragment>
);

export const LandingFeaturesContainer = ({ children }) => (
  <div className="icon-features">
    <div className="container nopadding">{children}</div>
  </div>
);

export const LandingFeatures = ({ features, features_headline }) => (
  <LandingFeaturesContainer>
    <LandingFeaturesHeader features_headline={features_headline || []} />

    {_.chunk(features, 3).map((D, num) => (
      <LandingFeaturesBullets key={num} features={D || []} />
    ))}
  </LandingFeaturesContainer>
);
