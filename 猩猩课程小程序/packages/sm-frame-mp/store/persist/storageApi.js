Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../../vendor.js")(0)), _dependent = require("./../dependent.js");

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

function asyncGeneratorStep(e, t, r, n, o, a, u) {
    try {
        var i = e[a](u), c = i.value;
    } catch (e) {
        return void r(e);
    }
    i.done ? t(c) : Promise.resolve(c).then(n, o);
}

function _asyncToGenerator(i) {
    return function() {
        var e = this, u = arguments;
        return new Promise(function(t, r) {
            var n = i.apply(e, u);
            function o(e) {
                asyncGeneratorStep(n, t, r, o, a, "next", e);
            }
            function a(e) {
                asyncGeneratorStep(n, t, r, o, a, "throw", e);
            }
            o(void 0);
        });
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(e, n.key, n);
    }
}

function _createClass(e, t, r) {
    return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
}

function _possibleConstructorReturn(e, t) {
    return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t;
}

function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}

function _getPrototypeOf(e) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
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

function ownKeys(t, e) {
    var r = Object.keys(t);
    return Object.getOwnPropertySymbols && r.push.apply(r, Object.getOwnPropertySymbols(t)), 
    e && (r = r.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), r;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(r, !0).forEach(function(e) {
            _defineProperty(t, e, r[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ownKeys(r).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
    }
    return t;
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

var wxApis = [ "getStorage", "setStorage", "removeStorage", "clearStorage", "getStorageInfo" ], api = {};

wxApis.forEach(function(n) {
    api[n] = function(e) {
        return new Promise(function(t, r) {
            _dependent.wx[n](_objectSpread({}, e, {
                success: function(e) {
                    t(e);
                },
                fail: function(e) {
                    r(e);
                }
            }));
        });
    };
});

var StorageApi = function() {
    function e() {
        return _classCallCheck(this, e), _possibleConstructorReturn(this, _getPrototypeOf(e).apply(this, arguments));
    }
    var t, r, n, o, a;
    return _inherits(e, _dependent.BaseStorageApi), _createClass(e, [ {
        key: "getStorage",
        value: (a = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            var r;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = t.key, e.abrupt("return", api.getStorage({
                        key: r
                    }));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return a.apply(this, arguments);
        })
    }, {
        key: "setStorage",
        value: (o = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            var r, n;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = t.key, n = t.data, e.abrupt("return", api.setStorage({
                        key: r,
                        data: n
                    }));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return o.apply(this, arguments);
        })
    }, {
        key: "removeStorage",
        value: (n = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            var r;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = t.key, e.abrupt("return", api.removeStorage({
                        key: r
                    }));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return n.apply(this, arguments);
        })
    }, {
        key: "clear",
        value: (r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", api.clearStorage());

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function() {
            return r.apply(this, arguments);
        })
    }, {
        key: "getAllKeys",
        value: (t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", api.getStorageInfo());

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function() {
            return t.apply(this, arguments);
        })
    } ]), e;
}(), _default = new StorageApi();

exports.default = _default;