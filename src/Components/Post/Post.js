import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { compose, withProps, lifecycle } from "recompose";
import { updateWordpress } from "../../Actions/updateWordpress";
import { Enhancer } from "../Enhancer/Enhancer";
import { PostLifeCycle } from "./PostLifeCycle";
import { PostWithProps } from "./PostWithProps";
import { PostBody } from "./PostBody";

import {
  LandingHeadLine,
  LandingNavBar,
  LandingFeatures,
  LandingBullets,
  LandingFooter,
  LandingForm,
  LandingPillars,
  LandingReviews,
  LandingSplitFeatures,
  LandingPitchIntro,
  LandingPlain
} from "../Advent";
const Post = ({
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
      split_features,
      post,
      pitch,
    modified_date,
                  edit_link,//link so i can easily edit the post
                  read_time,
                  word_count,
      title,//this is the title of the blog post
      content,//this is the content of the blog post
}) => (
  <div className="wrapper">
    <LandingNavBar navbar_tabs={navbar_tabs || []} logo={logo || []} />
    <div className="main app" id="main">
      <PostBody edit_link={edit_link} title={title} content={content} modified_date={modified_date} word_count={word_count} read_time={read_time}/>
    </div>
  </div>
);

const enhance = compose(
  Enhancer,
  PostLifeCycle,
  PostWithProps
);

export default enhance(Post);
