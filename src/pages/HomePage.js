import React, { Component } from "react";
import "assets/styles/homePage.less";
import Header from "components/Header";
import Banner from "components/Banner";
import Subject from "components/Subject";
import SubList from "components/SubList";
import Tabs from "components/Tabs";

export default class LoginPage extends Component {
  render() {
    return (
      <div className="home-page">
        <Header />
        <Banner />
        <Subject />
        <SubList />
        <Tabs />
      </div>
    );
  }
}
