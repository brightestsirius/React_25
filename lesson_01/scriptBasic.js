import { renderObject, renderArray } from './utils.js';

var domContainer = document.querySelector("#root");
var root = ReactDOM.createRoot(domContainer);

var str = "!!!";

var animals = ["cat", "dog", "lion"];

var user = {
  name: "Jack",
  age: 20,
  animals: ["cat", "dog"],
  child: {
    name: "Anna",
    age: 3
  }
};

// Object.keys(user) => [`name`, `age`]; => user[`name`]
// Object.entries(user) => [[`name`, `Jack`], [`age`, 20]];

var conditionalRendering = "Conditional rendering";
var isTrue = false;

// JSX
root.render(React.createElement(
  React.Fragment,
  null,
  React.createElement(
    "h1",
    null,
    "Hello, world",
    str
  ),
  React.createElement(
    "h2",
    null,
    "Description"
  ),
  React.createElement(
    "ul",
    null,
    animals.map(function (item, index) {
      return React.createElement(
        "li",
        { key: index },
        item
      );
    })
  ),
  renderObject(user),
  isTrue ? React.createElement(
    "p",
    null,
    conditionalRendering
  ) : null
));