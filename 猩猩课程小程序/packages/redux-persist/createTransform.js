function createTransform(r, u) {
    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, t = n.whitelist || null, e = n.blacklist || null;
    function i(n) {
        return t && -1 === t.indexOf(n) || !(!e || -1 === e.indexOf(n));
    }
    return {
        in: function(n, t, e) {
            return !i(t) && r ? r(n, t, e) : n;
        },
        out: function(n, t, e) {
            return !i(t) && u ? u(n, t, e) : n;
        }
    };
}

exports.__esModule = !0, exports.default = createTransform;