Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _seamlessImmutable = _interopRequireDefault(require("./../../vendor.js")(322)), _actionTypes = require("./../types/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _defineProperty(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var merge = _seamlessImmutable.default.merge, _default = {
    namespace: [ "globals", "other" ],
    actions: {
        updateAppClassType: [ _actionTypes.APP_CLASS_TYPE_PUT, void 0 ]
    },
    state: (0, _seamlessImmutable.default)({
        appClassType: ""
    }),
    reducers: _defineProperty({}, _actionTypes.APP_CLASS_TYPE_PUT, function(e, t) {
        var a = t.payload;
        return merge(e, {
            appClassType: a
        });
    }),
    sagas: {},
    selectors: function() {
        return {
            getAppClassType: function(e) {
                return e.globals.other.appClassType;
            }
        };
    }
};

exports.default = _default;