Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getScheduleList = getScheduleList;

var _ramda = require("./../../../vendor.js")(320), _moment = _interopRequireDefault(require("./../../../vendor.js")(315));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function ownKeys(r, e) {
    var t = Object.keys(r);
    return Object.getOwnPropertySymbols && t.push.apply(t, Object.getOwnPropertySymbols(r)), 
    e && (t = t.filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable;
    })), t;
}

function _objectSpread(r) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(t, !0).forEach(function(e) {
            _defineProperty(r, e, t[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : ownKeys(t).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
        });
    }
    return r;
}

function _defineProperty(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

function getScheduleInfo(e, r) {
    var t = (0, _moment.default)(e.campStartTime).format("MM月DD日"), n = (0, _moment.default)(e.campEndTime).format("MM月DD日"), o = (0, 
    _moment.default)(e.bookingEndTime).valueOf();
    return {
        startDate: t,
        endDate: n,
        pageScheduleName: 3 !== e.campType ? e.scheduleName : "".concat(t, "~").concat(n, " [").concat(r.trainerStageName, "]"),
        bookingEndTime: o
    };
}

function getTrainerInfo(e) {
    var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, t = null == r ? void 0 : r.sk, n = null == r ? void 0 : r.trainerUserId;
    return {
        trainerStageName: r.trainerStageName,
        faceUrl: null == r ? void 0 : r.face,
        faceNavigateData: {
            trainerId: n,
            sk: t,
            from: (0, _ramda.contains)(e, [ 1, 2 ]) ? "offline" : "online"
        },
        introduce: null == r ? void 0 : r.introduce,
        trainerSk: t,
        trainerId: n
    };
}

function getScheduleList(o, a, i, e) {
    return (0, _ramda.map)(function(e) {
        var r = _objectSpread({}, o[e.scheduleId], {}, e), t = a[r.trainerUserId], n = i[r.campId];
        return _objectSpread({}, r, {}, getScheduleInfo(r, t), {}, getTrainerInfo(r.campType, t), {
            campInfo: n,
            trainerInfo: t
        });
    })(e);
}