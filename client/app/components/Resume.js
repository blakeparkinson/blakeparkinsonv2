var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var edmodoImg = require('../images/edmodo.png');
var alpineImg = require('../images/alpine.png');
var nctiImg = require('../images/ncti.png');


var Resume = props => (
  <div className="container">

    <ul>
      <h1 className="text-center">Places I've worked</h1>
      <li className="row list edmodo achievements">
      <div className="col">
        <img className="edmodo-img" src={edmodoImg}/>
        <h2>Edmodo</h2>
        <div>I worked at Edmodo, where I worked on various projects from the backend API to front end landing pages</div>
        </div>
      </li>
      <li className="row list achievements">
      <div className="col">
      <img className="alpine-img" src={alpineImg}/>
        <h2>Alpine Labs</h2>
        <div>I worked at NCTI where I built a beautiful node/angular app from scratch.</div>
        </div>
      </li>
      <li className="row list achievements">
      <div className="col">

      <img className="ncti-img" src={nctiImg}/>
        <h2>NCTI</h2>
        <div>I worked at NCTI where I built a beautiful node/angular app from scratch.</div>
        </div>

      </li>
    </ul>
  </div>

)

module.exports = Resume;
