import {renderObject, renderArray} from './utils.js'

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);

const str = `!!!`;

const animals = [`cat`, `dog`, `lion`];

const user = {
  name: `Jack`,
  age: 20,
  animals: [`cat`, `dog`],
  child: {
    name: `Anna`,
    age: 3,
  },
};

// Object.keys(user) => [`name`, `age`]; => user[`name`]
// Object.entries(user) => [[`name`, `Jack`], [`age`, 20]];

const conditionalRendering = `Conditional rendering`;
const isTrue = false;


// JSX
root.render(
  <React.Fragment>
    <h1>Hello, world{str}</h1>
    <h2>Description</h2>

    <ul>
      {animals.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>

    {/* <ul>
      {Object.keys(user).map((key, index) => (
        <li key={index}>
          {key}: {Array.isArray(user[key]) ? user[key].join(`, `) : user[key]}
        </li>
      ))}
    </ul> */}

    {renderObject(user)}

    {isTrue ? <p>{conditionalRendering}</p> : null}

  </React.Fragment>
);
