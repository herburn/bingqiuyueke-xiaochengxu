Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var R = _interopRequireWildcard(require("./../../../vendor.js")(320)), _updateList = require("./../../../utils/updateList.js");

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
        var s = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, i) : {};
        s.get || s.set ? Object.defineProperty(t, i, s) : t[i] = e[i];
    }
    return t.default = e, t;
}

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
        var s = t[i];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
        Object.defineProperty(e, s.key, s);
    }
}

function _createClass(e, t, i) {
    return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e;
}

var applySpec = R.applySpec, equals = R.equals, identity = R.identity, map = R.map, contains = R.contains, flip = R.flip, prop = R.prop, reduce = R.reduce, merge = R.merge, pipe = R.pipe, objOf = R.objOf, converge = R.converge, always = R.always, containsFlip = flip(contains), BannerBoxFilter = function() {
    function n(e) {
        var t = e.citiesBoxIds, i = e.getAreasByCity, s = e.getBoxesByArea, a = e.getBoxIdsByName, r = e.getBoxSmallById, l = e.citySelected, o = void 0 === l ? "" : l;
        _classCallCheck(this, n), this.update({
            citiesBoxIds: t,
            getAreasByCity: i,
            getBoxesByArea: s,
            getBoxIdsByName: a,
            getBoxSmallById: r
        }), this._initialCitySelected = o, this.clean(), this.stash();
    }
    return _createClass(n, [ {
        key: "update",
        value: function(e) {
            var t = e.citiesBoxIds, i = e.getAreasByCity, s = e.getBoxesByArea, a = e.getBoxIdsByName, r = e.getBoxSmallById;
            this._cities = map(prop("city"))(t), this._BoxIdsMapByCity = pipe(map(converge(objOf, [ prop("city"), prop("boxIds") ])), reduce(merge, {}))(t), 
            this._getAreasByCity = i, this._getBoxesByArea = s, this._getBoxIdsByName = a, this._getBoxSmallById = r;
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
            this._citySelected = t;
            var i = this._BoxIdsMapByCity[this._citySelected];
            0 < i.length ? (this._areaSelected = this._getFirstArea(), this._boxesSelected = map(pipe(this._getBoxSmallById, prop("boxname")))(i), 
            this._updateData()) : this.selectArea({
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
            var t = e.value;
            if (!(0 < this._BoxIdsMapByCity[this._citySelected].length)) {
                var i = this._getFirstBox();
                t === i ? this._boxesSelected = [ i ] : this._boxesSelected[0] === i ? this._boxesSelected = [ t ] : ((0, 
                _updateList.updateList)(t, this._boxesSelected), 0 === this._boxesSelected.length && (this._boxesSelected = [ i ])), 
                this._updateData();
            }
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
            var e = applySpec({
                label: identity,
                value: identity,
                isActive: equals(this._citySelected)
            });
            return map(e)(this._cities);
        }
    }, {
        key: "_getAreas",
        value: function() {
            if (0 < this._BoxIdsMapByCity[this._citySelected].length) return [];
            var e = this._getAreasByCity(this._citySelected), t = applySpec({
                label: identity,
                value: identity,
                isActive: equals(this._areaSelected)
            });
            return map(t)(e);
        }
    }, {
        key: "_getBoxes",
        value: function() {
            if (0 < this._BoxIdsMapByCity[this._citySelected].length) {
                var e = this._boxesSelected, t = applySpec({
                    label: identity,
                    value: identity,
                    isActive: always(!0)
                });
                return map(t)(e);
            }
            var i = this._getBoxesByArea(this._citySelected, this._areaSelected), s = applySpec({
                label: identity,
                value: identity,
                isActive: containsFlip(this._boxesSelected)
            });
            return map(s)(i);
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

exports.default = BannerBoxFilter;