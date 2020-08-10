import React, { Component } from "react";
import { Flex, ListView } from "antd-mobile";

const data = [
  {
    img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
    title: "Meet hotel",
    des: "不是所有的兼职汪都需要风吹日晒",
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    title: "McDonald's invites you",
    des: "不是所有的兼职汪都需要风吹日晒",
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png",
    title: "Eat the week",
    des: "不是所有的兼职汪都需要风吹日晒",
  },
];

const NUM_ROWS = 10;
const MAX_ROWS = 30;
let pageIndex = 0;

const genData = (pIndex = 0, max = MAX_ROWS) => {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS && pageIndex * NUM_ROWS <= max; i++) {
    const ii = pIndex * NUM_ROWS + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  console.log(dataBlob, pIndex, max);
  return dataBlob;
};

export default class CustomizedListView extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
    };
  }

  componentDidMount() {
    // this.rData = genData();
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 600);
  }

  onEndReached = (event) => {
    console.log("onEndReached");
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log("reach end", event, this.rData);

    // stop from loading
    if (Object.keys(this.rData).length >= MAX_ROWS) {
      this.setState({ isLoading: false });
      return;
    }
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = { ...this.rData, ...genData(++pageIndex) };
      console.log(this.rData);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  };

  renderRow = (post) => {
    return (
      <Flex>
        <Flex.Item>
          <h3>{post.title}</h3>
          <p>{post.des}</p>
        </Flex.Item>
      </Flex>
    );
  };

  render() {
    let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      // console.log(obj, rowData, sectionID, rowID);
      return (
        <Flex key={rowID}>
          <Flex.Item>
            <h3>{obj.title}</h3>
            <p>{obj.des}</p>
          </Flex.Item>
        </Flex>
      );
    };

    return (
      <ListView
        // ref={(el) => (this.lv = el)}
        dataSource={this.state.dataSource}
        // renderHeader={() => <span>header</span>}
        renderFooter={() => (
          <div style={{ padding: 30, textAlign: "center" }}>
            {this.state.isLoading ? "Loading..." : "Loaded"}
          </div>
        )}
        renderRow={row}
        className="am-list"
        // pageSize={4}
        useBodyScroll
        // onScroll={() => {
        //   console.log("scroll");
        // }}
        // scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}
