var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../main.scss');

var Picture = props => (
  <div>
  <div className="intro-row">
    <img className="blake" src="../images/blake.jpg"/>
    <div className="intro"></div>
  </div>
  <div className="jagged"></div>
  </div>
)

module.exports = Picture;
