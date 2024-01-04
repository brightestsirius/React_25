import React, { Component } from "react";

export default class ListClass extends Component {
  constructor(props) {
    super(props);

    // setTimeout(() => {
    //   this.setState({
    //     list: [...this.state.list, `tiger`],
    //     color: `red`
    //   });
    // }, 1000);

    const removeItem = setInterval(() => {
        this.setState({
            list: this.state.list.slice(0,-1)
        }, () => {
            console.log(this.state.list);

            !this.state.list.length && clearInterval(removeItem);
            if(this.state.list.length === Math.round(this.props.list.length/2)){
                this.setState({
                    color: `green`
                })
            }
        })
    }, 1000)
  }

  state = { ...this.props, color: `black` };

  render() {
    let { list = [], color } = this.state;

    return list.length ? (
      <ul style={{ color }}>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : null;
  }
}
