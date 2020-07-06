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
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
};

function autoMergeLevel1(o, t, r, e) {
    var n = e.debug, y = _extends({}, r);
    return o && "object" === (void 0 === o ? "undefined" : _typeof(o)) && Object.keys(o).forEach(function(e) {
        "_persist" !== e && (t[e] === r[e] ? y[e] = o[e] : n && console.log("redux-persist/stateReconciler: sub state for key `%s` modified, skipping.", e));
    }), n && o && "object" === (void 0 === o ? "undefined" : _typeof(o)) && console.log("redux-persist/stateReconciler: rehydrated keys '" + Object.keys(o).join(", ") + "'"), 
    y;
}

exports.default = autoMergeLevel1;