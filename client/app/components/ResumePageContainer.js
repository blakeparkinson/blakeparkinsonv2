var React = require('react')
var ResumePage = require('./ResumePage')

var positions = [
  {
    place: 'BACKBONE PLM',
    title: 'Chief Technology Officer',
    dates: 'FEB 2017 - CURRENT',
    description:
      'Tasked with building the Backbone 2.0 Application, using Angular 2, node.js, mongodb, deepstream, golang, paperjs. This application allows you to design and create any product you like and manage it from design to factory completion. Responsible for both front-end, back-end, architecture, and server-side + integration testing. Scaled development team from 2 engineers to a team of 15 developers, QA Engineers, and product managers. Distilled complex and highly-technical information into simple language easily digestable by board members, investors, and non-technical stakeholders.'
  },
  {
    place: 'ALPINE LABS',
    title: 'Senior Software Engineer',
    dates: 'FEB 2016 - FEB 2017',
    description:
      'Designed and built the google play and iTunes app “Pulse” using objective-c, java, ionic, and cordova. This application allows you to control your camera wirelessly from your smartphone or tablet utilizing Bluetooth low-energy and Bluetooth classic. Wrote open-source plugins for communicating to devices over Bluetooth classic, which had yet to be done. Contributed multiple open source front end plugins for the ionic framework.'
  },
  {
    place: 'NCTI',
    title: 'Web Developer',
    dates: 'JULY  2015 - JAN 2017',
    description:
      'Built brand new application (amp-ncti.com) from the ground up using node.js, angular, couchdb in 5 months, thus turning 10+ years of technical debt into a modern web application. Responsible for full frontend/backend implementation and design. From complex angular views to all of the images and iconography on the website.'
  },
  {
    place: 'EDMODO',
    title: 'Senior Software Engineer',
    dates: 'FEB 2013 - JULY 2015',
    description:
      'Largest contributing developer to the main Edmodo.com website (which serves millions of users) accounting for around 40% of commits for the code base. Leading PHP(ugh) Developer of the API used by Edmodo.com, mobile applications, and 3rd party developers. Implemented custom tracking Javascript API which allows us to mine every user action and perform relevant data analysis. Lead frontend Engineer on the Growth team. Responsible for rolling out features that saw the user base grow from 5,000 users to 50 million users during my time there.'
  },
  {
    place: 'UTOPY',
    title: 'Consultant/UI Engineer',
    dates: 'FEB 2011 - FEB 2013',
    description:
      'Built custom reports in javascript d3 and google maps API. Developed internal custom javascript framework for other developers to easily modularize and reuse components.'
  },
  {
    place: 'LIGHTNING BOLT SOLUTIONS',
    title: 'Application Consultant/Designer',
    dates: 'OCT 2007 - FEB 2011',
    description: 'Configured, designed, and impelemented custom software for 80+ clients.'
  }
]

var ResumePageContainer = React.createClass({
  render: function() {
    return <ResumePage positions={this.state.positions} />
  },

  getInitialState: function() {
    return { positions: positions }
  }
})

module.exports = ResumePageContainer
