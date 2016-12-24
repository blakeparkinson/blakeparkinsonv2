var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Achievements = props => (
  <div className="third">
  <div className="container">
    <h3 className="cursive" id="achievements">Achievements</h3>
    <div className="sub">Places I've worked. Things I've done</div>
    <ul>
      <li className="col-sm-12 col-md-4 list edmodo achievements">
        <img className="edmodo-img" src="/images/edmodo.png"/>
        <span className="onehalf-x">Edmodo</span>
        <div>I worked at Edmodo, where I worked on various projects from the backend API to front end landing pages</div>
      </li>
      <li className="col-sm-12 col-md-4 list achievements fonts">
        <i className="fa fa-bolt three-x"></i>
        <span className="onehalf-x">RosterBlitz</span>
        <div>I founded
          <a href="https://www.rosterblitz.com">RosterBlitz</a>, the premier sports quizzing website on the internet.</div>
      </li>
      <li className="col-sm-12 col-md-4 list achievements fonts">
        <i className="fa fa-building three-x"></i>
        <span className="onehalf-x">NCTI</span>
        <div>I worked at NCTI where I built a beautiful node/angular app from scratch.</div>
      </li>
    </ul>

  </div>
</div>
)

module.exports = Achievements;
