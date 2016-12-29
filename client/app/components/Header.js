var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../main.scss');

var goat = require('../images/goat.svg');

var goatStyles = {
  float: "left",
  width: "40px",
  marginTop: "8px"
};


var Header = props => (
      <div className='main-container'>

<div className="header">
<div className="navbar-default" role="navigation">
  <div className="container">
    <div className="navbar-header">

      <span className="bp-blue small"></span>

      <button className="navbar-toggle collapsed" data-target="#js-navbar-collapse" data-toggle="collapse" type="button">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>

    </div>

    <div className="logo">
      <img style={goatStyles} src={goat}/>
    </div>
    <div className="collapse navbar-collapse" id="js-navbar-collapse">

      <ul className="nav navbar-nav">
        <li>
          <a className="pointer">Skills</a>
        </li>
        <li>
          <a className="pointer">Achievements</a>
        </li>
        <li>
          <a className="pointer">Find me</a>
        </li>
        <li>
          <a className="pointer">Contact Me</a>
        </li>
      </ul>
      <span className="bp-blue large"></span>
    </div>

  </div>
</div>
</div>
</div>
    );


module.exports = Header;
