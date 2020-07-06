Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _ramda = require("./../../../../../vendor.js")(320), _updateList = require("./../../../../../utils/updateList.js");

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

var containsFlip = (0, _ramda.flip)(_ramda.contains), PersonalFilter = function() {
    function a(e) {
        var t = e.boxData, s = e.coursesData;
        _classCallCheck(this, a), this.init(t, s);
    }
    return _createClass(a, [ {
        key: "update",
        value: function(e) {
            var t = e.boxData, s = e.coursesData, a = e.filterInfo, i = a.city, r = a.area, o = a.boxNames, l = a.campNames, n = t.currentCity, u = void 0 === n ? "深圳市" : n, c = t.boxArea, d = t.area, _ = void 0 === d ? "全城" : d;
            this._boxArea = c, this._selectedCity = i || u, this._coursesData = s, this._initialCity = i || u, 
            this._selectedArea = r || _, this._selectedBoxes = o, this._selectedCourses = l, 
            this._updateData(), this.stash();
        }
    }, {
        key: "init",
        value: function(e, t) {
            var s = e.currentCity, a = void 0 === s ? "深圳市" : s, i = e.boxArea, r = e.area, o = void 0 === r ? "全城" : r;
            this._boxArea = i, this._selectedCity = a, this._coursesData = t, this._initialCity = a, 
            this._selectedArea = o, this._selectedBoxes = [], this._selectedCourses = [], this._updateData(!0), 
            this.stash();
        }
    }, {
        key: "_updateData",
        value: function(e) {
            var t = this, s = 0 < arguments.length && void 0 !== e && e;
            this._cities = (0, _ramda.map)(function(e) {
                return {
                    type: "city",
                    label: e,
                    value: e,
                    isActive: e === t._selectedCity
                };
            })(this._boxArea.cityList), this._areas = this._getAreasByCity(s), this._boxes = this._getBoxesByCityArea(s), 
            this._courses = this._getCoursesByBoxIds(s);
        }
    }, {
        key: "stash",
        value: function() {
            this._stashData = {
                selectCity: this._selectedCity,
                selectArea: this._selectedArea,
                selectedBoxes: _toConsumableArray(this._selectedBoxes),
                selectedCourses: _toConsumableArray(this._selectedCourses)
            };
        }
    }, {
        key: "unStash",
        value: function() {
            var e = this._stashData, t = e.selectCity, s = e.selectArea, a = e.selectedBoxes, i = e.selectedCourses;
            this._selectedCity = t, this._selectedArea = s, this._selectedBoxes = _toConsumableArray(a), 
            this._selectedCourses = _toConsumableArray(i), this._updateData();
        }
    }, {
        key: "clean",
        value: function() {
            this._selectedCity = this._initialCity, this._selectedArea = this._getFirstArea(), 
            this._selectedBoxes = [ this._getFirstBox() ], this._selectedCourses = [ this._getFirstCourse() ], 
            this._updateData();
        }
    }, {
        key: "_getAreasByCity",
        value: function(e) {
            var t = this, s = this._boxArea, a = s.cityMap, i = s.nearByCityBoxList, r = s.recentBookingBoxList, o = a[this._selectedCity] || [], l = (0, 
            _ramda.map)((0, _ramda.prop)("area"))(o), n = ((0, _ramda.find)((0, _ramda.propEq)("allArea", 1))(o) || {
                boxList: []
            }).boxList;
            0 < this._getRecentBoxIdsInCity(r, n).length && l.unshift("去过"), this._selectedCity === this._initialCity && 0 < i.length && l.unshift("附近");
            var u = (0, _ramda.findIndex)((0, _ramda.equals)("全城"))(l);
            return -1 < u && (l.splice(u, 1), l.unshift("全城")), e && (this._selectedArea = l[0]), 
            (0, _ramda.map)(function(e) {
                return {
                    type: "area",
                    label: e,
                    value: e,
                    isActive: e === t._selectedArea
                };
            })(l);
        }
    }, {
        key: "_getBoxesByCityArea",
        value: function(e) {
            var s = this, t = this._boxArea, a = t.cityMap, i = t.nearByCityBoxList, r = t.recentBookingBoxList, o = this._selectedArea, l = a[this._selectedCity] || [], n = ((0, 
            _ramda.find)((0, _ramda.propEq)("area", o))(l) || {}).boxList, u = void 0 === n ? [] : n, c = ((0, 
            _ramda.find)((0, _ramda.propEq)("area", "全城"))(l) || {}).boxList;
            if ("去过" === o) {
                var d = this._getRecentBoxIdsInCity(r, c);
                u = (0, _ramda.filter)(function(e) {
                    return containsFlip(d, e.boxId);
                })(u);
            } else "附近" === o && (u = i);
            e && (this._selectedBoxes = [ "全部" ]);
            var _ = (0, _ramda.map)(function(e) {
                var t = e.boxname;
                return {
                    type: "box",
                    label: t,
                    value: t,
                    boxId: e.boxId,
                    isActive: (0, _ramda.contains)(t, s._selectedBoxes)
                };
            })(u);
            return _.unshift({
                type: "box",
                label: "全部",
                value: "全部",
                boxId: -1,
                isActive: (0, _ramda.contains)("全部", this._selectedBoxes)
            }), _;
        }
    }, {
        key: "_getCoursesByBoxIds",
        value: function(e) {
            var s = this, t = this._getBoxIds(), a = (0, _ramda.filter)(function(e) {
                return -1 === e.boxIds || 0 < (0, _ramda.intersection)(t, e.boxIds).length;
            })(this._coursesData);
            return a.unshift({
                campId: -1,
                boxIds: -1,
                campName: "全部"
            }), e && (this._selectedCourses = [ a[0].campName ]), a = (0, _ramda.map)(function(e) {
                var t = e.campName;
                return {
                    type: "course",
                    label: t,
                    value: t,
                    campId: e.campId,
                    isActive: (0, _ramda.contains)(t, s._selectedCourses)
                };
            })(a);
        }
    }, {
        key: "_getBoxIds",
        value: function() {
            var e, t = this._getSelectedItems(this._boxes) || [];
            return -1 === (null === (e = t[0]) || void 0 === e ? void 0 : e.boxId) ? (0, _ramda.takeLast)(this._boxes.length - 1, (0, 
            _ramda.pluck)("boxId")(this._boxes)) : (0, _ramda.pluck)("boxId")(t);
        }
    }, {
        key: "_getCampIds",
        value: function() {
            var e, t = this._getSelectedItems(this._courses);
            return -1 === (null === (e = t[0]) || void 0 === e ? void 0 : e.campId) ? [] : (0, 
            _ramda.pluck)("campId")(t);
        }
    }, {
        key: "_getSelectedItems",
        value: function(e) {
            return (0, _ramda.filter)((0, _ramda.propEq)("isActive", !0))(e);
        }
    }, {
        key: "_getBoxSelectedLength",
        value: function() {
            var e, t = this._getSelectedItems(this._boxes);
            return (0, _ramda.equals)(null === (e = t[0]) || void 0 === e ? void 0 : e.label, this._boxes[0].label) ? 0 : t.length;
        }
    }, {
        key: "_getCourseSelectedLength",
        value: function() {
            var e, t = this._getSelectedItems(this._courses);
            return (0, _ramda.equals)(null === (e = t[0]) || void 0 === e ? void 0 : e.label, this._courses[0].label) ? 0 : t.length;
        }
    }, {
        key: "_getFirstArea",
        value: function() {
            var e;
            return null === (e = this._getAreasByCity()[0]) || void 0 === e ? void 0 : e.label;
        }
    }, {
        key: "_getFirstBox",
        value: function() {
            var e;
            return null === (e = this._getBoxesByCityArea()[0]) || void 0 === e ? void 0 : e.label;
        }
    }, {
        key: "_getFirstCourse",
        value: function() {
            var e;
            return null === (e = this._getCoursesByBoxIds()[0]) || void 0 === e ? void 0 : e.label;
        }
    }, {
        key: "_getRecentBoxIdsInCity",
        value: function(e, t) {
            var s = [];
            if (0 < e.length) for (var a = 0, i = e.length; a < i; a++) for (var r = 0, o = t.length; r < o; r++) e[a].boxId === t[r].boxId && s.push(e[a].boxId);
            return s;
        }
    }, {
        key: "selectCity",
        value: function(e) {
            var t = e.value;
            this._selectedCity = t, this._updateData(!0);
        }
    }, {
        key: "selectArea",
        value: function(e) {
            var t = e.value;
            this._selectedArea = t, this._selectedBoxes = [ this._getFirstBox() ], this._updateData();
        }
    }, {
        key: "selectBox",
        value: function(e) {
            var t = e.value, s = this._boxes[0].label, a = this._selectedBoxes.indexOf(s);
            -1 < a && this._selectedBoxes.splice(a, 1), (0, _updateList.updateList)(t, this._selectedBoxes), 
            t !== s && 0 !== this._selectedBoxes.length || (this._selectedBoxes = [ s ]), this._updateData();
        }
    }, {
        key: "selectCourse",
        value: function(e) {
            var t = e.value, s = this._courses[0].label, a = this._selectedCourses.indexOf(s);
            -1 < a && this._selectedCourses.splice(a, 1), (0, _updateList.updateList)(t, this._selectedCourses), 
            t !== s && 0 !== this._selectedCourses.length || (this._selectedCourses = [ s ]), 
            this._updateData();
        }
    }, {
        key: "filterResult",
        get: function() {
            return {
                city: this._selectedCity,
                area: this._selectedArea,
                boxIds: this._getBoxIds(),
                campIds: this._getCampIds(),
                boxNames: _toConsumableArray(this._selectedBoxes),
                campNames: _toConsumableArray(this._selectedCourses)
            };
        }
    }, {
        key: "filterInfo",
        get: function() {
            return {
                tabBoxes: {
                    cities: this._cities,
                    areas: this._areas,
                    boxes: this._boxes
                },
                tabCourses: this._courses,
                tabNumInfo: {
                    boxSelectedNum: this._getBoxSelectedLength(),
                    courseSelectedNum: this._getCourseSelectedLength()
                }
            };
        }
    } ]), a;
}();

exports.default = PersonalFilter;