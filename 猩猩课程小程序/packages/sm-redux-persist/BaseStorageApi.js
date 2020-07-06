Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, r, t, n, a, o, u) {
    try {
        var i = e[o](u), c = i.value;
    } catch (e) {
        return void t(e);
    }
    i.done ? r(c) : Promise.resolve(c).then(n, a);
}

function _asyncToGenerator(i) {
    return function() {
        var e = this, u = arguments;
        return new Promise(function(r, t) {
            var n = i.apply(e, u);
            function a(e) {
                asyncGeneratorStep(n, r, t, a, o, "next", e);
            }
            function o(e) {
                asyncGeneratorStep(n, r, t, a, o, "throw", e);
            }
            a(void 0);
        });
    };
}

function _classCallCheck(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
        var n = r[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(e, n.key, n);
    }
}

function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), e;
}

var BaseStorageApi = function() {
    function e() {
        if (_classCallCheck(this, e), (this instanceof e ? this.constructor : void 0) === e) throw new Error("本类不能实例化");
    }
    var r, t, n, a, o;
    return _createClass(e, [ {
        key: "getStorage",
        value: (o = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    throw r.key, new Error("未实现getStorage方法");

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return o.apply(this, arguments);
        })
    }, {
        key: "setStorage",
        value: (a = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    throw r.key, r.data, new Error("未实现setStorage方法");

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function(e) {
            return a.apply(this, arguments);
        })
    }, {
        key: "removeStorage",
        value: (n = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    throw r.key, new Error("未实现removeStorage方法");

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
        value: (t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    throw new Error("未实现clear方法");

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function() {
            return t.apply(this, arguments);
        })
    }, {
        key: "getAllKeys",
        value: (r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    throw new Error("未实现getAllKeys方法");

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
        })), function() {
            return r.apply(this, arguments);
        })
    } ]), e;
}(), _default = BaseStorageApi;

exports.default = _default;