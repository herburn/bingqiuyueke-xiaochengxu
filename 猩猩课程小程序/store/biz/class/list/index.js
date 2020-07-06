Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../../vendor.js")(0)), _actionTypes = require("./../../../types/index.js"), _box = _interopRequireDefault(require("./box/index.js")), _course = _interopRequireDefault(require("./course/index.js")), _trainer = _interopRequireDefault(require("./trainer/index.js")), _selectors = require("./selectors.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _defineProperty(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

var list = {
    namespace: [ "biz", "class", "list" ],
    sagas: _defineProperty({}, _actionTypes.CLASS_BOOKING_SUCCESS_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(r, t, s) {
        var o, u, a, i, l, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return o = r.payload, u = t.put, a = s.actions, i = o.bookingListShow, l = i.scheduleId, 
                n = i.scheduleSk, e.next = 6, u(a.fetchClassDetail({
                    scheduleId: l,
                    sk: n
                }));

              case 6:
              case "end":
                return e.stop();
            }
        }, e);
    })),
    selectors: function(e) {
        var r = {
            getSelector: e.getSelector,
            createSelectorCreator: e.createSelectorCreator
        };
        return {
            getClassScheduleById: (0, _selectors.getClassScheduleByIdCreator)(r),
            getBoxSchedulesByBoxIdScheduleIds: (0, _selectors.getBoxSchedulesByBoxIdScheduleIdsCreator)(r),
            getBoxSchedulesById: (0, _selectors.getBoxSchedulesByIdCreator)(r)
        };
    }
}, _default = {
    list: list,
    box: _box.default,
    course: _course.default,
    trainer: _trainer.default
};

exports.default = _default;