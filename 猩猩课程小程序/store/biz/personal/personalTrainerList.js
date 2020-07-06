Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _seamlessImmutable = _interopRequireDefault(require("./../../../vendor.js")(322)), _ramda = require("./../../../vendor.js")(320), _actionTypes = require("./../../types/index.js");

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

var merge = _seamlessImmutable.default.merge, _default = {
    namespace: [ "biz", "personal", "list", "trainer" ],
    state: (0, _seamlessImmutable.default)({
        personalsMap: {}
    }),
    reducers: _defineProperty({}, _actionTypes.TRAINER_PERSONAL_LIST_PUT, function(e, r) {
        var t = r.payload;
        return merge(e, {
            personalsMap: merge(e.personalsMap, t)
        });
    }),
    sagas: _defineProperty({}, _actionTypes.TRAINER_INDEX_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(r, t) {
        var n, a, o;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = r.requestPayload.trainerUserId, a = r.payload.personals, o = t.put, e.next = 4, 
                o({
                    type: _actionTypes.TRAINER_PERSONAL_LIST_PUT,
                    payload: _defineProperty({}, n, a)
                });

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    })),
    selectors: function() {
        return {
            getTrainerPersonals: function(e, r) {
                return t = e.biz.personal.list.trainer.personalsMap[r] || [], (0, _ramda.map)(function(e) {
                    return _objectSpread({}, e, {
                        face: e.trainerFace,
                        personalCampName: e.personalName,
                        firstExperiencePrice: "(首次体验".concat(e.firstExperiencePrice / 100, ")"),
                        priceText: "¥".concat(e.price / 100, "起/课时"),
                        showFirstPrice: e.firstBooking && 0 < e.firstExperiencePrice
                    });
                })(t);
                var t;
            }
        };
    }
};

exports.default = _default;