Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _wepy = _interopRequireDefault(require("./../../tmp/index.js")), _mta_analysis = _interopRequireDefault(require("./mta_analysis.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

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

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
        Object.defineProperty(e, r.key, r);
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
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

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

var SaMixin = function() {
    function i() {
        var e, t;
        _classCallCheck(this, i);
        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
        return _defineProperty(_assertThisInitialized(t = _possibleConstructorReturn(this, (e = _getPrototypeOf(i)).call.apply(e, [ this ].concat(r)))), "sa", null), 
        t;
    }
    return _inherits(i, _wepy["default"].mixin), _createClass(i, [ {
        key: "onLoad",
        value: function() {
            i._enable ? (_mta_analysis.default.Page.init(), this.sa = new SA(_mta_analysis.default)) : this.sa = new SA(null);
        }
    } ], [ {
        key: "init",
        value: function(e) {
            i._enable && e && _mta_analysis.default.App.init(e);
        }
    }, {
        key: "setEnable",
        value: function(e) {
            this._enable = e;
        }
    } ]), i;
}();

_defineProperty(exports.default = SaMixin, "_enable", !1);

var SA = function e(t) {
    var n = this;
    _classCallCheck(this, e), _defineProperty(this, "_mta", null), _defineProperty(this, "Event", null), 
    this._mta = t, this.Event = {
        stat: function() {
            if (!n._mta) return null;
            try {
                var e;
                return (e = n._mta.Event).stat.apply(e, arguments);
            } catch (e) {
                return null;
            }
        }
    };
};