var e = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.compareVersion = function(e, t) {
    if (e === t) return !0;
    for (var r = e.split("."), n = t.split("."), a = Math.max(r.length, n.length), o = 0; o < a; o++) {
        if (~~r[o] > ~~n[o]) return !0;
        if (~~r[o] < ~~n[o]) return !1;
    }
}, exports.doWxLogin = s, exports.doLogin = function() {
    return c.apply(this, arguments);
}, exports.keepGetUserInfo = p, exports.setKeepUserInfo = function(e) {
    return l.apply(this, arguments);
}, exports.formateTime = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/", r = new Date(e);
    return r.getFullYear() + t + (r.getMonth() + 1) + t + r.getDate();
}, exports.setUserSource = function(e) {
    var t = wx.getStorageSync(wx.keys.userSource), r = new Date().getTime();
    if (!(t && r - t.timestamp < 6048e5)) {
        var n = null;
        e && (n = {
            data: e,
            timestamp: r
        }), wx.setStorageSync(wx.keys.userSource, n);
    }
}, exports.setShared = function(e) {
    var t = wx.getStorageSync(wx.keys.shared), r = new Date().getTime();
    if (!(t && r - t.timestamp < 36e5)) {
        var n = null;
        e && (n = {
            data: e,
            timestamp: r
        }), wx.setStorageSync(wx.keys.shared, n);
    }
};

var t = e(require("../../@babel/runtime/regenerator")), r = e(require("../../@babel/runtime/helpers/asyncToGenerator")), n = require("./wxfunction"), a = require("./api"), o = e(require("jwt-decode"));

function s() {
    return u.apply(this, arguments);
}

function u() {
    return (u = (0, r.default)(t.default.mark(function e() {
        var r, o, s;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.prev = 0, e.next = 3, (0, n.wxLogin)();

              case 3:
                return r = e.sent, o = r.code, e.next = 7, a.butler.wxLogin(o);

              case 7:
                return s = e.sent, wx.setStorageSync(wx.keys.openid, s.data.openid), e.abrupt("return", s);

              case 12:
                e.prev = 12, e.t0 = e.catch(0), console.error(e.t0);

              case 15:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 0, 12 ] ]);
    }))).apply(this, arguments);
}

var i = !1;

function c() {
    return (c = (0, r.default)(t.default.mark(function e() {
        var r, a, o;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (!i) {
                    e.next = 2;
                    break;
                }
                return e.abrupt("return");

              case 2:
                if (i = !0, e.prev = 3, wx.showLoading(), (r = wx.getStorageSync(wx.keys.loginType)) && "wx" !== r) {
                    e.next = 28;
                    break;
                }
                return e.next = 9, s();

              case 9:
                return a = null, e.prev = 10, e.next = 13, (0, n.wxGetUserInfo)(!0);

              case 13:
                a = e.sent, e.next = 20;
                break;

              case 16:
                e.prev = 16, e.t0 = e.catch(10), wx.hideLoading(), wx.navigateTo({
                    url: "/app/pages/login/authorized/authorized"
                });

              case 20:
                if (!a) {
                    e.next = 26;
                    break;
                }
                return e.next = 23, p(a.encryptedData, a.iv);

              case 23:
                o = e.sent, wx.hideLoading(), o.data.token ? (wx.setStorageSync(wx.keys.userInfoTpm, o.data), 
                wx.navigateTo({
                    url: "/app/pages/login/confirm/confirm"
                })) : wx.navigateTo({
                    url: "/app/pages/login/chooseLogin/chooseLogin"
                });

              case 26:
                e.next = 30;
                break;

              case 28:
                wx.hideLoading(), wx.navigateTo({
                    url: "/app/pages/login/chooseLogin/chooseLogin"
                });

              case 30:
                e.next = 36;
                break;

              case 32:
                e.prev = 32, e.t1 = e.catch(3), console.log(e.t1), wx.hideLoading();

              case 36:
                setTimeout(function() {
                    i = !1;
                }, 1e3);

              case 37:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 3, 32 ], [ 10, 16 ] ]);
    }))).apply(this, arguments);
}

function p(e, t) {
    return x.apply(this, arguments);
}

function x() {
    return (x = (0, r.default)(t.default.mark(function e(r, n) {
        var o, s;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.prev = 0, o = {
                    openid: wx.getStorageSync(wx.keys.openid),
                    encryptedData: r,
                    iv: n
                }, e.next = 4, a.butler.getUserInfo(o);

              case 4:
                return s = e.sent, e.abrupt("return", s);

              case 8:
                e.prev = 8, e.t0 = e.catch(0), console.error(e.t0);

              case 11:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 0, 8 ] ]);
    }))).apply(this, arguments);
}

function l() {
    return (l = (0, r.default)(t.default.mark(function e(r) {
        var n, a, s;
        return t.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                n = getApp(), a = {
                    avatar: r.avatar,
                    userId: r.userId,
                    userName: r.userName
                }, s = (0, o.default)(r.token), wx.setStorageSync(wx.keys.authorization, r.token), 
                wx.setStorageSync(wx.keys.keepUserInfo, a), wx.setStorageSync(wx.keys.tokenExp, s.exp), 
                n.keepCommonHeader.login(r.userId);

              case 7:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}