import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleUser = this.handleUser.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
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

  handleDemo(e) {
    e.preventDefault();
    this.props.processForm({ username: "tiger", password: "123456" });
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
          <button className="modal-button" id="login-demo-1" onClick={this.handleDemo}>Continue with Demo 1</button>
          <button className="modal-button" id="login-demo-2" onClick={this.handleDemo}>Continue with Demo 2</button>
          <button className="modal-button" id="login-demo-3" onClick={this.handleDemo}>Continue with Demo 3</button>
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
          <p>We may use information you provide us to make some extra cash by selling to the highest bidder.</p>
        </form>
      </>
    );
  
  }
}

export default SessionForm;
