var React = require('react');
var Main = require('./Main');

var Contact = require('./Contact');


var previousTop;

var ContactContainer = React.createClass({
  getInitialState: function() {
    return { subject: null,
      text: null,
      response: null
    };
  },
  handleChange: function(event){
    if (event.target.id =='email'){
      this.state.email = event.target.value;
    }
    else{
      this.state.text = event.target.value;
    }
  },
  componentDidMount: function () {



  },



  render: function () {
    return (
      <Contact handleChange={this.handleChange}/>
    )
  }
});

module.exports = ContactContainer;
