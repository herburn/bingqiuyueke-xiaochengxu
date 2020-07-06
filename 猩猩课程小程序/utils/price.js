function yuanToFixed2(n) {
    return Math.round(100 * n) / 100;
}

function yuan2Cent(n) {
    return Math.round(100 * n);
}

function cent2Yuan(n, e) {
    var t = n / 100;
    return e ? +t.toFixed(e) : t;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.yuanToFixed2 = yuanToFixed2, exports.yuan2Cent = yuan2Cent, exports.cent2Yuan = cent2Yuan;