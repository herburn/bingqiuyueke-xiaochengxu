Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.fill = fill, exports.cloneDeep = cloneDeep, exports.invertCopyModel = exports.copyModel = void 0;

var _ramda = _interopRequireDefault(require("./../vendor.js")(320));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var split = _ramda.default.split(".");

function fill(o, n, e) {
    return _ramda.default.forEachObjIndexed(function(e, r) {
        var t = split(e);
        void 0 !== _ramda.default.path(t)(n) && (o[r] = _ramda.default.path(t)(n));
    })(e), o;
}

function cloneDeep(e) {
    return _ramda.default.clone(e);
}

var copyModel = function(r) {
    return function(e) {
        return fill(cloneDeep(r.schema), e, r.meta);
    };
};

exports.copyModel = copyModel;

var invertCopyModel = function(r) {
    return function(e) {
        return fill(cloneDeep(r.invertSchema), e, r.invertMeta);
    };
};

exports.invertCopyModel = invertCopyModel;