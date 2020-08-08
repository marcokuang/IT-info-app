import React from "react";
import "assets/styles/formButton.less";

export default class FormButton extends React.Component {
  render() {
    return this.props.type === "regular" ? (
      <a href="###">{this.props.children}</a>
    ) : (
      <button
        className={`form-button ${
          this.props.isLoginButton ? "login-button" : ""
        }`}
      >
        {this.props.children}
      </button>
    );
  }
}
