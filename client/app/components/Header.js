var React = require('react');
var PropTypes = React.PropTypes;
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
import HamburgerMenu from 'react-hamburger-menu';

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
    <div className="hamburglar">
      <HamburgerMenu isOpen={props.open} menuClicked={props.hamburgerClick}
        rotate={0}
        color='white'
        width={24}
    height={20}
        borderRadius={0}
        animationDuration={0.5}/>
    </div>
      <ul className="nav navbar-nav lg">
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
    <div className="row nav sm" style={{'display' : props.smallMenuStyle}}>
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

</nav>
</div>
</div>

    );

    Header.propTypes = {
      headerClass: PropTypes.string,
      open: PropTypes.bool,
      hamburgerClick: PropTypes.func,
      smallMenuStyle: PropTypes.string
    }


module.exports = Header;
