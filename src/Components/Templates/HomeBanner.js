import React, { Fragment } from "react";

const HomeBanner = () => {
  return (
    <Fragment>
      <div id="home-banner">
        <div class="container">
          <div class="row">
            <div class="col-sm-9">
              <div class="banner-content">
                <div class="home-social">
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <a href="https://www.linkedin.com/in/chriscruze/">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="https://github.com/ChrisCruze">
                        <i class="fa fa-github-alt" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="banner-info">
                  <h1></h1>
                  <h2>Chris Cruz</h2>
                  <h3>Full Stack Developer</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeBanner;
