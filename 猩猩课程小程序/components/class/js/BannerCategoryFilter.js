Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _ramda = require("./../../../vendor.js")(320), _updateList = require("./../../../utils/updateList.js");

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
        for (var t = 0, s = new Array(e.length); t < e.length; t++) s[t] = e[t];
        return s;
    }
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, t) {
    for (var s = 0; s < t.length; s++) {
        var a = t[s];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
        Object.defineProperty(e, a.key, a);
    }
}

function _createClass(e, t, s) {
    return t && _defineProperties(e.prototype, t), s && _defineProperties(e, s), e;
}

var containsFlip = (0, _ramda.flip)(_ramda.contains), BannerCategoryFilter = function() {
    function i(e) {
        var t = e.categoryInfo, s = e.getFirstTypeNamesBySelected, a = e.getClassIdsByFirstTypes;
        _classCallCheck(this, i), this.update({
            categoryInfo: t,
            getFirstTypeNamesBySelected: s,
            getClassIdsByFirstTypes: a
        }), this.clean(), this.stash();
    }
    return _createClass(i, [ {
        key: "update",
        value: function(e) {
            var t = e.categoryInfo, s = e.getFirstTypeNamesBySelected, a = e.getClassIdsByFirstTypes;
            this._categoryInfo = t;
            var i = this._categoryInfo, r = i.targetNames, n = void 0 === r ? [] : r, l = i.typeNames, y = void 0 === l ? [] : l, c = i.firstTypeNames, _ = void 0 === c ? [] : c, o = i.allFirstTypeNames, p = void 0 === o ? [] : o;
            this._getFirstTypeNamesBySelected = s, this._getClassIdsByFirstTypes = a, this._targetNames = n, 
            this._targetsSelected = n, this._typeNames = y, this._typesSelected = y, this._firstTypesSelected = 0 < _.length ? _toConsumableArray(_) : [ this._getFirstFirstTypeName() ], 
            this._firstTypeNames = p, this._initialFirstTypesSelected = _toConsumableArray(this._firstTypesSelected);
        }
    }, {
        key: "stash",
        value: function() {
            this._stashData = {
                firstTypesSelected: _toConsumableArray(this._firstTypesSelected)
            };
        }
    }, {
        key: "unStash",
        value: function() {
            this._firstTypesSelected = this._stashData.firstTypesSelected, this._updateData();
        }
    }, {
        key: "clean",
        value: function() {
            this._firstTypesSelected = _toConsumableArray(this._initialFirstTypesSelected), 
            this._updateData();
        }
    }, {
        key: "selectTarget",
        value: function() {}
    }, {
        key: "selectType",
        value: function() {}
    }, {
        key: "selectFirstType",
        value: function(e) {
            var t = e.value, s = this._getFirstFirstTypeName();
            this._firstTypesSelected[0] === s ? this._firstTypesSelected = [ t ] : t === s ? this._firstTypesSelected = [ s ] : ((0, 
            _updateList.updateList)(t, this._firstTypesSelected), 0 === this._firstTypesSelected.length && (this._firstTypesSelected = [ s ])), 
            this._updateData();
        }
    }, {
        key: "_updateData",
        value: function() {
            this._classIds = this._getClassIds(), this._category = this._getCategory(), this._isFilter = 0 < this._targetsSelected.length || 0 < this._typesSelected.length;
        }
    }, {
        key: "_getClassIds",
        value: function() {
            if ("classIds" in this._categoryInfo) return this._categoryInfo.classIds;
            var e = this._getFirstTypeNamesBySelected(this._targetsSelected, this._typesSelected);
            return this._firstTypesSelected[0] === this._getFirstFirstTypeName() && 0 < this._firstTypeNames.length ? this._getClassIdsByFirstTypes(e, this._firstTypeNames) : this._getClassIdsByFirstTypes(e, this._firstTypesSelected);
        }
    }, {
        key: "_getCategory",
        value: function() {
            return Object.preventExtensions({
                targets: this._getTargets(),
                types: this._getTypes(),
                classes: this._getFirstTypeNames()
            });
        }
    }, {
        key: "_getTargets",
        value: function() {
            var e = (0, _ramda.applySpec)({
                label: _ramda.identity,
                value: _ramda.identity,
                isActive: (0, _ramda.always)(!0)
            });
            return (0, _ramda.map)(e)(this._targetNames);
        }
    }, {
        key: "_getTypes",
        value: function() {
            var e = (0, _ramda.applySpec)({
                label: _ramda.identity,
                value: _ramda.identity,
                isActive: (0, _ramda.always)(!0)
            });
            return (0, _ramda.map)(e)(this._typeNames);
        }
    }, {
        key: "_getFirstTypeNames",
        value: function() {
            if (0 === this._firstTypeNames.length && 0 === this._firstTypesSelected.length) return [];
            var e = 0 < this._firstTypeNames.length ? [ this._getFirstFirstTypeName() ].concat(_toConsumableArray(this._firstTypeNames)) : this._firstTypesSelected, t = (0, 
            _ramda.applySpec)({
                type: (0, _ramda.always)("firstTypeName"),
                label: _ramda.identity,
                value: _ramda.identity,
                isActive: containsFlip(this._firstTypesSelected)
            });
            return (0, _ramda.map)(t)(e);
        }
    }, {
        key: "_getFirstFirstTypeName",
        value: function() {
            return this._getFirstTypeNamesBySelected(this._targetsSelected, this._typesSelected)[0];
        }
    }, {
        key: "category",
        get: function() {
            return this._category;
        }
    }, {
        key: "targetsSelected",
        get: function() {
            return this._targetsSelected;
        }
    }, {
        key: "typesSelected",
        get: function() {
            return this._typesSelected;
        }
    }, {
        key: "firstTypesSelected",
        get: function() {
            return this._firstTypesSelected;
        }
    }, {
        key: "selectedLength",
        get: function() {
            return 0;
        }
    }, {
        key: "classIds",
        get: function() {
            return this._classIds;
        }
    }, {
        key: "isFilter",
        get: function() {
            return this._isFilter;
        }
    } ]), i;
}();

exports.default = BannerCategoryFilter;