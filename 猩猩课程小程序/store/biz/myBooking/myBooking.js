Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _actionTypes = require("./../../types/index.js"), R = _interopRequireWildcard(require("./../../../vendor.js")(320)), _seamlessImmutable = _interopRequireDefault(require("./../../../vendor.js")(322)), _moment = _interopRequireDefault(require("./../../../vendor.js")(315)), _date = require("./../../../utils/date.js"), _sagaFetch = require("./../../utils/sagaFetch.js");

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
        n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r];
    }
    return t.default = e, t;
}

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

var map = R.map, contains = R.contains, merge = _seamlessImmutable.default.merge, namespace = "biz.myBookingInfo", initialState = (0, 
_seamlessImmutable.default)({
    statList: [],
    totalStat: {},
    unStartList: []
}), actions = {
    getMyBookingInfo: [ _actionTypes.MY_BOOKING_INFO_GET, void 0, function() {
        return {
            isFetch: !0,
            isLatest: !0,
            statusName: "myReservationInfoGet"
        };
    } ]
}, reducers = _defineProperty({}, _actionTypes.MY_BOOKING_INFO_PUT, function(e, t) {
    var r = t.payload;
    return merge(e, r);
}), sagas = function(e) {
    var a = e.put, o = e.call;
    return _defineProperty({}, _actionTypes.MY_BOOKING_INFO_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(t) {
        var r, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = t.payload, n = t.meta, e.next = 3, a({
                    type: _actionTypes.MY_BOOKING_INFO_PUT,
                    payload: r
                });

              case 3:
                return e.next = 5, o(_sagaFetch.updateFetchDone, n.statusName);

              case 5:
              case "end":
                return e.stop();
            }
        }, e);
    }));
}, selectors = function(e) {
    var t = e.createSelector;
    e.getSelector;
    return {
        getMyBookingInfo: t(function(e) {
            return e.biz.myBookingInfo;
        }, getMyBookingFunc)
    };
};

function getMyBookingFunc(e) {
    var t = e.statList, r = e.totalStat, n = e.unStartList, a = (0, _moment.default)(), o = a.quarter(), i = a.year();
    return {
        totalStat: r,
        orderList: getOrderList(n),
        monthlyStatisticList: t.map(function(e, t) {
            return _objectSpread({}, e, {
                monthText: 0 === t ? "本月" : (0, _moment.default)(e.month).format("YYYY年MM月"),
                background: (r = (0, _moment.default)(e.month).month(), n = r % 2 ? 32 : 29, "".concat(r % 2 ? "https://img.supermonkey.com.cn/webapp/wx11/class2/" : "https://img.supermonkey.com.cn/webapp/wx11/activity2/").concat((6 * (4 * i + o - 1) + Math.floor(r / 2)) % n, ".png"))
            });
            var r, n;
        })
    };
}

function getOrderList(e) {
    var s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1;
    return map(function(e) {
        var t, r = (0, _moment.default)(e.startTime), n = (0, _moment.default)(e.endTime), a = contains(e.orderType, [ 5, 6, 7, 20 ]), o = contains(e.orderType, [ 6, 20 ]);
        if ((t = a ? {
            isMultipleLessons: !0,
            date: e.lessonCount - e.checkinCount,
            week: e.lessonCount
        } : {
            date: r.format("MM月DD日"),
            week: "星期".concat((0, _date.weekIndex2ZhCN)(r.isoWeekday() - 1)),
            duration: "".concat(r.format("HH:mm"), "-").concat(n.format("HH:mm"))
        }).btnText = "查看", contains(e.orderType, [ 6, 20 ]) && (t.boxName = "请与教练预约训练时间", 
        13 === e.personalStatus && (t.boxName = "订单已过期，无法预约训练"), e.personalTrainTime || 13 === e.personalStatus || (t.boxName = "点击“预约”，立即预约训练", 
        t.btnText = "预约"), e.personalTrainTime)) {
            var i = e.personalTrainTime;
            t.boxName = "".concat(i.date, " ").concat(i.week, " ").concat(i.trainTime, " 待进行");
        }
        return contains(e.orderType, [ 1 ]) && (t.className = "自助健身"), _objectSpread({}, e, {
            isGift: e.gift || 0,
            className: 7 === e.status ? "[等候中]".concat(e.className) : e.className,
            checkin: 1 === e.orderType || s || e.checkin,
            trainerEnableJump: 1 !== e.orderType,
            isCoaches: e.isMultiTrainer
        }, t, {
            isMyBookingPersonal: o
        });
    })(e);
}

var _default = {
    namespace: namespace,
    state: initialState,
    reducers: reducers,
    actions: actions,
    selectors: selectors,
    sagas: sagas
};

exports.default = _default;