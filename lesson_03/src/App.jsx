import React, { Component } from "react";

import List from "./components/List/List";

export default class App extends Component {
  constructor() {
    super();

    this.hideList = this.hideList.bind(this);
  }
  state = {
    showList: true,
    list: [
      { type: `turtle`, icon: `🐢` },
      { type: `octopus`, icon: `🐙` },
      { type: `fish`, icon: `🐠` },
      { type: `flamingo`, icon: `🦩` },
      { type: `penguin`, icon: `🐧` },
    ],
  };

  hideList() {
    this.setState({
      showList: false,
    });
  }

  render() {
    let { list = [], showList } = this.state;

    return (
      <>
        <button onClick={this.hideList}>Remove List</button>

        {showList && <List list={list} />}
      </>
    );
  }
}
