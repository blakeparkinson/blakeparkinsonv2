var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var edmodoImg = require('../images/edmodo.png');
var alpineImg = require('../images/alpine.png');
var nctiImg = require('../images/ncti.png');


var Resume = props => (
  <div>

    <ul>
      <li className="col-sm-12 col-md-4 list edmodo achievements">
        <img className="edmodo-img" src={edmodoImg}/>
        <span className="onehalf-x">Edmodo</span>
        <div>I worked at Edmodo, where I worked on various projects from the backend API to front end landing pages</div>
      </li>
      <li className="col-sm-12 col-md-4 list achievements">
      <img className="alpine-img" src={alpineImg}/>
        <span className="onehalf-x">Alpine Labs</span>
        <div>I worked at NCTI where I built a beautiful node/angular app from scratch.</div>
      </li>
      <li className="col-sm-12 col-md-4 list achievements">
      <img className="ncti-img" src={nctiImg}/>
        <span className="onehalf-x">NCTI</span>
        <div>I worked at NCTI where I built a beautiful node/angular app from scratch.</div>
      </li>
    </ul>
  </div>

)

module.exports = Resume;
