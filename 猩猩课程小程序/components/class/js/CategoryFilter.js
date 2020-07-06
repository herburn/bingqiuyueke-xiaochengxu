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

var containsFlip = (0, _ramda.flip)(_ramda.contains), CategoryFilter = function() {
    function r(e) {
        var t = e.targetNames, s = e.typeNames, a = e.getFirstTypeNamesBySelected, i = e.getClassIdsByFirstTypes;
        _classCallCheck(this, r), this.update({
            targetNames: t,
            typeNames: s,
            getFirstTypeNamesBySelected: a,
            getClassIdsByFirstTypes: i
        }), this.clean(), this.stash();
    }
    return _createClass(r, [ {
        key: "update",
        value: function(e) {
            var t = e.targetNames, s = e.typeNames, a = e.getFirstTypeNamesBySelected, i = e.getClassIdsByFirstTypes;
            this._targetNames = t, this._typeNames = s, this._getFirstTypeNamesBySelected = a, 
            this._getClassIdsByFirstTypes = i;
        }
    }, {
        key: "stash",
        value: function() {
            this._stashData = {
                targetsSelected: _toConsumableArray(this._targetsSelected),
                typesSelected: _toConsumableArray(this._typesSelected),
                firstTypesSelected: _toConsumableArray(this._firstTypesSelected)
            };
        }
    }, {
        key: "unStash",
        value: function() {
            this._targetsSelected = this._stashData.targetsSelected, this._typesSelected = this._stashData.typesSelected, 
            this._firstTypesSelected = this._stashData.firstTypesSelected, this._updateData();
        }
    }, {
        key: "clean",
        value: function() {
            this._targetsSelected = [], this._typesSelected = [], this._firstTypesSelected = [ this._getFirstFirstTypeName() ], 
            this._updateData();
        }
    }, {
        key: "selectTarget",
        value: function(e) {
            var t = e.value;
            (0, _updateList.updateList)(t, this._targetsSelected), this._firstTypesSelected = [ this._getFirstFirstTypeName() ], 
            this._updateData();
        }
    }, {
        key: "selectType",
        value: function(e) {
            var t = e.value;
            (0, _updateList.updateList)(t, this._typesSelected), this._firstTypesSelected = [ this._getFirstFirstTypeName() ], 
            this._updateData();
        }
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
            this._isFilter = 0 !== this._targetsSelected.length || 0 !== this._typesSelected.length || this._firstTypesSelected[0] !== this._getFirstFirstTypeName(), 
            this._category = this._getCategory(), this._classIds = this._getClassIds();
        }
    }, {
        key: "_getClassIds",
        value: function() {
            if (this._isFilter) {
                var e = this._getFirstTypeNamesBySelected(this._targetsSelected, this._typesSelected);
                return this._getClassIdsByFirstTypes(e, this._firstTypesSelected);
            }
            return [];
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
                type: (0, _ramda.always)("target"),
                label: _ramda.identity,
                value: _ramda.identity,
                isActive: containsFlip(this._targetsSelected)
            });
            return (0, _ramda.map)(e)(this._targetNames);
        }
    }, {
        key: "_getTypes",
        value: function() {
            var e = (0, _ramda.applySpec)({
                type: (0, _ramda.always)("type"),
                label: _ramda.identity,
                value: _ramda.identity,
                isActive: containsFlip(this._typesSelected)
            });
            return (0, _ramda.map)(e)(this._typeNames);
        }
    }, {
        key: "_getFirstTypeNames",
        value: function() {
            var e = this._getFirstTypeNamesBySelected(this._targetsSelected, this._typesSelected), t = (0, 
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
            return this._firstTypesSelected[0] === this._getFirstFirstTypeName() ? 0 : this._firstTypesSelected.length;
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
    } ]), r;
}();

exports.default = CategoryFilter;