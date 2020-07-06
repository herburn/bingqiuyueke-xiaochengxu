var _responseRegionConfig;

function _defineProperty(e, i, s) {
    return i in e ? Object.defineProperty(e, i, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[i] = s, e;
}

var elementsIdMap = require("./../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, VIEW_NOVICE_CLASS_LIST = "viewNoviceClassList", NOVICE_CARD_BTN_NOVICE_CLASS_LIST = "noviceCardBtnNoviceClassList";

responseRegionIdMap.NoviceClassList = {
    VIEW_NOVICE_CLASS_LIST: VIEW_NOVICE_CLASS_LIST,
    NOVICE_CARD_BTN_NOVICE_CLASS_LIST: NOVICE_CARD_BTN_NOVICE_CLASS_LIST
}, responseRegionConfigMap.NoviceClassList = (_defineProperty(_responseRegionConfig = {}, VIEW_NOVICE_CLASS_LIST, {
    viewPage: {
        event: "viewNewClass",
        schema: {
            vid: void 0
        }
    }
}), _defineProperty(_responseRegionConfig, NOVICE_CARD_BTN_NOVICE_CLASS_LIST, {
    id: elementsIdMap.NoviceClassList.NOVICE_CARD,
    tap: {
        event: "classClick",
        schema: "data"
    }
}), _responseRegionConfig);

var VIDEO_NOVICE_CLASS_LIST_VIDEO = "videoNoviceClassListVideo";

responseRegionIdMap.NoviceClassListVideo = {
    VIDEO_NOVICE_CLASS_LIST_VIDEO: VIDEO_NOVICE_CLASS_LIST_VIDEO
}, responseRegionConfigMap.NoviceClassListVideo = _defineProperty({}, VIDEO_NOVICE_CLASS_LIST_VIDEO, {
    id: elementsIdMap.NoviceClassListVideo.VIDEO,
    bindingMap: {
        vid: "{{ vid }}"
    },
    play: {
        event: "videoClick",
        schema: {
            vid: void 0,
            playTime: function() {
                return new Date();
            }
        }
    },
    pause: {
        event: "videoClick",
        schema: {
            vid: void 0,
            pauseTime: function() {
                return new Date();
            }
        }
    }
}), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};