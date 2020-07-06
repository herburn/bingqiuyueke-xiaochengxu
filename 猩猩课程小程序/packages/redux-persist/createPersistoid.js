exports.__esModule = !0, exports.default = createPersistoid;

var _constants = require("./constants.js");

function createPersistoid(e) {
    var n = e.blacklist || null, i = e.whitelist || null, t = e.transforms || [], s = e.throttle || 0, o = "" + (void 0 !== e.keyPrefix ? e.keyPrefix : _constants.KEY_PREFIX) + e.key, l = e.storage, u = !1 === e.serialize ? function(e) {
        return e;
    } : defaultSerialize, c = {}, a = {}, f = [], d = null, h = null;
    function v() {
        if (0 === f.length) return d && clearInterval(d), void (d = null);
        var r = f.shift(), e = t.reduce(function(e, t) {
            return t.in(e, r, c);
        }, c[r]);
        if (void 0 !== e) try {
            a[r] = u(e);
        } catch (e) {
            console.error("redux-persist/createPersistoid: error serializing state", e);
        } else delete a[r];
        0 === f.length && (Object.keys(a).forEach(function(e) {
            void 0 === c[e] && delete a[e];
        }), h = l.setItem(o, u(a)).catch(x));
    }
    function x(e) {
        e && console.error("Error storing data", e);
    }
    return {
        update: function(r) {
            Object.keys(r).forEach(function(e) {
                var t;
                t = e, i && -1 === i.indexOf(t) && "_persist" !== t || n && -1 !== n.indexOf(t) || c[e] !== r[e] && -1 === f.indexOf(e) && f.push(e);
            }), Object.keys(c).forEach(function(e) {
                void 0 === r[e] && f.push(e);
            }), null === d && (d = setInterval(v, s)), c = r;
        },
        flush: function() {
            for (;0 !== f.length; ) v();
            return h || Promise.resolve();
        }
    };
}

function defaultSerialize(e) {
    return JSON.stringify(e);
}