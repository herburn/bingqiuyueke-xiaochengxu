Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _autoMergeLevel = _interopRequireDefault(require("./../redux-persist/stateReconciler/autoMergeLevel2.js")), _ramda = _interopRequireDefault(require("./../../vendor.js")(320)), _selectors = require("./selectors.js"), _reselect = require("./../../vendor.js")(328), _dependent = _interopRequireDefault(require("./dependent.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, r, t, n, a, o, i) {
    try {
        var u = e[o](i), s = u.value;
    } catch (e) {
        return void t(e);
    }
    u.done ? r(s) : Promise.resolve(s).then(n, a);
}

function _asyncToGenerator(u) {
    return function() {
        var e = this, i = arguments;
        return new Promise(function(r, t) {
            var n = u.apply(e, i);
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
        for (var r = 0, t = new Array(e.length); r < e.length; r++) t[r] = e[r];
        return t;
    }
}

function ownKeys(r, e) {
    var t = Object.keys(r);
    return Object.getOwnPropertySymbols && t.push.apply(t, Object.getOwnPropertySymbols(r)), 
    e && (t = t.filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable;
    })), t;
}

function _objectSpread(r) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(t, !0).forEach(function(e) {
            _defineProperty(r, e, t[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : ownKeys(t).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
        });
    }
    return r;
}

function _defineProperty(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

var map = _ramda.default.map, prop = _ramda.default.prop, pipe = _ramda.default.pipe, values = _ramda.default.values, zipObj = _ramda.default.zipObj, isEmpty = _ramda.default.isEmpty;

function init(e) {
    var r = e.cacheMap, t = void 0 === r ? {} : r, n = (e.storageApi, e.rootStorage), a = e.mapStorage, o = e.cacheMapTransform, i = e.throttle, u = void 0 === i ? 1e3 : i, s = e.serialize, c = void 0 !== s && s, p = e.version, l = void 0 === p ? 1 : p, f = e.debug, d = void 0 !== f && f, y = e.persistConfig, v = void 0 === y ? {} : y, _ = pipe(map(prop("name")), values)(t), b = Object.keys(t), m = b.map(function(e) {
        return t[e].key;
    }), g = {};
    n && (g.root = {
        key: "root",
        storage: n,
        stateReconciler: _autoMergeLevel.default,
        whitelist: [ "globals" ],
        throttle: u,
        version: l,
        debug: d,
        serialize: c
    }), a && !isEmpty(_) && (g.domains = {
        key: "domains",
        storage: a,
        whitelist: _,
        throttle: u,
        transforms: [ o ],
        version: l,
        debug: d,
        serialize: c
    }), g = map(function(e) {
        if ("migrate" in e) return e;
        return _objectSpread({}, e, {
            migrate: function() {
                return r.apply(this, arguments);
            }.bind(null, e.version)
        });
        function r() {
            return (r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                var r, t, n = arguments;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (r = 0 < n.length && void 0 !== n[0] ? n[0] : -1, (t = 1 < n.length ? n[1] : void 0)._persist.version === r) return e.abrupt("return", t);
                        e.next = 7;
                        break;

                      case 7:
                        return e.abrupt("return", {});

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))).apply(this, arguments);
        }
    })(_objectSpread({}, g, {}, v)), (0, _selectors.setGetCacheMapSks)(_reselect.createSelector.apply(void 0, _toConsumableArray(map(function(r) {
        return function(e) {
            return e.domains[t[r].name].key;
        };
    })(b)).concat([ function() {
        for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
        return zipObj(m, r);
    } ]))), (0, _dependent.default)({
        cacheMap: t,
        cacheMapNameList: _,
        cacheMapKeyList: b,
        cacheMapSkList: m,
        persistConfig: g
    });
}

var _default = init;

exports.default = _default;