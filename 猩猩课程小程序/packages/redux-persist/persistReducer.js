exports.__esModule = !0;

var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
};

exports.default = persistReducer;

var _constants = require("./constants.js"), _autoMergeLevel = require("./stateReconciler/autoMergeLevel1.js"), _autoMergeLevel2 = _interopRequireDefault(_autoMergeLevel), _createPersistoid = require("./createPersistoid.js"), _createPersistoid2 = _interopRequireDefault(_createPersistoid), _getStoredState = require("./getStoredState.js"), _getStoredState2 = _interopRequireDefault(_getStoredState), _purgeStoredState = require("./purgeStoredState.js"), _purgeStoredState2 = _interopRequireDefault(_purgeStoredState);

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _objectWithoutProperties(e, t) {
    var r = {};
    for (var i in e) 0 <= t.indexOf(i) || Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
    return r;
}

var DEFAULT_TIMEOUT = 5e3;

function persistReducer(c, _) {
    if (1, !c) throw new Error("config is required for persistReducer");
    if (!c.key) throw new Error("key is required in persistor config");
    if (!c.storage) throw new Error("redux-persist: config.storage is required. Try using one of the provided storage engines `import storage from 'redux-persist/lib/storage'`");
    function l(e) {
        return e._persist.rehydrated && h && !E && h.update(e), e;
    }
    var g = void 0 !== c.version ? c.version : _constants.DEFAULT_VERSION, y = (c.debug, 
    void 0 === c.stateReconciler ? _autoMergeLevel2.default : c.stateReconciler), v = c.getStoredState || _getStoredState2.default, S = void 0 !== c.timeout ? c.timeout : DEFAULT_TIMEOUT, h = null, x = !1, E = !0;
    return function(e, r) {
        var t = e || {}, i = t._persist, o = _objectWithoutProperties(t, [ "_persist" ]);
        if (r.type === _constants.PERSIST) {
            var s = !1, n = function(e, t) {
                s && console.error('redux-persist: rehydrate for "' + c.key + '" called after timeout.', e, t), 
                s || (r.rehydrate(c.key, e, t), s = !0);
            };
            if (S && setTimeout(function() {
                s || n(void 0, new Error('redux-persist: persist timed out for persist key "' + c.key + '"'));
            }, S), E = !1, h = h || (0, _createPersistoid2.default)(c), i) return _extends({}, _(o, r), {
                _persist: {
                    version: g,
                    rehydrated: !1
                }
            });
            if ("function" != typeof r.rehydrate || "function" != typeof r.register) throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
            return r.register(c.key), v(c).then(function(e) {
                (c.migrate || function(e, t) {
                    return Promise.resolve(e);
                })(e, g).then(function(e) {
                    n(e);
                }, function(e) {
                    e && console.error("redux-persist: migration error", e), n(void 0, e);
                });
            }, function(e) {
                n(void 0, e);
            }), _extends({}, _(o, r), {
                _persist: {
                    version: g,
                    rehydrated: !1
                }
            });
        }
        if (r.type === _constants.PURGE) return x = !0, r.result((0, _purgeStoredState2.default)(c)), 
        _extends({}, _(o, r), {
            _persist: i
        });
        if (r.type === _constants.FLUSH) return r.result(h && h.flush()), _extends({}, _(o, r), {
            _persist: i
        });
        if (r.type === _constants.PAUSE) E = !0; else if (r.type === _constants.REHYDRATE) {
            if (x) return _extends({}, o, {
                _persist: _extends({}, i, {
                    rehydrated: !0
                })
            });
            if (r.key === c.key) {
                var u = _(o, r), a = r.payload, d = !1 !== y && void 0 !== a ? y(a, e, u, c) : u, p = _extends({}, d, {
                    _persist: _extends({}, i, {
                        rehydrated: !0
                    })
                });
                return l(p);
            }
        }
        if (!i) return _(e, r);
        var f = _(o, r);
        return f === o ? e : (f._persist = i, l(f));
    };
}