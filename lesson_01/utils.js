var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var renderArray = function renderArray(arr) {
  return arr.length ? React.createElement(
    "ol",
    null,
    arr.map(function (item, index) {
      return React.createElement(
        "li",
        { key: index },
        Array.isArray(item) ? renderArray(item) : item
      );
    })
  ) : null;
};

var renderObject = function renderObject(obj) {
  return Object.keys(obj).length ? React.createElement(
    "ul",
    null,
    Object.keys(obj).map(function (key, index) {
      return React.createElement(
        "li",
        { key: index },
        _typeof(obj[key]) === "object" ? Array.isArray(obj[key]) ? renderArray(obj[key]) : renderObject(obj[key]) : obj[key]
      );
    })
  ) : null;
};

export { renderObject };