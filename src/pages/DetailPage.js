import React, { Component } from "react";
import Header from "components/Header";
import "assets/styles/detailPage.less";
import Article from "components/Article";
import SubList from "components/SubList";

export default class DetailPage extends Component {
  render() {
    // const { title, link, thumbnail, description } = this.props.location;
    // console.log(title, link, thumbnail, description);
    return (
      <div>
        <Header entryPoint="detailPage" />
        <Article {...this.props.location} />
        <SubList />
      </div>
    );
  }
}
