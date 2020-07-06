Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _storage = require("./../../../utils/storage.js"), _BannerBoxFilter = _interopRequireDefault(require("./BannerBoxFilter.js")), _BannerCategoryFilter = _interopRequireDefault(require("./BannerCategoryFilter.js")), _BannerDurationFilter = _interopRequireDefault(require("./BannerDurationFilter.js")), _BoxFilter = _interopRequireDefault(require("./BoxFilter.js")), _CategoryFilter = _interopRequireDefault(require("./CategoryFilter.js")), _DurationFilter = _interopRequireDefault(require("./DurationFilter.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function ownKeys(t, e) {
    var r = Object.keys(t);
    return Object.getOwnPropertySymbols && r.push.apply(r, Object.getOwnPropertySymbols(t)), 
    e && (r = r.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), r;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(r, !0).forEach(function(e) {
            _defineProperty(t, e, r[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ownKeys(r).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
    }
    return t;
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
        var i = t[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
        Object.defineProperty(e, i.key, i);
    }
}

function _createClass(e, t, r) {
    return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
}

var ClassFilter = function() {
    function u(e) {
        var t = e.categoryData, r = e.boxData, i = e.durationData, n = e.filterInfo, o = void 0 === n ? {} : n;
        _classCallCheck(this, u);
        var a = o.categoryInfo, s = o.citiesBoxIds, l = o.durationInfo;
        this._categoryFilter = a ? new _BannerCategoryFilter.default(_objectSpread({}, t, {
            categoryInfo: a
        })) : new _CategoryFilter.default(t), this._boxFiter = s ? new _BannerBoxFilter.default(_objectSpread({}, r, {
            citiesBoxIds: s
        })) : new _BoxFilter.default(r), this._durationFilter = l ? new _BannerDurationFilter.default(_objectSpread({
            isShowFinished: (0, _storage.getStorageSync)("ClassList_isShowFinished")
        }, l)) : new _DurationFilter.default(_objectSpread({
            isShowFinished: (0, _storage.getStorageSync)("ClassList_isShowFinished")
        }, i));
    }
    return _createClass(u, [ {
        key: "update",
        value: function(e) {
            var t = e.categoryData, r = e.boxData, i = e.durationData, n = e.filterInfo, o = void 0 === n ? {} : n, a = o.categoryInfo, s = o.citiesBoxIds, l = o.durationInfo;
            this._categoryFilter.update(_objectSpread({}, t, {
                categoryInfo: a
            })), this._boxFiter.update(_objectSpread({}, r, {
                citiesBoxIds: s
            })), this._durationFilter.update(l || i);
        }
    }, {
        key: "selectTarget",
        value: function(e) {
            this._categoryFilter.selectTarget(e);
        }
    }, {
        key: "selectType",
        value: function(e) {
            this._categoryFilter.selectType(e);
        }
    }, {
        key: "selectFirstType",
        value: function(e) {
            this._categoryFilter.selectFirstType(e);
        }
    }, {
        key: "selectCity",
        value: function(e) {
            this._boxFiter.selectCity(e);
        }
    }, {
        key: "selectArea",
        value: function(e) {
            this._boxFiter.selectArea(e);
        }
    }, {
        key: "selectBox",
        value: function(e) {
            this._boxFiter.selectBox(e);
        }
    }, {
        key: "selectDuration",
        value: function(e) {
            this._durationFilter.selectDuration(e);
        }
    }, {
        key: "selectIsShowFinished",
        value: function(e) {
            var t = (0 < arguments.length && void 0 !== e ? e : {}).isStorage, r = void 0 === t || t;
            this._durationFilter.selectIsShowFinished(), r && (0, _storage.setStorage)({
                key: "ClassList_isShowFinished",
                data: this.isShowFinished
            });
        }
    }, {
        key: "stash",
        value: function() {
            this._categoryFilter.stash(), this._boxFiter.stash(), this._durationFilter.stash();
        }
    }, {
        key: "unStash",
        value: function() {
            this._categoryFilter.unStash(), this._boxFiter.unStash(), this._durationFilter.unStash();
        }
    }, {
        key: "clean",
        value: function() {
            this._categoryFilter.clean(), this._boxFiter.clean(), this._durationFilter.clean();
        }
    }, {
        key: "category",
        get: function() {
            return this._categoryFilter.category;
        }
    }, {
        key: "categorySelectedLen",
        get: function() {
            return this._categoryFilter.selectedLength;
        }
    }, {
        key: "box",
        get: function() {
            return this._boxFiter.box;
        }
    }, {
        key: "boxSelectedLen",
        get: function() {
            return this._boxFiter.selectedLength;
        }
    }, {
        key: "durations",
        get: function() {
            return this._durationFilter.durations;
        }
    }, {
        key: "durationSelectedLen",
        get: function() {
            return this._durationFilter.selectedLength;
        }
    }, {
        key: "targetsSelected",
        get: function() {
            return this._categoryFilter.targetsSelected;
        }
    }, {
        key: "typesSelected",
        get: function() {
            return this._categoryFilter.typesSelected;
        }
    }, {
        key: "firstTypesSelected",
        get: function() {
            return this._categoryFilter.firstTypesSelected;
        }
    }, {
        key: "classIds",
        get: function() {
            return this._categoryFilter.classIds;
        }
    }, {
        key: "citySelected",
        get: function() {
            return this._boxFiter.citySelected;
        }
    }, {
        key: "areaSelected",
        get: function() {
            return this._boxFiter.areaSelected;
        }
    }, {
        key: "boxesSelected",
        get: function() {
            return this._boxFiter.boxesSelected;
        }
    }, {
        key: "boxIds",
        get: function() {
            return this._boxFiter.boxIds;
        }
    }, {
        key: "durationsSelected",
        get: function() {
            return this._durationFilter.durationsSelected;
        }
    }, {
        key: "period",
        get: function() {
            return this._durationFilter.period;
        }
    }, {
        key: "isShowFinished",
        get: function() {
            return this._durationFilter.isShowFinished;
        }
    }, {
        key: "isFilter",
        get: function() {
            return this._categoryFilter.isFilter || this._boxFiter.isFilter || this._durationFilter.isFilter;
        }
    } ]), u;
}();

exports.default = ClassFilter;