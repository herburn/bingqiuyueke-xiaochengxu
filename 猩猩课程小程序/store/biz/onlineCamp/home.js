Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _seamlessImmutable = _interopRequireDefault(require("./../../../vendor.js")(322)), _actionTypes = require("./../../types/index.js"), _ramda = require("./../../../vendor.js")(320), _constants = require("./../../../constants/index.js"), _commonSelector = require("./commonSelector.js");

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

var merge = _seamlessImmutable.default.merge, _default = {
    namespace: [ "biz", "onlineCamp", "home" ],
    state: (0, _seamlessImmutable.default)({
        superCampList: [],
        campScheduleList: [],
        scheduleTotalCount: 0,
        campTotalCount: 0
    }),
    actions: {
        getOnlineCampHomeData: [ _actionTypes.ONLINE_CAMP_HOME_DATA_GET, void 0, function() {
            return {
                isFetch: !0,
                isLatest: !0,
                statusName: "onlineCampHomeDataGet"
            };
        } ]
    },
    reducers: _defineProperty({}, _actionTypes.ONLINE_CAMP_HOME_DATA_PUT, function(e, t) {
        var r = t.payload.main;
        return merge(e, _objectSpread({}, r), {
            deep: !0
        });
    }),
    selectors: function(e) {
        var o = e.getSelector;
        return {
            getHotCampList: function(e) {
                var t = e.biz.onlineCamp.home.superCampList, r = e.domains.campMap.entities;
                return (0, _ramda.map)(function(e) {
                    return _objectSpread({}, r[e.campId], {}, e);
                })(t).splice(0, 6);
            },
            getScheduleTotalCount: function(e) {
                return e.biz.onlineCamp.home.scheduleTotalCount;
            },
            getCampTotalCount: function(e) {
                return e.biz.onlineCamp.home.campTotalCount;
            },
            getCampScheduleList: function(e) {
                var t = e.domains.superCampScheduleMap.entities, r = e.domains.campMap.entities, n = e.domains.trainerMap.entities, o = e.biz.onlineCamp.home.campScheduleList;
                return (0, _commonSelector.getScheduleList)(t, n, r, o).splice(0, 8);
            },
            getBannerList: function(e) {
                var t = o("getPromotionsByPositionId")(e, _constants.ONLINE_CAMP_BANNER), r = t.promotions, n = t.positionInfo;
                return _objectSpread({}, t, {
                    promotions: (0, _ramda.slice)(0, n.promotionNum)(r)
                });
            }
        };
    },
    sagas: _defineProperty({}, _actionTypes.ONLINE_CAMP_HOME_DATA_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(t, r) {
        var n, o;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = t.payload, o = r.put, e.next = 4, o({
                    type: _actionTypes.ONLINE_CAMP_HOME_DATA_PUT,
                    payload: n
                });

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    }))
};

exports.default = _default;