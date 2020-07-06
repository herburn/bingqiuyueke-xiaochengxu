Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../../vendor.js")(0)), _seamlessImmutable = _interopRequireDefault(require("./../../../../vendor.js")(322)), _actionTypes = require("./../../../types/index.js"), _commonSelector = require("./../../onlineCamp/commonSelector.js");

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

var merge = _seamlessImmutable.default.merge, _default = {
    namespace: [ "biz", "camp", "list", "trainer" ],
    state: (0, _seamlessImmutable.default)({
        scheduleIdsMap: {}
    }),
    reducers: _defineProperty({}, _actionTypes.TRAINER_SCHEDULE_IDS_PUT, function(e, r) {
        var t = r.payload;
        return merge(e, {
            scheduleIdsMap: merge(e.scheduleIdsMap, t)
        });
    }),
    sagas: _defineProperty({}, _actionTypes.TRAINER_INDEX_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(r, t) {
        var a, n, u;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = r.requestPayload.trainerUserId, n = r.payload.superCampScheduleList, 
                u = t.put, e.next = 4, u({
                    type: _actionTypes.TRAINER_SCHEDULE_IDS_PUT,
                    payload: _defineProperty({}, a, n)
                });

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    })),
    selectors: function(e) {
        var r = e.getSelector, a = r("getSuperCampScheduleMap"), n = r("getTrainerMap"), u = r("getCampMap");
        return {
            getTrainerCampSchedules: function(e, r) {
                var t = e.biz.camp.list.trainer.scheduleIdsMap[r] || [];
                return (0, _commonSelector.getScheduleList)(a(e), n(e), u(e), t);
            }
        };
    }
};

exports.default = _default;