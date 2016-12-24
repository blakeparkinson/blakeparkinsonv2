var React = require('react');
var PropTypes = React.PropTypes;



function Home (props) {
  return (
    <div>
    <div className="intro-row">
      <img className="blake" src="../images/blake.jpg"/>
      <div className="intro">{props.typewriter}</div>
    </div>
    <div className="jagged"></div>
    </div>
  )
}

Home.propTypes = {
  typerwriter: PropTypes.string
}

module.exports = Home;
