var React = require('react');
var PropTypes = React.PropTypes;
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../main.scss');
var Header = require('./Header');
var Achievements = require('./Achievements');
import { StickyContainer, Sticky } from 'react-sticky';



var Main = props => (
  <StickyContainer>

      <div className='main-container'>
        <Header headerClass={props.headerClass} open={props.open} hamburgerClick={props.hamburgerClick} smallMenuStyle={props.smallMenuStyle}/>

        {props.children}


      </div>
      </StickyContainer>

  )

  Main.propTypes = {
    hamburgerClick: PropTypes.func,
    children: PropTypes.object,
    headerClass: PropTypes.string,
    open:PropTypes.string,
    smallMenuStyle:PropTypes.string
  }


module.exports = Main;
