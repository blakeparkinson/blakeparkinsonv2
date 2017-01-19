var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var shredderImg = require('../images/shredder.png');


var Achievements = props => (
  <div className="third">
  <div className="container">
    <h2 className="cursive" id="achievements">Blake Parkinson</h2>
    <div className="shredder">
      <img src={shredderImg}/>
    </div>
    <div className="text-container">
    <div> I'm a full stack engineer, part time designer that has worked on a variety of tech stacks. I have a wide range of experience ranging from architecting large scale web apps building and developing apps for the google play and iTunes store.
    </div>
    <div className="mid-text">I've worked with Node.js, python, PHP, ruby, golang, and a little java and objective c for app development.</div>
    <div> My passion lies in front-end and design and I've used Angular, Backbone, and put emphasis on user experience when choosing front-end frameworks.</div>
    </div>
  </div>
</div>
)

module.exports = Achievements;
