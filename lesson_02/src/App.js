import React, { Component } from "react";
import List from "./components/Lifecycle/List";

export default class App extends Component {
  state = {
    showList: true,
  };

  removeListComponent() {
    this.setState({
      showList: false,
    });
  }

  render() {
    return (
      <>
        <button onClick={() => this.removeListComponent()}>
          Remove List Component
        </button>
        {this.state.showList && <List list={[`cat`, `dog`, `lion`]} />}
      </>
    );
  }
}
