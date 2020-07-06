Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var meta = {
    inviterInfo: "inviterInfo",
    discountInfo: "discountInfo",
    isWxSubscribe: "isWxSubscribe",
    isGetNewUserBonus: "isGetNewUserBonus",
    isNewer: "isNewer",
    isNovice: "isNovice",
    isSubscribeSchedule: "isSubscribeSchedule",
    isBindPhoneNumber: "isBindPhoneNumber",
    nowDate: "nowDate",
    userVip: "userVip",
    userSubscribeMap: "userSubscribeMap",
    bookingConfirmModal: "bookingConfirmModal",
    rechargeABCategory: "rechargeABCategory",
    extraSensors: "extraSensors"
}, schema = {
    inviterInfo: {},
    discountInfo: {},
    isWxSubscribe: 1,
    isGetNewUserBonus: 0,
    isNewer: 0,
    isNovice: 0,
    isSubscribeSchedule: 1,
    isBindPhoneNumber: 0,
    nowDate: "",
    userVip: {},
    userSubscribeMap: {},
    bookingConfirmModal: null,
    rechargeABCategory: "A",
    extraSensors: {}
}, _default = {
    meta: meta,
    schema: schema
};

exports.default = _default;