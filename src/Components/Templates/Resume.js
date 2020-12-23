import React, { Fragment } from "react";

const Resume = () => {
  return (
    <Fragment>
      <div id="profile" class="profile-section  bg-color section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="section-title">
                <h1>My Resume</h1>
              </div>
            </div>

            <div class="col-md-8">
              <div class="section-content">
                <div class="profile-logo">
                  <img class="img-fluid" width="151" src="web/images/chris.png" alt="Image" />
                </div>
                <div class="profile-info">
                  <br />
                  <h1>Chris Cruz</h1>
                  <h4>Senior Business Analyst</h4>
                  <address>
                    <p>
                      Address: 450 North 18th Street, Philaelphia PA 19103 <br /> Phone: +978 786 5132
                      <br /> <a href="#">Email: cruzc09@gmail.com</a>
                    </p>
                  </address>
                </div>

                <div class="career-objective">
                  <div class="title">
                    <div class="icons">
                      <i class="fa fa-black-tie" aria-hidden="true"></i>
                    </div>
                    <h3>Career Objective</h3>
                  </div>
                  <div class="sub-content">
                    <p>
                      Experienced Analytics Consultant/Advisor with a demonstrated history of working with startups and within the financial
                      services industry. Skilled in end-to-end automation, empowering management, and advancing strategic insights.
                    </p>
                  </div>
                </div>
                <hr />

                <div class="work-history">
                  <div class="title">
                    <div class="icons">
                      <i class="fa fa-briefcase" aria-hidden="true"></i>
                    </div>
                    <h3>Work History</h3>
                  </div>
                  <div class="sub-content">
                    <div class="history">
                      <h5>Senior Business Analyst @ JP Morgan Chase</h5>
                      <h6>Jun 2017 - Present</h6>
                      <p>
                        Led and developed Business Intelligence Automation and Product Analytics for Executive Leadership by building full
                        stack reporting system (incl. website dashboards, data pipeline) utilizing Python, SharePoint (Javascript), and
                        Tableau to provide prescriptive analytics and insights to optimize strategic management and investment
                        decision-making for CIO, CTO and Executive Leadership.
                      </p>
                      <p>
                        <ul style={{ listStyleType: "square", paddingLeft: "20px" }}>
                          <li>Led the development of over 15 dynamic SharePoint dashboards utilizing ReactJS and Python (50+ users)</li>
                          <li>Manage product health and financials for over 17 products across 3 lines of business (team of two)</li>
                          <li>
                            Coordinated implementation of new Agile Reporting Methodology to track KPIs (incl. Velocity, Refinement, etc.)
                          </li>
                          <li>
                            Designed reporting architecture and lifecycle involving data mining/blending and visualization, as well as
                            integration across four disparate data sources (team of two)
                          </li>
                          <li>
                            Managed 150K annual budget of Adelante (BRG) covering 16 North America Chapters and 50+ events (team of two)
                          </li>
                        </ul>
                      </p>
                    </div>
                    <hr />
                    <div class="history">
                      <h5>Business Operations Manager @ Curalate</h5>
                      <h6>Aug 2013 — May 2017</h6>
                      <p>
                        Modeled, automated, and delivered company performance analytics to executives to improve data-driven strategy across
                        finance, marketing operations, and sales by utilizing SQL, Python, Excel, and Tableau to extract, analyze, and
                        visualize business data. Developed processes and custom tools integral to supporting business operations and rapid
                        company growth.
                      </p>
                      <p>
                        <ul style={{ listStyleType: "square", paddingLeft: "20px" }}>
                          <li>
                            Responsible for providing visibility into company performance indicators by developing reporting packages and
                            building custom decks, including creating quarterly board decks and dashboards for investors
                          </li>
                          <li>
                            Employed over 30 cloud-based algorithms to automate reporting delivered to company executives with functions of:
                            mining transactional data, integrating with databases via API, company benchmarking, and anomaly detection
                          </li>
                          <li>
                            Conducted end-to-end business analysis to guide prioritization of key initiatives and make strategic
                            recommendations related to: sales and marketing strategy, financial analytics, product benchmarking, and
                            scenario planning
                          </li>
                          <li>
                            Designed reporting architecture and lifecycle involving data mining/blending and visualization, as well as
                            integration across four disparate data sources (team of two)
                          </li>
                          <li>
                            Prepared and presented weekly company reports discussing goal attainment and results of company initiatives
                          </li>
                        </ul>
                      </p>
                    </div>
                    <hr />

                    <div class="educational-background">
                      <div class="title">
                        <div class="icons">
                          <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                        </div>
                        <h3>Educational Background</h3>
                      </div>
                      <div class="sub-content">
                        <div class="education">
                          <h5>University of Pennsylvania</h5>
                          <p>2009 - 2013</p>
                        </div>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="button">
                <a href="web/resume/Christopher%20Cruz-Guzman%20Resume.pdf" class="btn btn-primary">
                  Download My Resume as a .pdf file
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Resume;
