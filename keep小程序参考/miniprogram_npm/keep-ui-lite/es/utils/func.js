var e = require("../../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.isObj = function(e) {
    var t = (0, r.default)(e);
    return null !== e && ("object" === t || "function" === t);
}, exports.isDef = function(e) {
    return null != e;
}, exports.isNumber = function(e) {
    return /^\d+$/.test(e);
}, exports.range = function(e, r, t) {
    return Math.min(Math.max(e, r), t);
};

var r = e(require("../../../../@babel/runtime/helpers/typeof"));