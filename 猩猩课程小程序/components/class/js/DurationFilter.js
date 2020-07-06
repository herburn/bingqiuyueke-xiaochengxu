Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _constants = require("./../../../constants/index.js"), _ramda = require("./../../../vendor.js")(320), _updateList = require("./../../../utils/updateList.js");

function _toConsumableArray(t) {
    return _arrayWithoutHoles(t) || _iterableToArray(t) || _nonIterableSpread();
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(t) {
    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
}

function _arrayWithoutHoles(t) {
    if (Array.isArray(t)) {
        for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
        return i;
    }
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(t, e) {
    for (var i = 0; i < e.length; i++) {
        var s = e[i];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
        Object.defineProperty(t, s.key, s);
    }
}

function _createClass(t, e, i) {
    return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), t;
}

var containsFlip = (0, _ramda.flip)(_ramda.contains), DurationFilter = function() {
    function r() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, e = t.durationsList, i = void 0 === e ? _constants.durationsList : e, s = t.isShowFinished, a = void 0 !== s && s;
        _classCallCheck(this, r), this._durationsList = i, this._firstDurationLabel = this._durationsList[0][0], 
        this._initialIsShowFinished = a, this.clean(), this.stash();
    }
    return _createClass(r, [ {
        key: "update",
        value: function() {}
    }, {
        key: "stash",
        value: function() {
            this.statshData = {
                durationsSelected: _toConsumableArray(this._durationsSelected),
                isShowFinished: this._isShowFinished
            };
        }
    }, {
        key: "unStash",
        value: function() {
            this._durationsSelected = this.statshData.durationsSelected, this._isShowFinished = this.statshData.isShowFinished, 
            this._updateData();
        }
    }, {
        key: "clean",
        value: function() {
            this._durationsSelected = [ this._firstDurationLabel ], this._isShowFinished = this._initialIsShowFinished, 
            this._updateData();
        }
    }, {
        key: "selectDuration",
        value: function(t) {
            var e = t.label;
            this._durationsSelected[0] === this._firstDurationLabel ? this._durationsSelected = [ e ] : e === this._firstDurationLabel ? this._durationsSelected = [ this._firstDurationLabel ] : ((0, 
            _updateList.updateList)(e, this._durationsSelected), 0 === this._durationsSelected.length && (this._durationsSelected = [ this._firstDurationLabel ])), 
            this._updateData();
        }
    }, {
        key: "selectIsShowFinished",
        value: function() {
            this._isShowFinished = !this._isShowFinished, this._isFilter = 0 !== this._period.length || this._isShowFinished;
        }
    }, {
        key: "_updateData",
        value: function() {
            this._durations = this._getDuration(), this._period = this._getPeriod(), this._isFilter = 0 !== this._period.length || this._isShowFinished;
        }
    }, {
        key: "_getDuration",
        value: function() {
            var t = (0, _ramda.join)("-"), e = (0, _ramda.applySpec)({
                type: (0, _ramda.always)("duration"),
                label: t,
                value: _ramda.identity,
                isActive: (0, _ramda.pipe)(t, containsFlip(this._durationsSelected))
            });
            return Object.preventExtensions((0, _ramda.map)(e)(this._durationsList));
        }
    }, {
        key: "_getPeriod",
        value: function() {
            return this._durationsSelected[0] === this._firstDurationLabel ? [] : (0, _ramda.into)([], (0, 
            _ramda.compose)((0, _ramda.filter)((0, _ramda.propEq)("isActive", !0)), (0, _ramda.map)((0, 
            _ramda.prop)("value"))))(this._durations);
        }
    }, {
        key: "durations",
        get: function() {
            return this._durations;
        }
    }, {
        key: "durationsSelected",
        get: function() {
            return this._durationsSelected;
        }
    }, {
        key: "selectedLength",
        get: function() {
            return this._durationsSelected[0] === this._firstDurationLabel ? 0 : this._durationsSelected.length;
        }
    }, {
        key: "period",
        get: function() {
            return this._period;
        }
    }, {
        key: "isShowFinished",
        get: function() {
            return this._isShowFinished;
        }
    }, {
        key: "isFilter",
        get: function() {
            return this._isFilter;
        }
    } ]), r;
}();

exports.default = DurationFilter;