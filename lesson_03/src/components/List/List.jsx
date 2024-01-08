import React, { Component } from "react";
import "./style.sass";

import ListItem from "./ListItem";

import { getRandomIntInclusive } from "./../../utils/utils";

export default class List extends Component {
  state = { ...this.props, borderWidth: 0, activateItems: null };

  componentDidMount() {
    const activateItems = setInterval(() => {
      console.log(`in activateItems Interval`);

      let unactiveItems = this.state.list.filter((item) => !item.active);
      let randomIndex = getRandomIntInclusive(0, unactiveItems.length - 1);
      let randomItem = unactiveItems[randomIndex];

      this.setState(
        {
          list: this.state.list.filter((item) => item !== randomItem),
        },
        () => {
          let unactiveItems = this.state.list.filter((item) => !item.active);

          if (!unactiveItems.length) {
            // this.setState({
            //   borderWidth: `10px`,
            // });
            clearInterval(activateItems);
          }

          //   if (unactiveItems.length === Math.round(this.state.list.length / 2)) {
          //     this.setState({
          //       borderWidth: `5px`,
          //     });
          //   }
        }
      );
    }, 1000);

    this.setState({ activateItems });
  }

  componentWillUnmount() {
    console.log(`in List componentWillUnmount`);
    clearInterval(this.state.activateItems);
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
