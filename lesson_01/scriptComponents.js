var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var animals = ['cat', 'dog', 'lion'];
var users = ['Jack', 'Oleg', 'Anna'];

var Header = function Header() {
    return React.createElement(
        'header',
        null,
        React.createElement(
            'h1',
            null,
            'Title'
        )
    );
};

var Main = function Main() {
    return React.createElement(
        'main',
        null,
        React.createElement(
            'h2',
            null,
            'Main'
        ),
        React.createElement(List, { arr: animals }),
        React.createElement(List, { arr: users }),
        React.createElement(List, { arr: [10, 20, 30] }),
        React.createElement(List, null)
    );
};

var List = function List(_ref) {
    var _ref$arr = _ref.arr,
        arr = _ref$arr === undefined ? [] : _ref$arr;

    return arr.length ? React.createElement(
        'ul',
        null,
        arr.map(function (item, index) {
            return React.createElement(
                'li',
                { key: index },
                item
            );
        })
    ) : null;
};

var App = function App() {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Header, null),
        React.createElement(Main, null)
    );
};

root.render(React.createElement(App, null));