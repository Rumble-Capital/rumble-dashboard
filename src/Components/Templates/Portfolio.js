import React, { Fragment } from "react";

const Portfolio = () => {
  return (
    <Fragment>
      <div id="portfolio" class="portfolio-section section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="section-title">
                <h1>Portfolio</h1>
              </div>
            </div>
            <div class="col-md-8">
              <div class="text-info">
                <h4>My Recent Work</h4>
                <p>Below are some projects that I do on my spare time</p>
              </div>
              <div class="portfolio-content">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="portfolio-item">
                      <img class="img-fluid" src="web/images/push_ios.png" alt="Image" />
                      <div class="portfolio-overlay">
                        <div class="portfolio-info">
                          <a href="https://github.com/ChrisCruze/Push-IOS">
                            <i class="fa fa-paper-plane" aria-hidden="true"></i>
                          </a>
                          <h3>IOS App</h3>
                          <p>Launched into App Store with ReactJS</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="portfolio-item">
                      <img class="img-fluid" src="web/images/quantified_self_dashboard.png" alt="Image" />
                      <div class="portfolio-overlay">
                        <div class="portfolio-info">
                          <a href="https://www.chriscruz.me/QuantifiedSelf.html#/">
                            <i class="fa fa-paper-plane" aria-hidden="true"></i>
                          </a>
                          <h3>Web React App</h3>
                          <p>A dashboard I created for myself</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
