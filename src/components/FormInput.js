import React from "react";
import "assets/styles/formInput.less";
import "assets/fonts/style.css";

export default class FormInput extends React.Component {
  render() {
    return (
      <div className="input-group">
        <span className={this.props.iconClassName}></span>
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
        ></input>
      </div>
    );
  }
}
