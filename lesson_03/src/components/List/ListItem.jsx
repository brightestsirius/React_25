import React, { Component } from "react";

export default class ListItem extends Component {
  componentWillUnmount() {
    console.log(`in ListItem componentWillUnmount`);
  }
  
  render() {
    let { item = {} } = this.props;
    return (
      <li className={item.active && `active`}>
        {item.type} {item.icon}
      </li>
    );
  }
}
