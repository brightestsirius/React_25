var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { renderObject } from "./utils.js";

var domContainer = document.querySelector("#root");
var root = ReactDOM.createRoot(domContainer);

var animals = ["cat", "dog", "lion"];
var Jack = {
  name: "Jack",
  age: 23,
  child: { name: "Child name", age: 3, animals: animals },
  animals: animals
};

var Header = function Header() {
  return React.createElement(
    "header",
    null,
    React.createElement(
      "h1",
      null,
      "Hello, world"
    ),
    React.createElement(
      "h2",
      null,
      "Description"
    )
  );
};

var CustomTag = function CustomTag(tag) {
  return "" + tag;
};

var List = function List(_ref) {
  var _ref$list = _ref.list,
      list = _ref$list === undefined ? [] : _ref$list,
      _ref$tag = _ref.tag,
      tag = _ref$tag === undefined ? "ul" : _ref$tag,
      color = _ref.color;

  var ListTag = CustomTag(tag);
  var styles = {
    color: color
  };

  return list.length ? React.createElement(
    ListTag,
    { style: styles },
    list.map(function (item, index) {
      return React.createElement(
        "li",
        { key: index },
        item
      );
    })
  ) : null;
};

var User = function User(_ref2) {
  var _ref2$user = _ref2.user,
      user = _ref2$user === undefined ? {} : _ref2$user;
  return renderObject(user);
};

var Users = function (_React$Component) {
  _inherits(Users, _React$Component);

  function Users(props) {
    _classCallCheck(this, Users);

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
    var _this = _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).call(this, props));

    _this.state = Object.assign({}, _this.props, { color: "crimson" });
    return _this;
  }

  _createClass(Users, [{
    key: "render",
    value: function render() {
      var _state = this.state,
          _state$list = _state.list,
          list = _state$list === undefined ? [] : _state$list,
          color = _state.color;


      return list.length ? React.createElement(
        "ul",
        { style: { color: color } },
        list.map(function (item, index) {
          return React.createElement(
            "li",
            { key: index },
            item
          );
        })
      ) : null;
    }
  }]);

  return Users;
}(React.Component);

var UserClass = function (_React$Component2) {
  _inherits(UserClass, _React$Component2);

  function UserClass(props) {
    _classCallCheck(this, UserClass);

    var _this2 = _possibleConstructorReturn(this, (UserClass.__proto__ || Object.getPrototypeOf(UserClass)).call(this, props));

    _this2.state = Object.assign({}, _this2.props);


    setTimeout(function () {
      _this2.setState(function (prevState) {
        return {
          user: Object.assign({}, prevState.user, { name: "Oleg" })
        };
      });
    }, 1000);

    setTimeout(function () {
      _this2.setState(function (prevState) {
        return {
          user: Object.assign({}, prevState.user, { age: 50 })
        };
      });
    }, 1000);

    setTimeout(function () {
      _this2.setState(function (prevState) {
        return {
          user: Object.assign({}, prevState.user, { country: "Poland" })
        };
      });
    }, 1000);
    return _this2;
  }

  _createClass(UserClass, [{
    key: "render",
    value: function render() {
      var _state$user = this.state.user,
          user = _state$user === undefined ? {} : _state$user;


      return Object.keys(user).length ? React.createElement(
        "ul",
        null,
        Object.keys(user).map(function (key, index) {
          return React.createElement(
            "li",
            { key: index },
            key,
            ": ",
            user[key]
          );
        })
      ) : null;
    }
  }]);

  return UserClass;
}(React.Component);

var App = function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Header, null),
    React.createElement(List, { list: animals, color: "crimson" }),
    React.createElement(List, { list: ["Jack", "Taras"], tag: "ol", color: "indigo" }),
    React.createElement(List, null),
    React.createElement(User, { user: Jack }),
    React.createElement(Users, { list: ["Jack", "Taras", "Andriy", "Hanna"] }),
    React.createElement(UserClass, { user: { name: "Jack", age: 30, country: "Ukraine" } })
  );
};
root.render(React.createElement(App, null));