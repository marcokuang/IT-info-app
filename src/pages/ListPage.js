import React, { Component } from "react";
import Header from "components/Header";
import CustomizedListView from "components/CustomizedListView";

export default class ListPage extends Component {
  render() {
    return (
      <div className="list-page">
        <Header />
        <CustomizedListView />
      </div>
    );
  }
}
