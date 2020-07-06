Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _sagas, _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _actionTypes = require("./../../types/index.js"), _basic = _interopRequireDefault(require("./basic.js")), _discount = _interopRequireDefault(require("./discount.js")), _extState = _interopRequireDefault(require("./extState.js")), _inviter = _interopRequireDefault(require("./inviter.js")), _vip = _interopRequireDefault(require("./vip.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

var user = {
    namespace: [ "globals", "user" ],
    sagas: (_defineProperty(_sagas = {}, _actionTypes.INIT_INFO_SUCCESS, _regeneratorRuntime2.default.mark(function e(t, r, s) {
        var a, n, u, i, o, c, _, p, d, l, f, x, y, v, b, I, S;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = t.requestPayload.s, n = t.payload, u = t.__resolve, i = r.put, o = r.call, 
                c = s.actions, _ = n.discountInfo, p = n.inviterInfo, d = n.userVip, l = n.isNovice, 
                f = n.isWxSubscribe, x = n.isGetNewUserBonus, y = n.isNewer, v = n.isSubscribeSchedule, 
                b = n.isBindPhoneNumber, I = n.rechargeABCategory, S = n.extraSensors, e.next = 6, 
                i({
                    type: _actionTypes.USER_DISCOUNT_INFO_PUT,
                    payload: _
                });

              case 6:
                return e.next = 8, i({
                    type: _actionTypes.USER_INVITER_INFO_PUT,
                    payload: p
                });

              case 8:
                return e.next = 10, i({
                    type: _actionTypes.USER_VIP_PUT,
                    payload: d
                });

              case 10:
                return e.next = 12, i(c.setIsWxSubscribe(f));

              case 12:
                return e.next = 14, i(c.setIsGetNewUserBonus(x));

              case 14:
                return e.next = 16, i(c.setIsNewer(y));

              case 16:
                return e.next = 18, i(c.setIsNovice(l));

              case 18:
                return e.next = 20, i(c.setIsSubscribeSchedule(v));

              case 20:
                return e.next = 22, i(c.setIsBindPhoneNumber(b));

              case 22:
                return e.next = 24, i(c.setRechargeABCategory(I));

              case 24:
                if (1 !== a) return e.next = 27, i(c.setIsUnregistered(!1));
                e.next = 29;
                break;

              case 27:
                wx.sma.sensor.updateEventPublicData(S), wx.sma.start({
                    userId: p.userId
                });

              case 29:
                return e.next = 31, o(u, !0);

              case 31:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(_sagas, _actionTypes.MY_INFO_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(t, r) {
        var s, a, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return s = t.payload, a = r.put, n = s.userVip, e.next = 5, a({
                    type: _actionTypes.USER_VIP_PUT,
                    payload: n
                });

              case 5:
              case "end":
                return e.stop();
            }
        }, e);
    })), _sagas)
}, _default = {
    user: user,
    basic: _basic.default,
    discount: _discount.default,
    extState: _extState.default,
    inviter: _inviter.default,
    vip: _vip.default
};

exports.default = _default;