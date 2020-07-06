Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.clean = clean, exports.updateObject = updateObject, exports.deepUpdateObject = deepUpdateObject, 
exports.hashCode = hashCode, exports.hasPath = hasPath, exports.path = path, exports.isObject = isObject;

var _ramda = require("./../vendor.js")(320);

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

function clean(e) {
    for (var t = Object.getOwnPropertyNames(e), r = 0; r < t.length; r++) {
        var o = t[r];
        null !== e[o] && void 0 !== e[o] || delete e[o];
    }
    return e;
}

function updateObject(e, t) {
    return (0, _ramda.merge)(e)(t);
}

function deepUpdateObject(e, t) {
    return (0, _ramda.mergeDeepRight)(e)(t);
}

function hashCode(e) {
    for (var t = 0, r = 0; r < e.length; r++) {
        t = (t << 5) - t + e.charCodeAt(r), t &= t;
    }
    return t;
}

function hasPath(e, t) {
    for (var r = t, o = "", n = 0; n < e.length; ) {
        if ("." !== e[n] && "[" !== e[n] && "]" !== e[n]) o += e[n]; else if (0 !== o.length && (r = r[o], 
        o = "", !isObject(r))) return !1;
        n++;
    }
    return !0;
}

function path(e, t) {
    for (var r = t, o = "", n = 0; n < e.length; ) {
        if ("." !== e[n] && "[" !== e[n] && "]" !== e[n]) o += e[n]; else if (0 !== o.length && (r = r[o], 
        o = "", !isObject(r))) return;
        n++;
    }
    return r[o];
}

function isObject(e) {
    return null !== e && "object" === _typeof(e);
}