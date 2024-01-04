import React, { Component } from "react";
// import List from "./components/ListClass/List";
// import User from "./components/User/User";
import List from './components/ComponentLifecycle/List'

export default class App extends Component {
  render() {
    const animals = [`cat`, `dog`, `lion`, `mouse`, `wolf`];
    const user = { name: `Jack`, age: 30, city: `Kharkiv` };

    return (
      <>
        {/* <List list={animals} /> */}
        {/* <User user={user} /> */}
        <List list={animals} />
      </>
    );
  }
}
