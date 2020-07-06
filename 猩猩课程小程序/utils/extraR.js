Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.renameKeys = exports.mapKeys = exports.filterIndexed = exports.mapIndexed = void 0;

var _ramda = _interopRequireDefault(require("./../vendor.js")(320));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var mapIndexed = _ramda.default.addIndex(_ramda.default.map);

exports.mapIndexed = mapIndexed;

var filterIndexed = _ramda.default.addIndex(_ramda.default.filter);

exports.filterIndexed = filterIndexed;

var mapKeys = _ramda.default.curry(function(e, a) {
    return _ramda.default.fromPairs(_ramda.default.map(_ramda.default.adjust(e, 0), _ramda.default.toPairs(a)));
});

exports.mapKeys = mapKeys;

var renameKeys = _ramda.default.curry(function(r, d) {
    return _ramda.default.reduce(function(e, a) {
        return _ramda.default.assoc(r[a] || a, d[a], e);
    }, {}, _ramda.default.keys(d));
});

exports.renameKeys = renameKeys;