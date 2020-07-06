var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../tmp/index.js")), R = _interopRequireWildcard(require("./../../vendor.js")(320));

function _interopRequireWildcard(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var i in t) if (Object.prototype.hasOwnProperty.call(t, i)) {
        var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, i) : {};
        r.get || r.set ? Object.defineProperty(e, i, r) : e[i] = t[i];
    }
    return e.default = t, e;
}

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function asyncGeneratorStep(t, e, i, r, n, o, c) {
    try {
        var a = t[o](c), u = a.value;
    } catch (t) {
        return void i(t);
    }
    a.done ? e(u) : Promise.resolve(u).then(r, n);
}

function _asyncToGenerator(a) {
    return function() {
        var t = this, c = arguments;
        return new Promise(function(e, i) {
            var r = a.apply(t, c);
            function n(t) {
                asyncGeneratorStep(r, e, i, n, o, "next", t);
            }
            function o(t) {
                asyncGeneratorStep(r, e, i, n, o, "throw", t);
            }
            n(void 0);
        });
    };
}

var filter = R.filter, propEq = R.propEq, find = R.find, findIndex = R.findIndex;

_core.default.component({
    name: "BookingConfirmRowSelectTicket",
    props: {
        tickets: {
            type: Array,
            default: []
        },
        totalPrice: {
            type: Number,
            default: 0
        },
        ticketId: {
            type: String,
            default: 0
        }
    },
    data: {},
    computed: {
        validTickets: function() {
            var i = this;
            return this.tickets.length ? filter(function(t) {
                var e;
                return 0 === t.status && i.totalPrice >= (null === (e = t.ticketRule) || void 0 === e ? void 0 : e.orderAmountThreshold);
            })(this.tickets) : [];
        },
        invalidTickets: function() {
            var i = this;
            return this.tickets.length ? filter(function(t) {
                var e;
                return 0 !== t.status || i.totalPrice < (null === (e = t.ticketRule) || void 0 === e ? void 0 : e.orderAmountThreshold);
            })(this.tickets) : [];
        },
        validTicketCount: function() {
            return this.validTickets.length;
        },
        ticketString: function() {
            if (this.ticketId) {
                var t = find(propEq("ticketId", this.ticketId))(this.tickets);
                return "-".concat(((null == t ? void 0 : t.ticketValue) || 0) / 100, "元");
            }
            return 0 === this.validTicketCount ? "无代金券" : "".concat(this.validTicketCount, "张可用");
        }
    },
    methods: {
        goSelectTicket: function() {
            var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function t() {
                var e;
                return _regeneratorRuntime2.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (this.validTicketCount) return t.next = 3, this._getTicketId();
                        t.next = 9;
                        break;

                      case 3:
                        if (t.t0 = t.sent, t.t0) {
                            t.next = 6;
                            break;
                        }
                        t.t0 = "";

                      case 6:
                        this.ticketId = t.t0, e = findIndex(propEq("ticketId", this.ticketId))(this.tickets), 
                        this.$emit("changeTicket", {
                            ticket: this.tickets[e] || {
                                ticketId: "",
                                ticketValue: ""
                            },
                            index: e
                        });

                      case 9:
                      case "end":
                        return t.stop();
                    }
                }, t, this);
            }));
            return function() {
                return t.apply(this, arguments);
            };
        }()
    },
    _getTicketId: function() {
        var i = this;
        return new Promise(function(t, e) {
            i.$router.navigateTo({
                page: "UseTicket",
                data: {
                    ticketId: i.ticketId,
                    getTickets: function() {
                        return {
                            validTickets: i.validTickets,
                            invalidTickets: i.invalidTickets
                        };
                    },
                    resolve: t,
                    reject: e
                }
            });
        });
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1059-0": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.goSelectTicket(t);
            }
        }
    },
    models: {},
    refs: void 0
});