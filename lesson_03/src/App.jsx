import React, { Component } from "react";

import List from "./components/List/List";
import Counter from "./components/Counter/Counter";
import FunctionalList from "./components/FunctionalList/FunctionalList";
import CrudList from "./components/CRUD/List";

export default class App extends Component {
  state = {
    animals: [
      { type: `turtle`, icon: `🐢` },
      { type: `octopus`, icon: `🐙` },
      { type: `fish`, icon: `🐠` },
      { type: `flamingo`, icon: `🦩` },
      { type: `penguin`, icon: `🐧` },
    ],
    showList: true,
  };

  render() {
    let { animals = [], showList } = this.state;

    return (
      <>
        {/* <button
          onClick={() => {
            this.setState({
              showList: false,
            });
          }}
        >
          Remove List
        </button> */}

        {/* {showList && <List list={animals} />} */}

        {/* <Counter /> */}

        {/* {showList && <FunctionalList list={animals} />} */}

        <CrudList />
      </>
    );
  }
}
