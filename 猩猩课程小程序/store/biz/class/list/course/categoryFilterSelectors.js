Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getClassTargetNamesCreator = getClassTargetNamesCreator, exports.getClassTypeNamesCreator = getClassTypeNamesCreator, 
exports.getFirstTypeNamesBySelectedCreator = getFirstTypeNamesBySelectedCreator, 
exports.getClassIdsByFirstTypesCreator = getClassIdsByFirstTypesCreator;

var _ramda = require("./../../../../../vendor.js")(320);

function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _nonIterableSpread();
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(e) {
    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
}

function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) {
        for (var r = 0, a = new Array(e.length); r < e.length; r++) a[r] = e[r];
        return a;
    }
}

var containsFlip = (0, _ramda.flip)(_ramda.contains), propFlip = (0, _ramda.flip)(_ramda.prop), namespace = "biz.class.list.course.", expgetCategoryFilter = "".concat(namespace, "getCategoryFilter");

function getClassTargetNamesCreator(e) {
    var r = e.getSelector;
    return function(e) {
        return r(expgetCategoryFilter)(e).targetNames;
    };
}

function getClassTypeNamesCreator(e) {
    var r = e.getSelector;
    return function(e) {
        return r(expgetCategoryFilter)(e).typeNames;
    };
}

function getFirstTypeNamesBySelectedCreator(e) {
    var r = e.getSelector, a = e.createSelector, t = r(expgetCategoryFilter);
    return a(function(e) {
        return t(e);
    }, function(e, r) {
        return r || [];
    }, function(e, r, a) {
        return a || [];
    }, function(e, r, a) {
        var t, n = e.firstTypeNames, o = e.firstTypesMapByTargetName, i = e.firstTypesMapByTypeName;
        if (r.length && a.length) {
            var p = (0, _ramda.pipe)((0, _ramda.map)(propFlip(o)), _ramda.flatten, _ramda.uniq)(r), s = (0, 
            _ramda.pipe)((0, _ramda.map)(propFlip(i)), _ramda.flatten, _ramda.uniq)(a), l = (0, 
            _ramda.filter)(containsFlip(p)), m = (0, _ramda.filter)(containsFlip(s));
            t = (0, _ramda.into)([], (0, _ramda.compose)(l, m))(n);
        } else if (r.length) {
            var c = (0, _ramda.pipe)((0, _ramda.map)(propFlip(o)), _ramda.flatten, _ramda.uniq)(r);
            t = (0, _ramda.filter)(containsFlip(c))(n);
        } else if (a.length) {
            var u = (0, _ramda.pipe)((0, _ramda.map)(propFlip(i)), _ramda.flatten, _ramda.uniq)(a);
            t = (0, _ramda.filter)(containsFlip(u))(n);
        } else t = n;
        return [ "全部" ].concat(_toConsumableArray(t));
    });
}

function getClassIdsByFirstTypesCreator(e) {
    var r = e.getSelector, a = e.createSelector, t = r(expgetCategoryFilter);
    return a(function(e) {
        return t(e);
    }, function(e, r) {
        return r;
    }, function(e, r, a) {
        return a;
    }, function(e, r, a) {
        var t = e.classIdsMapByFirstTypeName;
        return "全部" === a[0] ? (0, _ramda.pipe)(_ramda.tail, (0, _ramda.map)(propFlip(t)), _ramda.flatten)(r) : (0, 
        _ramda.pipe)((0, _ramda.map)(propFlip(t)), _ramda.flatten)(a);
    });
}