//objective here is to create the navigation array at the top by taking in an argument that is made in LandingWithProps

import React, { Component, Fragment } from "react";

//this generates the list of tabs that will be displayed at the top of the page
const LandingNavBarItems = ({ navbar_tabs }) => (
  <ul className="nav navbar-nav">
    {navbar_tabs.map((navbar_tab, num) => (
      <li key={num}>
        <a className="page-scroll" href={"#" + navbar_tab.slug}>
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
      <Fragment>
        <img
          key={num}
          src={D.featured_image_url || "https://advent.site44.com/assets/logos/logo.png"}
          width="80"
          height="30"
          alt="Advent"
        />
      </Fragment>
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
