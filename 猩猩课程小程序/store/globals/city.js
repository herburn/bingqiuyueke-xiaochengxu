Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _reducers, _sagas, _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _seamlessImmutable = _interopRequireDefault(require("./../../vendor.js")(322)), _actionTypes = require("./../types/index.js");

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
    namespace: [ "globals", "city" ],
    actions: {
        updateCurrentCity: [ _actionTypes.CITY_CURRENT_PUT, function(e) {
            return e;
        } ],
        getLocationCity: [ _actionTypes.CITY_LOCATION_GET, void 0, function() {
            return {
                isFetch: !0,
                isLatest: !0
            };
        } ]
    },
    state: (0, _seamlessImmutable.default)({
        currentCity: "",
        locationCity: "",
        cities: []
    }),
    reducers: (_defineProperty(_reducers = {}, _actionTypes.CITY_CURRENT_PUT, function(e, t) {
        var r = t.payload;
        return merge(e, {
            currentCity: r
        });
    }), _defineProperty(_reducers, _actionTypes.CITY_LOCATION_PUT, function(e, t) {
        var r = t.payload;
        return merge(e, {
            locationCity: r
        });
    }), _defineProperty(_reducers, _actionTypes.CITY_LIST_PUT, function(e, t) {
        var r = t.payload;
        return merge(e, {
            cities: r
        });
    }), _reducers),
    sagas: (_defineProperty(_sagas = {}, _actionTypes.CITY_LOCATION_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(t, r, n) {
        var a, i, u, o, s;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = t.payload, i = r.put, u = r.select, o = n.getSelector, s = n.actions, 
                e.next = 5, i({
                    type: _actionTypes.CITY_LOCATION_PUT,
                    payload: a.locationCity
                });

              case 5:
                return e.next = 7, u(o("getCurrentCity"));

              case 7:
                if (e.t0 = e.sent, "" === e.t0) return e.next = 11, i(s.updateCurrentCity(a.locationCity));
                e.next = 11;
                break;

              case 11:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(_sagas, _actionTypes.CITY_LOCATION_GET_FAILURE, _regeneratorRuntime2.default.mark(function e(t, r) {
        var n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = r.put, e.next = 3, n({
                    type: _actionTypes.CITY_LOCATION_PUT,
                    payload: ""
                });

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(_sagas, _actionTypes.BOX_LIST_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(t, r, n) {
        var a, i, u, o, s;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = t.payload, i = r.put, u = n.actions, o = a.currentCity, s = a.storesAreaInfo.cityList, 
                e.next = 6, i(u.updateCurrentCity(o));

              case 6:
                return e.next = 8, i({
                    type: _actionTypes.CITY_LIST_PUT,
                    payload: s
                });

              case 8:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(_sagas, _actionTypes.CLASS_SCHEDULE_LIST_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(t, r, n) {
        var a, i, u, o, s;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = t.payload, i = r.put, u = n.actions, o = a.currentCity, s = a.cities, 
                e.next = 6, i(u.updateCurrentCity(o));

              case 6:
                return e.next = 8, i({
                    type: _actionTypes.CITY_LIST_PUT,
                    payload: s
                });

              case 8:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(_sagas, _actionTypes.PERSONAL_LIST_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(t, r, n) {
        var a, i, u, o, s;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = t.payload, i = r.put, u = n.actions, o = a.currentCity, s = a.boxArea.cityList, 
                e.next = 6, i(u.updateCurrentCity(o));

              case 6:
                return e.next = 8, i({
                    type: _actionTypes.CITY_LIST_PUT,
                    payload: s
                });

              case 8:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(_sagas, _actionTypes.CAMP_LIST_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(t, r, n) {
        var a, i, u, o, s;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = t.payload, i = r.put, u = n.actions, o = a.currentCity, s = a.cities, 
                e.next = 6, i(u.updateCurrentCity(o));

              case 6:
                return e.next = 8, i({
                    type: _actionTypes.CITY_LIST_PUT,
                    payload: s
                });

              case 8:
              case "end":
                return e.stop();
            }
        }, e);
    })), _sagas),
    selectors: function() {
        return {
            getCurrentCity: function(e) {
                return e.globals.city.currentCity;
            },
            getLocationCity: function(e) {
                return e.globals.city.locationCity;
            },
            getCities: function(e) {
                return e.globals.city.cities;
            }
        };
    }
};

exports.default = _default;