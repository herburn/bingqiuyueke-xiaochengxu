Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getTime = getTime, exports.getDate = getDate, exports.getWeekDayCN = getWeekDayCN;

var _moment = _interopRequireDefault(require("./../vendor.js")(315));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _slicedToArray(e, t) {
    return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _nonIterableRest();
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(e, t) {
    var r = [], a = !0, n = !1, i = void 0;
    try {
        for (var o, u = e[Symbol.iterator](); !(a = (o = u.next()).done) && (r.push(o.value), 
        !t || r.length !== t); a = !0) ;
    } catch (e) {
        n = !0, i = e;
    } finally {
        try {
            a || null == u.return || u.return();
        } finally {
            if (n) throw i;
        }
    }
    return r;
}

function _arrayWithHoles(e) {
    if (Array.isArray(e)) return e;
}

var weekNamesCN1 = [ "周一", "周二", "周三", "周四", "周五", "周六", "周日" ], weekNamesCN2 = [ "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期天" ];

function getTime(e) {
    var t = _slicedToArray(e.split(" ")[1].split(":"), 2), r = t[0], a = t[1];
    return "".concat(r, ":").concat(a);
}

function getDate(e) {
    var t = _slicedToArray(e.split(" ")[0].split("-"), 3);
    return {
        year: t[0],
        month: t[1],
        day: t[2]
    };
}

function getWeekDayCN(e, t) {
    return 1 === t ? weekNamesCN1[(0, _moment.default)(e).isoWeekday() - 1] : 2 === t ? weekNamesCN2[(0, 
    _moment.default)(e).isoWeekday() - 1] : void 0;
}