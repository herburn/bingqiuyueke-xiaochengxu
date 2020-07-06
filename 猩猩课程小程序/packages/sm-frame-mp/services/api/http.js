Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../../vendor.js")(0)), _ramda = _interopRequireDefault(require("./../../../../vendor.js")(320)), _imports = require("./../../imports.js"), _interceptors = _interopRequireDefault(require("./interceptors.js")), _dependent = require("./dependent.js");

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

function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _nonIterableSpread();
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(e) {
    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
}

function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
    }
}

function asyncGeneratorStep(e, t, r, n, o, a, i) {
    try {
        var u = e[a](i), s = u.value;
    } catch (e) {
        return void r(e);
    }
    u.done ? t(s) : Promise.resolve(s).then(n, o);
}

function _asyncToGenerator(u) {
    return function() {
        var e = this, i = arguments;
        return new Promise(function(t, r) {
            var n = u.apply(e, i);
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

var pipeP = _ramda.default.pipeP, pipe = _ramda.default.pipe, split = _ramda.default.split, slice = _ramda.default.slice, join = _ramda.default.join;

function request(e) {
    return new Promise(function(t, r) {
        _dependent.wx.request(_objectSpread({}, e, {
            success: function(e) {
                t(e);
            },
            fail: function(e) {
                r(e);
            }
        }));
    });
}

var Http = function() {
    function e() {
        return _classCallCheck(this, e), _possibleConstructorReturn(this, _getPrototypeOf(e).apply(this, arguments));
    }
    var t, r;
    return _inherits(e, _imports.BaseHttp), _createClass(e, [ {
        key: "get",
        value: (r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            var r, n, o, a, i, u, s, p, c;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = t.url, n = t.data, o = void 0 === n ? {} : n, a = t.header, i = void 0 === a ? {} : a, 
                    u = t.meta, s = void 0 === u ? {
                        isGetLocation: !0
                    } : u, e.prev = 1, e.next = 4, pipeP.apply(void 0, _toConsumableArray(_interceptors.default.requestCb))({
                        data: o,
                        header: i,
                        url: r,
                        meta: s
                    });

                  case 4:
                    return p = e.sent, e.next = 7, request(_objectSpread({}, p));

                  case 7:
                    return c = e.sent, e.next = 10, pipeP.apply(void 0, _toConsumableArray(_interceptors.default.responseCb))({
                        response: c,
                        url: r
                    });

                  case 10:
                    return e.abrupt("return", e.sent.data);

                  case 13:
                    throw e.prev = 13, e.t0 = e.catch(1), console.log("get error", e.t0), this._postLog(e.t0), 
                    e.t0;

                  case 18:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 1, 13 ] ]);
        })), function(e) {
            return r.apply(this, arguments);
        })
    }, {
        key: "post",
        value: (t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            var r, n, o, a, i, u, s, p, c;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return r = t.url, n = t.data, o = void 0 === n ? {} : n, a = t.header, i = void 0 === a ? {} : a, 
                    u = t.meta, s = void 0 === u ? {
                        isGetLocation: !0
                    } : u, e.prev = 1, e.next = 4, pipeP.apply(void 0, _toConsumableArray(_interceptors.default.requestCb))({
                        data: o,
                        header: i,
                        url: r,
                        meta: s
                    });

                  case 4:
                    return p = e.sent, e.next = 7, request(_objectSpread({
                        method: "POST"
                    }, p));

                  case 7:
                    return c = e.sent, e.next = 10, pipeP.apply(void 0, _toConsumableArray(_interceptors.default.responseCb))({
                        response: c,
                        url: r
                    });

                  case 10:
                    return e.abrupt("return", e.sent.data);

                  case 13:
                    throw e.prev = 13, e.t0 = e.catch(1), this._postLog(e.t0), e.t0;

                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 1, 13 ] ]);
        })), function(e) {
            return t.apply(this, arguments);
        })
    }, {
        key: "_postLog",
        value: function(e) {
            try {
                if (!_dependent.logUrl) return;
                var t = "".concat(pipe(split(";"), slice(3, -1), join(";"))(_dependent.wx.getStorageSync("cookie")), "; version=").concat(_dependent.version, "; ");
                request({
                    url: _dependent.logUrl,
                    method: "POST",
                    data: {
                        rtn: e.rtn,
                        errMsg: e.errMsg,
                        cookie: t
                    }
                });
            } catch (e) {
                console.log("postLog error", e);
            }
        }
    } ]), e;
}(), http = new Http(), _default = http;

exports.default = _default;