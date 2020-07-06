Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _moment = _interopRequireDefault(require("./../../../vendor.js")(315));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
}

function ownKeys(t, e) {
    var a = Object.keys(t);
    return Object.getOwnPropertySymbols && a.push.apply(a, Object.getOwnPropertySymbols(t)), 
    e && (a = a.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), a;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(a, !0).forEach(function(e) {
            _defineProperty(t, e, a[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ownKeys(a).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
        });
    }
    return t;
}

function _defineProperty(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var classType = {
    name: "class_type",
    handler: function(e) {
        return (0, e.dataHandler.getClassTypeByUrl)();
    }
}, referrer = {
    name: "referrer",
    handler: function(e) {
        return (0, e.dataHandler.getReferrer)();
    }
}, eventMap = {
    buttonClick: {
        eventName: "button_click",
        schema: {
            classType: classType,
            buttonId: "button_id",
            buttonName: "button_name"
        }
    },
    filter: {
        eventName: "filter",
        schema: {
            classType: classType,
            filterContent: {
                name: "filter_content",
                handler: function(e) {
                    var t = e.data, a = [ [ "训练目标", t.targets ], [ "课程类型", t.types ], [ "课程", t.firstTypes ], [ "城市", t.city ], [ "区域", t.area ], [ "门店", t.boxes ], [ "时段", t.durations ], [ "显示已结束的课程", t.isShowFinished ] ], r = [];
                    return a.forEach(function(e) {
                        return function(t, e) {
                            var a = this;
                            0 === e.length ? this.push("".concat(t, ":无")) : "string" == typeof e ? this.push("".concat(t, ":").concat(e)) : "boolean" == typeof e ? this.push("".concat(t, ":").concat(e ? "是" : "否")) : e.forEach(function(e) {
                                return a.push("".concat(t, ":").concat(e));
                            });
                        }.apply(r, e);
                    }), r;
                }
            }
        }
    },
    trainerClick: {
        eventName: "trainer_click",
        schema: {
            classType: classType,
            trainerUserId: "trainer_id",
            scheduleId: "schedule_id",
            boxId: "box_id"
        }
    },
    classClick: {
        eventName: "class_click",
        schema: {
            classType: classType,
            scheduleId: "schedule_id",
            classState: "class_state"
        }
    },
    viewClassDetail: {
        eventName: "view_class_detail",
        schema: {
            scheduleId: "schedule_id",
            classState: "class_state",
            referrer: referrer
        }
    },
    reservation: {
        eventName: "reservation",
        schema: {
            scheduleId: "schedule_id",
            classState: "class_state",
            superCardPrice: "supermonkeycard_discount"
        }
    },
    classConfirmOrder: {
        eventName: "class_confirm_order",
        schema: {
            orderId: "order_id",
            scheduleId: "schedule_id",
            classState: "class_state",
            referrer: referrer,
            bookingCount: "booking_count",
            totalPrice: "order_amount",
            needPay: "deal_real_price",
            ticketId: "ticket_id",
            batchNo: "batch_no",
            ticketValue: "order_coupon_discount",
            privilegeNo: "user_priv"
        }
    },
    classPresent: {
        eventName: "class_present",
        schema: {
            scheduleId: "schedule_id",
            superCardPrice: "supermonkeycard_discount"
        }
    },
    classWait: {
        eventName: "class_wait",
        schema: {
            scheduleId: "schedule_id",
            superCardPrice: "supermonkeycard_discount",
            waitingCount: "wait_number"
        }
    },
    firstScreenLoading: {
        eventName: "first_screen_loading",
        schema: function(e) {
            var t = e.data, a = t.openType, r = t.isHttpFail, n = t.splashScreen0Timestamp, s = t.sceneBeforeTimestamp, i = t.sceneAfterTimestamp, o = t.initHttp0BeforeTimestamp, c = t.initHttp0AfterTimestamp, p = t.promotionHttpBeforeTimestamp, _ = t.promotionHttpAfterTimestamp, d = t.splashScreen0FinishedTimestamp, l = t.loginTimestamp, m = t.loginHttpBeforeTimestamp, u = t.loginHttpAfterTimestamp, f = t.loginFinishedTimestamp, h = t.splashScreen1Timestamp, y = t.initHttp1BeforeTimestamp, v = t.initHttp1AfterTimestamp, g = t.splashScreen1FinishedTimestamp, b = t.firstPageTimestamp, T = t.firstPageHttpBeforeTimestamp, S = t.firstPageHttpAfterTimestamp, w = t.firstPageFinishedTimestamp;
            return {
                open_type: a,
                is_http_fail: r,
                wa_redirect_scene_http_duration: P(s, i),
                promotion_http_duration: P(p, _),
                splash_screen_page_0_duration: P(n, d),
                login_page_duration: P(l, f),
                splash_screen_page_1_duration: P(h, g),
                first_functional_page_duration: P(b, w),
                first_screen_duration: P(n, w),
                splash_screen_page_0_http_before_duration: P(n, o),
                splash_screen_page_0_http_duration: P(o, c),
                splash_screen_page_0_http_after_duration: P(c, d),
                login_page_http_before_duration: P(l, m),
                login_page_http_duration: P(m, u),
                login_page_http_after_duration: P(u, f),
                splash_screen_page_1_http_before_duration: P(h, y),
                splash_screen_page_1_http_duration: P(y, v),
                splash_screen_page_1_http_after_duration: P(v, g),
                first_functional_page_http_before_duration: P(b, T),
                first_functional_page_http_duration: P(T, S),
                first_functional_page_http_after_duration: P(S, w)
            };
            function P(e, t) {
                if (-1 !== e && -1 !== t) return t - e;
            }
        }
    },
    register: {
        eventName: "register",
        schema: {
            openid: "openid",
            channel: "register_channel"
        }
    },
    login: {
        eventName: "login",
        schema: {
            openid: "openid"
        }
    },
    viewNewClass: {
        eventName: "view_new_class",
        schema: {
            videoPlayTime: {
                name: "video_play_time",
                handler: function() {
                    return (0, _moment.default)().format("YYYY-MM-DD HH:mm:ss.SSS");
                }
            },
            vid: "video_id"
        }
    },
    videoClick: {
        eventName: "video_click",
        schema: {
            playTime: {
                name: "play_time",
                handler: function(e) {
                    var t = e.data;
                    return t ? (0, _moment.default)(t).format("YYYY-MM-DD HH:mm:ss.SSS") : void 0;
                }
            },
            pauseTime: {
                name: "pause_time",
                handler: function(e) {
                    var t = e.data;
                    return t ? (0, _moment.default)(t).format("YYYY-MM-DD HH:mm:ss.SSS") : void 0;
                }
            },
            vid: "video_id"
        }
    },
    viewScreen: {
        eventName: "view_screen",
        schema: {
            referrer: referrer,
            classType: classType,
            viewTime: "view_time"
        }
    },
    share: {
        eventName: "share",
        schema: function(e) {
            var t = e.data, a = t.path;
            return _objectSpread({
                share_path: a,
                share_title: t.title,
                share_method: "生成图片分享"
            }, (0, e.dataHandler.getShareDataInPath)(a));
        }
    },
    deposit: {
        eventName: "deposit",
        schema: {
            priceId: "price_id",
            depositPosition: "deposit_position"
        }
    },
    viewCampDetail: {
        eventName: "view_camp_detail",
        schema: {
            campId: "camp_id",
            campType: "camp_type"
        }
    },
    campReservation: {
        eventName: "camp_reservation",
        schema: {
            scheduleId: "schedule_id",
            campId: "camp_id",
            campType: "camp_type",
            scheduleState: "schedule_state"
        }
    },
    campConfirmOrder: {
        eventName: "camp_confirm_order",
        schema: {
            scheduleId: "schedule_id",
            campType: "camp_type",
            referrer: referrer,
            orderAmount: "order_amount",
            dealRealPrice: "deal_real_price",
            ticketId: "ticket_id"
        }
    },
    scheduleSubscribe: {
        eventName: "schedule_subscribe",
        schema: {
            scheduleState: "schedule_state",
            campType: "camp_type"
        }
    }
}, _default = normaliseEventMap(eventMap);

function normaliseEventMap(e) {
    for (var t in e) {
        var a = e[t].schema;
        if ("object" === _typeof(a)) for (var r in a) "string" == typeof a[r] && (a[r] = {
            name: a[r],
            handler: function(e) {
                return e.data;
            }
        }); else void 0 === a && (e[t].schema = {});
    }
    return e;
}

exports.default = _default;