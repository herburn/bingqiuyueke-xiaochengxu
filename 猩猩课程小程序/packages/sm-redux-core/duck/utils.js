Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.setPath = setPath, exports.hasPath = hasPath, exports.lazyExecute = lazyExecute;

var _ramda = require("./../../../vendor.js")(320);

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

function setPath(e, r, t) {
    var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : void 0;
    "String" === (0, _ramda.type)(e) && (e = e.split("."));
    var a = t, o = !0, i = !1, c = void 0;
    try {
        for (var s, u = (0, _ramda.init)(e)[Symbol.iterator](); !(o = (s = u.next()).done); o = !0) {
            var l = s.value;
            l in a || (a[l] = {}), a = n ? (n in a[l] || (a[l][n] = {}), a[l][n]) : a[l];
        }
    } catch (e) {
        i = !0, c = e;
    } finally {
        try {
            o || null == u.return || u.return();
        } finally {
            if (i) throw c;
        }
    }
    var p = (0, _ramda.last)(e);
    p in a ? Object.assign(a[p], r) : a[p] = _objectSpread({}, r);
}

function hasPath(e, r) {
    for (var t = 0; t < e.length; t++) {
        if (!("[object Object]" === Object.prototype.toString.call(r) && e[t] in r)) return !1;
        r = r[e[t]];
    }
    return !0;
}

function lazyExecute(r, t) {
    var n, a;
    return function() {
        if (!n) {
            var e = (0, _ramda.when)((0, _ramda.is)(String), (0, _ramda.split)("."))(t);
            n = (0, _ramda.path)((0, _ramda.init)(e), r), a = (0, _ramda.last)(e);
        }
        return n[a].apply(n, arguments);
    };
}