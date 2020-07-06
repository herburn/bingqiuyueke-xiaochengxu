Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getSaga = getSaga;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _sagas = require("./sagas.js"), _ramda = require("./../../../vendor.js")(320), _utils = require("./utils.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
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
        for (var t = 0, a = new Array(e.length); t < e.length; t++) a[t] = e[t];
        return a;
    }
}

var takeEvery = _sagas.ReduxSagaEffects.takeEvery, takeLatest = _sagas.ReduxSagaEffects.takeLatest, throttle = _sagas.ReduxSagaEffects.throttle, call = _sagas.ReduxSagaEffects.call, all = _sagas.ReduxSagaEffects.all;

function getSaga(e, t) {
    var a, o = t.actions, c = t.selectors, r = e.sagas;
    return "Function" === (0, _ramda.type)(r) && (r = e.sagas(_sagas.ReduxSagaEffects, {
        actions: o,
        selectors: c,
        getSelector: _utils.lazyExecute.bind(null, c),
        ReduxSaga: _sagas.ReduxSaga
    })), "Object" === (0, _ramda.type)(r) && (a = r, r = _regeneratorRuntime2.default.mark(function e() {
        var t;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = (0, _ramda.mapObjIndexed)(function(e, t) {
                    var a, r = "takeEvery";
                    "Array" === (0, _ramda.type)(e) && (r = e[1].type, a = e[1].ms, e = e[0]);
                    var n, u, s = (n = e, u = [ _sagas.ReduxSagaEffects, {
                        actions: o,
                        selectors: c,
                        getSelector: _utils.lazyExecute.bind(null, c),
                        ReduxSaga: _sagas.ReduxSaga
                    } ], _regeneratorRuntime2.default.mark(function e(t) {
                        return _regeneratorRuntime2.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, call.apply(void 0, [ n, t ].concat(_toConsumableArray(u)));

                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }));
                    switch (r) {
                      case "takeLatest":
                        return _regeneratorRuntime2.default.mark(function e() {
                            return _regeneratorRuntime2.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, takeLatest(t, s);

                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        });

                      case "throttle":
                        return _regeneratorRuntime2.default.mark(function e() {
                            return _regeneratorRuntime2.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, throttle(a, t, s);

                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        });

                      case "takeEvery":
                      default:
                        return _regeneratorRuntime2.default.mark(function e() {
                            return _regeneratorRuntime2.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, takeEvery(t, s);

                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        });
                    }
                }), e.next = 3, (0, _ramda.pipe)(t, _ramda.values, (0, _ramda.map)(call), all)(a);

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    })), r;
}