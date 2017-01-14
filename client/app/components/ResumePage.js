var React = require('react');
var PropTypes = React.PropTypes;

var ResumePage = props => (
  <div className="resume-page">
  <div className="col-xs-12 col-md-11 col-md-centered col-lg-10 col-lg-push-1">
    <div className="heading text-center">
      <h1 class="heading-title">Blake Parkinson
      </h1>
      <h6 class="heading-subtitle">
        wizardplow@gmail.com •
        415-205-0841
        <span className="hidden-sm-up spacer">
        • Erie, CO
        </span>
      </h6>
    </div>
    <div className="row">
    <div className="col-xs-12 col-md-3">
      <h2 className="resume-heading">Profile</h2>
    </div>
    <div className="col-xs-12 col-md-9">
      <div className="resume-category">
        <p>
          Award winning full-stack developer and designer with more than 7+ years experience building beautiful applications.
          Flexible in working environments having positioned for startups, digital agencies, and larger companies.
          Focused on helping agile teams with UI development for large scale websites or small client-side web apps.
        </p>
      </div>
    </div>
    </div>
  </div>

</div>
)

module.exports = ResumePage;
