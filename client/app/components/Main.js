var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../main.scss');
var Header = require('./Header');
var Picture = require('./Picture');



var Main = props => (
      <div className='main-container'>
        <Header/>
        <Picture/>

      </div>
  )


module.exports = Main;
