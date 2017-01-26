var React = require('react');
var PropTypes = React.PropTypes;
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
import HamburgerMenu from 'react-hamburger-menu';
import {StickyContainer, Sticky} from 'react-sticky';


require('../main.scss');


var goatStyles = {
  float: "left",
  width: "190px"
};

var mainStyle = {
  zIndex: "100"
};

var Header = props => (

    <div id="mainHeader" style={mainStyle}>
    <Sticky>
      <nav className={props.headerClass + ' navbar header-nav'}>
        <div className="row">
          <a className="logo col align-self-start" href="#">
            <img style={goatStyles} src={props.headerLeftIcon}/>
          </a>
          <div className="col align-self-end">
            <div className="hamburglar">
              <HamburgerMenu isOpen={props.open} menuClicked={props.hamburgerClick} rotate={0} color={props.hamburglarColor} width={20} height={15} borderRadius={0} animationDuration={0.5}/>
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
        <div className="row nav sm" style={{
          'display': props.smallMenuStyle
        }}>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <a className="pointer" href="#about" onClick={props.hamburgerClick}>ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="pointer" href="#resume" onClick={props.hamburgerClick}>RESUME</a>
            </li>
            <li className="nav-item">
              <a className="pointer" href="#contact" onClick={props.hamburgerClick}>CONTACT</a>
            </li>
          </ul>
        </div>

      </nav>
      </Sticky>
    </div>

);

Header.propTypes = {
  headerClass: PropTypes.string,
  open: PropTypes.bool,
  hamburgerClick: PropTypes.func,
  smallMenuStyle: PropTypes.string,
  headerLeftIcon: PropTypes.string,
  hamburglarColor: PropTypes.string
}

module.exports = Header;
