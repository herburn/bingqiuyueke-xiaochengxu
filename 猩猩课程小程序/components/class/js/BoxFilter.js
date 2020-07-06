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
        for (var t = 0, i = new Array(e.length); t < e.length; t++) i[t] = e[t];
        return i;
    }
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, t) {
    for (var i = 0; i < t.length; i++) {
        var a = t[i];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
        Object.defineProperty(e, a.key, a);
    }
}

function _createClass(e, t, i) {
    return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e;
}

var containsFlip = (0, _ramda.flip)(_ramda.contains), BoxFilter = function() {
    function n(e) {
        var t = e.cities, i = e.getAreasByCity, a = e.getBoxesByArea, s = e.getBoxIdsByName, r = e.citySelected, l = void 0 === r ? "" : r;
        _classCallCheck(this, n), this.update({
            cities: t,
            getAreasByCity: i,
            getBoxesByArea: a,
            getBoxIdsByName: s,
            citySelected: l
        }), this.stash();
    }
    return _createClass(n, [ {
        key: "update",
        value: function(e) {
            var t = e.cities, i = e.getAreasByCity, a = e.getBoxesByArea, s = e.getBoxIdsByName, r = e.citySelected;
            this._cities = t, this._getAreasByCity = i, this._getBoxesByArea = a, this._getBoxIdsByName = s, 
            r && this._initialCitySelected !== r ? (this._initialCitySelected = r, this.selectCity({
                value: r
            })) : this._updateData();
        }
    }, {
        key: "stash",
        value: function() {
            this._stashData = {
                citySelected: this._citySelected,
                areaSelected: this._areaSelected,
                boxesSelected: _toConsumableArray(this._boxesSelected)
            };
        }
    }, {
        key: "unStash",
        value: function() {
            this._citySelected = this._stashData.citySelected, this._areaSelected = this._stashData.areaSelected, 
            this._boxesSelected = this._stashData.boxesSelected, this._updateData();
        }
    }, {
        key: "clean",
        value: function() {
            this.selectCity({
                value: this._initialCitySelected
            });
        }
    }, {
        key: "selectCity",
        value: function(e) {
            var t = e.value;
            this._citySelected = t, this.selectArea({
                value: this._getFirstArea()
            });
        }
    }, {
        key: "selectArea",
        value: function(e) {
            var t = e.value;
            this._areaSelected = t, this.selectBox({
                value: this._getFirstBox()
            });
        }
    }, {
        key: "selectBox",
        value: function(e) {
            var t = e.value, i = this._getFirstBox();
            t === i ? this._boxesSelected = [ i ] : this._boxesSelected[0] === i ? this._boxesSelected = [ t ] : ((0, 
            _updateList.updateList)(t, this._boxesSelected), 0 === this._boxesSelected.length && (this._boxesSelected = [ i ])), 
            this._updateData();
        }
    }, {
        key: "_getFirstArea",
        value: function() {
            return this._getAreasByCity(this._citySelected)[0];
        }
    }, {
        key: "_getFirstBox",
        value: function() {
            return this._getBoxesByArea(this._citySelected, this._areaSelected)[0];
        }
    }, {
        key: "_updateData",
        value: function() {
            this._box = this._getBox(), this._boxIds = this._getBoxIds(), this._isFilter = this._areaSelected !== this._getFirstArea() || this._boxesSelected[0] !== this._getFirstBox();
        }
    }, {
        key: "_getBoxIds",
        value: function() {
            return this._getBoxIdsByName(this._citySelected, this._areaSelected, _toConsumableArray(this._boxesSelected));
        }
    }, {
        key: "_getBox",
        value: function() {
            return Object.preventExtensions({
                cities: this._getCities(),
                areas: this._getAreas(),
                boxes: this._getBoxes()
            });
        }
    }, {
        key: "_getCities",
        value: function() {
            var e = (0, _ramda.applySpec)({
                type: (0, _ramda.always)("city"),
                label: _ramda.identity,
                value: _ramda.identity,
                isActive: (0, _ramda.equals)(this._citySelected)
            });
            return (0, _ramda.map)(e)(this._cities);
        }
    }, {
        key: "_getAreas",
        value: function() {
            var e = this._getAreasByCity(this._citySelected), t = (0, _ramda.applySpec)({
                type: (0, _ramda.always)("area"),
                label: _ramda.identity,
                value: _ramda.identity,
                isActive: (0, _ramda.equals)(this._areaSelected)
            });
            return (0, _ramda.map)(t)(e);
        }
    }, {
        key: "_getBoxes",
        value: function() {
            var e = this._getBoxesByArea(this._citySelected, this._areaSelected), t = (0, _ramda.applySpec)({
                type: (0, _ramda.always)("box"),
                label: _ramda.identity,
                value: _ramda.identity,
                isActive: containsFlip(this._boxesSelected)
            });
            return (0, _ramda.map)(t)(e);
        }
    }, {
        key: "box",
        get: function() {
            return this._box;
        }
    }, {
        key: "citySelected",
        get: function() {
            return this._citySelected;
        }
    }, {
        key: "areaSelected",
        get: function() {
            return this._areaSelected;
        }
    }, {
        key: "boxesSelected",
        get: function() {
            return this._boxesSelected;
        }
    }, {
        key: "selectedLength",
        get: function() {
            return this._boxesSelected[0] === this._getFirstBox() ? 0 : this._boxesSelected.length;
        }
    }, {
        key: "boxIds",
        get: function() {
            return this._boxIds;
        }
    }, {
        key: "isFilter",
        get: function() {
            return this._isFilter;
        }
    } ]), n;
}();

exports.default = BoxFilter;