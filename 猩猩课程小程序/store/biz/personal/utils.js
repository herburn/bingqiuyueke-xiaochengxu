Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getUintMinPice = void 0;

var R = _interopRequireWildcard(require("./../../../vendor.js")(320));

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var r = {};
    if (null != e) for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
        var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
        i.get || i.set ? Object.defineProperty(r, t, i) : r[t] = e[t];
    }
    return r.default = e, r;
}

var forEachObjIndexed = R.forEachObjIndexed, getUintMinPice = function(e) {
    var i = [];
    return forEachObjIndexed(function(e, r) {
        var t = parseFloat((e / r / 100).toFixed(2));
        i.push(t);
    })(e), Math.min.apply(null, i);
};

exports.getUintMinPice = getUintMinPice;