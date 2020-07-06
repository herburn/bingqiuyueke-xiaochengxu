function _defineProperty(e, n, a) {
    return n in e ? Object.defineProperty(e, n, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = a, e;
}

var elementsIdMap = require("./../../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, FACE_BTN = "faceBtn";

responseRegionIdMap.Face = {
    FACE_BTN: FACE_BTN
}, responseRegionConfigMap.Face = _defineProperty({}, FACE_BTN, {
    id: elementsIdMap.Face.BTN,
    bindingMap: {
        extraData: "{{ extraData }}"
    },
    tap: {
        event: function(e) {
            var n = e.extraData;
            return n && n.trainerUserId ? "trainerClick" : "";
        },
        schema: {
            trainerUserId: "extraData.trainerUserId",
            scheduleId: "extraData.scheduleId",
            boxId: "extraData.boxId"
        },
        error: !1
    }
});

var SM_VIDEO = "smVideo";

responseRegionIdMap.Video = {
    SM_VIDEO: SM_VIDEO
}, responseRegionConfigMap.Video = _defineProperty({}, SM_VIDEO, {
    id: elementsIdMap.Video.VIDEO,
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