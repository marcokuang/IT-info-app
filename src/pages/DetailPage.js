import React, { Component } from "react";
import Header from "components/Header";
import "assets/styles/detailPage.less";
import Article from "components/Article";
import SubList from "components/SubList";

export default class DetailPage extends Component {
  constructor(props) {
    super(props);
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsegmentfault.com%2Farticles%2Ffeeds"
    )
      .then((res) => res.json())
      .then((data) => {
        const res = data.items;

        const posts = res.map(({ title, link, thumbnail, description }) => {
          return { title, link, thumbnail, description };
        });

        this.setState({ posts, currentPost: posts[0] });
      });
    this.state = { posts: [], currentPost: {} };
  }

  render() {
    return (
      <div>
        <Header />
        <Article {...this.state.currentPost} />
        <SubList />
      </div>
    );
  }
}
