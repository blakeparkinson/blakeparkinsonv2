var React = require('react');
var PropTypes = React.PropTypes;
var Achievements = require('./Achievements');
var Find = require('./Find');
var Resume = require('./Resume');
var Contact = require('./Contact');

var typewriterStyle = {
  color: "#333333",
  fontFamily: "'Special Elite', cursive"
};



function Home (props) {
  var img = require('../images/blake.png');
  var jaggedImg = require('../images/jagged-black.png');
  var jagged = {
    backgroundImage: 'url('+jaggedImg+')'
  };

  var picStyle = {
    opacity: props.opacity
  };


  return (
    <div>
    <div className="intro-row">
      <img className="blake" src={img} style={picStyle}/>
      <div className="intro" style={typewriterStyle}>{props.typewriter}</div>
    </div>
    <div className="jagged" style={jagged}></div>
    <Achievements/>
    <Resume/>
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
