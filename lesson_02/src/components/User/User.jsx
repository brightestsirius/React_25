import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);

    setTimeout(() => {
      this.setState((prevState) => ({
        user: { ...prevState.user, name: `Taras` },
      }));
    }, 1000);

    setTimeout(() => {
      this.setState((prevState) => ({
        user: { ...prevState.user, age: 50 },
      }));
    }, 1000);

    setTimeout(() => {
      this.setState((prevState) => ({
        user: { ...prevState.user, city: `Kyiv` },
      }));
    }, 1000);
  }

  state = { ...this.props };

  render() {
    let { user = {} } = this.state;

    return Object.keys(user).length ? (
      <ul>
        {Object.keys(user).map((key, index) => (
          <li key={index}>
            {key}: {user[key]}
          </li>
        ))}
      </ul>
    ) : null;
  }
}
