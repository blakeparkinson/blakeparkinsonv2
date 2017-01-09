var React = require('react');
var PropTypes = React.PropTypes;

var FindContainer = require('./FindContainer');


var Contact = props => (
  <div className="third" id="contact">
  <div className="container contact">
    <h3 className="cursive" id="info">Contact Me</h3>
    <div className="sub">I'm a great developer, undefeated U5 soccer coach, and Mario Party champion. Drop me a line and let's chat.</div>
      <form name="email">
        <div className="form-group">
          <label className="control-label">Your email.</label>
          <input className="form-control email" name="email" id="email" value={props.formItems.email} onChange={props.handleChange} required/>
          <div>
            <label className="control-label">What's up?</label>
          </div>

          <textarea className="form-control" id="text" value={props.formItems.bodyText} onChange={props.handleChange} ></textarea>
          <div className="text-center">
          { !props.formItems.response ?
            <div className="btn btn-warning" onClick={props.submitForm}>Send</div> :
            <div className="ajax-response">{props.formItems.response}</div>
          }
          </div>
        </div>
      </form>
      <FindContainer/>

  </div>
</div>
)

Contact.propTypes = {
  handleChange: PropTypes.func,
  submitForm: PropTypes.func,
  formItems: PropTypes.object

}

module.exports = Contact;
