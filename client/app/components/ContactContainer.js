var React = require('react');
var Main = require('./Main');

var Contact = require('./Contact');
import $ from 'jquery';

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

  submitForm: function(event){
    var data = {
      'sender': this.state.email,
      'textBody': this.state.text
    };

    $.ajax({
     url: 'https://blakeparkinson.herokuapp.com/main/email',
     type: 'POST',
     dataType: 'json',
     data: data,
     cache: false,
     success: (data) => {
       console.log(data);
       if ('err' in data) {
         this.setState({response: data.err});
       } else {
         this.setState({response: data.success });
       }
     },
     error: (xhr, status, err) => {
       console.error(err);
     }
   });
 },

  render: function () {
    return (
      <Contact handleChange={this.handleChange} submitForm={this.submitForm}/>
    )
  }
});

module.exports = ContactContainer;
