import React, { Component } from "react";

// setState((actualState) => ({}), () => {})

export default class User extends Component {
    constructor(props){
        super(props);

        setTimeout(() => {
            this.setState(
                (actualState) => ({
                    user: {...actualState.user, name: `Taras`}
                }))
        }, 1000)

        setTimeout(() => {
            this.setState((actualState) => ({
                user: {...actualState.user, age: 100}
            }))
        }, 1000)

        setTimeout(() => {
            this.setState(actualState => ({
                user: {...actualState.user, city: `Kyiv`}
            }))
        }, 1000)
    }


  // state = Object.assign({}, this.props);
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
