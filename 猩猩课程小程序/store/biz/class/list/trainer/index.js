Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _reducers, _regeneratorRuntime2 = _interopRequireDefault(require("./../../../../../vendor.js")(0)), _seamlessImmutable = _interopRequireDefault(require("./../../../../../vendor.js")(322)), _ramda = require("./../../../../../vendor.js")(320), _extraR = require("./../../../../../utils/extraR.js"), _actionTypes = require("./../../../../types/index.js");

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
    namespace: [ "biz", "class", "list", "trainer" ],
    state: (0, _seamlessImmutable.default)({
        dates: [],
        boxIdsMap: {},
        currentTime: -1
    }),
    reducers: (_defineProperty(_reducers = {}, _actionTypes.CLASS_LIST_TRAINER_DATES_PUT, function(e, r) {
        var t = r.payload;
        return merge(e, {
            dates: t
        });
    }), _defineProperty(_reducers, _actionTypes.CLASS_LIST_TRAINER_BOXIDS_PUT, function(e, r) {
        var t = r.payload;
        return merge(e, {
            boxIdsMap: merge(e.boxIdsMap, t)
        });
    }), _defineProperty(_reducers, _actionTypes.CLASS_LIST_TRAINER_TIME_PUT, function(e, r) {
        var t = r.payload;
        return merge(e, {
            currentTime: t
        });
    }), _reducers),
    sagas: _defineProperty({}, _actionTypes.TRAINER_INDEX_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(r, t) {
        var a, n, s, u, _, i, o, c, d;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = r.requestPayload.trainerUserId, n = r.payload, s = t.put, u = n.classPriceMap, 
                _ = n.dateBoxSchedulesMap, i = n.dates, o = n.boxIdsList, c = n.currentTime, d = function(e) {
                    return "".concat(a, "|").concat(e);
                }, e.next = 6, s({
                    type: _actionTypes.CLASS_PRICE_MAP_PUT,
                    payload: {
                        entities: u
                    }
                });

              case 6:
                return e.next = 8, s({
                    type: _actionTypes.DATE_BOX_SCHEDULES_MAP_PUT,
                    payload: {
                        entities: (0, _extraR.mapKeys)(d)(_)
                    }
                });

              case 8:
                return e.next = 10, s({
                    type: _actionTypes.CLASS_LIST_TRAINER_DATES_PUT,
                    payload: i
                });

              case 10:
                return e.next = 12, s({
                    type: _actionTypes.CLASS_LIST_TRAINER_BOXIDS_PUT,
                    payload: (0, _ramda.zipObj)((0, _ramda.map)(d)(i), o)
                });

              case 12:
                return e.next = 14, s({
                    type: _actionTypes.CLASS_LIST_TRAINER_TIME_PUT,
                    payload: c
                });

              case 14:
              case "end":
                return e.stop();
            }
        }, e);
    })),
    selectors: function(e) {
        var i = (0, e.getSelector)("getBoxSchedulesById");
        return {
            getTrainerClassDates: function(e) {
                return e.biz.class.list.trainer.dates;
            },
            getBoxesSchedulesByTrainerIdDate: function(e, r, t) {
                var a = e.biz.class.list.trainer.boxIdsMap["".concat(r, "|").concat(t)];
                if ((0, _ramda.isEmpty)(Object(a))) return null;
                var n, s, u, _ = (0, _ramda.curryN)(2, i)(e);
                return (0, _ramda.map)(_)((n = r, s = t, u = a, (0, _ramda.map)(function(e) {
                    return "".concat(n, "|").concat(s, "|").concat(e);
                })(u)));
            }
        };
    }
};

exports.default = _default;