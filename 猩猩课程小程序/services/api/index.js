Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "http", {
    enumerable: !0,
    get: function() {
        return _common.http;
    }
}), Object.defineProperty(exports, "interceptors", {
    enumerable: !0,
    get: function() {
        return _common.interceptors;
    }
}), Object.defineProperty(exports, "errorCode", {
    enumerable: !0,
    get: function() {
        return _common.errorCode;
    }
}), Object.defineProperty(exports, "loginBase", {
    enumerable: !0,
    get: function() {
        return _common.loginBase;
    }
}), Object.defineProperty(exports, "generalBase", {
    enumerable: !0,
    get: function() {
        return _common.generalBase;
    }
}), Object.defineProperty(exports, "specialBase", {
    enumerable: !0,
    get: function() {
        return _common.specialBase;
    }
}), exports.default = void 0;

var _badge = _interopRequireDefault(require("./badge.js")), _bindPhone = _interopRequireDefault(require("./bindPhone.js")), _bookingRecords = _interopRequireDefault(require("./bookingRecords.js")), _box = _interopRequireDefault(require("./box.js")), _camp = _interopRequireDefault(require("./camp.js")), _class = _interopRequireDefault(require("./class.js")), _common = require("./common.js"), _customerService = _interopRequireDefault(require("./customerService.js")), _giveClass = _interopRequireDefault(require("./giveClass.js")), _initInfo = _interopRequireDefault(require("./initInfo.js")), _location = _interopRequireDefault(require("./location.js")), _login = _interopRequireDefault(require("./login.js")), _messageSubscribe = _interopRequireDefault(require("./messageSubscribe.js")), _myBooking = _interopRequireDefault(require("./myBooking.js")), _noticeList = _interopRequireDefault(require("./noticeList.js")), _other = _interopRequireDefault(require("./other.js")), _payCallback = _interopRequireDefault(require("./payCallback.js")), _personal = _interopRequireDefault(require("./personal.js")), _promotion = _interopRequireDefault(require("./promotion.js")), _recharge = _interopRequireDefault(require("./recharge.js")), _sharePicture = _interopRequireDefault(require("./sharePicture.js")), _rank = _interopRequireDefault(require("./rank.js")), _ticket = _interopRequireDefault(require("./ticket.js")), _trainer = _interopRequireDefault(require("./trainer.js")), _myInfo = _interopRequireDefault(require("./myInfo.js")), _novice = _interopRequireDefault(require("./novice.js")), _vip = _interopRequireDefault(require("./vip.js")), _superAllianceTicket = _interopRequireDefault(require("./superAllianceTicket.js")), _invoice = _interopRequireDefault(require("./invoice.js")), _balance = _interopRequireDefault(require("./balance.js")), _selfReserve = _interopRequireDefault(require("./selfReserve.js")), _onlineCamp = _interopRequireDefault(require("./onlineCamp.js"));

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

var _default = _objectSpread({
    http: _common.http,
    interceptors: _common.interceptors,
    errorCode: _common.errorCode,
    loginBase: _common.loginBase,
    generalBase: _common.generalBase,
    specialBase: _common.specialBase
}, _login.default, {}, _badge.default, {}, _bindPhone.default, {}, _bookingRecords.default, {}, _box.default, {}, _camp.default, {}, _onlineCamp.default, {}, _class.default, {}, _customerService.default, {}, _giveClass.default, {}, _initInfo.default, {}, _location.default, {}, _login.default, {}, _messageSubscribe.default, {}, _myBooking.default, {}, _noticeList.default, {}, _other.default, {}, _payCallback.default, {}, _personal.default, {}, _promotion.default, {}, _recharge.default, {}, _bookingRecords.default, {}, _rank.default, {}, _sharePicture.default, {}, _ticket.default, {}, _trainer.default, {}, _myInfo.default, {}, _novice.default, {}, _vip.default, {}, _superAllianceTicket.default, {}, _invoice.default, {}, _balance.default, {}, _selfReserve.default);

exports.default = _default;