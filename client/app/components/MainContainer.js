var React = require('react');
var Main = require('./Main');

var previousTop;

var MainContainer = React.createClass({
  getInitialState: function () {
    return {
      headerClass: '',
      open: false,
      smallMenuStyle : 'none'
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
        headerClass: 'slideOutUp animated'
      });
    }
    else{
      this.setState({
         headerClass: 'slideInDown animated'
       });
    }
    previousTop = top;
  },

  render: function () {
    return (
      <Main hamburgerClick={this.hamburgerClick} children={this.props.children} headerClass={this.state.headerClass} open={this.state.open} smallMenuStyle={this.state.smallMenuStyle}/>
    )
  }
});

module.exports = MainContainer;
