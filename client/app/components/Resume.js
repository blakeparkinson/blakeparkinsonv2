var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var edmodoImg = require('../images/edmodo.png');
var alpineImg = require('../images/alpine.png');
var nctiImg = require('../images/ncti.png');


var Resume = props => (
  <div className="container resume-container">

    <ul>
      <h1 className="text-center">Places I've worked</h1>
      <li className="row list edmodo achievements">
      <div className="col">
        <img className="edmodo-img" src={edmodoImg}/>
        <h2><a href="https://www.edmodo.com/">Edmodo</a></h2>
        <div>I worked at Edmodo, one of the primary communication platforms for K-12 schools. At Edmodo, I worked on various projects from the backend API to front end landing pages. I was one of the highest code contributors to the main <a href="https://www.edmodo.com/">Edmodo platform</a> ,worked on <a href="https://snapshot.edmodo.com/">Edmodo Snapshot</a> (a common core mastery platform), as well as the <a href="https://developers.edmodo.com/">Partner API platform</a>.</div>
        </div>
      </li>
      <li className="row list achievements">
      <div className="col">
      <img className="alpine-img" src={alpineImg}/>
        <h2><a href="https://alpinelaboratories.com/">Alpine Labs</a></h2>
        <div>I'm the mobile developer at Alpine Labs, where we make photography tech gear. I architected, built, and designed the <a href="https://itunes.apple.com/us/app/pulse-camera-control/id1093969356?mt=8">Pulse app</a> and worked on the <a href="https://itunes.apple.com/us/app/radian/id593206526?mt=8">Radian App</a>. Both apps allow you to wireless control your camera from your phone or tablet.</div>
        </div>
      </li>
      <li className="row list achievements">
      <div className="col">

      <img className="ncti-img" src={nctiImg}/>
        <h2><a href="https://ncti.com/">NCTI</a></h2>
        <div>I also work at NCTI, where I architected, designed, and built the <a href="https://amp.ncti.com/">Amp Platform</a>. With this platform, we transformed 20 years of technical debt, into a modern, responsive, and lean platform.</div>
        </div>

      </li>
    </ul>
  </div>

)

module.exports = Resume;
