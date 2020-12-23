import React, { Fragment } from "react";
import HomeBanner from "../Templates/HomeBanner";
import NavBar from "../Templates/NavBar";
import Experience from "../Templates/Experience";
import Resume from "../Templates/Resume";
import MySkill from "../Templates/MySkill";
import About from "../Templates/About";
import Contact from "../Templates/Contact";

import Portfolio from "../Templates/Portfolio";
import AnimeExample from "../Templates/AnimeExample";

const Main = () => (
  <Fragment>
    <div class="main-wrapper home-two">
      <HomeBanner />
      <NavBar />
      <About />
      <MySkill />
      <Experience />
      <Resume />
      <Portfolio />
      <Contact />
      {/* <AnimeExample /> */}
    </div>
  </Fragment>
);

export default Main;
