import React, { Component } from "react";
import ListItem from "./ListItem";

export default class List extends Component {
  constructor(props) {
    super(props);

    console.log(`in List constructor`);
  }

  state = { ...this.props, color: `red` };

  componentDidMount() {
    console.log(`in List componentDidMount`);

    // setTimeout(() => {
    //   this.setState({
    //     list: [...this.state.list, `tiger`],
    //   });
    // }, 1000);

    const removeItem = setInterval(() => {
      console.log(`in setInterval`);
      this.setState(
        (prevState) => ({
          list: prevState.list.slice(0, -1),
        }),
        () => {
          !this.state.list.length && clearInterval(removeItem);
        }
      );
    }, 1000);

    this.setState({ removeItem });
  }

  componentDidUpdate() {
    console.log(`in List componentDidUpdate`, this.state.list);
  }

  componentWillUnmount() {
    console.log(`in List componentWillUnmount`);

    clearInterval(this.state.removeItem);
  }

  render() {
    console.log(`in List render`);
    let { list = [] } = this.state;

    return Array.isArray(list) && list.length ? (
      <ul>
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    ) : null;
  }
}
