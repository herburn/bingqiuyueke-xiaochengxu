Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.watchMapCache = watchMapCache;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _types = require("./types.js"), _ramda = require("./../../vendor.js")(320), _dependent = require("./dependent.js"), ReduxSaga = _interopRequireWildcard(require("./../../vendor.js")(323));

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

var _marked2 = _regeneratorRuntime2.default.mark(watchMapCache), ReduxSagaEffects = ReduxSaga.effects, put = ReduxSagaEffects.put, takeEvery = ReduxSagaEffects.takeEvery;

function watchMapCache() {
    var l, r;
    return _regeneratorRuntime2.default.wrap(function(e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return r = function(r) {
                var t, a, n, u, p, c, i, d, o, s, f, _;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = r.payload, !(a = (0, _ramda.reduce)(function(e, r) {
                            return (0, _ramda.pipe)((0, _ramda.propOr)({}, _dependent.cacheMap[r].map), _ramda.isEmpty, _ramda.not)(t) ? (0, 
                            _ramda.append)(r)(e) : e;
                        }, [])(_dependent.cacheMapKeyList))) {
                            e.next = 30;
                            break;
                        }
                        u = !(n = !0), p = void 0, e.prev = 6, c = a[Symbol.iterator]();

                      case 8:
                        if (n = (i = c.next()).done) {
                            e.next = 16;
                            break;
                        }
                        return d = i.value, o = _dependent.cacheMap[d], s = o.map, f = o.key, _ = o.actionType, 
                        e.next = 13, put({
                            type: _,
                            payload: {
                                entities: t[s],
                                key: t[f]
                            }
                        });

                      case 13:
                        n = !0, e.next = 8;
                        break;

                      case 16:
                        e.next = 22;
                        break;

                      case 18:
                        e.prev = 18, e.t0 = e.catch(6), u = !0, p = e.t0;

                      case 22:
                        e.prev = 22, e.prev = 23, n || null == c.return || c.return();

                      case 25:
                        if (e.prev = 25, u) throw p;
                        e.next = 28;
                        break;

                      case 28:
                        return e.finish(25);

                      case 29:
                        return e.finish(22);

                      case 30:
                      case "end":
                        return e.stop();
                    }
                }, l, null, [ [ 6, 18, 22, 30 ], [ 23, , 25, 29 ] ]);
            }, l = _regeneratorRuntime2.default.mark(r), e.next = 4, takeEvery(_types.MAP_CACHE, r);

          case 4:
          case "end":
            return e.stop();
        }
    }, _marked2);
}