Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getSystemWidth = getSystemWidth, exports.getSystemHeight = getSystemHeight, 
exports.rpx2px = rpx2px, exports.px2rpx = px2rpx, exports.floorRpx2Px = floorRpx2Px, 
exports.px2rpxScale = px2rpxScale, exports.isBiggerRatio = isBiggerRatio;

var _store = require("./../store/index.js");

function strip(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 12;
    return +parseFloat(t.toPrecision(e));
}

function getSystemWidth() {
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
    return t.windowWidth || t.screenWidth;
}

function getSystemHeight() {
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
    return t.windowHeight || t.screenHeight;
}

function rpx2px(t) {
    return t / (750 / getSystemWidth(_store.store.selectors.getSystemInfo(_store.store.getState())));
}

function px2rpx(t, e) {
    return t * (750 / getSystemWidth(e || _store.store.selectors.getSystemInfo(_store.store.getState())));
}

function floorRpx2Px(t) {
    return Math.floor(rpx2px(t));
}

function px2rpxScale(t, e) {
    return t / px2rpx(e);
}

function isBiggerRatio(t) {
    var e = t || _store.store.selectors.getSystemInfo(_store.store.getState()) || {};
    return .56 <= strip(e.screenWidth / e.screenHeight);
}