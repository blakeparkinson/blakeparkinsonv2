var React = require('react');
var PropTypes = React.PropTypes;

var ResumePage = props => (
  <div className="resume-page row">
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
      <h2 className="resume-heading">Work Experience</h2>
    </div>
    <div className="col-xs-12 col-md-9">
    {props.positions.map((job) => {
      return jobMarkup(job);
    })}

    </div>
    </div>
  </div>

</div>
)

function jobMarkup (job){
  var markup = <div className="resume-category">
    <div className="position">
      <h4>
        {job.place}
        <small className="resume-role"> {job.title} | {job.dates}</small>
        <p>{job.description}</p>
      </h4>
    </div>
  </div>;
  return markup;

}

ResumePage.propTypes = {
  positions: PropTypes.array
}

module.exports = ResumePage;
