//this renders the blog element with all the posts

import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { compose, withProps, lifecycle } from "recompose";
import { updateWordpress } from "../../Actions/updateWordpress";
import { Enhancer } from "../Enhancer/Enhancer";
import { BlogLifeCycle } from "./BlogLifeCycle";
import { BlogWithProps } from "./BlogWithProps";

import {
  LandingHeadLine,
  LandingNavBar,
  LandingFeatures,
  LandingBullets,
  LandingFooter,
  LandingForm,
  LandingPillars,
  LandingReviews,
  LandingSplitFeatures
} from "../Advent";
const Blog = ({
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
  headline_buttons,
  split_features
}) => (
  <div className="wrapper">
    <LandingNavBar navbar_tabs={navbar_tabs || []} logo={logo || []} />
    <div className="main app" id="main">
      <LandingHeadLine headline_buttons={headline_buttons || []} headline={headline || []} headline_images={headline_images || []} />
      <LandingSplitFeatures split_features={split_features || []} />
    </div>
  </div>
);

const enhance = compose(
  Enhancer,
  BlogLifeCycle,
  BlogWithProps
);

export default enhance(Blog);
