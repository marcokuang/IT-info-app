import React, { Component } from "react";
import { List } from "antd-mobile";
import Image from "components/Image";

export default class SubList extends Component {
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

        this.setState({ posts });
      });
    this.state = { posts: [] };
  }

  generatePosts = (post, key) => {
    const thumbnailHTML = (post) => {
      if (post.thumbnail) {
        return (
          <img
            src={post.thumbnail}
            alt=""
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = require("assets/images/t0110974b6f051c1e5a.gif");
            }}
          ></img>
        );
      } else {
        return <Image src="t0110974b6f051c1e5a.gif" />;
      }
    };

    return (
      <List.Item
        className="sub-list-item"
        key={key}
        thumb={thumbnailHTML(post)}
        wrap
      >
        <a href={post.link} style={{ textDoration: "None" }}>
          {post.title}
        </a>
        {/* <div
          dangerouslySetInnerHTML={{ __html: post.description }}
          style={{ width: "100%", whiteSpace: "normal" }}
        /> */}
      </List.Item>
    );
  };

  render() {
    // console.log(this.state.posts);
    return (
      <List renderHeader={() => "Latest News"} className="sub-list">
        {this.state.posts.map((post, key) => {
          return this.generatePosts(post, key);
        })}
      </List>
    );
  }
}
