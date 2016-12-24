var React = require('react');


var Find = props => (
  <div className="second">
  <div className="container contact">
    <h3 className="cursive" id="find">Find me</h3>
    <div className="sub">Links and stuff</div>
    <ul>
      <li className="col-sm-12 col-md-4 list ">
        <i className="fa fa-github-alt three-x"></i>
        <span className="onehalf-x">
          <a href="https://www.github.com/blakeparkinson/" target="_blank">GitHub</a>
        </span>
      </li>
      <li className="col-sm-12 col-md-4 list">
        <i className="fa fa-linkedin three-x"></i>
        <span className="onehalf-x">
          <a href="https://www.linkedin.com/in/bparky" target="_blank">LinkedIn</a>
        </span>
      </li>
      <li className="col-sm-12 col-md-4 list">
        <i className="fa fa-facebook three-x"></i>
        <span className="onehalf-x">
          <a href="https://www.facebook.com/blakeparkinson" target="_blank">Facebook</a>
        </span>
      </li>
    </ul>

  </div>
</div>
)

module.exports = Find;
