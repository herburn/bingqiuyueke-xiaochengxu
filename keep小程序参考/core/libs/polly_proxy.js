var t = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/helpers/typeof"));

module.exports = function() {
    var e, r = null;
    function n(e) {
        return !!e && ("object" === (0, t.default)(e) || "function" == typeof e);
    }
    return (e = function(t, e) {
        if (!n(t) || !n(e)) throw new TypeError("Cannot create proxy with a non-object as target or handler");
        var o = function() {};
        r = function() {
            o = function(t) {
                throw new TypeError("Cannot perform '".concat(t, "' on a proxy that has been revoked"));
            };
        };
        var i = e;
        for (var c in e = {
            get: null,
            set: null,
            apply: null,
            construct: null
        }, i) {
            if (!(c in e)) throw new TypeError("Proxy polyfill does not support trap '".concat(c, "'"));
            e[c] = i[c];
        }
        "function" == typeof i && (e.apply = i.apply.bind(i));
        var p = this, a = !1, u = !1;
        "function" == typeof t ? (p = function() {
            var r = this && this.constructor === p, n = Array.prototype.slice.call(arguments);
            return o(r ? "construct" : "apply"), r && e.construct ? e.construct.call(this, t, n) : !r && e.apply ? e.apply(t, this, n) : r ? (n.unshift(t), 
            new (t.bind.apply(t, n))()) : t.apply(this, n);
        }, a = !0) : t instanceof Array && (p = [], u = !0);
        var f = e.get ? function(t) {
            return o("get"), e.get(this, t, p);
        } : function(t) {
            return o("get"), this[t];
        }, l = e.set ? function(t, r) {
            o("set");
            e.set(this, t, r, p);
        } : function(t, e) {
            o("set"), this[t] = e;
        }, s = Object.getOwnPropertyNames(t), y = {};
        s.forEach(function(e) {
            if (!((a || u) && e in p)) {
                var r = {
                    enumerable: !!Object.getOwnPropertyDescriptor(t, e).enumerable,
                    get: f.bind(t, e),
                    set: l.bind(t, e)
                };
                Object.defineProperty(p, e, r), y[e] = !0;
            }
        });
        var b = !0;
        if (Object.setPrototypeOf ? Object.setPrototypeOf(p, Object.getPrototypeOf(t)) : p.__proto__ ? p.__proto__ = t.__proto__ : b = !1, 
        e.get || !b) for (var h in t) y[h] || Object.defineProperty(p, h, {
            get: f.bind(t, h)
        });
        return Object.seal(p), p;
    }).revocable = function(t, n) {
        return {
            proxy: new e(t, n),
            revoke: r
        };
    }, e;
};