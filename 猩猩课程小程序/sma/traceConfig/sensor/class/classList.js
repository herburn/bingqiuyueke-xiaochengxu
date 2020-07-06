var _responseRegionConfig3;

function _defineProperty(e, s, n) {
    return s in e ? Object.defineProperty(e, s, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[s] = n, e;
}

var elementsIdMap = require("./../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, NOVICE_BANNER_CLASS_LIST_BANNER_NOVICE = "noviceBannerClassListBannerNovice";

responseRegionIdMap.ClassListBannerNovice = {
    NOVICE_BANNER_CLASS_LIST_BANNER_NOVICE: NOVICE_BANNER_CLASS_LIST_BANNER_NOVICE
}, responseRegionConfigMap.ClassListBannerNovice = _defineProperty({}, NOVICE_BANNER_CLASS_LIST_BANNER_NOVICE, {
    id: elementsIdMap.ClassListBannerNovice.NOVICE_BANNER,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "9",
            buttonName: "新手课表入口"
        }
    }
});

var BOX_FAV_CLASS_LIST_BOX_HEADER = "boxFavClassListBoxHeader";

responseRegionIdMap.ClassListBoxHeader = {
    BOX_FAV_CLASS_LIST_BOX_HEADER: BOX_FAV_CLASS_LIST_BOX_HEADER
}, responseRegionConfigMap.ClassListBoxHeader = _defineProperty({}, BOX_FAV_CLASS_LIST_BOX_HEADER, {
    id: elementsIdMap.ClassListBoxHeader.BOX_FAV,
    tap: {
        event: "buttonClick",
        schema: {
            buttonId: "8",
            buttonName: "门店收藏"
        }
    }
});

var MID_CLASS_LIST_CLASS_ENTITY = "midClassListClassEntity", BTN_CLASS_LIST_CLASS_ENTITY = "btnClassListClassEntity";

responseRegionIdMap.ClassListClassEntity = {
    BTN_CLASS_LIST_CLASS_ENTITY: BTN_CLASS_LIST_CLASS_ENTITY
}, responseRegionConfigMap.ClassListClassEntity = (_defineProperty(_responseRegionConfig3 = {}, MID_CLASS_LIST_CLASS_ENTITY, {
    id: elementsIdMap.ClassListClassEntity.SCHEDULE_MID,
    bindingMap: {
        schedule: "{{ schedule }}"
    },
    tap: {
        event: "classClick",
        schema: {
            scheduleId: "schedule.id",
            classState: "schedule.btnInfo.text"
        }
    }
}), _defineProperty(_responseRegionConfig3, BTN_CLASS_LIST_CLASS_ENTITY, {
    id: elementsIdMap.ClassListClassEntity.SCHEDULE_BTN,
    bindingMap: {
        schedule: "{{ schedule }}"
    },
    tap: {
        event: function(e) {
            return "等候" === e.schedule.btnInfo.text ? "classWait" : "reservation";
        },
        schema: function(e) {
            var s = e.schedule;
            return "等候" === s.btnInfo.text ? {
                scheduleId: s.id,
                superCardPrice: s.collectData.superCardPrice
            } : {
                scheduleId: s.id,
                classState: s.btnInfo.text,
                superCardPrice: s.collectData.superCardPrice
            };
        }
    }
}), _responseRegionConfig3), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};