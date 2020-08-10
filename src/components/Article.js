import React, { Component } from "react";
import { WingBlank } from "antd-mobile";

export default class Article extends Component {
  renderArticle = () => {
    return (
      <WingBlank size="lg">
        <p className="article-content-url">
          Original URL:
          <a href={this.props.link}>{this.props.link}</a>
        </p>
        <article
          className="article-content"
          dangerouslySetInnerHTML={{ __html: this.props.description }}
        ></article>
      </WingBlank>
    );
  };

  // componentDidUpdate() {
  //   window.scrollTo(0, 0);
  //   return this.renderArticle();
  // }

  render() {
    window.scrollTo(0, 0);
    // console.log(this.props.description);
    return this.renderArticle();
  }
}
