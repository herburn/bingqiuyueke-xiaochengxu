Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "cacheMapKeys", {
    enumerable: !0,
    get: function() {
        return _configs.cacheMapKeys;
    }
}), Object.defineProperty(exports, "cacheMapSks", {
    enumerable: !0,
    get: function() {
        return _configs.cacheMapSks;
    }
}), exports.allCity = exports.trainingAgreementUrl = exports.privacyNoticeUrl = exports.noop = exports.picShareTypeMap = exports.appidMap = exports.navigatorDarkBgColor = exports.defaultCity = exports.FetchStatus = exports.PageState = void 0;

var _constant = require("./../imports/constant.js"), _configs = require("./../configs/index.js"), PageState = {
    BEFORE_CREATE: 1,
    LOAD: 2,
    SHOW: 3,
    READY: 4,
    HIDE: 5,
    UNLOAD: 6
};

exports.PageState = PageState;

var FetchStatus = {
    IDLE: _constant.IDLE,
    LOADING: _constant.LOADING,
    FAILURE: _constant.FAILURE,
    SUCCESS: _constant.SUCCESS,
    DONE: _constant.DONE
};

exports.FetchStatus = FetchStatus;

var defaultCity = "深圳市";

exports.defaultCity = defaultCity;

var allCity = "全部";

exports.allCity = allCity;

var navigatorDarkBgColor = "#242424";

exports.navigatorDarkBgColor = navigatorDarkBgColor;

var appidMap = {
    bonus: "wxaad1ec32ca918244"
};

exports.appidMap = appidMap;

var picShareTypeMap = {
    TRAINER: 1,
    COURSE: 2,
    BOX: 3
};

exports.picShareTypeMap = picShareTypeMap;

var noop = function() {};

exports.noop = noop;

var privacyNoticeUrl = "https://www.supermonkey.com.cn/supermonkey_privacy_protocol.html";

exports.privacyNoticeUrl = privacyNoticeUrl;

var trainingAgreementUrl = "https://www.supermonkey.com.cn/training_agreement.html";

exports.trainingAgreementUrl = trainingAgreementUrl;