Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getStorageSync = getStorageSync, exports.setStorage = setStorage;

var _core = _interopRequireDefault(require("./../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function getStorageSync(e) {
    for (var t = 0; t < 3; t++) try {
        return wx.getStorageSync(e);
    } catch (e) {}
}

function setStorage(e) {
    return _core.default.setStorage(e);
}