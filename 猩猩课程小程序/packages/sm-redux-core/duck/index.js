Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = _default, Object.defineProperty(exports, "createDomainModel", {
    enumerable: !0,
    get: function() {
        return _domainTemplate.createDomainModel;
    }
});

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _sagas2 = require("./sagas.js"), R = _interopRequireWildcard(require("./../../../vendor.js")(320)), _actionHandlers = require("./actionHandlers.js"), _reducerHandlers = require("./reducerHandlers.js"), _sagaHandlers = require("./sagaHandlers.js"), _selectorHandlers = require("./selectorHandlers.js"), _createActions = _interopRequireDefault(require("./../actions/createActions.js")), _domainTemplate = require("./domainTemplate.js");

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
        var a = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
        a.get || a.set ? Object.defineProperty(r, t, a) : r[t] = e[t];
    }
    return r.default = e, r;
}

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var type = R.type, chain = R.chain, forEach = R.forEach, values = R.values, fork = _sagas2.ReduxSagaEffects.fork;

function _default() {
    var s = [], c = [], r = {}, e = {
        modules: {}
    }, u = {}, t = {}, o = {}, i = {};
    return {
        register: function(e) {
            Array.prototype.push.apply(s, n(e));
        },
        lazyRegister: function(r) {
            "String" === type(r.namespace) && (r.namespace = r.namespace.split("."));
            return a(r), c.push(r), {
                sagas: _regeneratorRuntime2.default.mark(function e() {
                    return _regeneratorRuntime2.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, fork((0, _sagaHandlers.getSaga)(r, {
                                actions: u,
                                selectors: i
                            }));

                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                })
            };
        },
        lazyRegisters: function(e) {
            var o = n(e);
            return o.forEach(function(e) {
                a(e), c.push(e);
            }), {
                sagas: _regeneratorRuntime2.default.mark(function e() {
                    var r, t, a, n, s, c;
                    return _regeneratorRuntime2.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            t = !(r = !0), a = void 0, e.prev = 3, n = o[Symbol.iterator]();

                          case 5:
                            if (r = (s = n.next()).done) {
                                e.next = 13;
                                break;
                            }
                            if ("sagas" in (c = s.value)) return e.next = 10, fork((0, _sagaHandlers.getSaga)(c, {
                                actions: u,
                                selectors: i
                            }));
                            e.next = 10;
                            break;

                          case 10:
                            r = !0, e.next = 5;
                            break;

                          case 13:
                            e.next = 19;
                            break;

                          case 15:
                            e.prev = 15, e.t0 = e.catch(3), t = !0, a = e.t0;

                          case 19:
                            e.prev = 19, e.prev = 20, r || null == n.return || n.return();

                          case 22:
                            if (e.prev = 22, t) throw a;
                            e.next = 25;
                            break;

                          case 25:
                            return e.finish(22);

                          case 26:
                            return e.finish(19);

                          case 27:
                          case "end":
                            return e.stop();
                        }
                    }, e, null, [ [ 3, 15, 19, 27 ], [ 20, , 22, 26 ] ]);
                })
            };
        },
        getActions: function() {
            return forEach((0, _actionHandlers.updateActions)(e))([].concat(s, c)), (0, _createActions.default)(e, u), 
            e;
        },
        getReducers: function() {
            return forEach((0, _reducerHandlers.updateReducers)(t))([].concat(s, c)), t;
        },
        getSagaList: function() {
            return _regeneratorRuntime2.default.mark(function e() {
                var r, t, a, n;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        r = [].concat(s, c), t = 0;

                      case 2:
                        if (!(t < r.length)) {
                            e.next = 12;
                            break;
                        }
                        if ((a = r[t]).sagas) return e.next = 7, fork((0, _sagaHandlers.getSaga)(a, {
                            actions: u,
                            selectors: i
                        }));
                        e.next = 9;
                        break;

                      case 7:
                        n = e.sent, o[a.namespace.join(".")] = n;

                      case 9:
                        t++, e.next = 2;
                        break;

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e);
            });
        },
        getSelectors: function() {
            return forEach((0, _selectorHandlers.updateSelectors)(i, function(e) {
                return !r[e.join(".")].selector && (r[e.join(".")].selector = !0);
            }))([].concat(s, c)), i;
        }
    };
    function a(e) {
        r[e.namespace.join(".")] = {
            selector: !1
        };
    }
    function n(e) {
        if ("namespace" in e) return "String" === type(e.namespace) && (e.namespace = e.namespace.split(".")), 
        a(e), [ e ];
        var r = e;
        return "Object" === type(e) && (r = values(e)), chain(n)(r);
    }
}