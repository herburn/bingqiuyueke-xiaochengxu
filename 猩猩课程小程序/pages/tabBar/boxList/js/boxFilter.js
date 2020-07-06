Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _ramda = require("./../../../../vendor.js")(320);

function ownKeys(t, e) {
    var i = Object.keys(t);
    return Object.getOwnPropertySymbols && i.push.apply(i, Object.getOwnPropertySymbols(t)), 
    e && (i = i.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), i;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(i, !0).forEach(function(e) {
            _defineProperty(t, e, i[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ownKeys(i).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
        });
    }
    return t;
}

function _defineProperty(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e;
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

var ALLAREA = "全城", ALLTHEME = "全部", boxFilter = function() {
    function a(e, t) {
        var i = t.cityList, s = t.tags;
        _classCallCheck(this, a), this.init(e, i, s);
    }
    return _createClass(a, [ {
        key: "update",
        value: function(e, t) {
            var i = t.cityList, s = t.tags;
            this.init(e, i, s);
        }
    }, {
        key: "stash",
        value: function() {
            this._stashData = {
                selectCity: this._selectedCity,
                selectArea: this._selectedArea,
                selectTheme: this._selectedTheme
            };
        }
    }, {
        key: "unStash",
        value: function() {
            var e = this._stashData, t = e.selectCity, i = e.selectArea, s = e.selectTheme;
            this._selectedCity = t, this._selectedArea = i, this._selectedTheme = s, this._updateData();
        }
    }, {
        key: "init",
        value: function(e, t, i) {
            this._selectedCity = e, this._selectedArea = ALLAREA, this._selectedTheme = ALLTHEME, 
            this._cityList = t, this._tags = i, this._updateData(), this.stash();
        }
    }, {
        key: "_updateData",
        value: function() {
            var i = this;
            this._cities = (0, _ramda.map)(function(e) {
                var t = (0, _ramda.init)(e);
                return {
                    label: t,
                    value: t,
                    type: "city",
                    isActive: t === i._selectedCity
                };
            })(this._cityList), this._areas = this._getAreasByCity(), this._areas = updateList(this._selectedArea, this._areas), 
            this._themes = this._getThemesByCityArea(), this._themes = updateList(this._selectedTheme, this._themes);
        }
    }, {
        key: "_getAreasByCity",
        value: function() {
            return this._tags["".concat(this._selectedCity, "市")].map(function(e) {
                return {
                    label: e.area,
                    value: e.area,
                    type: "area",
                    isActive: !1
                };
            });
        }
    }, {
        key: "_getThemesByCityArea",
        value: function() {
            var e, t, i = this._tags["".concat(this._selectedCity, "市")], s = null === (e = (0, 
            _ramda.find)((0, _ramda.propEq)("isActive", !0))(this._areas)) || void 0 === e ? void 0 : e.value, a = (null === (t = (0, 
            _ramda.find)((0, _ramda.propEq)("area", s))(i)) || void 0 === t ? void 0 : t.tags) || [], r = (0, 
            _ramda.map)(function(e) {
                return {
                    label: e,
                    value: e,
                    type: "theme",
                    isActive: !1
                };
            })(a);
            return r.unshift({
                label: ALLTHEME,
                value: ALLTHEME,
                type: "theme",
                isActive: !1
            }), r;
        }
    }, {
        key: "_getSelectedItems",
        value: function(e) {
            return (0, _ramda.filter)((0, _ramda.propEq)("isActive", !0))(e);
        }
    }, {
        key: "selectCity",
        value: function(e) {
            this._selectedCity = e, this._selectedArea = ALLAREA, this._selectedTheme = ALLTHEME, 
            this._updateData();
        }
    }, {
        key: "selectArea",
        value: function(e) {
            this._selectedArea = e, this._areas = updateList(e, this._areas), this._themes = this._getThemesByCityArea(), 
            this._selectedTheme = ALLTHEME, this._themes = updateList(this._selectedTheme, this._themes);
        }
    }, {
        key: "selectTheme",
        value: function(e) {
            this._selectedTheme = e, this._themes = updateList(e, this._themes);
        }
    }, {
        key: "filterResult",
        get: function() {
            return {
                city: this._selectedCity,
                area: this._selectedArea,
                theme: this._selectedTheme
            };
        }
    }, {
        key: "filterInfo",
        get: function() {
            return {
                cities: this._cities,
                areas: this._areas,
                themes: this._themes
            };
        }
    } ]), a;
}();

function updateList(t, e) {
    return (0, _ramda.map)(function(e) {
        return _objectSpread({}, e, {
            isActive: e.value === t
        });
    })(e);
}

exports.default = boxFilter;