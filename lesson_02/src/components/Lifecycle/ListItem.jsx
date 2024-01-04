import React, { PureComponent } from "react";

export default class ListItem extends PureComponent {
  componentDidMount() {
    console.log(`in ListItem componentDidMount`);
  }

  componentDidUpdate() {
    console.log(`in ListItem componentDidUpdate`);
  }

  componentWillUnmount() {
    console.log(`in ListItem componentWillUnmount`, this.props.item);
  }

  toggleColor() {
    this.setState({
      color: this.state.color === `black` ? `red` : `black`,
    });
  }

  state = {
    color: `black`,
  };

  render() {
    let { item } = this.props;
    let { color } = this.state;

    return (
      <li style={{ color }}>
        {item}{" "}
        <button onClick={this.toggleColor.bind(this)}>Toggle color</button>
      </li>
    );
  }
}
