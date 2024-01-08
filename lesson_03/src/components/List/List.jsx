import React, { Component } from "react";
import "./style.sass";

import ListItem from "./ListItem";

import { getRandomIntInclusive } from "./../../utils/utils";

export default class List extends Component {
  state = { ...this.props, borderWidth: 0, activateItem: null };

  componentDidMount() {
    const activateItem = setInterval(() => {
      let unactiveList = this.state.list.filter((item) => !item.active);
      let randomIndex = getRandomIntInclusive(0, unactiveList.length - 1);
      let randomItem = unactiveList[randomIndex];

      this.setState(
        (prevState) => ({
          list: prevState.list.filter((item) => item !== randomItem),
        }),
        () => {
          let unactiveList = this.state.list.filter((item) => !item.active);
          if (!unactiveList.length) {
            clearInterval(activateItem);
          }
        }
      );
    }, 1000);

    this.setState({ activateItem });
  }

  componentWillUnmount() {
    console.log(`in List componentWillUnmount`);
    clearInterval(this.state.activateItem);
  }

  render() {
    let { list = [], borderWidth } = this.state;

    return list.length ? (
      <ul className="list" style={{ borderWidth }}>
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    ) : null;
  }
}
