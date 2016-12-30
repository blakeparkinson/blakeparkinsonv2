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
      <Sticky>
        <Header headerClass={props.headerClass}/>
        </Sticky>

        {props.children}


      </div>
      </StickyContainer>

  )

  Main.propTypes = {
    children: PropTypes.object,
    headerClass: PropTypes.string
  }


module.exports = Main;
