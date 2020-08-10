import React from "react";
import "assets/fonts/style.css";
import FormInput from "components/FormInput";
import FormButton from "components/FormButton";
import { Link } from "react-router-dom";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", password: "" };
  }

  handleUserNameChange = (e) => {
    this.setState({ ...this.state, userName: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ ...this.state, password: e.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <form className="login-form" action="##">
        <FormInput
          type="text"
          placeholder="User Name"
          iconClassName="icon-mobile2"
          value={this.state.userName}
          onChange={this.handleUserNameChange}
        ></FormInput>
        <FormInput
          type="password"
          placeholder="Password"
          iconClassName="icon-key"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        ></FormInput>
        <Link to="/home">
          <FormButton isLoginButton={true}>Login</FormButton>
        </Link>
        <FormButton type="regular">Forget Password</FormButton>
        <FormButton>Sign Up</FormButton>&emsp;
        <Link to="/home">
          <FormButton>Guest Login</FormButton>
        </Link>
      </form>
    );
  }
}
