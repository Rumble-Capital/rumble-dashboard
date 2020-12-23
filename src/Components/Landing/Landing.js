import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { compose, withProps, lifecycle } from "recompose";
import { updateWordpress } from "../../Actions/updateWordpress";
import { Enhancer } from "../Enhancer/Enhancer";
import { LandingWithProps } from "./LandingWithProps";

// import { LandingNavBar } from "./LandingNavBar";
// import { LandingHeadLine } from "./LandingHeadLine";
// import { LandingFeatures } from "./LandingFeatures";
// import { LandingBullets } from "./LandingBullets";
// import { LandingFooter } from "./LandingFooter";
// import { LandingForm } from "./LandingForm";
// import { LandingPillars } from "./LandingPillars";
// import { LandingReviews } from "./LandingReviews";
import {
  LandingHeadLine,
  LandingNavBar,
  LandingFeatures,
  LandingBullets,
  LandingFooter,
  LandingForm,
  LandingPillars,
  LandingReviews
} from "../Advent";
const Landing = ({
  props,
  navbar_tabs,
  headline,
  features,
  features_headline,
  bullets,
  bullets_headline,
  footer,
  footer_headline,
  createWordpressUser,
  logo,
  pillars_headline,
  pillars,
  reviews,
  reviews_headline,
  headline_images,
  headline_buttons
}) => (
  <div className="wrapper">
    <LandingNavBar navbar_tabs={navbar_tabs || []} logo={logo || []} />
    <div className="main app" id="main">
      <LandingHeadLine headline_buttons={headline_buttons || []} headline={headline || []} headline_images={headline_images || []} />
      <LandingFeatures features={features || []} features_headline={features_headline || []} />
      {/* <LandingBullets bullets={bullets || []} bullets_headline={bullets_headline || []} />
      <LandingPillars pillars={pillars || []} pillars_headline={pillars_headline || []} />
      <LandingReviews reviews={reviews || []} reviews_headline={reviews_headline || []} />
      <LandingForm createWordpressUser={createWordpressUser} />
      <LandingFooter footer={footer || []} footer_headline={footer_headline || []} /> */}
    </div>
  </div>
);

const enhance = compose(
  Enhancer
  // LandingWithProps
);

export default enhance(Landing);
