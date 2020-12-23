import React, { Fragment } from "react";
import ExperienceSection from "../Molecules/ExperienceSection";

const ExperienceSections = () => {
  const jp_morgan = {
    title: "Senior Associate",
    date: " Jun 2017 — Present",
    description:
      "Led and developed Business Intelligence Automation andProduct Analytics for Executive Leadership by building full stack reportingsystem (incl. website dashboards, data pipeline) utilizing Python (Alteryx),SharePoint (Javascript), and Tableau to provide prescriptive analytics and insightsto optimize strategic management and investment decision-making for CIO, CTOand Executive Leadership",
    // description:
    //   "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.      ",
    img: "https://www.chriscruz.me/web/images/chase_resized.png",
    // img: "web/images/1.png",

    bullets: [
      "Led the development of over 12 dynamic SharePoint dashboards utilizing ReactJS and Python",
      "Manage product healthand financials for over 17 products across 3 lines of business (team of two)   ",
      "Coordinatedimplementation of new Agile Reporting Methodology to track KPIs (incl.Velocity, Refinement, etc.)",
      "Designed reportingarchitecture and lifecycle involving data mining/blending and visualization, aswell as integration across four disparate data sources (team of two)"
    ]
  };

  const aesop = {
    title: "Partner",
    date: " Jun 2017 — Aug 2019",
    description:
      "Aesop is a skills academy focused on mentoring and training aspiring students to develop the technical and professional skills in demand for modern day organizations. Aesop also helps structure and stabilize developing organization with personalized business management and strategy services centered around expertise of data analytics and intuitive delivery.",
    // description:
    //   "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.      ",
    img: "https://www.chriscruz.me/web/images/aesop-logo-blue.png",
    bullets: []
  };
  //Aesop is a skills academy focused on mentoring and training aspiring students to develop the technical and professional skills in demand for modern day organizations. Aesop also helps structure and stabilize developing organization with personalized business management and strategy services centered around expertise of data analytics and intuitive delivery.

  const curalate = {
    title: "Business Operations Manager",
    date: "Aug 2013 — May 2017",
    description:
      "Modeled, automated, and delivered company performance analytics to executives to improve data-driven strategy across finance, marketing operations, and sales by utilizing SQL, Python, Excel, and Tableau to extract, analyze, and visualizebusiness data. Developed processes andcustom tools integral to supporting businessoperations and rapid company growth.      ",
    img: "https://www.chriscruz.me/web/images/curalate.jpeg",
    bullets: []
  };
  const venture_for_america = {
    title: "Fellow",
    date: "Aug 2013 — May 2015",
    description:
      "Channel talented young people to early-stage companies in Detroit, New Orleans, Providence and other U.S. cities to train as entrepreneurs. This would help the companies succeed and create jobs in these communities. It would also prepare our young people to go on to become the builders and entrepreneurs our country needs ",
    img: "https://www.chriscruz.me/web/images/venture_for_america.jpg",
    bullets: []
  };
  return (
    <Fragment>
      <ExperienceSection {...jp_morgan} />
      <ExperienceSection {...aesop} />
      <ExperienceSection {...curalate} />
      <ExperienceSection {...venture_for_america} />
    </Fragment>
  );
};

export default ExperienceSections;
