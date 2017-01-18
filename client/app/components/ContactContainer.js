var React = require('react');
var Main = require('./Main');

var Contact = require('./Contact');
import $ from 'jquery';

var previousTop;

var ContactContainer = React.createClass({
  getInitialState: function() {
    return {
      formItems: {
        email: '',
        bodyText: '',
        response: null
      }
    };
  },
  handleChange: function(event) {
    if (event.target.id == 'email') {
      this.setState({
        formItems: {
          email: event.target.value,
          bodyText: this.state.formItems.bodyText
        }
      });
    } else {
      this.setState({
        formItems: {
          bodyText: event.target.value,
          email: this.state.formItems.email
        }
      });
    }
    console.log(this.state);
  },

  submitForm: function(event) {
    var data = {
      'sender': this.state.formItems.email,
      'textBody': this.state.formItems.bodyText
    };

    $.ajax({
      url: 'https://blakeparkinson.herokuapp.com/main/email',
      type: 'POST',
      dataType: 'json',
      data: data,
      cache: false,
      success: (data) => {
        this.setState({
          formItems: {
            email: '',
            bodyText: '',
            response: 'Thanks for your email! I will get back to you soon.'
          }
        });
      },
      error: (xhr, status, err) => {
        console.error(err);
      }
    });
  },

  render: function() {
    return (<Contact handleChange={this.handleChange} submitForm={this.submitForm} formItems={this.state.formItems}/>)
  }
});

module.exports = ContactContainer;
