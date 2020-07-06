Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getOnlineCampScheduleListSelector = getOnlineCampScheduleListSelector;

var _ramda = require("./../../../vendor.js")(320), _commonSelector = require("./commonSelector.js"), getSelectedCity = function(e) {
    return e.biz.onlineCamp.campDetail.selectedCity;
}, onlyShowApplicable = function(e) {
    return e.biz.onlineCamp.campDetail.onlyShowApplicable;
}, getCampScheduleList = function(e) {
    return e.biz.onlineCamp.campDetail.campScheduleList;
}, getCityList = function(e) {
    return e.biz.onlineCamp.campDetail.cityList;
}, getSuperCampScheduleMap = function(e) {
    return e.domains.superCampScheduleMap.entities;
}, getTrainerMap = function(e) {
    return e.domains.trainerMap.entities;
};

function onlineResultFunc(t, n, e, i, r, c) {
    function l(e) {
        return "全部" === t || e.city === t;
    }
    var u = (0, _commonSelector.getScheduleList)(r, c, {}, e);
    return (0, _ramda.filter)(function(e) {
        return n ? l(e) && (1 === e.scheduleStatus || 2 === e.scheduleStatus) : l(e);
    }, u);
}

function getOnlineCampScheduleListSelector(e) {
    return (0, e.createSelector)(getSelectedCity, onlyShowApplicable, getCampScheduleList, getCityList, getSuperCampScheduleMap, getTrainerMap, onlineResultFunc);
}