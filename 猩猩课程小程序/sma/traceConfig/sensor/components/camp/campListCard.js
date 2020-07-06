function _defineProperty(e, n, o) {
    return n in e ? Object.defineProperty(e, n, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = o, e;
}

var elementsIdMap = require("./../../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, CAMP_CARD_COVER = "campCardCover";

responseRegionIdMap.CampListCard = {
    CAMP_CARD_COVER: CAMP_CARD_COVER
}, responseRegionConfigMap.CampListCard = _defineProperty({}, CAMP_CARD_COVER, {
    id: elementsIdMap.CampListCard.CAMP_CARD_COVER,
    bindingMap: {
        campInfo: "{{ camp }}"
    },
    tap: {
        event: function(e) {
            return 2 === e.campInfo.campChannelType ? "buttonClick" : "";
        },
        schema: function(e) {
            return 2 === e.campInfo.campChannelType ? {
                buttonId: "8",
                buttonName: "SGO-线上课程封面"
            } : {};
        }
    }
}), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};