var React = require('react');

var Find = require('./Find');



var Contact = props => (
  <div className="third">
  <div className="container contact">
    <h3 className="cursive" id="info">Contact Me</h3>
    <div className="sub">I do web development, play soccer with you, babysit your kids. Message me and let's chat!</div>
    <ul>
      <form name="email">
        <div className="form-group">
          <label className="control-label">Your email.</label>
          <input className="form-control email" name="email" required/>
          <div>
            <label className="control-label">What's up?</label>
          </div>

          <textarea className="form-control"></textarea>
          <div className="btn btn-warning">Send</div>
        </div>
      </form>
    </ul>
    <Find/>

  </div>
</div>
)

module.exports = Contact;
