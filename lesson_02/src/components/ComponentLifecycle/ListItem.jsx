import React, { Component, PureComponent } from "react";

// smart and dumb components

export default class ListItem extends PureComponent {
  componentDidMount() {
    console.log(`in ListItem componentDidMount`);
  }

  componentDidUpdate(){
    console.log(`in ListItem componentDidUpdate`);
  }

  render() {
    let { item } = this.props;

    return <li>{item}</li>;
  }
}
