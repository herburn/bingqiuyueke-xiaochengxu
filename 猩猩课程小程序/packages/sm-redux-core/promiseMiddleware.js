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

function promiseMiddleware() {
    return function(i) {
        return function(t) {
            var e = t.meta, r = (e = void 0 === e ? {} : e).isFetch, n = void 0 !== r && r, o = e.isPromise;
            return n || void 0 !== o && o ? new Promise(function(e, r) {
                i(_objectSpread({
                    __resolve: e,
                    __reject: r
                }, t));
            }) : i(t);
        };
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = promiseMiddleware;