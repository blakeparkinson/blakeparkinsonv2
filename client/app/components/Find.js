var React = require('react');


var gitImg = require('../images/github.png');
var linkedinImg = require('../images/linkedin.png');
var angelImg = require('../images/angel.png');

var Find = props => (
  <div className="second">
  <div className="contact text-center">
      <a className="find-me" href="https://www.github.com/blakeparkinson/" target="_blank">
        <img className="icon-img" src={gitImg}/>
      </a>
      <a className="find-me" href="https://www.linkedin.com/in/bparky" target="_blank">
        <img className="icon-img" src={linkedinImg}/>
      </a>
      <a className="find-me" href="https://angel.co/blake-parkinson" target="_blank">
        <img className="icon-img-small" src={angelImg}/>
      </a>

  </div>
</div>
)

module.exports = Find;
