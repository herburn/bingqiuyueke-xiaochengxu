Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = _default;

var _redux = require("./../../../vendor.js")(331), _ramda = require("./../../../vendor.js")(320), _reduxActions = require("./../../../vendor.js")(367);

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

function createReducers(e, t) {
    var r, a, n = (0, _ramda.omit)([ "reducers", "state" ])(e);
    if ("reducers" in e) {
        var o = null;
        if ("state" in e && (o = e.state), r = {
            state: o,
            reducers: (0, _reduxActions.handleActions)(e.reducers, o)
        }, !(0, _ramda.isEmpty)((0, _ramda.intersection)((0, _ramda.keys)(o), (0, _ramda.keys)(n)))) throw new Error("存在父节点属性名与子节点名冲突");
    }
    if (!(0, _ramda.isEmpty)(n)) {
        var c = (0, _ramda.mapObjIndexed)(_ramda.pipe.apply(void 0, [ function(e, r) {
            return {
                reducers: createReducers(e, t),
                key: r
            };
        } ].concat(_toConsumableArray(t), [ (0, _ramda.prop)("reducers") ])));
        a = (0, _ramda.pipe)(c, _redux.combineReducers)(n);
    }
    return r && a ? wrapperReducer(r, a) : r ? r.reducers : a;
}

function _default(e, r) {
    return _ramda.pipe.apply(void 0, _toConsumableArray(r).concat([ (0, _ramda.prop)("reducers") ]))({
        reducers: createReducers(e, r),
        key: "root"
    });
}

function wrapperReducer(e, c) {
    var r = e.state, u = e.reducers, i = Object.keys(r);
    return function(e, r) {
        var t = e && (0, _ramda.pick)(i)(e), a = e && (0, _ramda.omit)(i)(e), n = u(t, r), o = c(a, r);
        return t === n && a === o ? e : _objectSpread({}, n, {}, o);
    };
}