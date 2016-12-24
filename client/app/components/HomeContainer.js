var React = require('react');
var Home = require('./Home');

var HomeContainer = React.createClass({
  getInitialState: function () {
    return {
      typewriter: ''
    }
  },
  componentDidMount: function () {

    var content = "Hi I'm Blake, a software engineer and designer.";
    var write ='';
    var i = 0;
    setInterval(function() {
        if (i < content.length) {
          write = write.replace('|', '');
          if (i == content.length - 1) {
            write += content[i];
          } else {
            write += content[i] + '|';

          }
          i++;
          this.setState({
      typewriter: write
    })

        }
      }.bind(this), 100);
  },
  render: function () {
    return (
      <Home typewriter={this.state.typewriter}/>
    )
  }
});

module.exports = HomeContainer;
