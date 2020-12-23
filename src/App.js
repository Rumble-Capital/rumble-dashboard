import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import { PageWrapper, TopNavigation, Navigation } from "./Components/Inspinia";
import Landing from "./Components/Landing/Landing";
import Main from "./Components/Pages/Main";

import Blog from "./Components/Blog/Blog";
import Post from "./Components/Post/Post";
import { get_ip_slack_visit } from "./slackVisit";
// import "./Wordpress.scss";

// import "./App.scss";
// import "./Custom.scss";

const App = props => {
  get_ip_slack_visit();
  return (
    <div>
      <Main />
      {/* <HashRouter>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/Blog" component={Blog} />
          <Route path="/Post" component={Post} />
          <Route path="/Post/:id" component={Post} />
          <Route path="/" component={Landing} />
        </Switch>
      </Fragment>
    </HashRouter> */}
    </div>
  );
};
export default App;
