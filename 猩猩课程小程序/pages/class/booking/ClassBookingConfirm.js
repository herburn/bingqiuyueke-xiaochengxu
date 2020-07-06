var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../../tmp/index.js")), _store = require("./../../../store/index.js"), _reduxPlugin = require("./../../../plugins/redux/index.js"), _ramda = require("./../../../vendor.js")(320), _price = require("./../../../utils/price.js"), _constants = require("./../../../constants/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, i, n, r, o, a) {
    try {
        var s = e[o](a), c = s.value;
    } catch (e) {
        return void i(e);
    }
    s.done ? t(c) : Promise.resolve(c).then(n, r);
}

function _asyncToGenerator(s) {
    return function() {
        var e = this, a = arguments;
        return new Promise(function(t, i) {
            var n = s.apply(e, a);
            function r(e) {
                asyncGeneratorStep(n, t, i, r, o, "next", e);
            }
            function o(e) {
                asyncGeneratorStep(n, t, i, r, o, "throw", e);
            }
            r(void 0);
        });
    };
}

function ownKeys(t, e) {
    var i = Object.keys(t);
    return Object.getOwnPropertySymbols && i.push.apply(i, Object.getOwnPropertySymbols(t)), 
    e && (i = i.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), i;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(i, !0).forEach(function(e) {
            _defineProperty(t, e, i[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ownKeys(i).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
        });
    }
    return t;
}

function _defineProperty(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e;
}

_core.default.page({
    name: "ClassBookingConfirm",
    _scheduleId: -1,
    _sk: "",
    _ticketSelected: {},
    _isPaying: !1,
    data: {
        isSuperCard: !1,
        isSuperCardFrozen: !1,
        classBookingConfirmInfo: null,
        isWaiting: !1,
        numIndexSelected: 0,
        privilegeSelected: 0,
        ticketId: ""
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        rechargeABCategory: function(e) {
            return this.$store.selectors.getRechargeABCategory(e);
        },
        scoutStatus: function(e) {
            var t;
            if (null === (t = this.classBookingConfirmInfo) || void 0 === t || !t.header.scoutNote) return "";
            if ("frozen" === this.superCard.mode) return "scoutFrozen";
            var i = this.$store.selectors.getVipInfo(e), n = i.levelId, r = i.userVipEnable;
            return n < 2 ? "scoutDissatisfy" : -1 === r ? "scoutDisable" : "scoutEnable";
        }
    }), {
        isWaiting: function() {
            var e;
            return null === (e = this.classBookingConfirmInfo) || void 0 === e ? void 0 : e.waitingConfirm;
        },
        persons: function() {
            var i = this;
            if (!this.classBookingConfirmInfo) return null;
            var e = this.classBookingConfirmInfo, n = e.availableCount, r = e.privilegePeopleMap, t = (0, 
            _ramda.pipe)((0, _ramda.prop)(this.privilege.id), _ramda.keys);
            return (0, _ramda.pipe)(t, (0, _ramda.map)(function(e) {
                return {
                    label: "".concat(e, "人"),
                    value: +e,
                    recommend: 2 == +e && (t = e, 1 === r[i.privilege.id][t]),
                    disabled: n < e
                };
                var t;
            }))(r);
        },
        peopleValue: function() {
            var e;
            return null === (e = this.persons) || void 0 === e ? void 0 : e[this.numIndexSelected].value;
        },
        privilege: function() {
            var e;
            return null === (e = this.classBookingConfirmInfo) || void 0 === e ? void 0 : e.privilege.privileges[this.privilegeSelected];
        },
        firstBookingPrice: function() {
            var e;
            return null !== (e = this.classBookingConfirmInfo) && void 0 !== e && e.firstBooking.isFirstBooking ? this.classBookingConfirmInfo.firstBooking.firstBookingPrice : null;
        },
        total: function() {
            if (this.classBookingConfirmInfo) {
                var e = this.classBookingConfirmInfo.priceMap["".concat("default", "|").concat(this.peopleValue, "|normal")];
                return 1 < this.peopleValue ? {
                    price: e.processPrice,
                    priceCent: (0, _price.yuan2Cent)(e.processPrice),
                    originalPriceCent: (0, _price.yuan2Cent)(e.originalPrice)
                } : {
                    price: e.originalPrice,
                    priceCent: (0, _price.yuan2Cent)(e.originalPrice),
                    originalPriceCent: (0, _price.yuan2Cent)(e.originalPrice)
                };
            }
        },
        totalPriceText: function() {
            return this.classBookingConfirmInfo ? this.firstBookingPrice ? 1 === this.peopleValue ? {
                mode: "classFirst1",
                price: "".concat(this.total.price, "元"),
                firstPrice: "首次体验".concat(this.firstBookingPrice, "元")
            } : {
                mode: "classFirst2",
                price: "".concat(this.total.price, "元"),
                firstPrice: "含1位首次体验"
            } : {
                mode: "normal",
                price: "".concat(this.total.price, "元")
            } : null;
        },
        superCard: function() {
            if (!this.classBookingConfirmInfo) return null;
            var e = "A" === this.rechargeABCategory;
            if (!this.isSuperCard) {
                var t = this.classBookingConfirmInfo.priceMap["".concat(this.privilege.id, "|").concat(this.peopleValue, "|normal")].saveMoney;
                return {
                    mode: "openCard",
                    price: e ? "开通超猩卡本次立减¥".concat(t) : "尚未开通，立即开通"
                };
            }
            if (this.isSuperCardFrozen) return {
                mode: "frozen"
            };
            var i = this.classBookingConfirmInfo.priceMap["".concat(this.privilege.id, "|").concat(this.peopleValue, "|super")], n = i.processPrice, r = i.saveMoney;
            return this.classBookingConfirmInfo.totalBalance < n - this.ticketPrice ? {
                mode: "recharge",
                price: e ? "余额不足，充值本单可省".concat(r, "元") : "余额不足，点击充值"
            } : {
                mode: "normal",
                price: "".concat(n, "元"),
                priceValue: n
            };
        },
        ticketPrice: function() {
            return "" === this.ticketId ? 0 : (0, _price.cent2Yuan)(this._ticketSelected.ticketValue);
        },
        payPrice: function() {
            if (!this.classBookingConfirmInfo) return null;
            if ("normal" === this.superCard.mode) return Math.max((0, _price.yuanToFixed2)(this.superCard.priceValue - this.ticketPrice), 0);
            var e = this.classBookingConfirmInfo.priceMap["".concat(this.privilege.id, "|").concat(this.peopleValue, "|normal")].processPrice;
            return Math.max((0, _price.yuanToFixed2)(e - this.ticketPrice), 0);
        },
        confirmBtn: function() {
            if (!this.classBookingConfirmInfo) return null;
            var e = "A" === this.rechargeABCategory;
            if ((0, _ramda.contains)(this.scoutStatus, [ "scoutDissatisfy", "scoutFrozen" ])) return {
                items: [ {
                    label: "暂无法预约，查看原因",
                    status: "enable",
                    type: "scoutLimit"
                } ]
            };
            if ("scoutDisable" === this.scoutStatus) return {
                items: [ {
                    label: e ? "仅支持超猩卡用户，点击开通" : "暂无法预约，查看原因",
                    status: "enable",
                    type: "scoutLimit"
                } ]
            };
            var t = this.classBookingConfirmInfo.btnInfo, i = t.bookingCountLimitMsg, n = t.userBadgeInfo;
            if (i) return {
                items: [ {
                    label: i,
                    status: "disable",
                    type: "limit"
                } ]
            };
            if (n && !n.targetAchieve) return {
                items: [ {
                    label: "需先获得 ".concat(n.badgeName, " 猩章，查看详情"),
                    status: "enableGrey",
                    type: "needBadge"
                } ]
            };
            if (this.isWaiting) {
                if ("openCard" === this.superCard.mode) return {
                    items: [ {
                        label: "超猩卡用户可等候,点击开通(随时可退)",
                        status: "enable",
                        type: "recharge"
                    } ]
                };
                if ("recharge" === this.superCard.mode) {
                    var r = this.classBookingConfirmInfo.priceMap["".concat(this.privilege.id, "|").concat(this.peopleValue, "|super")].saveMoney;
                    return {
                        items: [ {
                            label: e ? "余额不足，充值本单可省".concat(r, "元") : "余额不足，点击充值",
                            status: "enable",
                            type: "recharge"
                        } ]
                    };
                }
                if ("frozen" === this.superCard.mode) return {
                    items: [ {
                        label: "超猩卡冻结中，无法等候课程",
                        status: "disable",
                        type: "frozenLimit"
                    } ]
                };
                if ("normal" === this.superCard.mode) return {
                    items: [ {
                        label: "等候",
                        status: "enable",
                        type: "balance"
                    } ]
                };
            } else {
                if ("frozen" === this.superCard.mode) return {
                    items: [ {
                        label: "确认订单，微信支付(超猩卡冻结中)",
                        status: "enable",
                        type: "wxpay"
                    } ]
                };
                if ("normal" === this.superCard.mode) return {
                    items: [ {
                        label: "确认订单，超猩卡支付",
                        status: "enable",
                        type: "balance"
                    } ]
                };
            }
            return {
                items: [ {
                    label: "确认订单，微信支付",
                    status: "enable",
                    type: "wxpay"
                } ]
            };
        },
        tips: function() {
            return this.isWaiting ? _constants.waitClassTips : _constants.classTips;
        }
    }),
    beforeRouteEnter: function(e, t, i) {
        if ("navigateBack" !== e.jumpMethodName || "RechargeConfirm" === t.page) {
            var n = e.data, r = n.scheduleId, o = n.sk, a = _store.store.dispatchAction("getClassBookingConfirm", {
                scheduleId: r,
                sk: o
            });
            i(function(e) {
                e._preLoad = a;
            });
        } else i();
    },
    onLoad: function() {
        var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            var i, n;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return i = t.scheduleId, n = t.sk, this._scheduleId = i, this._sk = n, e.next = 5, 
                    this._fetchData(!0);

                  case 5:
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
        this.$isReady && null !== this._preLoad && this._fetchData();
    },
    methods: {
        handleReload: function() {
            var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        this._fetchData(!0);

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function() {
                return e.apply(this, arguments);
            };
        }(),
        confirmNum: function(e) {
            var t = e.index;
            e.item.disabled || (this.numIndexSelected = t);
        },
        changePrivilege: function(e) {
            this.classBookingConfirmInfo.privilege.privileges[e].enable && (this.privilegeSelected = e, 
            this.numIndexSelected = 0, this._showStaffModal());
        },
        changeTicket: function(e) {
            var t = e.ticket;
            this.ticketId = t.ticketId, this._ticketSelected = t;
        },
        tapPageBtn: function() {
            var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
                var i, n, r, o, a, s, c, u, l, p, h;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (h = function() {
                            return (h = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                                var t, i = arguments;
                                return _regeneratorRuntime2.default.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return t = 0 < i.length && void 0 !== i[0] ? i[0] : {}, e.next = 3, this.$showModal({
                                            content: t.msg || "网络异常，请检查..."
                                        });

                                      case 3:
                                        this.$router.navigateBack({
                                            delta: 1
                                        });

                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e, this);
                            }))).apply(this, arguments);
                        }, p = function() {
                            return h.apply(this, arguments);
                        }, l = function(e) {
                            this.classBookingConfirmInfo.btnInfo.isNeedBindPhoneNumber ? this.$router.redirectTo({
                                page: "BindPhoneBridge",
                                data: {
                                    page: "ClassBookingSuccess",
                                    data: this.$encodeParams({
                                        orderId: e
                                    })
                                }
                            }, !0) : this.$router.redirectTo({
                                page: "ClassBookingSuccess",
                                data: {
                                    orderId: e
                                }
                            });
                        }, u = function() {
                            return (u = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                                var t, i, n, r;
                                return _regeneratorRuntime2.default.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return e.prev = 0, t = {
                                            scheduleId: this._scheduleId,
                                            sk: this._sk,
                                            needAmount: (0, _price.yuan2Cent)(this.payPrice),
                                            bookingCount: this.peopleValue,
                                            ticketId: this.ticketId,
                                            privilegeNo: this.privilege.id
                                        }, wx.showLoading({
                                            mask: !0
                                        }), e.next = 5, this.$store.dispatch(this.$store.actions.payWXByClass(t));

                                      case 5:
                                        if (i = e.sent, n = i.wxpayInfo, r = i.order.orderId, wx.hideLoading(), n) return e.prev = 10, 
                                        e.next = 13, _core.default.requestPayment({
                                            timeStamp: n.timeStamp,
                                            nonceStr: n.nonceStr,
                                            package: n.package,
                                            signType: n.signType,
                                            paySign: n.paySign
                                        });
                                        e.next = 24;
                                        break;

                                      case 13:
                                        this.$store.dispatch(this.$store.actions.postWXPaySuccessReceipt({
                                            orderId: r
                                        })), this.$sensorTracesEventCapture({
                                            type: "submit",
                                            responseRegionId: this._sensorResponseRegionIdMap.SUBMIT_CLASS_BOOKING_CONFIRM,
                                            dataset: {
                                                orderId: r,
                                                scheduleId: this._scheduleId,
                                                classState: this.isWaiting ? "等候" : "预约",
                                                bookingCount: this.peopleValue,
                                                totalPrice: this.total.originalPriceCent,
                                                needPay: (0, _price.yuan2Cent)(this.payPrice),
                                                ticketId: this._ticketSelected.ticketId,
                                                batchNo: this._ticketSelected.batchNo,
                                                ticketValue: this._ticketSelected.ticketValue,
                                                privilegeNo: this.privilege.id
                                            }
                                        }), l.call(this, r), e.next = 22;
                                        break;

                                      case 18:
                                        e.prev = 18, e.t0 = e.catch(10), this.$store.dispatch(this.$store.actions.postWXPayFailureReceipt({
                                            orderId: r
                                        })), this.$showToast("未完成支付，订单已取消");

                                      case 22:
                                        e.next = 26;
                                        break;

                                      case 24:
                                        this.$store.dispatch(this.$store.actions.postWXPaySuccessReceipt({
                                            orderId: r
                                        })), l.call(this, r);

                                      case 26:
                                        e.next = 33;
                                        break;

                                      case 28:
                                        return e.prev = 28, e.t1 = e.catch(0), wx.hideLoading(), e.next = 33, p.call(this, e.t1);

                                      case 33:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e, this, [ [ 0, 28 ], [ 10, 18 ] ]);
                            }))).apply(this, arguments);
                        }, c = function() {
                            return u.apply(this, arguments);
                        }, s = function() {
                            this.isSuperCard ? this.$router.navigateTo({
                                page: "RechargeConfirm"
                            }) : this.$router.navigateTo({
                                page: "RechargeConfirm",
                                data: {
                                    privilegeScene: this.isWaiting ? "waiting" : "discount"
                                }
                            });
                        }, a = function() {
                            return (a = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                                var t, i, n;
                                return _regeneratorRuntime2.default.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        return e.prev = 0, t = {
                                            scheduleId: this._scheduleId,
                                            sk: this._sk,
                                            balanceUsed: (0, _price.yuan2Cent)(this.payPrice),
                                            bookingCount: this.peopleValue,
                                            ticketId: this.ticketId,
                                            privilegeNo: this.privilege.id
                                        }, wx.showLoading({
                                            mask: !0
                                        }), e.next = 5, this.$store.dispatch(this.$store.actions.payBalanceByClass(t));

                                      case 5:
                                        i = e.sent, n = i.order.orderId, this.$sensorTracesEventCapture({
                                            type: "submit",
                                            responseRegionId: this._sensorResponseRegionIdMap.SUBMIT_CLASS_BOOKING_CONFIRM,
                                            dataset: {
                                                orderId: n,
                                                scheduleId: this._scheduleId,
                                                classState: this.isWaiting ? "等候" : "预约",
                                                bookingCount: this.peopleValue,
                                                totalPrice: this.total.originalPriceCent,
                                                needPay: (0, _price.yuan2Cent)(this.payPrice),
                                                ticketId: this._ticketSelected.ticketId,
                                                batchNo: this._ticketSelected.batchNo,
                                                ticketValue: this._ticketSelected.ticketValue,
                                                privilegeNo: this.privilege.id
                                            }
                                        }), wx.hideLoading(), l.call(this, n), e.next = 17;
                                        break;

                                      case 12:
                                        return e.prev = 12, e.t0 = e.catch(0), wx.hideLoading(), e.next = 17, p.call(this, e.t0);

                                      case 17:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e, this, [ [ 0, 12 ] ]);
                            }))).apply(this, arguments);
                        }, o = function() {
                            return a.apply(this, arguments);
                        }, r = function() {
                            var e = this.classBookingConfirmInfo.btnInfo.userBadgeInfo, t = e.badgeId, i = e.sk;
                            this.$router.navigateTo({
                                page: "BadgeDetail",
                                data: {
                                    badgeId: t,
                                    sk: i,
                                    isJumpRecharge: this.isSuperCard ? 0 : 1
                                }
                            });
                        }, i = t.item.type, this._isPaying) return e.abrupt("return");
                        e.next = 12;
                        break;

                      case 12:
                        if (this._isPaying = !0, e.prev = 13, "scoutLimit" !== i) {
                            e.next = 30;
                            break;
                        }
                        if (this.isSuperCardFrozen) return e.next = 18, this.$showModal({
                            isShowCancel: !0,
                            title: "暂无法预约",
                            content: "超猩卡冻结中，无法预约猩探课",
                            confirmText: "查看进度",
                            cancelText: "我知道了"
                        });
                        e.next = 20;
                        break;

                      case 18:
                        return this.$router.navigateTo({
                            page: "BalanceRecords"
                        }), e.abrupt("return");

                      case 20:
                        if ("scoutDisable" !== this.scoutStatus) {
                            e.next = 26;
                            break;
                        }
                        if ("B" === this.rechargeABCategory) return e.next = 24, this.$showModal({
                            isShowCancel: !0,
                            title: "暂无法预约",
                            content: this.classBookingConfirmInfo.header.scoutNote,
                            confirmText: "立即开通",
                            cancelText: "暂不开通"
                        });
                        e.next = 24;
                        break;

                      case 24:
                        return this.$router.navigateTo({
                            page: "RechargeConfirm",
                            data: {
                                privilegeScene: "scout"
                            }
                        }), e.abrupt("return");

                      case 26:
                        if ("scoutDissatisfy" === this.scoutStatus) return e.next = 29, this.$showModal({
                            isShowCancel: !1,
                            title: "暂无法预约",
                            content: this.classBookingConfirmInfo.header.scoutNote,
                            confirmText: "我知道了"
                        });
                        e.next = 30;
                        break;

                      case 29:
                        return e.abrupt("return");

                      case 30:
                        if ("limit" === i) return e.abrupt("return");
                        e.next = 32;
                        break;

                      case 32:
                        return n = this.classBookingConfirmInfo.btnInfo.confirmDialog, e.next = 35, this.$reqSubscribeMsgByF(this.isWaiting ? _constants.SCENE0502 : _constants.SCENE0501);

                      case 35:
                        if (n) return e.next = 38, this.$showModal({
                            isShowCancel: !0,
                            title: n.title,
                            content: n.content,
                            confirmText: n.okButtonText,
                            cancelText: n.cancelButtonText
                        });
                        e.next = 38;
                        break;

                      case 38:
                        if ("needBadge" !== i) {
                            e.next = 42;
                            break;
                        }
                        r.call(this), e.next = 54;
                        break;

                      case 42:
                        if ("balance" === i) return e.next = 45, o.call(this);
                        e.next = 47;
                        break;

                      case 45:
                        e.next = 54;
                        break;

                      case 47:
                        if ("recharge" !== i) {
                            e.next = 51;
                            break;
                        }
                        s.call(this), e.next = 54;
                        break;

                      case 51:
                        if ("wxpay" === i) return e.next = 54, c.call(this);
                        e.next = 54;
                        break;

                      case 54:
                        e.next = 59;
                        break;

                      case 56:
                        e.prev = 56, e.t0 = e.catch(13), console.log("tapPageBtn err", e.t0);

                      case 59:
                        return e.prev = 59, this._isPaying = !1, e.finish(59);

                      case 62:
                      case "end":
                        return e.stop();
                    }
                }, e, this, [ [ 13, 56, 59, 62 ] ]);
            }));
            return function(e) {
                return t.apply(this, arguments);
            };
        }()
    },
    _fetchData: function() {
        var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            var t, i, n, r, o, a = arguments;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (0 < a.length && void 0 !== a[0] && a[0]) return e.prev = 2, this.$showLoading(""), 
                    e.next = 6, this.$distribute();
                    e.next = 13;
                    break;

                  case 6:
                    t = e.sent, e.next = 12;
                    break;

                  case 9:
                    e.prev = 9, e.t0 = e.catch(2), console.error("distribute error", e.t0);

                  case 12:
                    t || this.$showLoading();

                  case 13:
                    if (i = this._scheduleId, n = this._sk, e.prev = 15, null !== this._preLoad) return e.next = 19, 
                    this._preLoad;
                    e.next = 22;
                    break;

                  case 19:
                    this._preLoad = null, e.next = 24;
                    break;

                  case 22:
                    return e.next = 24, this.$store.dispatch(this.$store.actions.getClassBookingConfirm({
                        scheduleId: i,
                        sk: n
                    }));

                  case 24:
                    if (r = this.$store.getState(), this.classBookingConfirmInfo = this.$store.selectors.getClassBookingConfirmInfo(r), 
                    this.isSuperCard = this.$store.selectors.getIsSuperCard(r), this.isSuperCardFrozen = this.$store.selectors.getIsSuperCardFrozen(r), 
                    1 < this.classBookingConfirmInfo.privilege.privileges.length && (this.privilegeSelected = 1), 
                    t) return this.$showLoading(t), e.next = 33, this.$sleep(500);
                    e.next = 33;
                    break;

                  case 33:
                    this.$hideLoading(), e.next = 40;
                    break;

                  case 36:
                    e.prev = 36, e.t1 = e.catch(15), o = e.t1.msg, this.$failLoading(o);

                  case 40:
                    return e.next = 42, this._openEnterModal();

                  case 42:
                    return e.next = 44, this._showStaffModal();

                  case 44:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 2, 9 ], [ 15, 36 ] ]);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    _showStaffModal: function() {
        var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if ("SupermonkeyStaff" === this.classBookingConfirmInfo.privilege.privileges[this.privilegeSelected].id) return e.next = 3, 
                    this.$showModal({
                        title: "须知",
                        content: "若使用该特权约课，在课程满员时，会自动取消预约；若使用该特权等候，会排在未使用该特权用户之后，同为特权约课的用户则按下单先后顺序排队；使用特权等候若未等候上，在开课时，特权（在有效期内）会退回；",
                        confirmText: "我知道了"
                    });
                    e.next = 3;
                    break;

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
    _openEnterModal: function() {
        var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (this.classBookingConfirmInfo.enterConfirmDialog) return e.next = 3, this.$openDialog(this.classBookingConfirmInfo.enterConfirmDialog);
                    e.next = 3;
                    break;

                  case 3:
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
            "booking-confirm-layer": {
                path: "./../../../components/booking/BookingConfirmLayout"
            },
            "scout-note": {
                path: "./../../../components/booking/BookingConfirmScoutNote"
            },
            "total-price-row": {
                path: "./../../../components/booking/BookingConfirmRowTotalPrice"
            },
            "people-num-radio-row": {
                path: "./../../../components/booking/BookingConfirmRowRadio"
            },
            "confirm-header": {
                path: "./../../../components/booking/BookingConfirmHeader"
            },
            "super-price-row": {
                path: "./../../../components/booking/BookingConfirmRowSuperPrice"
            },
            "privilege-choose-row": {
                path: "./../../../components/booking/BookingConfirmRowSelectPrivilege"
            },
            "ticket-row": {
                path: "./../../../components/booking/BookingConfirmRowSelectTicket"
            },
            "need-pay": {
                path: "./../../../components/booking/BookingConfirmActuallyPay"
            },
            tips: {
                path: "./../../../components/booking/BookingConfirmTips"
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
            "show-action-sheet": {
                path: "./../../../components/common/dataEntry/ActionSheet"
            },
            "show-picker-view": {
                path: "./../../../components/common/dataEntry/PickerView"
            },
            "navigator-bar": {
                path: "./../../../components/common/navigation/NavigatorBar"
            },
            "page-resident-button": {
                path: "./../../../components/common/dataEntry/ButtonPageResident"
            }
        },
        on: {
            "840-0": [ "confirmNum" ],
            "840-1": [ "changePrivilege" ],
            "840-2": [ "changeTicket" ],
            "840-3": [ "tapPageBtn" ],
            "840-4": [ "reload" ]
        }
    },
    handlers: {
        "840-0": {
            confirmNum: function() {
                var e = arguments[arguments.length - 1];
                this.confirmNum(e);
            }
        },
        "840-1": {
            changePrivilege: function() {
                var e = arguments[arguments.length - 1];
                this.changePrivilege(e);
            }
        },
        "840-2": {
            changeTicket: function() {
                var e = arguments[arguments.length - 1];
                this.changeTicket(e);
            }
        },
        "840-3": {
            tapPageBtn: function() {
                var e = arguments[arguments.length - 1];
                this.tapPageBtn(e);
            }
        },
        "840-4": {
            reload: function() {
                var e = arguments[arguments.length - 1];
                this.handleReload(e);
            }
        }
    },
    models: {},
    refs: void 0
});