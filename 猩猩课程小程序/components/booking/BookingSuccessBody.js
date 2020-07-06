var _core = _interopRequireDefault(require("./../../tmp/index.js")), R = _interopRequireWildcard(require("./../../vendor.js")(320));

function _interopRequireWildcard(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var i in t) if (Object.prototype.hasOwnProperty.call(t, i)) {
        var o = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, i) : {};
        o.get || o.set ? Object.defineProperty(e, i, o) : e[i] = t[i];
    }
    return e.default = t, e;
}

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var map = R.map;

_core.default.component({
    name: "BookingSuccessBody",
    props: {
        detail: {
            type: Object,
            default: {
                face: "",
                name: "",
                chatSessionId: "",
                tipUrl: "",
                isFirstBookingClass: "",
                note: ""
            }
        },
        panels: {
            type: Array,
            default: []
        },
        chatType: {
            type: String,
            default: "friend"
        },
        positionInfo: {
            type: Object,
            default: {}
        },
        subscribeNavigateInfo: {
            type: Object,
            default: {
                orderId: "",
                title: "",
                dateTime: ""
            }
        },
        courseType: {
            type: String,
            default: ""
        }
    },
    data: {},
    computed: {
        isFirstBooking: function() {
            var t, e;
            return (null === (t = this.detail) || void 0 === t ? void 0 : t.tipUrl) && (null === (e = this.detail) || void 0 === e ? void 0 : e.isFirstBookingClass) || !1;
        },
        filteredPanels: function() {
            var i = this;
            return map(function(t) {
                var e;
                return {
                    label: t.label,
                    value: (null === (e = i.detail) || void 0 === e ? void 0 : e[t.key]) || t.text
                };
            })(this.panels);
        },
        chatText: function() {
            var t = {
                friend: "欢迎加好友聊聊~",
                group: "加群和小伙伴们聊一聊~"
            };
            return t[this.chatType] || "课程安排，请与教练微信沟通。";
        }
    },
    methods: {
        routerBack: function() {
            this.$router.navigateBack();
        },
        routerToReservation: function() {
            this.$router.switchTab({
                page: "MyBooking"
            });
        },
        addWeChat: function() {
            "friend" === this.chatType && this.$addFriend({
                code: this.detail.chatSessionId,
                success: function() {}
            }), "group" === this.chatType && this.$addGroup({
                code: this.detail.chatSessionId,
                success: function() {}
            });
        },
        goTipUrl: function(t) {
            t && this.$router.navigateTo({
                page: "WebView",
                data: {
                    url: t
                }
            }, !0);
        }
    }
}, {
    info: {
        components: {
            promotion: {
                path: "./BookingSuccessPromotion"
            },
            "booking-online-tip": {
                path: "./BookingOnlineTip"
            },
            face: {
                path: "./../common/dataDisplay/Face"
            },
            "panel-list": {
                path: "./BookingSuccessRowList"
            },
            "row-subscribe": {
                path: "./BookingSuccessRowSubscribe"
            }
        },
        on: {}
    },
    handlers: {
        "1063-0": {
            tap: function() {
                var t = this;
                t.goTipUrl(t.detail.tipUrl);
            }
        },
        "1063-1": {
            tap: function() {
                var t = this;
                t.goTipUrl(t.detail.tipUrl);
            }
        },
        "1063-2": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.addWeChat(t);
            }
        },
        "1063-3": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.routerBack(t);
            }
        },
        "1063-4": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.routerToReservation(t);
            }
        }
    },
    models: {},
    refs: void 0
});