import React, { PureComponent } from "react";

import ListItem from './ListItem'

export default class List extends PureComponent {
  constructor(props) {
    super(props);

    console.log(`in List constructor`);
  }

  state = { ...this.props, color: `black` };

  componentDidMount() {
    console.log(`in List componentDidMount`);

    // setTimeout(() => {
    //   this.setState({
    //     color: `crimson`,
    //   });
    // }, 1000);

    // setTimeout(() => {
    //     this.setState({
    //       list: this.state.list.slice(0,-1)
    //     });
    //   }, 2000);

      setTimeout(() => {
        this.setState({
            list: [...this.state.list, `eagle`]
        })
      }, 3000)
  }

  componentDidUpdate(){
    console.log(`in List componentDidUpdate`, this.state);
  }

  render() {
    console.log(`in List render`);

    let { list = [], color } = this.state;

    return list.length ? (
      <ul style={{ color }}>
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    ) : null;
  }
}
