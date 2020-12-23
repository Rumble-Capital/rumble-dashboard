import React, { Component, Fragment } from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

const LandingImageCircle = ({ image_url, alt }) => (
  <img
    style={{ height: "88px", width: "88px", borderRadius: "50%", display: "block", maxWidth: "100%" }}
    className="sp-image"
    src={image_url || ""}
    alt={alt || "Image"}
  />
);

const LandingTeamTeam = ({ team }) => (
  <div className="col-md-12">
    {team.map((D, num) => (
      <div
        key={num}
        className="col-md-4 wow fadeInDown"
        data-wow-delay="0.2s"
        style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInDown" }}
      >
        <div className="pitch-iconX" style={{ textAlign: "center", margin: "auto" }}>
          <LandingImageCircle className="sp-imageX" image_url={D.image_url || ""} alt={D.alt || "Image"} />
        </div>
        <div className="pitch-content">
          <h1 dangerouslySetInnerHTML={{ __html: D.title || "RealTime" }} />
          <p dangerouslySetInnerHTML={{ __html: D.content || "Content" }} />
        </div>
      </div>
    ))}
  </div>
);

const LandingTeamWrapper = ({ children }) => (
  <div className="pitch text-center">
    <div className="container">{children}</div>
  </div>
);

export const LandingTeam = ({ team }) => (
  <LandingTeamWrapper>
    <LandingTeamTeam team={team} />
  </LandingTeamWrapper>
);

const LandingPitchPitches = ({ pitches }) => (
  <div className="col-md-12">
    {pitches.map((D, num) => (
      <div
        key={num}
        className="col-md-4 wow fadeInDown"
        data-wow-delay="0.2s"
        style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInDown" }}
      >
        <div className="pitch-icon">
          <img className="sp-image" src={D.image_url || ""} alt={D.alt || "Image"} />
        </div>
        <div className="pitch-content">
          <h1 dangerouslySetInnerHTML={{ __html: D.title || "RealTime" }} />
          <p dangerouslySetInnerHTML={{ __html: D.content || "Content" }} />
        </div>
      </div>
    ))}
  </div>
);

const LandingPitchWrapper = ({ children }) => (
  <div className="pitch text-center">
    <div className="container">{children}</div>
  </div>
);

export const LandingPitch = ({ pitches }) => (
  <LandingPitchWrapper>
    <LandingPitchPitches pitches={pitches} />
  </LandingPitchWrapper>
);

const LandingSlidesSlides = ({ slides }) => (
  <div className="sp-slides">
    {slides.map((D, num) => (
      <div key={num} className="sp-slide">
        <img className="sp-image" src={D.image_url || "https://advent.site44.com/assets/images/slide1.jpg"} alt={D.alt || "Image"} />
        <h2
          className="sp-layer custom-slider-text-1"
          data-position="bottomLeft"
          data-horizontal="8%"
          data-vertical="100"
          data-show-transition="left"
          data-show-delay="1000"
          data-show-duration="1000"
          data-hide-transition="left"
        >
          <a href={D.url || "#"} dangerouslySetInnerHTML={{ __html: D.content }} />
        </h2>
      </div>
    ))}
  </div>
);

export const LandingSlidesContainer = ({ children }) => (
  <div className="main app form" id="main">
    <div className="slider-pro" id="my-slider">
      {children}
    </div>
  </div>
);

export const LandingSlides = ({ slides }) => (
  <LandingSlidesContainer>
    <LandingSlidesSlides slides={slides} />
  </LandingSlidesContainer>
);

//this will create the buttons under the name
const LandingHeadlineButtonsImage = ({ headline_buttons }) => (
  <Fragment>
    {headline_buttons.map((D, num) => (
      <div key={num} className="download-buttons wow fadeInUp">
        <a href="#">
          <img src={D.image_url || "https://advent.site44.com/assets/logos/appstore.png"} width="150" alt="Download from App Store" />
        </a>
        {/*<a href="#">*/}
        {/*    <img src="https://advent.site44.com/assets/logos/playstore.png" width="150" alt="Download from Play Store" />*/}
        {/*</a>*/}
      </div>
    ))}
  </Fragment>
);

const LandingHeadlineButtons = ({ headline_buttons }) => (
  <Fragment>
    {headline_buttons.map((D, num) => (
      <a
        className="btn btn-primary btn-action popup wow fadeInDown"
        data-wow-delay="0.2s"
        href="#"
        style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInDown" }}
      >
        Know more
      </a>
    ))}
  </Fragment>
);

//this is that center image between the footer
const LandingHeadlineHeader = ({ headline, children }) => (
  <Fragment>
    {headline.map((D, num) => (
      <div key={num} className="col-md-12">
        <div className="hero-content text-center" style={{ padding: "100px 0 100px 0" }}>
          <div className="app-img">
            <img
              className={D.image_class_name || "img-circleX wow fadeInUp"}
              src={D.image_url || "https://advent.site44.com/assets/logos/app-logo.png"}
              width={D.image_width || "80"}
              alt="App Logo"
            />
          </div>
          <span className="app-info wow fadeInUp">
            <h1 className="wow fadeInUp" dangerouslySetInnerHTML={{ __html: D.title }} />
            <h4 className="wow fadeInUp" dangerouslySetInnerHTML={{ __html: D.content }} />
          </span>
          {children}
        </div>
      </div>
    ))}
  </Fragment>
);

export const LandingHeadlineContainer = ({ children }) => (
  <div className="hero-section">
    <div className="container nopadding">{children}</div>
  </div>
);

//create the landing header images

export const LandingHeadlineImages = ({ headline_images }) => (
  <Fragment>
    {headline_images.map((D, num) => (
      <div key={num} className="col-md-12 wow fadeIn">
        <img className="img-responsive" src={D["image_url"] || "https://advent.site44.com/assets/images/dash.png"} alt="Hero Image" />
      </div>
    ))}
  </Fragment>
);

//create teh top section with the title and the headline images
export const LandingHeadLine = ({ headline, headline_images, headline_buttons }) => (
  <LandingHeadlineContainer>
    <LandingHeadlineHeader headline={headline}>
      <LandingHeadlineButtons headline_buttons={headline_buttons} />
    </LandingHeadlineHeader>
    <LandingHeadlineImages headline_images={headline_images} />
  </LandingHeadlineContainer>
);

//objective here is to create the navigation array at the top by taking in an argument that is made in LandingWithProps

//this generates the list of tabs that will be displayed at the top of the page
const LandingNavBarItems = ({ navbar_tabs }) => (
  <ul className="nav navbar-nav">
    {navbar_tabs.map((navbar_tab, num) => (
      <li key={num}>
        <a className="page-scroll" href={"#" + navbar_tab.attribute}>
          {navbar_tab.title}
        </a>
      </li>
    ))}
  </ul>
);
//this is that center image between the footer
const LandingNavBarLogo = ({ logo }) => (
  <Fragment>
    {logo.map((D, num) => (
      <img
        key={num}
        src={D.image_url || "https://www.symbols.com/gi.php?type=1&id=1317"}
        width={D.image_width || "40"}
        height={D.height || "30"}
        alt={D.alt || "Adelante"}
      />
    ))}
  </Fragment>
);

//navbar will be an array of navbar items that comes from components
//its going to be iterated through to create
const LandingNavBarContainer = ({ children, logo }) => (
  <div className="container">
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header page-scroll">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand page-scroll" href="#main">
            <LandingNavBarLogo logo={logo} />
            {/* <img src="https://advent.site44.com/assets/logos/logo.png" width="80" height="30" alt="Advent" /> */}
          </a>
        </div>
        <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
          {children}
        </div>
      </div>
    </nav>
  </div>
);

//this needs to take in navbar tabs
export const LandingNavBar = ({ navbar_tabs, logo }) => (
  <LandingNavBarContainer logo={logo}>
    <LandingNavBarItems navbar_tabs={navbar_tabs || []} />
  </LandingNavBarContainer>
);

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
          <i class={D.attribute || "ion-xbox"} />

          {/* <img
            style={{ verticalAlign: "middle" }}
            src={D.featured_image_url || "https://advent.site44.com/assets/logos/logo.png"}
            // width="30"
            height="50"
            alt="Advent"
          /> */}
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

//the purpose of this component is to iterate through features array and then create the necessary parts
// need to do something for the icon logo
const LandingFeaturesBullets = ({ features }) => (
  <div className="row">
    {features.map((D, num) => (
      <div key={num} className="col-md-4 wow fadeInUp">
        <div className="f-single">
          <div class="f-icon">
            <i class={D.attribute || "ion-ios-settings"} />
          </div>
          {/* <div className="f-icon pull-left" style={{ verticalAlign: "middle" }}>
            <img
              style={{ verticalAlign: "middle" }}
              src={D.featured_image_url || "https://advent.site44.com/assets/logos/logo.png"}
              width="30"
              height="50"
              alt="Advent"
            />
          </div> */}
          <div className="f-content">
            {D.url == undefined ? (
              <h2 className="wow fadeInUp" dangerouslySetInnerHTML={{ __html: D.title }} />
            ) : (
              <h2 className="wow fadeInUp">
                <a href={D.url} dangerouslySetInnerHTML={{ __html: D.title }} />
              </h2>
            )}
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
      <div id={D.attribute || "landing_features"} key={num} className="icon-features-intro">
        {/* <h1 className="wow fadeInUp">{D.title}</h1>
        <p className="wow fadeInUp" >{D.content}</p> */}
        {D.url == undefined ? (
          <h1 className="wow fadeInUp" dangerouslySetInnerHTML={{ __html: D.title }} />
        ) : (
          <h1 className="wow fadeInUp">
            <a href={D.url} dangerouslySetInnerHTML={{ __html: D.title }} />
          </h1>
        )}
        <p className="wow fadeInUp" dangerouslySetInnerHTML={{ __html: D.content }} />
      </div>
    ))}
  </Fragment>
);

export const LandingFeaturesContainer = ({ children }) => (
  <div className="icon-features" id="landing_features">
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

export const LandingCalendar = ({ calendar }) => (
  <div className="icon-features">
    <div className="container nopadding">
      {calendar.map((D, num) => (
        <div class="col-lg-6 text-center" id={D.id || "calendar"} />
      ))}
    </div>
  </div>
);

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

//this is that center image between the pillar
const LandingPillarsHeader = ({ pillars_headline }) => (
  <Fragment>
    {pillars_headline.map((D, num) => (
      <div key={num} className="pricing-intro">
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
      <div key={num} className="col-sm-3">
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

//this is that center image between the pillar
const LandingReviewsHeader = ({ reviews_headline }) => (
  <Fragment>
    {reviews_headline.map((D, num) => (
      <div className="pricing-intro">
        <h1 dangerouslySetInnerHTML={{ __html: D.title }} className="wow fadeInUp" data-wow-delay="0s" />
        <p className="wow fadeInUp" data-wow-delay="0.2s" dangerouslySetInnerHTML={{ __html: D.content }} />
      </div>
    ))}
  </Fragment>
);

//this is all the side pillar
const LandingReviewsReviews = ({ reviews }) => (
  <Fragment>
    {reviews.map((D, num) => (
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

export const LandingReviewsContainer = ({ children }) => (
  <div id="review-section" className="review-section">
    <div className="container">
      <div className="col-md-10 col-md-offset-1">
        <div className="reviews owl-carousel owl-theme">
          <div className="review-single">
            <img className="img-circle" src="https://advent.site44.com/assets/images/icon.png" alt="Client Testimonoal" />
            <div className="review-text wow fadeInUp" data-wow-delay="0.2s">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis quis tellus ac vestibulum. Etiam fermentum nisl ac
                venenatis rhoncus.
              </p>
              <h3>- Neil Young</h3>
              <h3>Vice President Primal Inc</h3>
              <i className="ion ion-star" />
              <i className="ion ion-star" />
              <i className="ion ion-star" />
              <i className="ion ion-star" />
              <i className="ion ion-star" />
            </div>
          </div>
          <div className="review-single">
            <img className="img-circle" src="https://advent.site44.com/assets/images/icon.png" alt="Client Testimonoal" />
            <div className="review-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis quis tellus ac vestibulum. Etiam fermentum nisl ac
                venenatis rhoncus.
              </p>
              <h3>- Kate Abbot</h3>
              <h3>President Proton LLC</h3>
              <i className="ion ion-star" />
              <i className="ion ion-star" />
              <i className="ion ion-star" />
              <i className="ion ion-star" />
              <i className="ion ion-ios-star-half" />
            </div>
          </div>
          <div className="review-single">
            <img className="img-circle" src="https://advent.site44.com/assets/images/icon.png" alt="Client Testimonoal" />
            <div className="review-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis quis tellus ac vestibulum. Etiam fermentum nisl ac
                venenatis rhoncus.
              </p>
              <h3>- Alice</h3>
              <h3>CEO Marga Holdings</h3>
              <i className="ion ion-star" />
              <i className="ion ion-star" />
              <i className="ion ion-star" />
              <i className="ion ion-star" />
              <i className="ion ion-ios-star-half" />
            </div>
          </div>
          <div className="review-single">
            <img className="img-circle" src="https://advent.site44.com/assets/images/icon.png" alt="Client Testimonoal" />
            <div className="review-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis quis tellus ac vestibulum. Etiam fermentum nisl ac
                venenatis rhoncus.
              </p>
              <h3>- Robert Hammer</h3>
              <h3>Chairman Hammer Corp</h3>
              <i className="ion ion-star" />
              <i className="ion ion-star" />
              <i className="ion ion-star" />
              <i className="ion ion-star" />
              <i className="ion ion-star" />
            </div>
          </div>
          <div className="review-single">
            <img className="img-circle" src="https://advent.site44.com/assets/images/icon.png" alt="Client Testimonoal" />
            <div className="review-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis quis tellus ac vestibulum. Etiam fermentum nisl ac
                venenatis rhoncus.
              </p>
              <h3>- Rita Valentine</h3>
              <h3>Primal Inc</h3>
              <i className="ion ion-star" />
              <i className="ion ion-star" />
              <i className="ion ion-star" />
              <i className="ion ion-star" />
              <i className="ion ion-ios-star-half" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const LandingReviews = ({ reviews, reviews_headline }) => <LandingReviewsContainer />;

export const LandingSplitFeatures = ({ split_features }) => (
  <Fragment>
    {split_features.map((D, num) => (
      <div className="split-features" key={num}>
        <div className="col-md-6 nopadding">
          <div className="split-image">
            <img
              className="img-responsive wow fadeIn"
              src={D.image_url || "https://advent.site44.com/assets/images/app_image.png"}
              alt="Image"
              style={{ visibility: "visible", animationName: "fadeIn" }}
            />
          </div>
        </div>
        <div className="col-md-6 nopadding">
          <div className="split-content">
            {D.url ? (
              <h1>
                <NavLink to={D.url}>
                  <p
                    dangerouslySetInnerHTML={{ __html: D.title || "RealTime" }}
                    className="wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  />
                </NavLink>
              </h1>
            ) : (
              <h1
                dangerouslySetInnerHTML={{ __html: D.title || "RealTime" }}
                className="wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              />
            )}

            <p
              dangerouslySetInnerHTML={{ __html: D.content || "Content" }}
              className="wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            />
          </div>
        </div>
      </div>
    ))}
  </Fragment>
);

export const LandingPitchIntro = ({ pitch }) => (
  <div class="pitch text-center">
    <div class="container">
      {pitch.map((D, num) => (
        <div class="pitch-intro">
          <h1
            dangerouslySetInnerHTML={{ __html: D.title || "Content" }}
            class="wow fadeInDown"
            data-wow-delay="0.2s"
            style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInDown" }}
          />

          <p
            dangerouslySetInnerHTML={{ __html: D.content || "Content" }}
            class="wow fadeInDown"
            data-wow-delay="0.2s"
            style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInDown" }}
          />
        </div>
      ))}
    </div>
  </div>
);

export const LandingPlain = ({ pitch }) => (
  <div class="pitch text-centerX">
    <div class="container">
      {pitch.map((D, num) => (
        <div class="pitch-introX">
          <h1
            dangerouslySetInnerHTML={{ __html: D.title || "Content" }}
            class="wow fadeInDown"
            data-wow-delay="0.2s"
            style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInDown" }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: D.content || "Content" }}
            class="wow fadeInDown"
            data-wow-delay="0.2s"
            style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInDown" }}
          />
        </div>
      ))}
    </div>
  </div>
);
