import React, { Component } from "react";
import { Tabs, WhiteSpace, List } from "antd-mobile";

export default class TabComponent extends Component {
  tabs = [
    { title: "FrontEnd", name: "frontend" },
    { title: "BackEnd", name: "backend" },
    { title: "开发者头条", name: "toutiao" },
  ];

  constructor(props) {
    super(props);
    this.state = { backendPosts: [], toutiaoPosts: [], frontendPosts: [] };
    this.tabs.map((source) => this.retrieveContentsFromSource(source));
  }

  retrieveContentsFromSource = (source) => {
    let sourceURL = "";
    switch (source.name) {
      case "backend":
        sourceURL =
          "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsegmentfault.com%2Farticles%2Ffeeds";
        break;
      case "toutiao":
        sourceURL =
          "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frsshub.app%2Ftoutiao%2Ftoday";
        break;
      case "frontend":
        sourceURL =
          "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frsshub.app%2Fsegmentfault%2Fchannel%2Ffrontend";
        break;
      default:
        break;
    }

    fetch(sourceURL)
      .then((res) => res.json())
      .then((data) => {
        const posts = data.items.map(({ title, link, description }) => {
          return {
            title,
            link,
            description,
          };
        });
        // console.log(data.items);
        switch (source.name) {
          case "backend":
            this.setState({ ...this.state, backendPosts: posts });
            break;
          case "toutiao":
            this.setState({ ...this.state, toutiaoPosts: posts });
            break;
          case "frontend":
            this.setState({ ...this.state, frontendPosts: posts });
            break;
          default:
            break;
        }
      });
  };

  renderTab = (posts) => {
    return this.state[posts].map((post) => {
      return (
        <List.Item key={post.title} wrap>
          <a href={post.link}>{post.title}</a>
        </List.Item>
      );
    });
  };

  generateTabContents = () => {
    return this.tabs.map((site) => {
      return (
        <div key={site.name}>
          {this.renderTab(site.name.toLowerCase() + "Posts")}
        </div>
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
