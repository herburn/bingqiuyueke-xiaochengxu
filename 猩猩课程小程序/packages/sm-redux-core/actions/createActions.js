Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _reduxActions = require("./../../../vendor.js")(367), _ramda = require("./../../../vendor.js")(320);

function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _nonIterableSpread();
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(r) {
    if (Symbol.iterator in Object(r) || "[object Arguments]" === Object.prototype.toString.call(r)) return Array.from(r);
}

function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) {
        for (var e = 0, t = new Array(r.length); e < r.length; e++) t[e] = r[e];
        return t;
    }
}

function createActions(r) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, _ramda.forEachObjIndexed)(function(r, e) {
        "modules" === e ? (0, _ramda.forEachObjIndexed)(function(r, e) {
            t[e] = createActions(r);
        })(r) : t[e] = "String" === (0, _ramda.type)(r) ? (0, _reduxActions.createAction)(r) : _reduxActions.createAction.apply(void 0, _toConsumableArray(r));
    })(r), t;
}

var _default = createActions;

exports.default = _default;