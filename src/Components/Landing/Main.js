import React, { Fragment } from "react";

const NavBar = () => {
  return (
    <Fragment>
      <div class="container">
        <div id="navigation" class="menu-two">
          <div class="navbar navbar-expand-lg">
            <div class="navbar-header">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse"
                aria-controls="navbar-collapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon">
                  <i class="fa fa-align-justify"></i>
                </span>
              </button>
              <div class="navbar-brand logo">
                <a href="index.html">
                  <img class="img-fluid" src="http://www.chriscruz.me/images/logo.png" alt="Image" />
                </a>
              </div>
            </div>
            <div class="collapse navbar-collapse">
              <nav id="mainmenu">
                <ul class="nav navbar-nav">
                  <li class=" scroll current">
                    <a href="#home-banner">Home</a>
                  </li>
                  <li class="scroll">
                    <a href="#about">About Me</a>
                  </li>
                  <li class="scroll">
                    <a href="#skill">Skills</a>
                  </li>
                  <li class="scroll">
                    <a href="#exprience">Experience</a>
                  </li>
                  <li class="scroll">
                    <a href="#education">Education</a>
                  </li>
                  <li class="scroll">
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li class="scroll">
                    <a href="#contact">Contact</a>
                  </li>
                  <li class="scroll">
                    <a href="#blog">Blog</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
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
                      <a href="#">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fa fa-dribbble" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fa fa-behance" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fa fa-github-alt" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="banner-info">
                  <h1>Hello, I am</h1>
                  <h2>Chris Cruz</h2>
                  <h3></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const Main = () => (
  <Fragment>
    <div class="main-wrapper home-two">
      <HomeBanner />
    </div>
  </Fragment>
);

export default Main;
