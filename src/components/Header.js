import React, { Component } from "react";
import { NavBar, SearchBar } from "antd-mobile";
import Image from "components/Image";
import "assets/styles/header.less";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <div className="header">
        <NavBar
          // mode="light"
          // icon={<Icon type="left" />}
          // onLeftClick={() => console.log("onLeftClick")}
          leftContent={[
            <Link to="/" key="0">
              <Image src="logo5.png" key="0" height="32px" />
            </Link>,
          ]}
        >
          <SearchBar
            maxLength="20"
            value={this.state.value}
            placeholder="Search"
            onSubmit={(value) => console.log(value, "onSubmit")}
            onClear={(value) => console.log(value, "onClear")}
            onFocus={() => console.log("onFocus")}
            onBlur={() => console.log("onBlur")}
            onCancel={() => console.log("onCancel")}
            onChange={this.onChange}
          />
        </NavBar>
      </div>
    );
  }
}
