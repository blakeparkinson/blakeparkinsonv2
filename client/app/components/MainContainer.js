var React = require('react');
var Main = require('./Main');

var previousTop;

var goatIconWhite = require('../images/blake-goat-text-white.png');
var goatIconBlack = require('../images/blake-goat-text-black.png');


var MainContainer = React.createClass({
  getInitialState: function () {
    return {
      headerClass: '',
      open: false,
      smallMenuStyle : 'none',
      headerLeftIcon: goatIconBlack,
      hamburglarColor: 'black'
    }
  },
  componentDidMount: function () {

    window.addEventListener('scroll', this.handleScroll);
  },

  hamburgerClick: function(event){
    if (this.state.open){
      this.setState({
        open: false,
        smallMenuStyle : 'none'

      })
    }
    else{
      this.setState({
        open: true,
        smallMenuStyle: 'block'
      })
    }
  },

  handleScroll: function(event){

    var headerHeight = document.getElementById('mainHeader').clientHeight;
    var top  = window.pageYOffset || document.documentElement.scrollTop;
    if (top > headerHeight + 50){
      this.setState({
        headerClass: 'blackHeader',
        headerLeftIcon: goatIconWhite,
        hamburglarColor: 'white'
      });
    }
    else{
      this.setState({
         headerClass: '',
         headerLeftIcon: goatIconBlack,
         hamburglarColor: 'black'
       });
    }
    previousTop = top;
  },

  render: function () {
    return (
      <Main hamburgerClick={this.hamburgerClick} hamburglarColor={this.state.hamburglarColor} children={this.props.children} headerClass={this.state.headerClass} open={this.state.open} headerLeftIcon={this.state.headerLeftIcon} smallMenuStyle={this.state.smallMenuStyle}/>
    )
  }
});

module.exports = MainContainer;
