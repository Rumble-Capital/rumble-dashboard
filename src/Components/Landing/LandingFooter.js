import React, { Component, Fragment } from "react";

//this is that center image between the footer
const LandingFooterHeader = ({ footer_headline }) => (
  <Fragment>
    {footer_headline.map((D, num) => (
      <div className="col-md-6" key={num}>
        <img
          className="img-circle"
          src={D.featured_image_url || "https://advent.site44.com/assets/logos/logo.png"}
          width="80"
          height="30"
          alt="Image"
        />
        {/* <p>{D.title}</p> */}
        <p dangerouslySetInnerHTML={{ __html: D.title }} />
        <div className="footer-text">
          <p dangerouslySetInnerHTML={{ __html: D.content }} />
        </div>
      </div>
    ))}
  </Fragment>
);

//this is all the side footer
const LandingFooterFooter = ({ footer }) => (
  <Fragment>
    {footer.map((D, num) => (
      <div className="col-md-6" key={num}>
        <div id="contact" className="contact text-center">
          <i className="ion-ios-chatboxes-outline" />
          {/* <h1>{D.title}</h1> */}
          {/* <p>{D.content}</p> */}
          <h1 dangerouslySetInnerHTML={{ __html: D.title }} />

          <p dangerouslySetInnerHTML={{ __html: D.content }} />

          {/* <a href="mailto:support@gmail.com">support@gmail.com</a> */}
        </div>
      </div>
    ))}
  </Fragment>
);

export const LandingFooterContainer = ({ children }) => (
  <div className="footer">
    <div className="container">{children}</div>
  </div>
);

export const LandingFooter = ({ footer, footer_headline }) => (
  <LandingFooterContainer>
    <LandingFooterHeader footer_headline={footer_headline || []} />

    <LandingFooterFooter footer={footer || []} />
  </LandingFooterContainer>
);
