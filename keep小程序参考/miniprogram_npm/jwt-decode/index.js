var e, r, t, o = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/helpers/typeof"));

module.exports = (e = {}, t = function(r, t) {
    if (!e[r]) return require(t);
    if (!e[r].status) {
        var n = {
            exports: {}
        };
        e[r].status = 1, e[r].func(e[r].req, n, n.exports), "object" === (0, o.default)(n.exports) ? (e[r].m.exports.__proto__ = n.exports.__proto__, 
        Object.keys(n.exports).forEach(function(t) {
            e[r].m.exports[t] = n.exports[t], Object.defineProperty(n.exports, t, {
                set: function(o) {
                    e[r].m.exports[t] = o;
                },
                get: function() {
                    return e[r].m.exports[t];
                }
            });
        }), n.exports.__esModule && Object.defineProperty(e[r].m.exports, "__esModule", {
            value: !0
        })) : e[r].m.exports = n.exports;
    }
    return e[r].m.exports;
}, (r = function(r, t, o) {
    e[r] = {
        status: 0,
        func: t,
        req: o,
        m: {
            exports: {}
        }
    };
})(1571054539768, function(e, r, t) {
    var o = e("./base64_url_decode");
    function n(e) {
        this.message = e;
    }
    n.prototype = new Error(), n.prototype.name = "InvalidTokenError", r.exports = function(e, r) {
        if ("string" != typeof e) throw new n("Invalid token specified");
        var t = !0 === (r = r || {}).header ? 0 : 1;
        try {
            return JSON.parse(o(e.split(".")[t]));
        } catch (e) {
            throw new n("Invalid token specified: " + e.message);
        }
    }, r.exports.InvalidTokenError = n;
}, function(e) {
    return t({
        "./base64_url_decode": 1571054539769
    }[e], e);
}), r(1571054539769, function(e, r, t) {
    var o = e("./atob");
    r.exports = function(e) {
        var r = e.replace(/-/g, "+").replace(/_/g, "/");
        switch (r.length % 4) {
          case 0:
            break;

          case 2:
            r += "==";
            break;

          case 3:
            r += "=";
            break;

          default:
            throw "Illegal base64url string!";
        }
        try {
            return function(e) {
                return decodeURIComponent(o(e).replace(/(.)/g, function(e, r) {
                    var t = r.charCodeAt(0).toString(16).toUpperCase();
                    return t.length < 2 && (t = "0" + t), "%" + t;
                }));
            }(r);
        } catch (e) {
            return o(r);
        }
    };
}, function(e) {
    return t({
        "./atob": 1571054539770
    }[e], e);
}), r(1571054539770, function(e, r, t) {
    var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function n(e) {
        this.message = e;
    }
    n.prototype = new Error(), n.prototype.name = "InvalidCharacterError", r.exports = "undefined" != typeof window && window.atob && window.atob.bind(window) || function(e) {
        var r = String(e).replace(/=+$/, "");
        if (r.length % 4 == 1) throw new n("'atob' failed: The string to be decoded is not correctly encoded.");
        for (var t, a, i = 0, s = 0, u = ""; a = r.charAt(s++); ~a && (t = i % 4 ? 64 * t + a : a, 
        i++ % 4) ? u += String.fromCharCode(255 & t >> (-2 * i & 6)) : 0) a = o.indexOf(a);
        return u;
    };
}, function(e) {
    return t({}[e], e);
}), t(1571054539768));