import React, { Component } from "react";

export default class List extends Component {
  constructor(props) {
    super(props);

    // setTimeout(() => {
    //   this.setState(
    //     {
    //         list: [...this.state.list, `tiger`],
    //         color: `green`
    //     }, () => {
    //         console.log(this.state);
    //     });

    // }, 1000);

    // splice

    const removeItem = setInterval(() => {
        this.setState(
            {
                list: this.state.list.slice(0, -1)
            }, 
            () => {
                !this.state.list.length && clearInterval(removeItem);

                if(this.state.list.length === Math.round(this.props.list.length/2)){
                    this.setState({
                        borderWidth: `10px`
                    })
                }

                console.log(this.state.list);
            })

    }, 1000)

  }

  state = {
    color: `black`,
    ...this.props,
    borderWidth: 0
  };

  render() {
    let { list = [], color, borderWidth } = this.state;

    const styleComponent = {
        color,
        backgroundColor: `lightpink`,
        border: `0px solid black`,
        borderWidth
    }

    return list.length ? (
      <ul style={ styleComponent }>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : null;
  }
}