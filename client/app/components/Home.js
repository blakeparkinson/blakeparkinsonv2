var React = require('react');
var PropTypes = React.PropTypes;
var Achievements = require('./Achievements');
var Find = require('./Find');
var Contact = require('./Contact');

var typewriterStyle = {
  color: "#333333",
  fontFamily: "'Special Elite', cursive"
};



function Home (props) {
  var img = require('../images/blake.png');

  var picStyle = {
    opacity: props.opacity
  }

  return (
    <div>
    <div className="intro-row">
      <img className="blake" src={img} style={picStyle}/>
      <div className="intro" style={typewriterStyle}>{props.typewriter}</div>
    </div>
    <div className="jagged"></div>
    <Achievements/>
    <Find/>
    <Contact/>
    </div>
  )
}

Home.propTypes = {
  typerwriter: PropTypes.string,
  opacity: PropTypes.number
}

module.exports = Home;
