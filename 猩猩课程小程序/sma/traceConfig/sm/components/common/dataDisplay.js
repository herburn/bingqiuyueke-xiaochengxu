function _defineProperty(e, n, r) {
    return n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = r, e;
}

var elementsIdMap = require("./../../../../../elementsId/index.js"), responseRegionIdMap = {}, responseRegionConfigMap = {}, FACE_BTN = "faceBtn";

responseRegionIdMap.Face = {
    FACE_BTN: FACE_BTN
}, responseRegionConfigMap.Face = _defineProperty({}, FACE_BTN, {
    id: elementsIdMap.Face.BTN,
    bindingMap: {
        trainerUserId: "{{ navigatorData.trainerUserId }}"
    },
    tap: "trainerUserId"
}), module.exports = {
    responseRegionIdMap: responseRegionIdMap,
    responseRegionConfigMap: responseRegionConfigMap
};