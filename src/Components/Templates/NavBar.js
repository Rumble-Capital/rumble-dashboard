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
              {/* <div class="navbar-brand logo">
                <a href="index.html">
                  <img class="img-fluid" src="http://www.chriscruz.me/images/logo.png" alt="Image" />
                </a>
              </div> */}
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

export default NavBar;
