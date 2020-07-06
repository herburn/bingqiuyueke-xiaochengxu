Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createStorage = createStorage, exports.createMapStorage = createMapStorage;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _ramda = _interopRequireDefault(require("./../../vendor.js")(320));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, r, n, a, u, o) {
    try {
        var c = e[u](o), i = c.value;
    } catch (e) {
        return void r(e);
    }
    c.done ? t(i) : Promise.resolve(i).then(n, a);
}

function _asyncToGenerator(c) {
    return function() {
        var e = this, o = arguments;
        return new Promise(function(t, r) {
            var n = c.apply(e, o);
            function a(e) {
                asyncGeneratorStep(n, t, r, a, u, "next", e);
            }
            function u(e) {
                asyncGeneratorStep(n, t, r, a, u, "throw", e);
            }
            a(void 0);
        });
    };
}

var keys = _ramda.default.keys, zipObj = _ramda.default.zipObj, map = _ramda.default.map, reduce = _ramda.default.reduce, indexOf = _ramda.default.indexOf, prop = _ramda.default.prop;

function createStorage(r) {
    return {
        getItem: function(e) {
            return r.getStorage({
                key: e
            }).then(function(e) {
                return e.data;
            });
        },
        setItem: function(e, t) {
            return r.setStorage({
                key: e,
                data: t
            });
        },
        removeItem: function(e) {
            return r.removeStorage({
                key: e
            });
        },
        clear: function() {
            return r.clearStorage();
        },
        getAllKeys: function() {
            return r.getStorageInfo().then(function(e) {
                return e.keys;
            });
        }
    };
}

function createMapStorage(c, i) {
    function s(e, t) {
        return map(function(e) {
            return c.setStorage({
                key: "".concat(f, "|").concat(e),
                data: t[e]
            });
        })(e);
    }
    var t, r, f = "persist|mapKeys";
    return {
        setItem: (r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t, n) {
            var a, r, u, o;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, c.getStorage({
                        key: f
                    });

                  case 3:
                    return a = e.sent.data, r = reduce(function(e, t) {
                        var r = indexOf(t)(i);
                        return -1 !== r && a[t] === n[t].key || e.push(t), a[t] = -1 === r ? t : n[t].key, 
                        e;
                    }, [])(keys(n)), e.abrupt("return", Promise.all(s(r, n)).then(function() {
                        return c.setStorage({
                            key: f,
                            data: a
                        });
                    }));

                  case 8:
                    return e.prev = 8, e.t0 = e.catch(0), e.prev = 10, u = keys(n), o = zipObj(u, map(function(e) {
                        return -1 !== indexOf(e)(i) ? n[e].key : e;
                    })(u)), e.abrupt("return", Promise.all(s(u, n)).then(function() {
                        return c.setStorage({
                            key: f,
                            data: o
                        });
                    }));

                  case 16:
                    return e.prev = 16, e.t1 = e.catch(10), e.abrupt("return", Promise.reject(e.t1));

                  case 19:
                  case "end":
                    return e.stop();
                }
            }, e, null, [ [ 0, 8 ], [ 10, 16 ] ]);
        })), function(e, t) {
            return r.apply(this, arguments);
        }),
        getItem: (t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            var r, n, a, u;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, c.getStorage({
                        key: f
                    });

                  case 3:
                    return r = e.sent, n = r.data, a = keys(n), u = map(function(e) {
                        return c.getStorage({
                            key: "".concat(f, "|").concat(e)
                        });
                    })(a), e.abrupt("return", Promise.all(u).then(function(e) {
                        return zipObj(a, map(prop("data"))(e));
                    }));

                  case 10:
                    return e.prev = 10, e.t0 = e.catch(0), e.abrupt("return", Promise.reject(e.t0));

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e, null, [ [ 0, 10 ] ]);
        })), function(e) {
            return t.apply(this, arguments);
        }),
        removeItem: function(e) {
            return c.removeStorage({
                key: e
            });
        },
        clear: function() {
            return c.clearStorage();
        },
        getAllKeys: function() {
            return c.getStorageInfo().then(function(e) {
                return e.keys;
            });
        }
    };
}