Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.compareVersion = compareVersion, exports.compareSystemVersion = compareSystemVersion, 
exports.getSubscribeMsgVersionStatus = getSubscribeMsgVersionStatus;

var _store = require("./../store/index.js"), R = _interopRequireWildcard(require("./../vendor.js")(320));

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
        var s = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
        s.get || s.set ? Object.defineProperty(r, t, s) : r[t] = e[t];
    }
    return r.default = e, r;
}

var contains = R.contains;

function compareVersion(e, r) {
    e = e.split("."), r = r.split(".");
    for (var t = Math.max(e.length, r.length); e.length < t; ) e.push("0");
    for (;r.length < t; ) r.push("0");
    for (var s = 0; s < t; s++) {
        var o = parseInt(e[s]), n = parseInt(r[s]);
        if (n < o) return 1;
        if (o < n) return -1;
    }
    return 0;
}

function compareSystemVersion(e) {
    return compareVersion(_store.store.selectors.getSystemInfo(_store.store.getState()).version, e);
}

var firstPrint = !0;

function getSubscribeMsgVersionStatus() {
    var e = _store.store.selectors.getSystemInfo(_store.store.getState()), r = e.platform, t = e.SDKVersion, s = e.system;
    return firstPrint && console.error("getSubscribeMsgVersionStatus", t, e), firstPrint = !1, 
    compareVersion(t, "2.6.6") < 0 ? 0 : "android" === r ? compareSystemVersion("7.0.6") <= 0 ? 1 : 2 : "iOS" === r || contains("iOS", s) ? compareSystemVersion("7.0.5") <= 0 ? 1 : 2 : void 0;
}