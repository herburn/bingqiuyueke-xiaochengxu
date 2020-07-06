var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, n, t, o, r, i, a) {
    try {
        var s = e[i](a), u = s.value;
    } catch (e) {
        return void t(e);
    }
    s.done ? n(u) : Promise.resolve(u).then(o, r);
}

function _asyncToGenerator(s) {
    return function() {
        var e = this, a = arguments;
        return new Promise(function(n, t) {
            var o = s.apply(e, a);
            function r(e) {
                asyncGeneratorStep(o, n, t, r, i, "next", e);
            }
            function i(e) {
                asyncGeneratorStep(o, n, t, r, i, "throw", e);
            }
            r(void 0);
        });
    };
}

_core.default.component({
    name: "ClassBookingDetailUnfinishedContent",
    props: {
        bookingDetail: {
            type: Object,
            default: {}
        }
    },
    data: {
        isShowRefundDialog: !1,
        refundConfirmInfo: {}
    },
    methods: {
        tapPageBtn: function() {
            var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (this.bookingDetail.waitInfo) {
                            e.next = 6;
                            break;
                        }
                        return e.next = 3, this._fetchRefundInfo();

                      case 3:
                        this.isShowRefundDialog = !0, e.next = 11;
                        break;

                      case 6:
                        return e.next = 8, this.$showModal({
                            content: "确认取消等候吗？",
                            isShowCancel: !0,
                            isShowModal: !0,
                            confirmText: "确认取消",
                            cancelText: "再看看"
                        });

                      case 8:
                        return e.next = 10, this._applyRefund();

                      case 10:
                        this.$emit("refundSuccess");

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function() {
                return e.apply(this, arguments);
            };
        }(),
        onRefundConfirm: function() {
            var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                var n;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, this._applyRefund();

                      case 3:
                        this.isShowRefundDialog = !1, this.$emit("refundSuccess"), e.next = 11;
                        break;

                      case 7:
                        e.prev = 7, e.t0 = e.catch(0), n = e.t0.errMsg, this.$showToast(n);

                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 0, 7 ] ]);
            }));
            return function() {
                return e.apply(this, arguments);
            };
        }(),
        hideRefundDialog: function() {
            this.isShowRefundDialog = !1;
        }
    },
    _fetchRefundInfo: function() {
        var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, this.$store.dispatch(this.$store.actions.getClassBookingRefund({
                        orderId: this.bookingDetail.id
                    }));

                  case 2:
                    this.refundConfirmInfo = e.sent;

                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    _applyRefund: function() {
        var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, this.$store.dispatch(this.$store.actions.postClassBookingRefund({
                        orderId: this.bookingDetail.id
                    }));

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }()
}, {
    info: {
        components: {
            "booking-detail-body": {
                path: "./../../../../components/booking/BookingDetailBody"
            },
            "booking-detail-header": {
                path: "./../../../../components/booking/BookingDetailHeader"
            },
            "subscribe-msg-row": {
                path: "./../../../../components/booking/BookingDetailRowSubscribeMsg"
            },
            "address-row": {
                path: "./../../../../components/booking/BookingDetailRowAddress"
            },
            "price-row": {
                path: "./../../../../components/booking/BookingDetailRowPrice"
            },
            "refund-dialog": {
                path: "./../../../../components/booking/BookingDetailPopoverRefund"
            },
            "page-resident-button": {
                path: "./../../../../components/common/dataEntry/ButtonPageResident"
            },
            "person-num-unfinished-row": {
                path: "./../../../../components/booking/BookingDetailRowPeopleNumberUnfinished"
            },
            "first-read-row": {
                path: "./../../../../components/booking/BookingDetailRowFirstBookingNotes"
            },
            "booking-num-unfinished-row": {
                path: "./../../../../components/booking/BookingDetailRowBookingNumberUnfinished"
            },
            "entry-password-unfinished-row": {
                path: "./../../../../components/booking/BookingDetailRowEntryPasswordUnfinished"
            },
            "waiting-count-row": {
                path: "./../../../../components/booking/BookingDetailRowWaitingCount"
            }
        },
        on: {
            "1066-0": [ "tapPageBtn" ],
            "1066-1": [ "confirm", "close" ]
        }
    },
    handlers: {
        "1066-0": {
            tapPageBtn: function() {
                var e = arguments[arguments.length - 1];
                this.tapPageBtn(e);
            }
        },
        "1066-1": {
            confirm: function() {
                var e = arguments[arguments.length - 1];
                this.onRefundConfirm(e);
            },
            close: function() {
                var e = arguments[arguments.length - 1];
                this.hideRefundDialog(e);
            }
        }
    },
    models: {},
    refs: void 0
});