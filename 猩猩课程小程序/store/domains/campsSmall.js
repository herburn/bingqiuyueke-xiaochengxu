Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _actionTypes = require("./../types/index.js"), R = _interopRequireWildcard(require("./../../vendor.js")(320));

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
        n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t];
    }
    return r.default = e, r;
}

function _defineProperty(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

var merge = R.merge, _default = {
    namespace: [ "domains", "campsSmall" ],
    state: {
        entities: {}
    },
    reducers: _defineProperty({}, _actionTypes.CAMPS_SMALL_PUT, function(e, r) {
        var t = r.payload;
        return merge(e, {
            entities: merge(e.entities, t)
        });
    }),
    selectors: function() {
        return {
            getCampSmallMap: function(e) {
                return e.domains.campsSmall.entities;
            },
            getCampSmallById: function(e, r) {
                return e.domains.campsSmall.entities[r];
            }
        };
    }
};

exports.default = _default;