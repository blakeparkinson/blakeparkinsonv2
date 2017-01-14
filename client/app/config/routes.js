var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var MainContainer = require('../components/MainContainer');
var HomeContainer = require("../components/HomeContainer");
var ResumePageContainer = require("../components/ResumePageContainer");



var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={HomeContainer}/>
      <Route path='Resume' component={ResumePageContainer} />
      <Route path='*' component={HomeContainer} />
    </Route>

  </Router>
);

module.exports = routes;
