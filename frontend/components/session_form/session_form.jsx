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
    this.props.processForm(user);
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.processForm({
      username: "tiger",
      password: "123456"
    });
    this.props.closeModal();
  }

  renderErrors(){
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const display = (this.props.formType === "Signup") ? (
      <Link to="/login">Already have an account? Log In!</Link>
    ) : (
      <Link to="/signup">New user? Sign up!</Link>
    );

    const emailInput = (this.props.formType === "Signup") ? (
      <input className="modal-input" onChange={this.handleEmail} type="text" value={this.state.email} placeholder="Your email"/>
    ) : (
      <div></div>
    );

    return (
      <div>
        <button className="modal-button" onClick={this.handleDemo}>Demo Login</button>
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <input className="modal-input" onChange={this.handleUser} type="text" value={this.state.username} placeholder="Your username"/>
          {emailInput}
          <input className="modal-input" onChange={this.handlePassword} type="password" value={this.state.password} placeholder="Your password"/>
          <button className="modal-button">{this.props.formType}</button>
        </form>
      </div>
    );
  
  }
}

export default SessionForm;
