Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _actionTypes = require("./../types/index.js"), _reducers2 = require("./../../imports/reducers.js"), _user = _interopRequireDefault(require("./user/index.js")), _city = _interopRequireDefault(require("./city.js")), _confirmModal = _interopRequireDefault(require("./confirmModal.js")), _externalInviter = _interopRequireDefault(require("./externalInviter.js")), _other = _interopRequireDefault(require("./other.js")), _login = _interopRequireDefault(require("./login.js")), _register = _interopRequireDefault(require("./register.js")), _systemInfo = _interopRequireDefault(require("./systemInfo.js")), _onlineCamp = _interopRequireDefault(require("./onlineCamp.js"));

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

var globals = {
    namespace: [ "globals" ],
    actions: {
        updateInitInfo: [ _actionTypes.INIT_INFO, function(e) {
            return _objectSpread({}, e, {
                s: 1
            });
        }, function() {
            return {
                isFetch: !0,
                isLatest: !1,
                statusName: "updateInitInfoGet",
                isPromise: {
                    success: !0
                }
            };
        } ],
        getInitInfo: [ _actionTypes.INIT_INFO, function(e) {
            return e;
        }, function() {
            return {
                isFetch: !0,
                isLatest: !1,
                statusName: "initInfoGet",
                isPromise: {
                    success: !0
                }
            };
        } ],
        getMessagesById: [ _actionTypes.MESSAGE_INFO_GET, function(e) {
            return {
                msgId: e.msgId,
                sk: e.sk
            };
        }, function() {
            return {
                isFetch: !0
            };
        } ]
    },
    state: {},
    reducers: _defineProperty({}, _actionTypes.COOKIE_PUT, _reducers2.globalsReducer.reducers[_actionTypes.COOKIE_PUT])
}, _default = {
    globals: globals,
    user: _user.default,
    city: _city.default,
    confirmModal: _confirmModal.default,
    externalInviter: _externalInviter.default,
    other: _other.default,
    login: _login.default,
    register: _register.default,
    systemInfo: _systemInfo.default,
    onlineCamp: _onlineCamp.default
};

exports.default = _default;