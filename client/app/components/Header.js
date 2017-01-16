var React = require('react');
var PropTypes = React.PropTypes;
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../main.scss');

var goat = require('../images/goat.svg');

var goatStyles = {
  float: "left",
  width: "40px"
};

var mainStyle = {
  zIndex: "100"
};


var Header = props => (

      <div className='main-container' style={mainStyle}>
      <div className={props.headerClass} id="mainHeader">
<nav className="navbar header-nav navbar-toggleable-md">
  <div className="row">

    <a className="logo col align-self-start" href="#">
      <img style={goatStyles} src={goat}/>
    </a>
    <div className="col align-self-end">
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <a className="pointer" href="#about">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="pointer" href="#resume">RESUME</a>
        </li>
        <li className="nav-item">
          <a className="pointer" href="#contact">CONTACT</a>
        </li>
      </ul>
      </div>
    </div>

</nav>
</div>
</div>

    );

    Header.propTypes = {
      headerClass: PropTypes.string
    }


module.exports = Header;
