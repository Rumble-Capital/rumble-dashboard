import React, { Component, Fragment } from "react";

function LandingFormForm({ createWordpressUser }) {
  //create the reference
  const ref = React.createRef();

  //this function will submit it to firebase and utilize the reference
  function onSubmit(e) {
    const email = ref.current.value;
    createWordpressUser({ name: "test", username: email.split("@")[0], email: email, password: "password" });
    //updateConfiguration({ ...configuration, graph_interval_input: ref.current.value });
    e.preventDefault();
    ref.current.value = "";
  }

  return (
    <form onSubmit={onSubmit} key={"form"} id="signup" className="formee">
      <input ref={ref} name="email" id="email" type="text" />
      <input className="right inputnew" type="submit" title="Send" value="Subscribe" />
    </form>
  );
}
export const LandingFormContainer = ({ children }) => (
  <div className="cta-sub no-color">
    <div className="container">
      <div className="cta-inner">
        <h1 className="wow fadeInUp" data-wow-delay="0s">
          Love offers and discounts? Subscribe and save.
        </h1>
        <p className="wow fadeInUp" data-wow-delay="0.2s">
          Don't worry, we won't need your credit card details. Just enter your <br className="hidden-xs" /> email address and we'll take
          care of the rest.
        </p>
        <div className="form wow fadeInUp" data-wow-delay="0.3s">
          {children}
          <div id="response" />
        </div>
      </div>
    </div>
  </div>
);

export const LandingForm = ({ createWordpressUser }) => (
  <LandingFormContainer>
    <LandingFormForm createWordpressUser={createWordpressUser} />
  </LandingFormContainer>
);
