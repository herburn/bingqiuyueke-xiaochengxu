function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

var reduxPersist = require("./index.js"), traverse = require("./traverse.js"), PERSIST_EXPIRE_DEFAULT_KEY = "persistExpiresAt";

module.exports = function(r) {
    function o(e) {
        return +(e.getTime() / 1e3).toFixed(0);
    }
    return (r = r || {}).expireKey = r.expireKey || PERSIST_EXPIRE_DEFAULT_KEY, r.defaultState = r.defaultState || {}, 
    reduxPersist.createTransform(function(e) {
        return e || e;
    }, function(e) {
        return e ? traverse(e).forEach(function(e) {
            if (e && "object" === _typeof(e) && e.hasOwnProperty(r.expireKey)) {
                var t = e[r.expireKey];
                t && o(new Date(t)) < o(new Date()) && this.update(r.defaultState);
            }
        }) : e;
    });
};