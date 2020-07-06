exports.__esModule = !0;

var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
};

exports.default = persistStore;

var _redux = require("./../../vendor.js")(331), _persistReducer = require("./persistReducer.js"), _persistReducer2 = _interopRequireDefault(_persistReducer), _constants = require("./constants.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
    }
    return Array.from(e);
}

var initialState = {
    registry: [],
    bootstrapped: !1
}, persistorReducer = function(e, t) {
    var r = 0 < arguments.length && void 0 !== e ? e : initialState, s = t;
    switch (s.type) {
      case _constants.REGISTER:
        return _extends({}, r, {
            registry: [].concat(_toConsumableArray(r.registry), [ s.key ])
        });

      case _constants.REHYDRATE:
        var n = r.registry.indexOf(s.key), i = [].concat(_toConsumableArray(r.registry));
        return i.splice(n, 1), _extends({}, r, {
            registry: i,
            bootstrapped: 0 === i.length
        });

      default:
        return r;
    }
};

function persistStore(n, e, t) {
    var r = e || {};
    [ "blacklist", "whitelist", "transforms", "storage", "keyPrefix", "migrate" ].forEach(function(e) {
        r[e] && console.error('redux-persist: invalid option passed to persistStore: "' + e + '". You may be incorrectly passing persistConfig into persistStore, whereas it should be passed into persistReducer.');
    });
    function s(e) {
        o.dispatch({
            type: _constants.REGISTER,
            key: e
        });
    }
    function i(e, t, r) {
        var s = {
            type: _constants.REHYDRATE,
            payload: t,
            err: r,
            key: e
        };
        n.dispatch(s), o.dispatch(s), a && u.getState().bootstrapped && (a(), a = !1);
    }
    var a = t || !1, o = (0, _redux.createStore)(persistorReducer, initialState, e ? e.enhancer : void 0), u = _extends({}, o, {
        purge: function() {
            var t = [];
            return n.dispatch({
                type: _constants.PURGE,
                result: function(e) {
                    t.push(e);
                }
            }), Promise.all(t);
        },
        flush: function() {
            var t = [];
            return n.dispatch({
                type: _constants.FLUSH,
                result: function(e) {
                    t.push(e);
                }
            }), Promise.all(t);
        },
        pause: function() {
            n.dispatch({
                type: _constants.PAUSE
            });
        },
        persist: function() {
            n.dispatch({
                type: _constants.PERSIST,
                register: s,
                rehydrate: i
            });
        }
    });
    return u.persist(), u;
}