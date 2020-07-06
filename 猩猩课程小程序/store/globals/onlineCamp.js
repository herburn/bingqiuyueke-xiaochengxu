Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _seamlessImmutable = _interopRequireDefault(require("./../../vendor.js")(322)), _actionTypes = require("./../types/index.js");

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
    namespace: [ "globals", "onlineCamp" ],
    state: (0, _seamlessImmutable.default)({
        isFirstShowSelectScheduleModal: !0
    }),
    actions: {
        changeHasFirstShowSelectScheduleModalState: [ _actionTypes.ONLINE_CAMP_FIRST_SHOW_SELECT_SCHEDULE_MODAL_STATE, void 0, function() {
            return {
                isFetch: !1,
                isLatest: !0
            };
        } ]
    },
    reducers: _defineProperty({}, _actionTypes.ONLINE_CAMP_FIRST_SHOW_SELECT_SCHEDULE_MODAL_STATE, function(e, t) {
        var r = t.payload;
        return merge(e, {
            isFirstShowSelectScheduleModal: r
        });
    }),
    selectors: function() {
        return {
            getFirstShowSelectScheduleModalState: function(e) {
                return e.globals.onlineCamp.isFirstShowSelectScheduleModal;
            }
        };
    }
};

exports.default = _default;