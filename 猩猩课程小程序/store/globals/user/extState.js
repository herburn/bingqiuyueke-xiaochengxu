Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _reducers, _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _ramda = require("./../../../vendor.js")(320), _seamlessImmutable = _interopRequireDefault(require("./../../../vendor.js")(322)), _actionTypes = require("./../../types/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function ownKeys(r, e) {
    var t = Object.keys(r);
    return Object.getOwnPropertySymbols && t.push.apply(t, Object.getOwnPropertySymbols(r)), 
    e && (t = t.filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable;
    })), t;
}

function _objectSpread(r) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(t, !0).forEach(function(e) {
            _defineProperty(r, e, t[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : ownKeys(t).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
        });
    }
    return r;
}

function _defineProperty(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

var merge = _seamlessImmutable.default.merge, typeIsTrue = "", _default = {
    namespace: [ "globals", "user", "extState" ],
    state: (0, _seamlessImmutable.default)({
        isUnregistered: !1,
        isWxSubscribe: 0,
        isGetNewUserBonus: 0,
        isNewer: 0,
        isNovice: 0,
        isSubscribeSchedule: 0,
        isBindPhoneNumber: 0,
        isCloseAfterSharePrompt: !1,
        expireTicketNumber: 0,
        newTicketNumber: 0,
        newBadgeNumber: 0,
        myInviteInfoNumber: 0,
        personalExpireNumber: 0,
        isNotNewerGuideUser: 0,
        hasShowedTooltip: !1,
        allTicketValue: 0,
        rechargeABCategory: "A"
    }),
    actions: {
        setIsUnregistered: [ _actionTypes.USER_EXT_STATE_PUT, function(e) {
            return {
                isUnregistered: e
            };
        } ],
        setIsWxSubscribe: [ _actionTypes.USER_EXT_STATE_PUT, function(e) {
            return {
                isWxSubscribe: e
            };
        } ],
        setIsGetNewUserBonus: [ _actionTypes.USER_EXT_STATE_PUT, function(e) {
            return {
                isGetNewUserBonus: e
            };
        } ],
        setIsNewer: [ _actionTypes.USER_EXT_STATE_PUT, function(e) {
            return {
                isNewer: e
            };
        } ],
        setIsNovice: [ _actionTypes.USER_EXT_STATE_PUT, function(e) {
            return {
                isNovice: e
            };
        } ],
        setIsSubscribeSchedule: [ _actionTypes.USER_EXT_STATE_PUT, function(e) {
            return {
                isSubscribeSchedule: e
            };
        } ],
        setIsBindPhoneNumber: [ _actionTypes.USER_EXT_STATE_PUT, function(e) {
            return {
                isBindPhoneNumber: e
            };
        } ],
        setIsCloseAfterSharePrompt: [ _actionTypes.USER_EXT_STATE_PUT, function(e) {
            return {
                isCloseAfterSharePrompt: e
            };
        } ],
        setExpireTicketsNumber: [ _actionTypes.USER_EXT_STATE_PUT, function(e) {
            return {
                expireTicketNumber: e
            };
        } ],
        setNewTicketNumber: [ _actionTypes.USER_EXT_STATE_PUT, function(e) {
            return {
                newTicketNumber: e
            };
        } ],
        setNewBadgeNumber: [ _actionTypes.USER_EXT_STATE_PUT, function(e) {
            return {
                newBadgeNumber: e
            };
        } ],
        setMyInviteInfoNumber: [ _actionTypes.USER_EXT_STATE_PUT, function(e) {
            return {
                myInviteInfoNumber: e
            };
        } ],
        setPersonalExpireStatus: [ _actionTypes.USER_EXT_STATE_PUT, function(e) {
            return {
                personalExpireNumber: e
            };
        } ],
        setIsNotNewerGuideUser: [ _actionTypes.USER_EXT_STATE_PUT, function(e) {
            return {
                isNotNewerGuideUser: e
            };
        } ],
        setHasShowedTooltip: [ _actionTypes.USER_EXT_STATE_PUT, function(e) {
            return {
                hasShowedTooltip: e
            };
        } ],
        setAllTicketValue: _actionTypes.ALL_TICKET_VALUE_PUT,
        setRechargeABCategory: [ _actionTypes.USER_EXT_STATE_PUT, function(e) {
            return {
                rechargeABCategory: e
            };
        } ]
    },
    reducers: (_defineProperty(_reducers = {}, _actionTypes.USER_EXT_STATE_PUT, function(e, r) {
        var t = r.payload;
        return merge(e, t);
    }), _defineProperty(_reducers, _actionTypes.ALL_TICKET_VALUE_PUT, function(e, r) {
        var t = r.payload;
        return merge(e, {
            allTicketValue: t
        });
    }), _reducers),
    sagas: _objectSpread({}, updateNovice([ _actionTypes.BOX_PAY_INFO_POST_SUCCESS, _actionTypes.CLASS_BOOKING_CONFIRM_WX_PAY_POST_SUCCESS, _actionTypes.CLASS_BOOKING_CONFIRM_BALANCE_PAY_POST_SUCCESS, _actionTypes.CAMP_BOOKING_CONFIRM_WX_PAY_POST_SUCCESS, _actionTypes.CAMP_BOOKING_CONFIRM_BALANCE_PAY_POST_SUCCESS, _actionTypes.PERSONAL_PAY_SUBMIT_SUCCESS, _actionTypes.GIVE_CLASS_BALANCE_PAY_PUT, _actionTypes.GIVE_CLASS_RECEIVE_PUT ])),
    selectors: function(e) {
        var r = e.createSelector, t = e.getSelector, n = (0, _ramda.curryN)(2, function(e, r) {
            return (0, _ramda.path)([ "globals", "user", "extState", e ], r);
        });
        return {
            getIsUnregistered: n("isUnregistered"),
            getFollowPublicStatus: n("isWxSubscribe"),
            getNewUserBonus: n("isGetNewUserBonus"),
            getIsNewer: n("isNewer"),
            getIsNovice: n("isNovice"),
            getIsSubscribeSchedule: n("isSubscribeSchedule"),
            getIsNeedBindPhone: function(e) {
                return !n("isBindPhoneNumber", e);
            },
            getAfterSharePromptStatus: n("isCloseAfterSharePrompt"),
            getExpireTicketNumber: n("expireTicketNumber"),
            getNewTicketNumber: n("newTicketNumber"),
            getNewBadgeNumber: n("newBadgeNumber"),
            getMyInviteInfoNumber: n("myInviteInfoNumber"),
            getPersonalExpireNumber: n("personalExpireNumber"),
            isNotNewerGuideUser: n("isNotNewerGuideUser"),
            getHasShowedTooltip: n("hasShowedTooltip"),
            getAllTicketValue: n("allTicketValue"),
            getRechargeABCategory: n("rechargeABCategory"),
            isSatisfyShowTooltip: r(function(e, r) {
                return r;
            }, t("getFollowPublicStatus"), t("isNotNewerGuideUser"), t("getExpireTicketNumber"), t("getPersonalExpireNumber"), function(e, r, t, n, s) {
                if ("" !== typeIsTrue && typeIsTrue !== e) return !1;
                var i = !1;
                switch (e) {
                  case "personal":
                    i = 0 < s;
                    break;

                  case "ticket":
                    i = 0 === s && 0 < n;
                    break;

                  case "refresh":
                    i = 0 === s && 0 === n && 0 === t;
                    break;

                  case "noticeFollow":
                    i = !r && 1 === t && 0 === n && 0 === s;
                }
                return i && (typeIsTrue = e), i;
            })
        };
    }
};

function updateNovice(e) {
    var r = _regeneratorRuntime2.default.mark(function e(r, t, n) {
        var s, i;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return s = t.put, i = n.actions, wx.sma.sensor.updateEventPublicData({
                    m_noviceScheduleCategory: null
                }), e.next = 5, s(i.setIsNovice(!1));

              case 5:
              case "end":
                return e.stop();
            }
        }, e);
    });
    return (0, _ramda.zipObj)(e, (0, _ramda.repeat)(r, e.length));
}

exports.default = _default;