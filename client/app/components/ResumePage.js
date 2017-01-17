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
        <span className="spacer">
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
    <div className="row">
    <div className="col-xs-12 col-md-3">
      <h2 className="resume-heading">WORK EXPERIENCE</h2>
    </div>
    <div className="col-xs-12 col-md-9">
    {props.positions.map((job) => {
      return jobMarkup(job);
    })}

    </div>
    </div>
    <div className="row">
    <div className="col-xs-12 col-md-3">
      <h2 className="resume-heading">EDUCATION</h2>
    </div>
    <div className="col-xs-12 col-md-9">
      <div className="resume-category">
      <div className="position">
        <h4>
          UNIVERSITY OF SAN FRANCISCO
          <small className="resume-role"> B.SC - COMPUTER SCIENCE & POLITICS MAJOR - 2007</small>
        </h4>
        <p>Presidential Scholarship recipient. 3.85 GPA</p>
      </div>
      </div>
    </div>
    </div>
    <div className="row">
    <div className="col-xs-12 col-md-3">
      <h2 className="resume-heading">TECHNICAL EXPERTISE</h2>
    </div>
    <div className="col-xs-12 col-md-9">
      <div className="resume-category">
      <div className="row">
        <div className="col-xs-12 col-lg-4">
          <ul className="skills">
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS/Sass/Less</li>
            <li>Sketch</li>
          </ul>
        </div>
        <div className="col-xs-12 col-lg-4">
          <ul className="skills">
            <li>Javascript Frameworks(React, Angular)</li>
            <li>Node.js</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="col-xs-12 col-lg-4">
          <ul className="skills">
            <li>Git</li>
            <li>MYSQL</li>
            <li>NOSQL</li>
            <li>Objective-C</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
    </div>
  </div>

</div>
)

function jobMarkup (job){
  var markup = <div className="resume-section">
    <div className="position">
      <h4>
        {job.place}
        <small className="resume-role"> {job.title} | {job.dates}</small>
      </h4>
      <p>{job.description}</p>
    </div>
  </div>;
  return markup;

}

ResumePage.propTypes = {
  positions: PropTypes.array
}

module.exports = ResumePage;
