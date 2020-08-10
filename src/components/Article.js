import React, { Component } from "react";
import { WingBlank } from "antd-mobile";

export default class Article extends Component {
  renderArticle = () => {
    return (
      <WingBlank size="lg">
        <article
          className="article-content"
          dangerouslySetInnerHTML={{ __html: this.props.description }}
        ></article>
      </WingBlank>
    );
  };

  // componentDidUpdate() {
  //   this.renderArticle();
  // }

  render() {
    // console.log(this.props.description);
    return this.renderArticle();
  }
}
