var React = require('react');
var PropTypes = React.PropTypes;
var Achievements = require('./Achievements');
var Resume = require('./Resume');
var ContactContainer = require('./ContactContainer');

var typewriterStyle = {
  color: "#333333",
  fontFamily: "'Special Elite', cursive"
};

function Home(props) {
  var img = require('../images/blake.png');
  var jaggedImg = require('../images/jagged-black.png');
  var jagged = {
    backgroundImage: 'url(' + jaggedImg + ')'
  };

  var picStyle = {
    opacity: props.opacity
  };

  return (
    <div>
      <div className="intro-row" id="about">
        <img className="blake" src={img} style={picStyle}/>
        <div className="intro" style={typewriterStyle}>{props.typewriter}</div>
      </div>
      <div className="jagged" style={jagged}></div>
      <Achievements/>
      <Resume/>
      <ContactContainer/>
    </div>
  )
}

Home.propTypes = {
  typerwriter: PropTypes.string,
  opacity: PropTypes.number
}

module.exports = Home;
