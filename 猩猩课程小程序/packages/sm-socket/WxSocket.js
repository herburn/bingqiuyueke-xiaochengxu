Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _BaseSocket2 = _interopRequireDefault(require("./BaseSocket.js")), _constant = require("./constant.js");

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

function asyncGeneratorStep(e, t, r, n, o, s, c) {
    try {
        var a = e[s](c), i = a.value;
    } catch (e) {
        return void r(e);
    }
    a.done ? t(i) : Promise.resolve(i).then(n, o);
}

function _asyncToGenerator(a) {
    return function() {
        var e = this, c = arguments;
        return new Promise(function(t, r) {
            var n = a.apply(e, c);
            function o(e) {
                asyncGeneratorStep(n, t, r, o, s, "next", e);
            }
            function s(e) {
                asyncGeneratorStep(n, t, r, o, s, "throw", e);
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

var WxSocket = function() {
    function t() {
        var e;
        return _classCallCheck(this, t), (e = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this)))._socketTask = null, 
        e;
    }
    var r, e, n;
    return _inherits(t, _BaseSocket2["default"]), _createClass(t, [ {
        key: "connectSocket",
        value: (n = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            var r, t, n, o, s, c, a = this, i = arguments;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = 0 < i.length && void 0 !== i[0] ? i[0] : {}, n = (t = 1 < i.length ? i[1] : void 0).onOpen, 
                    o = t.onError, s = t.onClose, c = t.onMessage, e.abrupt("return", new Promise(function(e, t) {
                        a._socketTask = wx.connectSocket(_objectSpread({}, r, {
                            success: e,
                            fail: t
                        })), a._socketTask.onOpen(n), a._socketTask.onError(o), a._socketTask.onClose(s), 
                        a._socketTask.onMessage(c);
                    }));

                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function() {
            return n.apply(this, arguments);
        })
    }, {
        key: "closeSocket",
        value: (e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            var r, n = this, t = arguments;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = 0 < t.length && void 0 !== t[0] ? t[0] : {}, e.abrupt("return", new Promise(function(e, t) {
                        try {
                            n._socketTask.close(_objectSpread({}, r, {
                                success: e,
                                fail: t
                            }));
                        } catch (e) {
                            t(new Error("closeSocket this._socketTask 不存在"));
                        }
                    }));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function() {
            return e.apply(this, arguments);
        })
    }, {
        key: "sendMsg",
        value: (r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
            var n = this;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", new Promise(function(e, t) {
                        try {
                            n._socketTask.send({
                                data: r,
                                success: e,
                                fail: t
                            });
                        } catch (e) {
                            t(new Error("sendMsg this._socketTask 不存在"));
                        }
                    }));

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return r.apply(this, arguments);
        })
    }, {
        key: "readyState",
        get: function() {
            return this._socketTask ? this._socketTask.readyState : _constant.CLOSED;
        }
    } ]), t;
}(), _default = WxSocket;

exports.default = _default;