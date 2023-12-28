import { renderObject } from "./utils.js";

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);

let animals = [`cat`, `dog`, `lion`];
let Jack = {
  name: `Jack`,
  age: 23,
  child: { name: `Child name`, age: 3, animals },
  animals,
};

const Header = () => {
  return (
    <header>
      <h1>Hello, world</h1>
      <h2>Description</h2>
    </header>
  );
};

const CustomTag = (tag) => `${tag}`;

const List = ({ list = [], tag = "ul", color }) => {
  const ListTag = CustomTag(tag);
  const styles = {
    color,
  };

  return list.length ? (
    <ListTag style={styles}>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ListTag>
  ) : null;
};

const User = ({ user = {} }) => renderObject(user);

class Users extends React.Component {
  constructor(props) {
    super(props);

    // setTimeout(() => {
    //   this.setState(
    //     {
    //       list: [...this.state.list, `cat`],
    //       color: `green`
    //     },
    //     () => {
    //       console.log(this.state.list);
    //     }
    //   );
    // }, 1000);

    // const removeItems = setInterval(() => {
    //   this.setState(
    //     {
    //       list: this.state.list.slice(0, -1),
    //     },
    //     () => {
    //       console.log(this.state.list);
    //       if (!this.state.list.length) clearInterval(removeItems);
    //       else if (
    //         this.state.list.length === Math.round(this.props.list.length / 2)
    //       )
    //         this.setState({ color: `green` });
    //     }
    //   );
    // }, 1000);
  }

  state = { ...this.props, color: `crimson` };

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

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    setTimeout(() => {
      this.setState((prevState) => ({
        user: { ...prevState.user, name: `Oleg` },
      }));
    }, 1000);

    setTimeout(() => {
      this.setState((prevState) => ({
        user: { ...prevState.user, age: 50 },
      }));
    }, 1000);

    setTimeout(() => {
      this.setState((prevState) => ({
        user: { ...prevState.user, country: `Poland` },
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

const App = () => (
  <React.Fragment>
    <Header />
    <List list={animals} color={`crimson`} />
    <List list={[`Jack`, `Taras`]} tag={"ol"} color={`indigo`} />
    <List />

    <User user={Jack} />

    <Users list={[`Jack`, `Taras`, `Andriy`, `Hanna`]} />

    <UserClass user={{ name: `Jack`, age: 30, country: `Ukraine` }} />
  </React.Fragment>
);
root.render(<App />);
