exports.__esModule = !0, exports.default = getStoredState;

var _constants = require("./constants.js");

function getStoredState(e) {
    var o = e.transforms || [], t = "" + (void 0 !== e.keyPrefix ? e.keyPrefix : _constants.KEY_PREFIX) + e.key, r = e.storage, s = e.debug, a = !1 === e.serialize ? function(e) {
        return e;
    } : defaultDeserialize;
    return r.getItem(t).then(function(t) {
        if (t) try {
            var e = {}, n = a(t);
            return Object.keys(n).forEach(function(r) {
                e[r] = o.reduceRight(function(e, t) {
                    return t.out(e, r, n);
                }, a(n[r]));
            }), e;
        } catch (e) {
            throw s && console.log("redux-persist/getStoredState: Error restoring data " + t, e), 
            e;
        }
    });
}

function defaultDeserialize(e) {
    return JSON.parse(e);
}