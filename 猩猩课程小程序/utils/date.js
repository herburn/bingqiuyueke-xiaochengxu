Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.weekIndex2ZhCN = weekIndex2ZhCN, exports.formatDate = exports.generateDate = void 0;

var _moment = _interopRequireDefault(require("./../vendor.js")(315));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var week = [ "一", "二", "三", "四", "五", "六", "日" ];

function weekIndex2ZhCN(e) {
    return week[e];
}

var generateDate = function(e, t) {
    if (e && t) {
        var a = (0, _moment.default)(e), r = (0, _moment.default)(t);
        return "".concat(a.format("MM月DD日"), " 星期").concat(weekIndex2ZhCN(a.isoWeekday() - 1), " ") + "".concat(a.format("HH:mm"), "-").concat(r.format("HH:mm"));
    }
};

exports.generateDate = generateDate;

var formatDate = function(e) {
    var t = (0, _moment.default)(e);
    return "".concat(t.format("MM月DD日"), " 星期").concat(weekIndex2ZhCN(t.isoWeekday() - 1), " ") + "".concat(t.format("HH:mm"));
};

exports.formatDate = formatDate;