var _positionExt;

function _defineProperty(e, o, t) {
    return o in e ? Object.defineProperty(e, o, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[o] = t, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getPositionExtParams = getPositionExtParams, exports.referenceNoneType = exports.APPID = exports.positionRules = exports.positionNavigateType = exports.ONLINE_CAMP_BANNER = exports.SUPERMONKEY_CARD = exports.BOX_ADS = exports.CLASS_ADS = exports.CLASS_BEFORE_OPEN = exports.PAY_SUCCESS = exports.CAMP_BANNER = exports.PERSONAL_BANNER = exports.CLASS_BANNER = exports.BOX_BANNER = void 0;

var BOX_BANNER = "STORE_BANNER";

exports.BOX_BANNER = BOX_BANNER;

var CLASS_BANNER = "CLASS_BANNER";

exports.CLASS_BANNER = CLASS_BANNER;

var PERSONAL_BANNER = "PERSONAL_BANNER";

exports.PERSONAL_BANNER = PERSONAL_BANNER;

var CAMP_BANNER = "CAMP_BANNER";

exports.CAMP_BANNER = CAMP_BANNER;

var PAY_SUCCESS = "PAY_SUCCESS";

exports.PAY_SUCCESS = PAY_SUCCESS;

var CLASS_BEFORE_OPEN = "CLASS_BEFORE_OPEN";

exports.CLASS_BEFORE_OPEN = CLASS_BEFORE_OPEN;

var CLASS_ADS = "CLASS_ADS";

exports.CLASS_ADS = CLASS_ADS;

var BOX_ADS = "STORE_ADS";

exports.BOX_ADS = BOX_ADS;

var SUPERMONKEY_CARD = "SUPERMONKEY_CARD";

exports.SUPERMONKEY_CARD = SUPERMONKEY_CARD;

var ONLINE_CAMP_BANNER = "ONLINE_CAMP_BANNER";

exports.ONLINE_CAMP_BANNER = ONLINE_CAMP_BANNER;

var positionNavigateType = {
    OUTER: "OUTER",
    INNER: "INNER",
    IMG: "IMG"
};

exports.positionNavigateType = positionNavigateType;

var positionRules = {
    DEFAULT: "DEFAULT",
    PRIORITY: "PRIORITY",
    HISTORY: "HISTORY"
};

exports.positionRules = positionRules;

var positionExt = (_defineProperty(_positionExt = {}, BOX_BANNER, [ "city" ]), _defineProperty(_positionExt, PAY_SUCCESS, [ "classFirstTypeId" ]), 
_defineProperty(_positionExt, CLASS_BANNER, [ "city" ]), _defineProperty(_positionExt, CLASS_BEFORE_OPEN, [ "boxId" ]), 
_defineProperty(_positionExt, CLASS_ADS, [ "boxId" ]), _defineProperty(_positionExt, BOX_ADS, [ "boxId" ]), 
_defineProperty(_positionExt, SUPERMONKEY_CARD, []), _defineProperty(_positionExt, ONLINE_CAMP_BANNER, []), 
_positionExt), APPID = "wx65dca6b170b51b73";

function getPositionExtParams(e) {
    return e in positionExt ? positionExt[e].reduce(function(e, o) {
        return e[o] = "ALL", e;
    }, {}) : {};
}

exports.APPID = APPID;

var referenceNoneType = "NONE";

exports.referenceNoneType = referenceNoneType;