import React, { Component } from "react";
import { Tabs, WhiteSpace, List } from "antd-mobile";
import { Link } from "react-router-dom";
import { TabContentGetter, tabs } from "services/DataController";

export default class TabComponent extends Component {
  constructor(props) {
    super(props);

    this.tabs = tabs;

    const state = {};
    for (let tab of this.tabs) {
      state[tab] = [];
    }
    this.state = { state };
    this.tabs.map((source) => TabContentGetter(source, this));
  }

  renderTab = (posts) => {
    if (!this.state[posts]) {
      return null;
    }
    console.log(posts);
    return this.state[posts].map((post) => {
      return (
        <List.Item key={post.title} wrap>
          {/* <a href={post.link}>{post.title}</a> */}

          <Link
            to={{
              pathname: "/detail",
              hash: "#article",
              ...post,
            }}
            replace
          >
            {post.title}
          </Link>
        </List.Item>
      );
    });
  };

  generateTabContents = () => {
    return this.tabs.map((site) => {
      return (
        <div key={site.name}>{this.renderTab(site.name.toLowerCase())}</div>
      );
    });
  };

  render() {
    return (
      <div>
        <WhiteSpace />
        <Tabs tabs={this.tabs} initialPage={2} animated useOnPan={false}>
          {this.generateTabContents()}
        </Tabs>
        <WhiteSpace />
      </div>
    );
  }
}
