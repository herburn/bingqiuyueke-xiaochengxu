Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _seamlessImmutable = _interopRequireDefault(require("./../../vendor.js")(322)), _actionTypes = require("./../types/index.js"), R = _interopRequireWildcard(require("./../../vendor.js")(320));

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
        var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
        i.get || i.set ? Object.defineProperty(t, r, i) : t[r] = e[r];
    }
    return t.default = e, t;
}

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

var merge = _seamlessImmutable.default.merge, fullDisplayWhiteList = [ /iPhone X/i, /iPhone XR/i, /iPhone XS/i, /iPhone XS MAX/i, /iPhone 11/i, /iPhone 11 Pro/i, /iPhone 11 Pro Max/i ], any = R.any, flip = R.flip, test = R.test, _default = {
    namespace: [ "globals", "system" ],
    actions: {
        setSystemInfo: [ _actionTypes.SYSTEMINFO_PUT, function(e) {
            return e;
        } ]
    },
    state: (0, _seamlessImmutable.default)({
        basicInfo: {}
    }),
    reducers: _defineProperty({}, _actionTypes.SYSTEMINFO_PUT, function(e, t) {
        var r = t.payload;
        return merge(e, {
            basicInfo: r
        });
    }),
    selectors: function(e) {
        return {
            getSystemInfo: function(e) {
                return e.globals.system.basicInfo;
            },
            isFullDisplay: (0, e.createSelector)((0, e.getSelector)("getSystemInfo"), function(e) {
                var t = e.model;
                return any(flip(test)(t))(fullDisplayWhiteList);
            })
        };
    }
};

exports.default = _default;