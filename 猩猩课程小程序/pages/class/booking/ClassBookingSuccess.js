var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../../tmp/index.js")), _reduxPlugin = require("./../../../plugins/redux/index.js"), _constants = require("./../../../constants/index.js"), R = _interopRequireWildcard(require("./../../../vendor.js")(320));

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, o) : {};
        n.get || n.set ? Object.defineProperty(t, o, n) : t[o] = e[o];
    }
    return t.default = e, t;
}

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, o, n, r, s, i) {
    try {
        var a = e[s](i), c = a.value;
    } catch (e) {
        return void o(e);
    }
    a.done ? t(c) : Promise.resolve(c).then(n, r);
}

function _asyncToGenerator(a) {
    return function() {
        var e = this, i = arguments;
        return new Promise(function(t, o) {
            var n = a.apply(e, i);
            function r(e) {
                asyncGeneratorStep(n, t, o, r, s, "next", e);
            }
            function s(e) {
                asyncGeneratorStep(n, t, o, r, s, "throw", e);
            }
            r(void 0);
        });
    };
}

function ownKeys(t, e) {
    var o = Object.keys(t);
    return Object.getOwnPropertySymbols && o.push.apply(o, Object.getOwnPropertySymbols(t)), 
    e && (o = o.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), o;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var o = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(o, !0).forEach(function(e) {
            _defineProperty(t, e, o[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : ownKeys(o).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
        });
    }
    return t;
}

function _defineProperty(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = o, e;
}

var evolve = R.evolve;

_core.default.page({
    name: "ClassBookingSuccess",
    _shareInfo: null,
    _orderId: -1,
    data: {
        panels: [ {
            label: "课程",
            key: "className"
        }, {
            label: "门店",
            key: "boxName"
        }, {
            label: "时间",
            key: "time"
        } ],
        scheduleId: -1
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        info: function(e) {
            return this.$store.selectors.getClassBookingSuccessInfo(e);
        },
        bookingSuccessPromotions: function(e) {
            var t = this.$store.selectors.getPromotionsByPositionId(e, _constants.PAY_SUCCESS);
            return _objectSpread({}, t, {
                promotionInfo: t.promotions[0] || {}
            });
        }
    }), {
        subscribeNavigateInfo: function() {
            return {
                orderId: this._orderId,
                title: "".concat(this.info.detail.className, "-").concat(this.info.detail.boxName),
                dateTime: this.info.detail.time
            };
        }
    }),
    onLoad: function() {
        var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            var o;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return o = t.orderId, this._orderId = o, e.next = 4, this._fetchData(!0);

                  case 4:
                    return e.next = 6, this._fetchGetPromotionPositions();

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function(e) {
            return t.apply(this, arguments);
        };
    }(),
    methods: {
        handleReload: function() {
            this._fetchData(!0);
        }
    },
    _fetchGetPromotionPositions: function() {
        var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            var t, o, n, r = this;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = this.bookingSuccessPromotions, o = t.isRelateIdExist, !t.isPositionActive) {
                        e.next = 6;
                        break;
                    }
                    if (o) {
                        e.next = 6;
                        break;
                    }
                    return n = evolve({
                        classFirstTypeId: function() {
                            return r.info.detail.firstTypeId;
                        }
                    })((0, _constants.getPositionExtParams)(_constants.PAY_SUCCESS)), e.next = 6, this.$store.dispatch(this.$store.actions.getPromotionsByPositionId([ {
                        positionId: _constants.PAY_SUCCESS,
                        ext: n
                    } ]));

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    _fetchData: function() {
        var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            var t, o, n, r = arguments;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return n = function(e) {
                        var t = e.bookingListShow, o = t.scheduleId, n = t.scheduleSk, r = t.className;
                        return {
                            title: "我很喜欢的".concat(r, "，一起来上课吧！"),
                            url: {
                                page: "ClassDetail",
                                data: {
                                    scheduleId: o,
                                    sk: n
                                }
                            },
                            imageUrl: "https://img.supermonkey.com.cn/webapp/wx11/gift_invitation.png"
                        };
                    }, 0 < r.length && void 0 !== r[0] && r[0] && this.$showLoading(), e.prev = 3, e.next = 6, 
                    this.$store.dispatch(this.$store.actions.getClassBookingSuccess({
                        orderId: this._orderId
                    }));

                  case 6:
                    t = e.sent, this.scheduleId = t.bookingListShow.scheduleId, this._shareInfo = n(t), 
                    this.$hideLoading(), e.next = 16;
                    break;

                  case 12:
                    e.prev = 12, e.t0 = e.catch(3), o = e.t0.msg, this.$failLoading(o);

                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 3, 12 ] ]);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }()
}, {
    info: {
        components: {
            "unauthorized-msg": {
                path: "./../../../components/subscribeMsg/ModalUnauthorizedMsg"
            },
            "reject-msg": {
                path: "./../../../components/subscribeMsg/ModalRejectMsg"
            },
            "modal-subscribe-msg-guide1": {
                path: "./../../../components/subscribeMsg/ModalSubscribeMsgGuide1"
            },
            "modal-subscribe-msg-guide2": {
                path: "./../../../components/subscribeMsg/ModalSubscribeMsgGuide2"
            },
            "booking-success-layer": {
                path: "./../../../components/booking/BookingSuccessLayout"
            },
            "booking-success-box": {
                path: "./../../../components/booking/BookingSuccessBody"
            },
            "page-loading": {
                path: "./../../../components/common/loading/LoadingPage"
            },
            "invite-friend-prompt": {
                path: "./../../../components/booking/BookingFloatingActionButtonInviteFriend"
            },
            "show-toast": {
                path: "./../../../components/common/feedback/Toast"
            },
            "show-modal": {
                path: "./../../../components/common/feedback/Modal"
            },
            "show-add-wechat-modal": {
                path: "./../../../components/common/feedback/ModalAddWeChat"
            },
            "register-user": {
                path: "./../../../components/common/feedback/ModalRegisterUser"
            },
            "new-user-prompt": {
                path: "./../../../components/common/feedback/FloatingActionButtonNewUser"
            },
            "alert-after-share": {
                path: "./../../../components/common/feedback/AlertAfterShare"
            },
            "show-action-sheet": {
                path: "./../../../components/common/dataEntry/ActionSheet"
            },
            "show-picker-view": {
                path: "./../../../components/common/dataEntry/PickerView"
            },
            "navigator-bar": {
                path: "./../../../components/common/navigation/NavigatorBar"
            }
        },
        on: {
            "841-0": [ "reload" ]
        }
    },
    handlers: {
        "841-0": {
            reload: function() {
                var e = arguments[arguments.length - 1];
                this.handleReload(e);
            }
        }
    },
    models: {},
    refs: void 0
});