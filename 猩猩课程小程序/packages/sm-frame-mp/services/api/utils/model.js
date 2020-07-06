Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.fill = fill, exports.cloneDeep = cloneDeep, exports.invertCopyModel = exports.copyModel = void 0;

var _ramda = _interopRequireDefault(require("./../../../../../vendor.js")(320));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function fill(o, t, e) {
    return _ramda.default.forEachObjIndexed(function(e, r) {
        _ramda.default.has(e)(t) && (o[r] = _ramda.default.prop(e)(t));
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