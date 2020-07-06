function _typeof2(e) {
    return (_typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

exports.__esModule = !0;

var _typeof = "function" == typeof Symbol && "symbol" === _typeof2(Symbol.iterator) ? function(e) {
    return _typeof2(e);
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
}, _extends = Object.assign || function(e) {
    for (var o = 1; o < arguments.length; o++) {
        var t = arguments[o];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
};

function autoMergeLevel2(o, t, n, e) {
    var r = e.debug, y = _extends({}, n);
    return o && "object" === (void 0 === o ? "undefined" : _typeof(o)) && Object.keys(o).forEach(function(e) {
        "_persist" !== e && (t[e] === n[e] ? isPlainEnoughObject(n[e]) ? y[e] = _extends({}, y[e], o[e]) : y[e] = o[e] : r && console.log("redux-persist/stateReconciler: sub state for key `%s` modified, skipping.", e));
    }), r && o && "object" === (void 0 === o ? "undefined" : _typeof(o)) && console.log("redux-persist/stateReconciler: rehydrated keys '" + Object.keys(o).join(", ") + "'"), 
    y;
}

function isPlainEnoughObject(e) {
    return null !== e && !Array.isArray(e) && "object" === (void 0 === e ? "undefined" : _typeof(e));
}

exports.default = autoMergeLevel2;