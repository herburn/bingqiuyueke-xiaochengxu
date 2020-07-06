Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.cacheMapSks = exports.cacheMapKeys = exports.cacheMap = exports.ONLINE_CAMP_SCHEDULE_MAP = exports.PROMOTION_POSITION_RELATE_MAP = exports.PROMOTION_MAP = exports.POSITION_RULES_MAP = exports.POSITION_MAP = exports.VIP_TASK_MAP = exports.VIP_EQUITY_MAP = exports.VIP_LEVEL_CONFIG_MAP = exports.TRAINER_SMALL_MAP = exports.TRAINER_MAP = exports.BOX_SMALL_MAP = exports.BOX_MAP = exports.PERSONAL_MAP = exports.PERSONAL_SCHEDULE_MAP = exports.PERSONAL_CAMP_MAP = exports.CAMP_MAP = exports.SCHEDULE_SMALL_MAP = exports.SCHEDULE_MAP = exports.CLASS_SMALL_MAP = exports.CLASS_MAP = void 0;

var _cacheMap, _actionTypes = require("./../store/types/index.js");

function _defineProperty(_, e, P) {
    return e in _ ? Object.defineProperty(_, e, {
        value: P,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : _[e] = P, _;
}

var CLASS_MAP = "CLASS_MAP";

exports.CLASS_MAP = CLASS_MAP;

var CLASS_SMALL_MAP = "CLASS_SMALL_MAP";

exports.CLASS_SMALL_MAP = CLASS_SMALL_MAP;

var SCHEDULE_MAP = "SCHEDULE_MAP";

exports.SCHEDULE_MAP = SCHEDULE_MAP;

var SCHEDULE_SMALL_MAP = "SCHEDULE_SMALL_MAP";

exports.SCHEDULE_SMALL_MAP = SCHEDULE_SMALL_MAP;

var CAMP_MAP = "CAMP_MAP";

exports.CAMP_MAP = CAMP_MAP;

var PERSONAL_CAMP_MAP = "PERSONAL_CAMP_MAP";

exports.PERSONAL_CAMP_MAP = PERSONAL_CAMP_MAP;

var PERSONAL_SCHEDULE_MAP = "PERSONAL_SCHEDULE_MAP";

exports.PERSONAL_SCHEDULE_MAP = PERSONAL_SCHEDULE_MAP;

var PERSONAL_MAP = "PERSONAL_MAP";

exports.PERSONAL_MAP = PERSONAL_MAP;

var BOX_MAP = "BOX_MAP";

exports.BOX_MAP = BOX_MAP;

var BOX_SMALL_MAP = "BOX_SMALL_MAP";

exports.BOX_SMALL_MAP = BOX_SMALL_MAP;

var TRAINER_MAP = "TRAINER_MAP";

exports.TRAINER_MAP = TRAINER_MAP;

var TRAINER_SMALL_MAP = "TRAINER_SMALL_MAP";

exports.TRAINER_SMALL_MAP = TRAINER_SMALL_MAP;

var VIP_LEVEL_CONFIG_MAP = "VIP_LEVEL_CONFIG_MAP";

exports.VIP_LEVEL_CONFIG_MAP = VIP_LEVEL_CONFIG_MAP;

var VIP_EQUITY_MAP = "VIP_EQUITY_MAP";

exports.VIP_EQUITY_MAP = VIP_EQUITY_MAP;

var VIP_TASK_MAP = "VIP_TASK_MAP";

exports.VIP_TASK_MAP = VIP_TASK_MAP;

var POSITION_MAP = "POSITION_INFO_MAP";

exports.POSITION_MAP = POSITION_MAP;

var POSITION_RULES_MAP = "POSITION_RULES_MAP";

exports.POSITION_RULES_MAP = POSITION_RULES_MAP;

var PROMOTION_MAP = "PROMOTION_MAP";

exports.PROMOTION_MAP = PROMOTION_MAP;

var PROMOTION_POSITION_RELATE_MAP = "PROMOTION_POSITION_RELATE_MAP";

exports.PROMOTION_POSITION_RELATE_MAP = PROMOTION_POSITION_RELATE_MAP;

var ONLINE_CAMP_SCHEDULE_MAP = "ONLINE_CAMP_SCHEDULE_MAP";

exports.ONLINE_CAMP_SCHEDULE_MAP = ONLINE_CAMP_SCHEDULE_MAP;

var cacheMap = (_defineProperty(_cacheMap = {}, CLASS_MAP, {
    map: "classinfoMap",
    key: "ci",
    name: "classMap",
    actionType: _actionTypes.CLASS_MAP_PUT
}), _defineProperty(_cacheMap, CLASS_SMALL_MAP, {
    map: "classinfoSmallMap",
    key: "cis",
    name: "classSmallMap",
    actionType: _actionTypes.CLASS_SMALL_MAP_PUT
}), _defineProperty(_cacheMap, SCHEDULE_MAP, {
    map: "scheduleMap",
    key: "cs",
    name: "scheduleMap",
    actionType: _actionTypes.SCHEDULE_MAP_PUT
}), _defineProperty(_cacheMap, SCHEDULE_SMALL_MAP, {
    map: "scheduleSmallMap",
    key: "css",
    name: "scheduleSmallMap",
    actionType: _actionTypes.SCHEDULE_SMALL_MAP_PUT
}), _defineProperty(_cacheMap, CAMP_MAP, {
    map: "superCampMap",
    key: "sc",
    name: "campMap",
    actionType: _actionTypes.CAMP_MAP_PUT
}), _defineProperty(_cacheMap, PERSONAL_CAMP_MAP, {
    map: "personalCampMap",
    key: "spc",
    name: "personalCampMap",
    actionType: _actionTypes.PERSONAL_CAMP_MAP_PUT
}), _defineProperty(_cacheMap, PERSONAL_SCHEDULE_MAP, {
    map: "personalScheduleMap",
    key: "sps",
    name: "personalScheduleMap",
    actionType: _actionTypes.PERSONAL_SCHEDULE_MAP_PUT
}), _defineProperty(_cacheMap, PERSONAL_MAP, {
    map: "personalMap",
    key: "p",
    name: "personalMap",
    actionType: _actionTypes.PERSONAL_MAP_PUT
}), _defineProperty(_cacheMap, ONLINE_CAMP_SCHEDULE_MAP, {
    map: "superCampScheduleMap",
    key: "scs",
    name: "superCampScheduleMap",
    actionType: _actionTypes.ONLINE_CAMP_SCHEDULE_MAP_PUT
}), _defineProperty(_cacheMap, BOX_MAP, {
    map: "boxinfoMap",
    key: "b",
    name: "boxMap",
    actionType: _actionTypes.BOX_MAP_PUT
}), _defineProperty(_cacheMap, BOX_SMALL_MAP, {
    map: "boxinfoSmallMap",
    key: "bs",
    name: "boxSmallMap",
    actionType: _actionTypes.BOX_SMALL_MAP_PUT
}), _defineProperty(_cacheMap, TRAINER_MAP, {
    map: "trainerMap",
    key: "t",
    name: "trainerMap",
    actionType: _actionTypes.TRAINER_MAP_PUT
}), _defineProperty(_cacheMap, TRAINER_SMALL_MAP, {
    map: "trainerSmallMap",
    key: "ts",
    name: "trainerSmallMap",
    actionType: _actionTypes.TRAINER_SMALL_MAP_PUT
}), _defineProperty(_cacheMap, POSITION_MAP, {
    map: "positionMap",
    key: "pos",
    name: "positionMap",
    actionType: _actionTypes.POSITION_MAP_PUT
}), _defineProperty(_cacheMap, POSITION_RULES_MAP, {
    map: "positionRulesMap",
    key: "pr",
    name: "positionRulesMap",
    actionType: _actionTypes.POSITION_RULES_MAP_PUT
}), _defineProperty(_cacheMap, PROMOTION_MAP, {
    map: "promotionMap",
    key: "pmt",
    name: "promotionMap",
    actionType: _actionTypes.PROMOTION_MAP_PUT
}), _defineProperty(_cacheMap, PROMOTION_POSITION_RELATE_MAP, {
    map: "promotionPositionRelateMap",
    key: "ppr",
    name: "promotionPositionRelateMap",
    actionType: _actionTypes.PROMOTION_POSITION_RELATE_MAP_PUT
}), _defineProperty(_cacheMap, VIP_LEVEL_CONFIG_MAP, {
    map: "vipLevelConfigMap",
    key: "vlcm",
    name: "vipLevelConfigMap",
    actionType: _actionTypes.VIP_LEVEL_CONFIG_MAP_PUT
}), _defineProperty(_cacheMap, VIP_EQUITY_MAP, {
    map: "vipEquityConfigMap",
    key: "vecm",
    name: "vipEquityMap",
    actionType: _actionTypes.VIP_EQUITY_MAP_PUT
}), _defineProperty(_cacheMap, VIP_TASK_MAP, {
    map: "vipTaskConfigMap",
    key: "vtcm",
    name: "vipTaskMap",
    actionType: _actionTypes.VIP_TASK_MAP_PUT
}), _cacheMap);

exports.cacheMap = cacheMap;

var cacheMapKeys = Object.keys(cacheMap), cacheMapSks = (exports.cacheMapKeys = cacheMapKeys).map(function(_) {
    return cacheMap[_].key;
});

exports.cacheMapSks = cacheMapSks;