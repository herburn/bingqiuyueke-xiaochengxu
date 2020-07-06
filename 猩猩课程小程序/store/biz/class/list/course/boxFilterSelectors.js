Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getCitiesCreator = getCitiesCreator, exports.getAreasByCityCreator = getAreasByCityCreator, 
exports.getBoxNamesByAreaCreator = getBoxNamesByAreaCreator, exports.getBoxIdsByNamesCreator = getBoxIdsByNamesCreator;

var _ramda = require("./../../../../../vendor.js")(320);

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

var containsFlip = (0, _ramda.flip)(_ramda.contains), namespace = "biz.class.list.course.", expGetBoxFilter = "".concat(namespace, "getBoxFilter");

function getCitiesCreator(r) {
    var e = (0, r.getSelector)(expGetBoxFilter);
    return function(r) {
        return e(r).cities;
    };
}

function getAreasByCityCreator(r) {
    var t = (0, r.getSelector)(expGetBoxFilter);
    return function(r, e) {
        return t(r).areasMap[e];
    };
}

function getBoxNamesByAreaCreator(r) {
    var e = r.getSelector;
    return (0, r.createSelector)(e(expGetBoxFilter), function(r, e) {
        return e;
    }, function(r, e, t) {
        return t;
    }, function(r, e, t) {
        var a = r.boxesMap["".concat(e, "|").concat(t)];
        return [ "全部" ].concat(_toConsumableArray((0, _ramda.map)((0, _ramda.prop)("boxname"))(a)));
    });
}

function getBoxIdsByNamesCreator(r) {
    var e = r.getSelector;
    return (0, r.createSelector)(e(expGetBoxFilter), function(r, e) {
        return e;
    }, function(r, e, t) {
        return t || "全城";
    }, function(r, e, t, a) {
        return a || [ "全部" ];
    }, function(r, e, t, a) {
        var o = r.boxesMap["".concat(e, "|").concat(t)], n = (0, _ramda.map)((0, _ramda.prop)("boxId"));
        return ("全部" === a[0] ? n : (0, _ramda.into)([], (0, _ramda.compose)((0, _ramda.filter)((0, 
        _ramda.pipe)((0, _ramda.prop)("boxname"), containsFlip(a))), n)))(o);
    });
}