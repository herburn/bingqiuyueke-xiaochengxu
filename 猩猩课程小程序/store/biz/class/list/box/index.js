Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _reducers, _sagas, _regeneratorRuntime2 = _interopRequireDefault(require("./../../../../../vendor.js")(0)), _seamlessImmutable = _interopRequireDefault(require("./../../../../../vendor.js")(322)), _ramda = require("./../../../../../vendor.js")(320), _actionTypes = require("./../../../../types/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

var merge = _seamlessImmutable.default.merge, _default = {
    namespace: [ "biz", "class", "list", "box" ],
    actions: {
        fetchBoxClassSchedules: [ _actionTypes.FETCH_BOX_CLASS_SCHEDULE_LIST, function(e) {
            return {
                boxId: e.boxId,
                sk: e.sk
            };
        }, function() {
            return {
                isPromise: !0
            };
        } ]
    },
    state: (0, _seamlessImmutable.default)({
        isFetchedBoxMap: {},
        dates: [],
        currentTime: -1
    }),
    reducers: (_defineProperty(_reducers = {}, _actionTypes.CLASS_BOX_DATES_PUT, function(e, t) {
        var r = t.payload;
        return merge(e, {
            dates: r
        });
    }), _defineProperty(_reducers, _actionTypes.CLASS_BOX_TIME_PUT, function(e, t) {
        var r = t.payload;
        return merge(e, {
            currentTime: r
        });
    }), _defineProperty(_reducers, _actionTypes.CLASS_BOX_ID_PUT, function(e, t) {
        var r = t.payload;
        return merge(e, {
            isFetchedBoxMap: merge(e.isFetchedBoxMap, r)
        });
    }), _reducers),
    sagas: (_defineProperty(_sagas = {}, _actionTypes.FETCH_BOX_CLASS_SCHEDULE_LIST, _regeneratorRuntime2.default.mark(function e(t, r) {
        var a, s, n, _, o, u, i;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = t.payload, s = a.boxId, n = a.sk, _ = t.__resolve, o = r.put, u = r.call, 
                e.next = 4, o({
                    type: _actionTypes.BOX_CLASS_SCHEDULE_LIST_GET,
                    payload: {
                        boxId: s,
                        sk: n
                    },
                    meta: {
                        isFetch: !0,
                        isLatest: !0,
                        isPromise: {
                            success: !0
                        },
                        statusName: "classBoxStatus"
                    }
                });

              case 4:
                return i = e.sent, e.next = 7, u(_, i);

              case 7:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(_sagas, _actionTypes.BOX_CLASS_SCHEDULE_LIST_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(t, r) {
        var a, s, n, _, o, u, i, c, d;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = t.requestPayload.boxId, s = t.payload, n = t.__resolve, _ = r.put, o = r.call, 
                u = s.classPriceMap, i = s.dateBoxSchedulesMap, c = s.dates, d = s.currentTime, 
                e.next = 5, _({
                    type: _actionTypes.CLASS_PRICE_MAP_PUT,
                    payload: {
                        entities: u
                    }
                });

              case 5:
                return e.next = 7, _({
                    type: _actionTypes.DATE_BOX_SCHEDULES_MAP_PUT,
                    payload: {
                        entities: i
                    }
                });

              case 7:
                return e.next = 9, _({
                    type: _actionTypes.CLASS_BOX_DATES_PUT,
                    payload: c
                });

              case 9:
                return e.next = 11, _({
                    type: _actionTypes.CLASS_BOX_TIME_PUT,
                    payload: d
                });

              case 11:
                return e.next = 13, _({
                    type: _actionTypes.CLASS_BOX_ID_PUT,
                    payload: _defineProperty({}, a, !0)
                });

              case 13:
                return e.next = 15, o(n, a);

              case 15:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(_sagas, _actionTypes.CLASS_SCHEDULE_LIST_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(t, r) {
        var a, s, n, _, o;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = t.payload, s = r.put, n = a.dateBoxSchedulesMap, _ = a.dates, o = (0, 
                _ramda.pipe)(_ramda.keys, (0, _ramda.map)((0, _ramda.pipe)((0, _ramda.split)("|"), _ramda.last)), _ramda.uniq)(n), 
                e.next = 6, s({
                    type: _actionTypes.CLASS_BOX_ID_PUT,
                    payload: (0, _ramda.zipObj)(o, (0, _ramda.repeat)(!0, o.length))
                });

              case 6:
                return e.next = 8, s({
                    type: _actionTypes.CLASS_BOX_DATES_PUT,
                    payload: _
                });

              case 8:
              case "end":
                return e.stop();
            }
        }, e);
    })), _sagas),
    selectors: function() {
        return {
            getBoxClassDates: function(e) {
                return e.biz.class.list.box.dates;
            },
            getIsFetchedByBoxId: function(e, t) {
                return t in e.biz.class.list.box.isFetchedBoxMap;
            }
        };
    }
};

exports.default = _default;