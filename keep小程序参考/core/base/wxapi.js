var e, r = require("../../@babel/runtime/helpers/interopRequireDefault"), i = r(require("../../@babel/runtime/helpers/typeof")), a = r(require("../../@babel/runtime/helpers/toConsumableArray")), t = require("./wxapis/needQueue");

e = "undefined" == typeof Proxy ? require("../libs/polly_proxy.js")() : Proxy;

function n(e) {
    this.message = "No Such API [" + e + "]", this.name = "IllegalAPIException";
}

var u = new e(wx, {
    get: function(e, r) {
        if (r in e) {
            if ("navigateTo" === r) getCurrentPages().length >= 8 && (r = "redirectTo");
            return function(n) {
                for (var u = arguments.length, l = new Array(u > 1 ? u - 1 : 0), o = 1; o < u; o++) l[o - 1] = arguments[o];
                if (t.queueNames.indexOf(r) > -1 && n && !t.list.add({
                    apiName: r,
                    data: l,
                    needRes: n
                })) return;
                return n ? e[r].apply(e, (0, a.default)(l)) : new Promise(function(u, o) {
                    var s;
                    if (l && 0 != l.length || (l = [ {} ]), s = l[0], "object" == (0, i.default)(s)) {
                        var p = s.success, f = s.fail;
                        s.success = function() {
                            p && p.apply(void 0, arguments), u && u.apply(void 0, arguments);
                        }, s.fail = function() {
                            f && f.apply(void 0, arguments), o && o.apply(void 0, arguments);
                        };
                    }
                    if (t.queueNames.indexOf(r) > -1 && !t.list.add({
                        apiName: r,
                        data: l,
                        needRes: n
                    })) return;
                    e[r].apply(e, (0, a.default)(l));
                });
            };
        }
        throw new n(r);
    }
});

wx.wxapis = u, module.exports = u;