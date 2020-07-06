var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../../tmp/index.js")), _ramda = require("./../../../vendor.js")(320), _reduxPlugin = require("./../../../plugins/redux/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, n, o, a, r, i) {
    try {
        var s = e[r](i), c = s.value;
    } catch (e) {
        return void n(e);
    }
    s.done ? t(c) : Promise.resolve(c).then(o, a);
}

function _asyncToGenerator(s) {
    return function() {
        var e = this, i = arguments;
        return new Promise(function(t, n) {
            var o = s.apply(e, i);
            function a(e) {
                asyncGeneratorStep(o, t, n, a, r, "next", e);
            }
            function r(e) {
                asyncGeneratorStep(o, t, n, a, r, "throw", e);
            }
            a(void 0);
        });
    };
}

function ownKeys(t, e) {
    var n = Object.keys(t);
    return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(t)), 
    e && (n = n.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), n;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(n, !0).forEach(function(e) {
            _defineProperty(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
    }
    return t;
}

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

_core.default.page({
    name: "ClassBookingDetail",
    _isEvaluating: !1,
    _awardSuper: 15,
    _templateType: "",
    data: {
        orderId: "",
        showTitle: !0,
        evaluateStatus: 0
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        bookingDetail: function(e) {
            return this.$store.selectors.getClassBookingDetailInfo(e, this.orderId);
        }
    }), {
        title: function() {
            var e;
            return this.showTitle ? null === (e = this.bookingDetail) || void 0 === e ? void 0 : e.className : "";
        },
        scheduleId: function() {
            var e, t;
            return null === (e = this.bookingDetail) || void 0 === e || null === (t = e.schedule) || void 0 === t ? void 0 : t.scheduleId;
        },
        shareInfo: function() {
            var e, t = (null === (e = this.bookingDetail) || void 0 === e ? void 0 : e.schedule) || {}, n = t.scheduleId, o = t.sk;
            return {
                title: "我很喜欢的".concat(this.title, "，一起来上课吧！"),
                url: {
                    page: "ClassDetail",
                    data: {
                        scheduleId: n,
                        sk: o
                    }
                },
                imageUrl: "https://img.supermonkey.com.cn/webapp/wx11/gift_invitation.png"
            };
        },
        isShowInviteFriendPrompt: function() {
            var e;
            return 1 === (null === (e = this.bookingDetail) || void 0 === e ? void 0 : e.pageStatus);
        }
    }),
    onLoad: function() {
        var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            var n;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return n = t.orderId, this.orderId = n, e.next = 4, this._fetchData((0, _ramda.isEmpty)(this.bookingDetail));

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function(e) {
            return t.apply(this, arguments);
        };
    }(),
    onShow: function() {
        this.$isReady && this._fetchData();
    },
    beforeRouteLeave: function(e, t, n) {
        var o = this;
        if (!(this._isEvaluating && (0, _ramda.contains)(e.page, [ "BookingRecordList", "CourseList" ]))) return n();
        this.$showModal({
            isShowCancel: !0,
            content: "完成评价将获得".concat(this._awardSuper, "点super值哦\n确认退出评价么？"),
            confirmText: "继续评价",
            cancelText: "确认退出",
            cancel: function() {
                n(), wx.sma.sensorTrack({
                    event: "buttonClick",
                    data: {
                        buttonId: "a" === o._templateType ? "2" : "4",
                        buttonName: "a" === o._templateType ? "课后评价-a方案-返回" : "课后评价-b方案-返回"
                    }
                });
            }
        });
    },
    onPageScroll: function(e) {
        var t = e.scrollTop;
        this.showTitle = 0 === t;
    },
    methods: {
        handleReload: function() {
            this._fetchData(!0);
        },
        refundSuccess: function() {
            this._fetchData();
        },
        updateEvaluate: function(e) {
            var t = e.status, n = e.awardSuper, o = e.templateType, a = e.evaluating, r = void 0 !== a && a;
            this._awardSuper = n, this._isEvaluating = r, this.evaluateStatus = t, this._templateType = o;
        }
    },
    _fetchData: function() {
        var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            var t = arguments;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return 0 < t.length && void 0 !== t[0] && t[0] && this.$showLoading(), e.prev = 2, 
                    e.next = 5, this.$store.dispatch(this.$store.actions.fetchClassBookingDetail({
                        orderId: this.orderId
                    }));

                  case 5:
                    this.$hideLoading(), e.next = 11;
                    break;

                  case 8:
                    e.prev = 8, e.t0 = e.catch(2), this.$failLoading();

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 2, 8 ] ]);
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
            },
            "refund-content": {
                path: "./components/ClassBookingDetailRefundContent"
            },
            "unfinished-content": {
                path: "./components/ClassBookingDetailUnfinishedContent"
            },
            "finished-content": {
                path: "./components/ClassBookingDetailFinishedContent"
            },
            "evaluation-box": {
                path: "./components/ClassBookingDetailClassEvaluation"
            }
        },
        on: {
            "842-0": [ "refundSuccess" ],
            "842-1": [ "updateEvaluate" ],
            "842-2": [ "reload" ]
        }
    },
    handlers: {
        "842-0": {
            refundSuccess: function() {
                var e = arguments[arguments.length - 1];
                this.refundSuccess(e);
            }
        },
        "842-1": {
            updateEvaluate: function() {
                var e = arguments[arguments.length - 1];
                this.updateEvaluate(e);
            }
        },
        "842-2": {
            reload: function() {
                var e = arguments[arguments.length - 1];
                this.handleReload(e);
            }
        }
    },
    models: {},
    refs: void 0
});