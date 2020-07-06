Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _imports = require("./../../imports.js");

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t;
}

function _getPrototypeOf(e) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}

function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && _setPrototypeOf(e, t);
}

function _setPrototypeOf(e, t) {
    return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e;
    })(e, t);
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

var Interceptors = function() {
    function i() {
        var e, t;
        _classCallCheck(this, i);
        for (var r = arguments.length, o = new Array(r), n = 0; n < r; n++) o[n] = arguments[n];
        return _defineProperty(_assertThisInitialized(t = _possibleConstructorReturn(this, (e = _getPrototypeOf(i)).call.apply(e, [ this ].concat(o)))), "requestCb", []), 
        _defineProperty(_assertThisInitialized(t), "responseCb", []), _defineProperty(_assertThisInitialized(t), "request", {
            use: function(e) {
                this.requestCb.push(e);
            }
        }), _defineProperty(_assertThisInitialized(t), "response", {
            use: function(e) {
                this.responseCb.push(e);
            }
        }), t;
    }
    return _inherits(i, _imports.BaseInterceptors), i;
}(), interceptors = new Interceptors(), _default = interceptors;

exports.default = _default;