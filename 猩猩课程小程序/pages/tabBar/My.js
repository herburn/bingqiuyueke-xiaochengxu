var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../tmp/index.js")), _version = require("./../../utils/version.js"), _reduxPlugin = require("./../../plugins/redux/index.js"), _constants = require("./../../constants/index.js"), _debounceThrottle = require("./../../utils/debounce-throttle.js"), _thread = require("./../../utils/thread.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, n, r, o, i, a) {
    try {
        var s = e[i](a), c = s.value;
    } catch (e) {
        return void n(e);
    }
    s.done ? t(c) : Promise.resolve(c).then(r, o);
}

function _asyncToGenerator(s) {
    return function() {
        var e = this, a = arguments;
        return new Promise(function(t, n) {
            var r = s.apply(e, a);
            function o(e) {
                asyncGeneratorStep(r, t, n, o, i, "next", e);
            }
            function i(e) {
                asyncGeneratorStep(r, t, n, o, i, "throw", e);
            }
            o(void 0);
        });
    };
}

function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _nonIterableSpread();
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(e) {
    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
}

function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
    }
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
    name: "My",
    _isOpenRegisterLoginModal: !1,
    _awaitClearTime: 500,
    data: {
        hideBalance: !1,
        navBarBg: "",
        levelConfig: {
            1: {
                color: "#f4bd21",
                gradientStart: "#f4bd21",
                gradientEnd: "#df900e"
            },
            2: {
                color: "#9a959a",
                gradientStart: "#f5f9ff",
                gradientEnd: "#9a959a"
            },
            3: {
                color: "#edd674"
            },
            4: {
                color: "#afaeaf"
            },
            5: {
                color: "#c2b1d5"
            }
        }
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        rechargeABCategory: function(e) {
            return this.$store.selectors.getRechargeABCategory(e);
        },
        isUnregistered: function(e) {
            return this.$store.selectors.getIsUnregistered(e);
        },
        isSuperCard: function(e) {
            return this.$store.selectors.getIsSuperCard(e);
        },
        isSuperCardFrozen: function(e) {
            return this.$store.selectors.getIsSuperCardFrozen(e);
        },
        myInfo: function(e) {
            return this.$store.selectors.getMyInfo(e);
        },
        totalBalance: function(e) {
            return this.$store.selectors.getDisCountInfo(e).totalBalance;
        },
        vipLevelMap: function(e) {
            return this.$store.selectors.getVipLevelConfigMap(e);
        },
        vipUpgradeHint: function(e) {
            return this.$store.selectors.getMyInfo(e).vipUpgradeHint;
        },
        userVip: function(e) {
            return this.$store.selectors.getMyInfo(e).userVip;
        },
        expireTicketNumber: function(e) {
            return this.$store.selectors.getExpireTicketNumber(e);
        },
        newTicketNumber: function(e) {
            return this.$store.selectors.getNewTicketNumber(e);
        },
        allTicketValue: function(e) {
            return this.$store.selectors.getAllTicketValue(e) / 100;
        },
        newBadgeNumber: function(e) {
            return this.$store.selectors.getNewBadgeNumber(e);
        },
        myInviteInfoNumber: function(e) {
            return this.$store.selectors.getMyInviteInfoNumber(e);
        },
        isNeedBindPhoneNumber: function(e) {
            return this.$store.selectors.getIsNeedBindPhone(e);
        },
        trainRewardTaskTarget: function(e) {
            if (this.$store.selectors.getMyInfo(e).userTrainRewardTask) return _toConsumableArray(Array(this.$store.selectors.getMyInfo(e).userTrainRewardTask.targetValue).keys());
        },
        isFullDisplay: function(e) {
            return this.$store.selectors.isFullDisplay(e);
        },
        promotionConfig: function(e) {
            var t = this.$store.selectors.getPromotionsByPositionId(e, _constants.SUPERMONKEY_CARD), n = t.positionInfo.promotionNum;
            return _objectSpread({}, t, {
                promotions: t.promotions.slice(0, n)
            });
        }
    }), {
        rechargeText: function() {
            return "A" === this.rechargeABCategory ? "开通超猩卡预计省¥".concat(this.myInfo.totalSaveMoney / 100, "/年") : "开通超猩卡享特权";
        },
        badgeText: function() {
            return "A" === this.rechargeABCategory ? 0 === this.myInfo.badgeCount ? "开通超猩卡，解锁猩章荣耀" : "已解锁".concat(this.myInfo.badgeCount, "枚猩章，点击查看") : "开通超猩卡，方可查看";
        },
        superNumber: function() {
            var e = this.myInfo, t = e.totalStat, n = e.balance, r = e.rank;
            if (0 < n) return 1e3 < r ? parseInt(r).toLocaleString() : r;
            if (t) {
                var o = t.workoutMins;
                return 1e3 < o ? parseInt(o).toLocaleString() : o;
            }
            return "";
        }
    }),
    watch: {
        vipUpgradeHint: function() {
            var e = this;
            1 === this.vipUpgradeHint && this.$invokeChild("vip-upgrade-modal", "showUpgradeModal", {
                level: this.userVip.levelId,
                tip: this.isSuperCard ? "恭喜成为".concat(this.vipLevelMap[this.userVip.levelId].vipLevelName, "会员，快去看看新解锁的权益！") : "你已满足相应条件，开通超猩卡立享".concat(this.vipLevelMap[this.userVip.levelId].vipLevelName, "权益！"),
                success: function() {
                    e.$router.navigateTo({
                        page: "VIPRights"
                    });
                }
            });
        }
    },
    onLoad: function() {
        this.isUnregistered || (this.$showLoading(), this._fetchGetPromotionPositions());
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
    onPageScroll: function(e) {
        var t = e.scrollTop;
        this._onPageScroll(t);
    },
    methods: {
        handleRouter: function(e) {
            var t = e.page, n = e.data, r = e.method, o = void 0 === r ? "navigateTo" : r;
            this.$router[o]({
                page: t,
                data: n
            });
        },
        openVipEquityPop: function() {
            this.$invokeChild("vipEquityPop", "openEquityPop");
        },
        setHideBalance: function() {
            this.hideBalance = !this.hideBalance;
        },
        linkImageMask: function() {
            var n = this, e = "ios" === this.rootId ? [ "album", "camera" ] : [ "album" ];
            wx.chooseImage({
                count: 1,
                sizeType: [ "original" ],
                sourceType: e,
                success: function(e) {
                    var t = e.tempFilePaths[0];
                    n.$router.navigateTo({
                        page: "ImageMask",
                        data: {
                            tempFilePath: t
                        }
                    }, !0);
                },
                fail: function(e) {
                    console.log(e, "fail");
                }
            });
        },
        linkBadgePage: function() {
            var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (this.isSuperCard ? this.$router.navigateTo({
                            page: "BadgeIndex"
                        }) : this.$router.navigateTo({
                            page: "RechargeConfirm",
                            data: {
                                privilegeScene: "badge"
                            }
                        }), this.newBadgeNumber) return e.next = 4, (0, _thread.sleep)(this._awaitClearTime);
                        e.next = 5;
                        break;

                      case 4:
                        this.$store.dispatch(this.$store.actions.setNewBadgeNumber(0));

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function() {
                return e.apply(this, arguments);
            };
        }(),
        linkUserTicket: function() {
            var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (this.$router.navigateTo({
                            page: "MyTicket"
                        }), this.expireTicketNumber) return e.next = 4, (0, _thread.sleep)(this._awaitClearTime);
                        e.next = 5;
                        break;

                      case 4:
                        this.$store.dispatch(this.$store.actions.setExpireTicketsNumber(0));

                      case 5:
                        if (this.newTicketNumber) return e.next = 8, (0, _thread.sleep)(this._awaitClearTime);
                        e.next = 10;
                        break;

                      case 8:
                        this.$store.dispatch(this.$store.actions.setNewTicketNumber(0)), this.$store.dispatch(this.$store.actions.setAllTicketValue(0));

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function() {
                return e.apply(this, arguments);
            };
        }(),
        navigationToSuperBonus: function() {
            var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                var t;
                return _regeneratorRuntime2.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        t = "pages/SplashScreen?url=InvitationIndex";
                        try {
                            this.myInviteInfoNumber && (t = "pages/SplashScreen?url=MyInvitation"), -1 === (0, 
                            _version.compareVersion)(this.SDKVersion, "2.0.7") && wx.navigateToMiniProgram({
                                appId: "wxaad1ec32ca918244",
                                path: t
                            });
                        } catch (e) {}
                        if (this.myInviteInfoNumber) return e.next = 5, (0, _thread.sleep)(this._awaitClearTime);
                        e.next = 6;
                        break;

                      case 5:
                        this.$store.dispatch(this.$store.actions.setMyInviteInfoNumber(0));

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
        handleReload: function() {
            this._fetchData();
        },
        showServiceModal: function() {
            this.$invokeChild("service-modal", "showServiceModal");
        },
        onFaceTap: function() {}
    },
    _fetchData: function() {
        var e = this;
        this.$store.dispatch(this.$store.actions.getMyInfo()).then(function() {
            return e.$hideLoading();
        }).catch(function() {
            return e.$failLoading();
        });
    },
    _fetchGetPromotionPositions: function() {
        var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            var t, n;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = this.promotionConfig, n = t.isDefaultRule, !t.isPositionActive) {
                        e.next = 5;
                        break;
                    }
                    if (n) {
                        e.next = 5;
                        break;
                    }
                    return e.next = 5, this.$store.dispatch(this.$store.actions.getPromotionsByPositionId([ {
                        positionId: _constants.SUPERMONKEY_CARD,
                        ext: {}
                    } ]));

                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    _onPageScroll: (0, _debounceThrottle.throttle)(function(e) {
        this.navBarBg = 15 < e ? "#242424" : "";
    }, 100)
}, {
    info: {
        components: {
            "unauthorized-msg": {
                path: "./../../components/subscribeMsg/ModalUnauthorizedMsg"
            },
            "reject-msg": {
                path: "./../../components/subscribeMsg/ModalRejectMsg"
            },
            "modal-subscribe-msg-guide1": {
                path: "./../../components/subscribeMsg/ModalSubscribeMsgGuide1"
            },
            "modal-subscribe-msg-guide2": {
                path: "./../../components/subscribeMsg/ModalSubscribeMsgGuide2"
            },
            "newer-guide": {
                path: "./../../components/course/CourseListTooltipNewerGuide"
            },
            "page-loading": {
                path: "./../../components/common/loading/LoadingPage"
            },
            "show-toast": {
                path: "./../../components/common/feedback/Toast"
            },
            "show-modal": {
                path: "./../../components/common/feedback/Modal"
            },
            "show-add-wechat-modal": {
                path: "./../../components/common/feedback/ModalAddWeChat"
            },
            "register-user": {
                path: "./../../components/common/feedback/ModalRegisterUser"
            },
            "vip-equity-pop": {
                path: "./../../components/common/feedback/AlertVipRights"
            },
            "ticket-prompt": {
                path: "./../../components/common/feedback/TooltipTicket"
            },
            "business-service-modal": {
                path: "./../../components/common/feedback/AlertBusinessService"
            },
            "personal-expire-prompt": {
                path: "./../../components/common/feedback/TooltipPersonal"
            },
            "show-action-sheet": {
                path: "./../../components/common/dataEntry/ActionSheet"
            },
            "show-picker-view": {
                path: "./../../components/common/dataEntry/PickerView"
            },
            face: {
                path: "./../../components/common/dataDisplay/Face"
            },
            "copy-right-bottom": {
                path: "./../../components/common/other/CopyRightBottom"
            },
            "vip-upgrade-modal": {
                path: "./../../components/common/other/ModalVIPUpgrade"
            },
            "navigator-bar": {
                path: "./../../components/common/navigation/NavigatorBar"
            },
            "click-behavior": {
                path: "./../../components/common/enrichment/ClickBehavior"
            }
        },
        on: {
            "837-0": [ "tap" ],
            "837-16": [ "reload" ]
        }
    },
    handlers: {
        "837-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.onFaceTap(e);
            }
        },
        "837-1": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.openVipEquityPop(e);
            }
        },
        "837-2": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.setHideBalance(e);
            }
        },
        "837-3": {
            tap: function() {
                this.handleRouter({
                    page: "BalanceRecords"
                });
            }
        },
        "837-4": {
            tap: function() {
                this.handleRouter({
                    page: "RechargeConfirm"
                });
            }
        },
        "837-5": {
            tap: function() {
                this.handleRouter({
                    page: "RechargeConfirm"
                });
            }
        },
        "837-6": {
            tap: function() {
                this.handleRouter({
                    page: "VIPRights"
                });
            }
        },
        "837-7": {
            tap: function() {
                this.handleRouter({
                    page: "SuperRank"
                });
            }
        },
        "837-8": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.linkBadgePage(e);
            }
        },
        "837-9": {
            tap: function() {
                this.handleRouter({
                    page: "BindPhoneBridge"
                });
            }
        },
        "837-10": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.linkUserTicket(e);
            }
        },
        "837-11": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.navigationToSuperBonus(e);
            }
        },
        "837-12": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.navigationToSuperBonus(e);
            }
        },
        "837-13": {
            tap: function() {
                this.handleRouter({
                    page: "MyGiveClass"
                });
            }
        },
        "837-14": {
            tap: function() {
                this.handleRouter({
                    page: "MsgManagement"
                });
            }
        },
        "837-15": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.showServiceModal(e);
            }
        },
        "837-16": {
            reload: function() {
                var e = arguments[arguments.length - 1];
                this.handleReload(e);
            }
        }
    },
    models: {},
    refs: void 0
});