function isNeedTrack(e) {
    var n = e.name, r = e.responseRegionId, s = e.event, i = e.responseRegionsConfigMap;
    return n in i && r in i[n] && s in i[n][r];
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = isNeedTrack;