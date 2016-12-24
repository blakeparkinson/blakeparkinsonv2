var React = require('react');
var PropTypes = React.PropTypes;
var Achievements = require('./Achievements');
var Find = require('./Find');
var Contact = require('./Contact');

function Home (props) {
  return (
    <div>
    <div className="intro-row">
      <img className="blake" src="../images/blake.jpg"/>
      <div className="intro">{props.typewriter}</div>
    </div>
    <div className="jagged"></div>
    <Achievements/>
    <Find/>
    <Contact/>
    </div>
  )
}

Home.propTypes = {
  typerwriter: PropTypes.string
}

module.exports = Home;
