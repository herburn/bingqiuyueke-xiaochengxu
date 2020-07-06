Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), R = _interopRequireWildcard(require("./../../../vendor.js")(320)), _actionTypes = require("./../../types/index.js");

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
        n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t];
    }
    return r.default = e, r;
}

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

var namespace = "biz.my.info", initialState = {}, actions = {
    getMyInfo: [ _actionTypes.MY_INFO_GET, void 0, function() {
        return {
            isFetch: !0
        };
    } ]
}, reducers = _defineProperty({}, _actionTypes.MY_INFO_PUT, function(e, r) {
    var t = r.payload;
    return R.merge(e, t);
}), sagas = function(e, r) {
    var n = e.put;
    e.call, e.select, r.ReduxSaga, r.selectors;
    return _defineProperty({}, _actionTypes.MY_INFO_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(r) {
        var t;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = r.payload, e.next = 3, n({
                    type: _actionTypes.MY_INFO_PUT,
                    payload: t
                });

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }));
}, selectors = function() {
    return {
        getMyInfo: function(e) {
            return e.biz.my.info;
        }
    };
}, _default = {
    namespace: namespace,
    state: initialState,
    reducers: reducers,
    actions: actions,
    selectors: selectors,
    sagas: sagas
};

exports.default = _default;