import React, { Component } from "react";
import { Carousel } from "antd-mobile";
import Image from "components/Image";

export default class Banner extends Component {
  state = {
    data: ["banner1.png", "banner2.png", "banner3.png"],
    imgHeight: "auto",
  };

  render() {
    return (
      <div>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) =>
            console.log(`slide from ${from} to ${to}`)
          }
          afterChange={(index) => console.log("slided to", index)}
        >
          {this.state.data.map((val) => (
            <a
              key={val}
              href="##"
              style={{
                display: "inline-block",
                width: "100%",
                height: this.state.imgHeight,
              }}
            >
              <Image
                src={val}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event("resize"));
                  this.setState({ imgHeight: "auto" });
                }}
                width="100%"
              />
            </a>
          ))}
        </Carousel>
      </div>
    );
  }
}
