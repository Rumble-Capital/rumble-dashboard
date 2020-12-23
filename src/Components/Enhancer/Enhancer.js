//this is the setting page that determines what buttons are created
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { compose, withProps, lifecycle } from "recompose";
import { mapStateToProps } from "./EnhancerMapStateToProps";
import { mapDispatchToProps } from "./EnhancerMapDispatchToProps";
import { EnhancerFirebaseConnect } from "./EnhancerFirebaseConnect";
import { EnhancerLifeCycle } from "./EnhancerLifeCycle";
import { EnhancerWithProps } from "./EnhancerWithProps";

export const Enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  EnhancerFirebaseConnect,
  withProps(props => {
    return {
      props: props
    };
  }),
  EnhancerLifeCycle,
  EnhancerWithProps
);
