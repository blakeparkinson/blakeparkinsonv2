var React = require('react');
var Home = require('./Home');

var HomeContainer = React.createClass({
  getInitialState: function () {
    return {
      typewriter: '',
      opacity: 0
    }
  },
  componentDidMount: function () {

    var content = "Hi I'm Blake, a software engineer and designer.";
    var write ='';
    var i = 0;
    var opacity = 0.00;
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
          });

        }
      }.bind(this), 100);

    var opacityInterval = setInterval(() => {
      if (opacity < 1){
        opacity = opacity + .01;
      }
      else{
        clearInterval(opacityInterval);
      }
      this.setState({
        opacity: opacity
      });

    }, 50)
  },
  render: function () {
    return (
      <Home typewriter={this.state.typewriter} opacity={this.state.opacity}/>
    )
  }
});

module.exports = HomeContainer;
