Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var R = _interopRequireWildcard(require("./../../../../../vendor.js")(320)), _updateList = require("./../../../../../utils/updateList.js");

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
        var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
        i.get || i.set ? Object.defineProperty(t, r, i) : t[r] = e[r];
    }
    return t.default = e, t;
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
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
    }
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

var map = R.map, contains = R.contains, prepend = R.prepend, any = R.any, flip = R.flip, isEmpty = R.isEmpty, filter = R.filter, containsFlip = flip(contains), ALLTAGTEXT = "全部标签", CampFilter = function() {
    function a(e) {
        var t = e.tags, r = e.selectedCity, i = e.selectedTags;
        _classCallCheck(this, a), this.init({
            tags: t,
            selectedCity: r,
            selectedTags: i
        });
    }
    return _createClass(a, [ {
        key: "init",
        value: function(e) {
            var t = e.tags, r = e.selectedCity, i = e.selectedTags, a = filter(containsFlip(t))(i), s = isEmpty(a) ? [ ALLTAGTEXT ] : a;
            this._initTagText = s.join("|"), this._selectedCity = r, this._selectedTags = s, 
            this._cityTags = t, this._update(), this.stash();
        }
    }, {
        key: "update",
        value: function(e) {
            var t = e.tags, r = e.selectedCity, i = e.selectedTags;
            this.selectedTags = i || [ ALLTAGTEXT ], this._selectedCity = r, this._cityTags = t, 
            this._update(), this.stash();
        }
    }, {
        key: "selectTag",
        value: function(e) {
            var t = e.value, r = this._selectedTags.indexOf(ALLTAGTEXT);
            -1 < r && this._selectedTags.splice(r, 1), (0, _updateList.updateList)(t, this._selectedTags), 
            t !== ALLTAGTEXT && 0 !== this._selectedTags.length || (this._selectedTags = [ ALLTAGTEXT ]), 
            this._update();
        }
    }, {
        key: "clean",
        value: function() {
            this._selectedTags = [ ALLTAGTEXT ], this._update();
        }
    }, {
        key: "unStash",
        value: function() {
            var e = this._stashData.selectedTags;
            this._selectedTags = _toConsumableArray(e), this._update();
        }
    }, {
        key: "stash",
        value: function() {
            this._stashData = {
                selectedTags: _toConsumableArray(this._selectedTags)
            };
        }
    }, {
        key: "_update",
        value: function() {
            this._tags = this._getTagFilterData();
        }
    }, {
        key: "_getTagFilterData",
        value: function() {
            var t = this, e = any(containsFlip(this._selectedTags))(this._cityTags), r = map(function(e) {
                return {
                    label: e,
                    value: e,
                    isActive: contains(e)(t._selectedTags)
                };
            })(this._cityTags);
            return prepend(i(!e))(r);
            function i(e) {
                return _objectSpread({}, {
                    label: ALLTAGTEXT,
                    value: ALLTAGTEXT
                }, {
                    isActive: e
                });
            }
        }
    }, {
        key: "filterInfo",
        get: function() {
            return {
                tags: this._tags
            };
        }
    }, {
        key: "isFilterActive",
        get: function() {
            return this._selectedTags.join("|") !== this._initTagText;
        }
    } ]), a;
}();

exports.default = CampFilter;