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
    {/*
    <ul>
      <li className="col-sm-12 col-md-4 list edmodo achievements">
        <img className="edmodo-img" src="/images/edmodo.png"/>
        <span className="onehalf-x">Edmodo</span>
        <div>I worked at Edmodo, where I worked on various projects from the backend API to front end landing pages</div>
      </li>
      <li className="col-sm-12 col-md-4 list achievements fonts">
        <i className="fa fa-bolt three-x"></i>
        <span className="onehalf-x">RosterBlitz</span>
        <div>I founded
          <a href="https://www.rosterblitz.com">RosterBlitz</a>, the premier sports quizzing website on the internet.</div>
      </li>
      <li className="col-sm-12 col-md-4 list achievements fonts">
        <i className="fa fa-building three-x"></i>
        <span className="onehalf-x">NCTI</span>
        <div>I worked at NCTI where I built a beautiful node/angular app from scratch.</div>
      </li>
    </ul>
    */}

  </div>
</div>
)

module.exports = Achievements;
