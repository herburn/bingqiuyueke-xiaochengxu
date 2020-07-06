Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getDateBoxSchedules = getDateBoxSchedules;

var _ramda = require("./../../vendor.js")(320), _normalizr = require("./../../vendor.js")(321), _extraR = require("./../../utils/extraR.js");

function getDateBoxSchedules(e) {
    var a = (0, _ramda.pipe)((0, _ramda.map)(function(e) {
        var a = e.boxClassSchedulesList, t = e.date;
        return (0, _ramda.map)(function(e) {
            var a = (0, _extraR.renameKeys)({
                classScheduleListEmptyReason: "emptyReason",
                classScheduleList: "scheduleIds"
            }), r = e.classScheduleListEmptyReason || "";
            return (0, _ramda.merge)(a(e), {
                id: "".concat(t, "|").concat(e.boxId),
                date: t,
                emptyReason: r
            });
        })(a);
    }), _ramda.flatten)(e), r = new _normalizr.schema.Entity("dateBoxSchedules"), t = (0, 
    _normalizr.normalize)(a, [ r ]), d = t.result;
    return {
        dateBoxSchedulesMap: t.entities.dateBoxSchedules,
        dateBoxIdMap: (0, _ramda.pipe)((0, _ramda.groupBy)((0, _ramda.pipe)((0, _ramda.split)("|"), _ramda.head)), (0, 
        _ramda.map)((0, _ramda.map)((0, _ramda.pipe)((0, _ramda.split)("|"), _ramda.last, (0, 
        _ramda.objOf)("boxId")))))(d)
    };
}