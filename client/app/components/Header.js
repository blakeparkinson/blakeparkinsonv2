var React = require('react');
var PropTypes = React.PropTypes;
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../main.scss');



var goat = require('../images/goat.svg');


var goatStyles = {
  float: "left",
  width: "40px",
  marginTop: "8px"
};

var mainStyle = {
  zIndex: "100"
};


var Header = props => (

      <div className='main-container' style={mainStyle}>

<div className={props.headerClass} id="mainHeader">
<div className="navbar-default" role="navigation">
  <div className="container">

    <div className="logo">
      <img style={goatStyles} src={goat}/>
    </div>
    <div className="">

      <ul className="nav navbar-nav">
        <li>
          <a className="pointer">ABOUT</a>
        </li>
        <li>
          <a className="pointer">FIND</a>
        </li>
        <li>
          <a className="pointer">CONTACT</a>
        </li>
      </ul>
      <span className="bp-blue large"></span>
    </div>

  </div>
</div>

</div>


</div>

    );

    Header.propTypes = {
      headerClass: PropTypes.string
    }


module.exports = Header;
