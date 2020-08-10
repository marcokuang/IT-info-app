import React from "react";
import "assets/styles/formInput.less";
import "assets/fonts/style.css";

export default class FormInput extends React.Component {
  render() {
    const { iconClassName, type, placeholder, value, onChange } = this.props;
    return (
      <div className="input-group">
        <span className={iconClassName}></span>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></input>
      </div>
    );
  }
}
