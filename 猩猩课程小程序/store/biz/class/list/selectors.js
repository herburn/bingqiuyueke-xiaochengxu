Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getClassScheduleByIdCreator = getClassScheduleByIdCreator, exports.getBoxSchedulesByBoxIdScheduleIdsCreator = getBoxSchedulesByBoxIdScheduleIdsCreator, 
exports.getBoxSchedulesByIdCreator = getBoxSchedulesByIdCreator;

var _ramda = require("./../../../../vendor.js")(320), _moment = _interopRequireDefault(require("./../../../../vendor.js")(315)), _memoize = require("./../../../../utils/memoize.js"), _price = require("./../../../../utils/price.js"), _router = require("./../../../../router/index.js"), _constants = require("./../../../../constants/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function ownKeys(t, e) {
    var r = Object.keys(t);
    return Object.getOwnPropertySymbols && r.push.apply(r, Object.getOwnPropertySymbols(t)), 
    e && (r = r.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), r;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(r, !0).forEach(function(e) {
            _defineProperty(t, e, r[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ownKeys(r).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
    }
    return t;
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
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
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
    }
}

var getTime = function(e) {
    return "".concat((0, _moment.default)(e).format("HH:mm"));
}, getSchedulePeriod = function(e, t) {
    return "".concat(getTime(e), "-").concat(getTime(t));
}, getTagText = (0, _ramda.pipe)((0, _ramda.take)(3), (0, _ramda.join)(" • ")), multiTrainerFace = "https://img.supermonkey.com.cn/webapp/monkey-reservation2/common/multi-trainer1.png";

function getClassScheduleByIdCreator(e) {
    var t = e.getSelector, r = e.createSelectorCreator, a = t("getClassPriceMap"), n = t("getScheduleSmallMap"), o = t("getTrainerSmallMap"), s = t("getClassSmallMap");
    return r(_memoize.memoizeReference, function(e, t, r, a, n) {
        var o = e[n], s = t[n], i = s.trainerUserId, c = s.classId, u = r[i], l = a[c];
        return [ n, [ o, s, u, l ] ];
    })(a, n, o, s, function(e, t) {
        return t;
    }, function(e, t, r, a, n) {
        var o, s, i, c, u, l, d, m, g, p, S, f = e[n], I = t[n], _ = t[n], h = _.trainerUserId, y = _.classId, B = r[h], v = a[y];
        return {
            id: n,
            classId: y,
            isFinished: 3 === f.bookingCountStatus,
            startTime: getTime(I.startTime),
            trainerInfo: (l = (u = {
                trainerSmall: B,
                scheduleSmall: I
            }).trainerSmall, d = u.scheduleSmall, m = l.trainerUserId, g = l.face, p = l.sk, 
            {
                face: (S = d.isMultiTrainer) ? multiTrainerFace : g,
                navigatorPage: S ? "" : "TrainerIndex",
                navigatorData: {
                    trainerUserId: m,
                    sk: p
                },
                extraData: {
                    trainerUserId: m,
                    scheduleId: d.scheduleId,
                    boxId: d.boxId
                }
            }),
            scheduleInfo: function(e) {
                var t = e.scheduleSmall, r = e.classSmall, a = e.price, n = t.startTime, o = t.endTime, s = t.scheduleId, i = t.sk, c = r.className, u = r.tag, l = r.jumpPage, d = r.jumpUrl, m = "", g = {};
                if (l) {
                    var p = (0, _router.decodeUrl)(l), S = p.page, f = p.data;
                    m = S, g = f;
                } else g = d ? (m = "WebView", {
                    h5Url: encodeURIComponent(d)
                }) : (m = "ClassDetail", {
                    scheduleId: s,
                    sk: i
                });
                return {
                    className: c,
                    period: getSchedulePeriod(n, o),
                    price: function(e) {
                        var t = e.price, r = e.firstBooking, a = e.classFirstBookingPrice, n = e.supermonkeyCardPrice;
                        if (r) return "￥".concat((0, _price.cent2Yuan)(t), "(首次体验价￥").concat((0, _price.cent2Yuan)(a), ")");
                        return "￥".concat((0, _price.cent2Yuan)(t), "(超猩卡").concat((0, _price.cent2Yuan)(n), ")");
                    }(a),
                    tagText: getTagText(u),
                    navigatorPage: m,
                    navigatorData: g,
                    noviceNavigatorPage: "ClassBookingConfirm",
                    noviceNavigatorData: {
                        scheduleId: s,
                        sk: i
                    }
                };
            }({
                scheduleSmall: I,
                classSmall: v,
                price: f
            }),
            btnInfo: function(e) {
                var t, r, a = e.scheduleSmall, n = e.classSmall, o = e.price, s = a.scheduleId, i = a.sk, c = n.waitAvailable, u = n.jumpPage, l = n.relateCampId, d = n.jumpUrl, m = void 0 === d ? "" : d, g = o.isFirstTimeBooking, p = o.bookingCountStatus;
                0 < l && "" !== u ? (t = _constants.BtnStatus.CAMP, r = "详情") : "" !== m ? (t = _constants.BtnStatus.DETAIL, 
                r = "详情") : 0 === p || 1 === p ? (t = _constants.BtnStatus.BOOK, r = "预约") : 2 !== p || c ? 3 === p ? (t = _constants.BtnStatus.END, 
                r = "结束") : 4 === p ? (t = _constants.BtnStatus.BEGUN, r = "已开始") : 2 === p && c && (t = _constants.BtnStatus.WAITING, 
                r = "等候") : (t = _constants.BtnStatus.FULL, r = "满员");
                var S = (0, _ramda.contains)(t, [ _constants.BtnStatus.FULL, _constants.BtnStatus.END, _constants.BtnStatus.BEGUN ]), f = "", I = {}, _ = "", h = {};
                if (!S) if (u) {
                    var y = (0, _router.decodeUrl)(u), B = y.page, v = y.data;
                    f = B, I = v;
                } else m ? (f = "WebView", I = {
                    h5Url: encodeURIComponent(m)
                }) : h = (_ = g ? (f = "ClassDetail", I = {
                    scheduleId: s,
                    sk: i
                }, "ClassBookingConfirm") : t === _constants.BtnStatus.WAITING ? (f = "ClassWaitBookingConfirm", 
                I = {
                    scheduleId: s,
                    sk: i
                }, "ClassBookingConfirm") : (I = {
                    scheduleId: s,
                    sk: i
                }, f = "ClassBookingConfirm"), {
                    scheduleId: s,
                    sk: i
                });
                return {
                    status: t,
                    text: r,
                    navigatorPage: f,
                    navigatorData: I,
                    noviceNavigatorPage: _,
                    noviceNavigatorData: h
                };
            }({
                scheduleSmall: I,
                classSmall: v,
                price: f
            }),
            markInfo: function(e) {
                var t, r, a = e.classSmall, n = e.price, o = a.relateCampId, s = n.bookingCountStatus;
                r = 0 < o ? (t = _constants.MarkStatus.CAMP, "./images/icon-camp-mark.png") : 2 === s ? (t = _constants.MarkStatus.FULL, 
                "./images/icon-full-mark.png") : 1 === s ? (t = _constants.MarkStatus.SCARCITY, 
                "./images/icon-scarcity-mark.png") : (t = _constants.MarkStatus.NONE, "");
                return {
                    src: r,
                    status: t
                };
            }({
                classSmall: v,
                price: f
            }),
            collectData: (s = (o = {
                scheduleSmall: I,
                trainerSmall: B,
                price: f
            }).scheduleSmall, i = o.trainerSmall, c = o.price, {
                scheduleId: s.scheduleId,
                trainerUserId: i.trainerUserId,
                startTime: s.startTime,
                superCardPrice: c.supermonkeyCardPrice
            })
        };
    });
}

function getBoxSchedulesByBoxIdScheduleIdsCreator(e) {
    var t = e.getSelector, r = e.createSelectorCreator, a = (0, _ramda.curryN)(2, t("getBoxSmallById")), n = (0, 
    _ramda.curryN)(2, t("getBoxExtraById")), o = (0, _ramda.curryN)(2, t("getClassScheduleById"));
    return r(_memoize.memoizeReference, function(e, t, r, a, n) {
        var o = r(e), s = a(e);
        return [ "".concat(e, "|").concat(t.toString()), [ o, s ].concat(_toConsumableArray((0, 
        _ramda.map)(n)(t))) ];
    })(function(e, t) {
        return t;
    }, function(e, t, r) {
        return r;
    }, function(e) {
        return a(e);
    }, function(e) {
        return n(e);
    }, function(e) {
        return o(e);
    }, function(e, t, r, a, n) {
        return {
            boxInfo: function(e) {
                var t = e.boxId, r = e.sk, a = e.boxname, n = e.address, o = e.longitude, s = e.latitude, i = e.addressGuide, c = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).favStatus;
                return {
                    boxId: t,
                    sk: r,
                    name: a,
                    address: n,
                    longitude: o,
                    latitude: s,
                    addressGuide: i,
                    favStatus: void 0 === c ? 0 : c
                };
            }(r(e), a(e)),
            schedules: (0, _ramda.map)(n)(t)
        };
    });
}

function getBoxSchedulesByIdCreator(e) {
    var t = e.getSelector, m = t("getDateBoxSchedulesMap"), g = (0, _ramda.curryN)(3, t("getBoxSchedulesByBoxIdScheduleIds"));
    return function(e, t) {
        var r = m(e), a = g(e);
        if (!(t in r)) return null;
        var n, o, s, i, c, u = r[t], l = u.boxId, d = u.scheduleIds;
        return _objectSpread({}, (o = (n = u).id, s = n.date, i = n.boxId, c = n.emptyReason, 
        {
            id: o,
            date: s,
            boxId: i,
            emptyReason: c
        }), {}, a(l, d));
    };
}