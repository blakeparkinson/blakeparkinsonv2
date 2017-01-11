var React = require('react');
var Main = require('./Main');

var previousTop;

var MainContainer = React.createClass({
  getInitialState: function () {
    return {
      headerClass: ''
    }
  },
  componentDidMount: function () {

    window.addEventListener('scroll', this.handleScroll);


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
      <Main children={this.props.children} headerClass={this.state.headerClass}/>
    )
  }
});

module.exports = MainContainer;
