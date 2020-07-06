Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _actionTypes = require("./../types/index.js"), _duck = require("./../../imports/duck.js"), _boxExtraMap = _interopRequireDefault(require("./boxExtraMap.js")), _campsSmall = _interopRequireDefault(require("./campsSmall.js"));

function _interopRequireDefault(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var classMap = (0, _duck.createDomainModel)("classMap", _actionTypes.CLASS_MAP_PUT), classSmallMap = (0, 
_duck.createDomainModel)("classSmallMap", _actionTypes.CLASS_SMALL_MAP_PUT), scheduleMap = (0, 
_duck.createDomainModel)("scheduleMap", _actionTypes.SCHEDULE_MAP_PUT), scheduleSmallMap = (0, 
_duck.createDomainModel)("scheduleSmallMap", _actionTypes.SCHEDULE_SMALL_MAP_PUT), campMap = (0, 
_duck.createDomainModel)("campMap", _actionTypes.CAMP_MAP_PUT), personalCampMap = (0, 
_duck.createDomainModel)("personalCampMap", _actionTypes.PERSONAL_CAMP_MAP_PUT), personalScheduleMap = (0, 
_duck.createDomainModel)("personalScheduleMap", _actionTypes.PERSONAL_SCHEDULE_MAP_PUT), personalMap = (0, 
_duck.createDomainModel)("personalMap", _actionTypes.PERSONAL_MAP_PUT), boxMap = (0, 
_duck.createDomainModel)("boxMap", _actionTypes.BOX_MAP_PUT), boxSmallMap = (0, 
_duck.createDomainModel)("boxSmallMap", _actionTypes.BOX_SMALL_MAP_PUT), trainerMap = (0, 
_duck.createDomainModel)("trainerMap", _actionTypes.TRAINER_MAP_PUT), trainerSmallMap = (0, 
_duck.createDomainModel)("trainerSmallMap", _actionTypes.TRAINER_SMALL_MAP_PUT), positionMap = (0, 
_duck.createDomainModel)("positionMap", _actionTypes.POSITION_MAP_PUT), positionRulesMap = (0, 
_duck.createDomainModel)("positionRulesMap", _actionTypes.POSITION_RULES_MAP_PUT), promotionMap = (0, 
_duck.createDomainModel)("promotionMap", _actionTypes.PROMOTION_MAP_PUT), promotionPositionRelateMap = (0, 
_duck.createDomainModel)("promotionPositionRelateMap", _actionTypes.PROMOTION_POSITION_RELATE_MAP_PUT), vipLevelConfigMap = (0, 
_duck.createDomainModel)("vipLevelConfigMap", _actionTypes.VIP_LEVEL_CONFIG_MAP_PUT), vipEquityMap = (0, 
_duck.createDomainModel)("vipEquityMap", _actionTypes.VIP_EQUITY_MAP_PUT), vipTaskMap = (0, 
_duck.createDomainModel)("vipTaskMap", _actionTypes.VIP_TASK_MAP_PUT), classPriceMap = (0, 
_duck.createDomainModel)("classPriceMap", _actionTypes.CLASS_PRICE_MAP_PUT), dateBoxSchedulesMap = (0, 
_duck.createDomainModel)("dateBoxSchedulesMap", _actionTypes.DATE_BOX_SCHEDULES_MAP_PUT), userSubscribeMap = (0, 
_duck.createDomainModel)("userSubscribeMap", _actionTypes.USER_SUBSCRIBE_MAP_PUT), noviceClassMap = (0, 
_duck.createDomainModel)("noviceClassMap", _actionTypes.NOVICE_CLASS_MAP_PUT), superCampScheduleMap = (0, 
_duck.createDomainModel)("superCampScheduleMap", _actionTypes.ONLINE_CAMP_SCHEDULE_MAP_PUT), _default = {
    classMap: classMap,
    classSmallMap: classSmallMap,
    scheduleMap: scheduleMap,
    scheduleSmallMap: scheduleSmallMap,
    campMap: campMap,
    campSmallMap: _campsSmall.default,
    personalCampMap: personalCampMap,
    personalScheduleMap: personalScheduleMap,
    personalMap: personalMap,
    boxMap: boxMap,
    boxSmallMap: boxSmallMap,
    trainerMap: trainerMap,
    trainerSmallMap: trainerSmallMap,
    positionMap: positionMap,
    positionRulesMap: positionRulesMap,
    promotionMap: promotionMap,
    promotionPositionRelateMap: promotionPositionRelateMap,
    vipLevelConfigMap: vipLevelConfigMap,
    vipEquityMap: vipEquityMap,
    vipTaskMap: vipTaskMap,
    superCampScheduleMap: superCampScheduleMap,
    boxExtraMap: _boxExtraMap.default,
    classPriceMap: classPriceMap,
    dateBoxSchedulesMap: dateBoxSchedulesMap,
    userSubscribeMap: userSubscribeMap,
    noviceClassMap: noviceClassMap
};

exports.default = _default;