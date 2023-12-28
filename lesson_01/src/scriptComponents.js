const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const animals = [`cat`, `dog`, `lion`];
const users = [`Jack`, `Oleg`, `Anna`];

const Header = () => {
    return <header>
        <h1>Title</h1>
    </header>;
}

const Main = () => {
    return <main>
        <h2>Main</h2>

        <List arr={animals} />
        <List arr={users} />
        <List arr={[10,20,30]} />
        <List />
    </main>;
}

const List = ({arr=[]}) => {
    return arr.length
    ? <ul>
        {arr.map((item, index) => <li key={index}>{item}</li>)}
    </ul> 
    : null
}

const App = () => {
    return <React.Fragment>
        <Header />
        <Main />
    </React.Fragment>
}


root.render(<App />);