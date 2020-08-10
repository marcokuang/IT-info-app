import React, { Component } from "react";
import { List } from "antd-mobile";
import Image from "components/Image";
import { Link } from "react-router-dom";
import { LatestNews } from "services/DataController";

export default class SubList extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], fetchedData: false };
  }

  componentDidMount() {
    const posts = LatestNews(this);
    // this.setState({ posts });
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
        {/* <a href={post.link} style={{ textDoration: "None" }}>
          {post.title}
        </a> */}

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
        {/* <div
          dangerouslySetInnerHTML={{ __html: post.description }}
          style={{ width: "100%", whiteSpace: "normal" }}
        /> */}
      </List.Item>
    );
  };

  render() {
    // console.log(this.state.posts);
    if (!this.state.fetchedData) {
      return <p>Loading ...</p>;
    }
    return (
      <List renderHeader={() => "Latest News"} className="sub-list">
        {this.state.posts.map((post, key) => {
          return this.generatePosts(post, key);
        })}
      </List>
    );
  }
}
