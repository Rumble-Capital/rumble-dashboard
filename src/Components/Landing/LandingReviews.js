import React, { Component, Fragment } from "react";

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
