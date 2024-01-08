import React, { Component } from "react";

import List from "./components/List/List";
import Counter from './components/Counter/Counter'
import FunctionalList from './components/FunctionalList/FunctionalList'
import Todos from './components/Todos/Todos'

export default class App extends Component {
  state = {
    animals: [
      { type: `turtle`, icon: `🐢` },
      { type: `octopus`, icon: `🐙` },
      { type: `fish`, icon: `🐠` },
      { type: `flamingo`, icon: `🦩` },
      { type: `penguin`, icon: `🐧` },
    ],
    showList: true
  };

  handlerShowList(){
    this.setState({
      showList: false
    })
  }

  render() {
    let { animals, showList } = this.state;

    return (
      <>
        {/* <button onClick={this.handlerShowList.bind(this)}>Remove List</button> */}
        {/* {showList && <List list={animals} />} */}

        {/* <Counter /> */}
        {/* {showList && <FunctionalList list={animals}  />} */}

        <Todos />
      </>
    );
  }
}
