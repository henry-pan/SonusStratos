import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };

    this.handleUser = this.handleUser.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUser(e) {
    this.setState({ username: e.target.value });
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleDemo(user, e) {
    e.preventDefault();
    this.props.processForm({ username: user, password: "123456" });
    this.props.closeModal();
  }
  
  renderErrors(){
    return (
      <ul className="modal-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    let emailInput;
    if (this.props.formType === "Signup") {
      emailInput = <input className="modal-input" onChange={this.handleEmail} type="text" value={this.state.email} placeholder="Your email"/>;
    }

    let demoLogin;
    if (this.props.formType === "Login") {
      demoLogin = <>
        <div className="modal-social-login">
          <button className="modal-button" id="login-demo-1" onClick={(e) => this.handleDemo("Stratos", e)}>Continue with Demo 1</button>
          <button className="modal-button" id="login-demo-2" onClick={(e) => this.handleDemo("Jun", e)}>Continue with Demo 2</button>
          <button className="modal-button" id="login-demo-3" onClick={(e) => this.handleDemo("Tiger", e)}>Continue with Demo 3</button>
        </div>
        <div className="modal-divider">
        <p>or</p>
        </div>
      </>;
    }

    return (
      <>
        {demoLogin}
        <form className="modal-form" onSubmit={this.handleSubmit}>
          <input className="modal-input" onChange={this.handleUser} type="text" value={this.state.username} placeholder="Your username"/>
          {emailInput}
          <input className="modal-input" onChange={this.handlePassword} type="password" value={this.state.password} placeholder="Your password"/>
          {this.renderErrors()}
          <button className="modal-button">{this.props.formType}</button>
          <p>We won't be using your email for anything, except to take up space in our database. You can never unsubscribe - you're here forever!</p>
          <p>We may use information you provide us to do absolutely nothing.</p>
        </form>
      </>
    );
  
  }
}

export default SessionForm;
