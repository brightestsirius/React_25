import React, { Component } from "react";

import {getRandomInt} from './../../utils/utils'

import ListItem from './ListItem'

export default class List extends Component {
  state = { ...this.props };

  componentDidMount(){
    const removeItem = setInterval(() => {
      console.log(`in setInterval`);

        let randomIndex = getRandomInt(0, this.state.list.length);

        this.setState(prevState => ({
            list: prevState.list.filter((item, index) => index!==randomIndex)
        }), () => {
            console.log(this.state.list);
            !this.state.list.length && clearInterval(removeItem);
        })

    }, 1000);

    this.setState({removeItem})
  }

  componentWillUnmount(){
    console.log(`in List componentWillUnmount`);
    
    clearInterval(this.state.removeItem);
  }

  render() {
    const {list=[]} = this.state;

    return list.length ? <ul>
        {
            list.map((item, index) => <ListItem key={index} item={item} />)
        }
    </ul> : null;
  }
}
