Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _constants = require("./../../constants/index.js"), _seamlessImmutable = _interopRequireDefault(require("./../../vendor.js")(322)), _reducers = require("./../../imports/reducers.js"), _sagas = require("./../../imports/sagas.js"), _selectors = require("./../../imports/selectors.js");

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function ownKeys(e, t) {
    var s = Object.keys(e);
    return Object.getOwnPropertySymbols && s.push.apply(s, Object.getOwnPropertySymbols(e)), 
    t && (s = s.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), s;
}

function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ownKeys(s, !0).forEach(function(t) {
            _defineProperty(e, t, s[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : ownKeys(s).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t));
        });
    }
    return e;
}

function _defineProperty(t, e, s) {
    return e in t ? Object.defineProperty(t, e, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = s, t;
}

var IDLE = _constants.FetchStatus.IDLE, _default = {
    namespace: [ "services" ],
    state: (0, _seamlessImmutable.default)(_objectSpread({}, _reducers.apiServiceReducer.state, {}, _reducers.persistReducer.state, {
        initInfoGet: {
            count: 0,
            status: IDLE
        },
        promotionInitGet: {
            count: 0,
            status: IDLE
        },
        courseClassListGet: {
            count: 0,
            status: IDLE
        },
        campListGet: {
            count: 0,
            status: IDLE
        },
        boxCampListGet: {
            count: 0,
            status: IDLE
        },
        applyInfoGet: {
            count: 0,
            status: IDLE
        },
        applyInfoPost1: {
            count: 0,
            status: IDLE
        },
        campDetailGet: {
            count: 0,
            status: IDLE
        },
        campReservationDetailGet: {
            count: 0,
            status: IDLE
        },
        onlineCampHomeDataGet: {
            count: 0,
            status: IDLE
        },
        boxListGet: {
            count: 0,
            status: IDLE
        },
        storeDelFavPost: {
            count: 0,
            status: IDLE
        },
        storeAddFavPost: {
            count: 0,
            status: IDLE
        },
        boxDetailGet: {
            count: 0,
            status: IDLE
        },
        boxBookingConfirmInfoGet: {
            count: 0,
            status: IDLE
        },
        boxReservationDetailGet: {
            count: 0,
            status: IDLE
        },
        myTicketsGet: {
            count: 0,
            status: IDLE
        },
        invalidTicketsGet: {
            count: 0,
            status: IDLE
        },
        myReservationInfoGet: {
            count: 0,
            status: IDLE
        },
        bookingRecordsGet: {
            count: 0,
            status: IDLE
        },
        sharePicUrlGet: {
            count: 0,
            status: IDLE
        },
        myGivenGet: {
            count: 0,
            status: IDLE
        },
        personalListGet: {
            count: 0,
            status: IDLE
        },
        boxPersonalListGet: {
            count: 0,
            status: IDLE
        },
        personaClassDetailGet: {
            count: 0,
            status: IDLE
        },
        personalBookingInfoGet: {
            count: 0,
            status: IDLE
        },
        VIPDetailInfoGet: {
            count: 0,
            status: IDLE
        },
        superRecordsGet: {
            count: 0,
            status: IDLE
        }
    })),
    reducers: _objectSpread({}, _reducers.apiServiceReducer.reducers, {}, _reducers.persistReducer.reducers),
    sagas: function() {
        return _sagas.watchFrameFetch;
    },
    selectors: function() {
        return {
            getCacheMapSks: _selectors.getCacheMapSks,
            getPersistResume: _selectors.getPersistResume,
            getFetchStatus: _selectors.getFetchStatus
        };
    }
};

exports.default = _default;