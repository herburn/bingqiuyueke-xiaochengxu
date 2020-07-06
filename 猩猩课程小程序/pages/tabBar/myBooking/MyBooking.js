var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../../tmp/index.js")), _store = require("./../../../store/index.js"), _reduxPlugin = require("./../../../plugins/redux/index.js"), _constants = require("./../../../constants/index.js");

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

_core.default.page({
    name: "MyBooking",
    _isOpenRegisterLoginModal: !1,
    data: {
        defaultBg: "https://img.supermonkey.com.cn/webapp/wx11/class2/23.png",
        navigatorBgColor: _constants.navigatorDarkBgColor
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        isUnregistered: function(e) {
            return this.$store.selectors.getIsUnregistered(e);
        },
        totalStat: function(e) {
            return _store.store.selectors.getMyBookingInfo(e).totalStat;
        },
        orderList: function(e) {
            return _store.store.selectors.getMyBookingInfo(e).orderList || [];
        },
        monthlyStatisticList: function(e) {
            return _store.store.selectors.getMyBookingInfo(e).monthlyStatisticList || [];
        },
        userFace: function(e) {
            return _store.store.selectors.getInviterInfo(e).face;
        }
    })),
    onLoad: function() {
        this.isUnregistered || this.$showLoading();
    },
    onShow: function() {
        var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!this.isUnregistered) {
                        e.next = 17;
                        break;
                    }
                    if (this._isOpenRegisterLoginModal) {
                        e.next = 15;
                        break;
                    }
                    return this._isOpenRegisterLoginModal = !0, e.prev = 3, e.next = 6, this.$loginRegister();

                  case 6:
                    this._fetchData(), e.next = 12;
                    break;

                  case 9:
                    e.prev = 9, e.t0 = e.catch(3), this.$router.switchTab({
                        page: "CourseList"
                    });

                  case 12:
                    return e.prev = 12, this._isOpenRegisterLoginModal = !1, e.finish(12);

                  case 15:
                    e.next = 18;
                    break;

                  case 17:
                    this._fetchData();

                  case 18:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 3, 9, 12, 15 ] ]);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    methods: {
        handleReload: function() {
            this._fetchData();
        }
    },
    _fetchData: function() {
        var e = this;
        this.$store.dispatch(this.$store.actions.getMyBookingInfo()).then(function() {
            e.$hideLoading();
        }).catch(function() {
            e.$failLoading();
        });
    }
}, {
    info: {
        components: {
            "month-record-card": {
                path: "./components/MonthRecordCard"
            },
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
            "newer-guide": {
                path: "./../../../components/course/CourseListTooltipNewerGuide"
            },
            "booking-course-entry": {
                path: "./../../../components/booking/BookingListCourseEntity"
            },
            "page-loading": {
                path: "./../../../components/common/loading/LoadingPage"
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
            "ticket-prompt": {
                path: "./../../../components/common/feedback/TooltipTicket"
            },
            "personal-expire-prompt": {
                path: "./../../../components/common/feedback/TooltipPersonal"
            },
            "follow-public-prompt": {
                path: "./../../../components/common/feedback/NoticeFollowPublic"
            },
            "show-action-sheet": {
                path: "./../../../components/common/dataEntry/ActionSheet"
            },
            "show-picker-view": {
                path: "./../../../components/common/dataEntry/PickerView"
            },
            face: {
                path: "./../../../components/common/dataDisplay/Face"
            },
            "copy-right-bottom": {
                path: "./../../../components/common/other/CopyRightBottom"
            },
            "navigator-bar": {
                path: "./../../../components/common/navigation/NavigatorBar"
            }
        },
        on: {
            "836-0": [ "reload" ]
        }
    },
    handlers: {
        "836-0": {
            reload: function() {
                var e = arguments[arguments.length - 1];
                this.handleReload(e);
            }
        }
    },
    models: {},
    refs: void 0
});