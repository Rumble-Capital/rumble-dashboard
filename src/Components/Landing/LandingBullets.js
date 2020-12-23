import React, { Component, Fragment } from "react";

//this is that center image between the bullets
const LandingBulletsHeader = ({ bullets_headline }) => (
  <Fragment>
    {bullets_headline.map((D, num) => (
      <div key={num} className="col-md-4 wow fadeInUp">
        <img className="img-responsive" src={D.featured_image_url || "https://advent.site44.com/assets/images/iphone.png"} alt="App" />
      </div>
    ))}
  </Fragment>
);

//this is all the side bullets
const LandingBulletsBullets = ({ bullets }) => (
  <div className="col-md-4 features-left">
    {bullets.map((D, num) => (
      <div key={num} className="col-md-12 wow fadeInUp">
        <div className="icon">
          <img
            style={{ verticalAlign: "middle" }}
            src={D.featured_image_url || "https://advent.site44.com/assets/logos/logo.png"}
            // width="30"
            height="50"
            alt="Advent"
          />
          {/* <i className="ion-xbox" /> */}
        </div>
        <div className="feature-single">
          <h1 dangerouslySetInnerHTML={{ __html: D.title }} />
          <p dangerouslySetInnerHTML={{ __html: D.content }} />
          {/* <h1>{D.title}</h1>
          <p>{D.content}</p> */}
        </div>
      </div>
    ))}
  </div>
);

export const LandingBulletsContainer = ({ children }) => (
  <div className="app-features text-center">
    <div className="container">{children}</div>
  </div>
);

export function LandingBullets({ bullets, bullets_headline }) {
  var half_length = Math.ceil(bullets.length / 2);

  var bullets_left = bullets.slice(0, half_length);
  var bullets_right = bullets.slice(half_length, bullets.length);

  return (
    <LandingBulletsContainer>
      <LandingBulletsBullets bullets={bullets_left || []} />
      <LandingBulletsHeader bullets_headline={bullets_headline || []} />
      <LandingBulletsBullets bullets={bullets_right || []} />
    </LandingBulletsContainer>
  );
}
// export const LandingBullets = ({ bullets, bullets_headline }) => (
//   <LandingBulletsContainer>
//     <LandingBulletsBullets bullets={bullets || []} />
//     <LandingBulletsHeader bullets_headline={bullets_headline || []} />
//     <LandingBulletsBullets bullets={bullets || []} />
//   </LandingBulletsContainer>
// );
