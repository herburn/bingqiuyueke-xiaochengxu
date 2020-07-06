var _core = _interopRequireDefault(require("./../../tmp/index.js")), _moment = _interopRequireDefault(require("./../../vendor.js")(315)), _date = require("./../../utils/date.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
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

var typeMap = {
    1: "自助预约",
    2: "教练预约",
    3: "余额充值",
    4: "团体课",
    6: "私教",
    7: "训练营"
}, defaultContent = "确认取消预约吗？";

_core.default.component({
    name: "BookingDetailPopoverRefund",
    props: {
        isShowRefundDialog: {
            type: Boolean,
            default: !1
        },
        confirmDialogContent: {
            type: String,
            default: ""
        },
        refundConfirmInfo: {
            type: Object,
            default: {
                scheduleName: "",
                startTime: "",
                endTime: "",
                orderType: -1,
                refundAmount: -1,
                refundRemark: "",
                refundTypeStr: ""
            }
        }
    },
    data: {
        contentHeight: "73%"
    },
    computed: {
        typeStr: function() {
            var e = this.refundConfirmInfo || {}, t = e.scheduleName;
            return typeMap[e.orderType] || t;
        },
        refundInfo: function() {
            var e = this.refundConfirmInfo || {}, t = e.startTime, n = e.endTime, r = e.orderType;
            return _objectSpread({}, e, {
                dateStr: 7 === r ? "".concat((0, _date.formatDate)(t), "开营") : 20 === r ? (0, _moment.default)(n).format("YYYY年MM月DD日 HH:mm") : (0, 
                _date.generateDate)(t, n),
                orderType: Number(r)
            });
        }
    },
    watch: {},
    methods: {
        hideMaskRefundDialog: function() {
            this.$emit("close");
        },
        hideRefundDialog: function() {
            this.$emit("close");
        },
        onRefundConfirm: function() {
            var e = this;
            this.$showModal({
                title: "提示",
                content: this.confirmDialogContent || defaultContent,
                confirmText: "确认取消",
                cancelText: "再想想",
                isShowCancel: !0,
                success: function() {
                    e.$emit("confirm");
                }
            });
        }
    }
}, {
    info: {
        components: {
            "animation-wrapper": {
                path: "./../common/enrichment/WrapperAnimation"
            }
        },
        on: {
            "1086-0": [ "cancel" ]
        }
    },
    handlers: {
        "1086-0": {
            cancel: function() {
                var e = arguments[arguments.length - 1];
                this.hideMaskRefundDialog(e);
            }
        },
        "1086-1": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.hideRefundDialog(e);
            }
        },
        "1086-2": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.onRefundConfirm(e);
            }
        }
    },
    models: {},
    refs: void 0
});