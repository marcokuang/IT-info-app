import React, { Component } from "react";
import { Flex } from "antd-mobile";
import "assets/styles/subject.less";

class SubjectItem extends Component {
  render() {
    const { name, href = "#/list", backgroundPositionX = 0 } = this.props;

    return !name ? (
      <Flex.Item />
    ) : (
      <a href={href} className={"inline"}>
        <span style={{ backgroundPositionX }}></span>
        <p>{name}</p>
      </a>
    );
  }
}

export default class Subject extends Component {
  render() {
    return (
      <div className="subject flex-container">
        <Flex wrap="wrap">
          <SubjectItem name="Javscript" backgroundPositionX={0} />
          <SubjectItem name="UI Design" backgroundPositionX={-50 * 1} />
          <SubjectItem name="HTML5" backgroundPositionX={-50 * 2} />
          <SubjectItem name="Python" backgroundPositionX={-50 * 3} />

          <SubjectItem name="iOS" backgroundPositionX={-50 * 4} />
          <SubjectItem name="Big Data" backgroundPositionX={-50 * 5} />
          <SubjectItem name="C++" backgroundPositionX={-50 * 6} />
          {/* <SubjectItem /> */}
          {/* <SubjectItem name="CSS" /> */}
        </Flex>
      </div>
    );
  }
}
