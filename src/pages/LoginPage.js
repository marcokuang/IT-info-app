import React, { Component } from "react";
import "assets/styles/loginPage.less";
//import logoImage from "assets/images/logo.png";
import Image from "components/Image";
import LoginForm from "components/LoginForm";

export default class LoginPage extends Component {
  render() {
    return (
      <div className="login-page">
        <Image src="logo5.png" />
        <LoginForm />
      </div>
    );
  }
}
