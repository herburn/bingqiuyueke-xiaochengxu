Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, n, r, a, o, i) {
    try {
        var u = e[o](i), c = u.value;
    } catch (e) {
        return void n(e);
    }
    u.done ? t(c) : Promise.resolve(c).then(r, a);
}

function _asyncToGenerator(u) {
    return function() {
        var e = this, i = arguments;
        return new Promise(function(t, n) {
            var r = u.apply(e, i);
            function a(e) {
                asyncGeneratorStep(r, t, n, a, o, "next", e);
            }
            function o(e) {
                asyncGeneratorStep(r, t, n, a, o, "throw", e);
            }
            a(void 0);
        });
    };
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

var SMA = function() {
    function a(e) {
        var t = this, n = e.plugins, r = void 0 === n ? [] : n;
        _classCallCheck(this, a), this._plugins = [];
        try {
            r.forEach(function(e) {
                t._plugins.push(e.install(t, t._registerRef.bind(t)));
            });
        } catch (e) {
            console.error("SMA constructor", e);
        }
    }
    var n;
    return _createClass(a, [ {
        key: "init",
        value: function(e) {
            return this._callPluginHook("init", e);
        }
    }, {
        key: "start",
        value: function(e) {
            return this._callPluginHook("start", e);
        }
    }, {
        key: "stop",
        value: function(e) {
            return this._callPluginHook("stop", e);
        }
    }, {
        key: "track",
        value: function(e) {
            return this._callPluginHook("track", e);
        }
    }, {
        key: "loadData",
        value: function(e) {
            return this._callPluginHook("loadData", e);
        }
    }, {
        key: "saveData",
        value: function(e) {
            return this._callPluginHook("saveData", e);
        }
    }, {
        key: "report",
        value: function(e) {
            return this._callPluginHook("report", e);
        }
    }, {
        key: "_registerRef",
        value: function(e, t, n) {
            n ? n in this ? (e in this[n] && console.warn("sma：".concat(n, ".").concat(e, " 已经注册，请确认此操作是否正确")), 
            this[n][e] = t) : (e in this && console.warn("sma：".concat(e, " 已经注册，请确认此操作是否正确")), 
            this[n] = {
                key: t
            }) : this[e] = t;
        }
    }, {
        key: "_callPluginHook",
        value: (n = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t, n) {
            var r, a, o, i, u, c, s;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    for (r = [], o = !(a = !0), i = void 0, e.prev = 4, u = this._plugins[Symbol.iterator](); !(a = (c = u.next()).done); a = !0) s = c.value, 
                    t in s && r.push(s[t].bind(s));
                    e.next = 12;
                    break;

                  case 8:
                    e.prev = 8, e.t0 = e.catch(4), o = !0, i = e.t0;

                  case 12:
                    e.prev = 12, e.prev = 13, a || null == u.return || u.return();

                  case 15:
                    if (e.prev = 15, o) throw i;
                    e.next = 18;
                    break;

                  case 18:
                    return e.finish(15);

                  case 19:
                    return e.finish(12);

                  case 20:
                    return e.abrupt("return", chain(r, n));

                  case 21:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 4, 8, 12, 20 ], [ 13, , 15, 19 ] ]);
        })), function(e, t) {
            return n.apply(this, arguments);
        })
    } ]), a;
}();

function chain(o, i) {
    return new Promise(function() {
        var n = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t, n) {
            var r, a;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return a = function(e) {
                        0 === o.length ? t(e) : t(chain(o, e));
                    }, e.prev = 1, e.next = 4, o.shift()(a, i);

                  case 4:
                    void 0 !== (r = e.sent) && t(r), e.next = 12;
                    break;

                  case 8:
                    e.prev = 8, e.t0 = e.catch(1), console.error("chain", e.t0), n(e.t0);

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e, null, [ [ 1, 8 ] ]);
        }));
        return function(e, t) {
            return n.apply(this, arguments);
        };
    }());
}

exports.default = SMA;