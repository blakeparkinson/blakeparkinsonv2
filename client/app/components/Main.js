var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../main.scss');
var Header = require('./Header');

var Main = props => (
      <div className='main-container'>

        <Header/>
        {props.children}


      </div>
  )


module.exports = Main;
