import React, { Component } from 'react'

export default class ListItem extends Component {

  componentWillUnmount(){
    console.log(`in ListItem componentWillUnmount`);
  }

  render() {
    const {item={}} = this.props;

    return <li>{item.type} {item.icon}</li>
  }
}
