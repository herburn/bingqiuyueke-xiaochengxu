Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _ramda = require("./../../../vendor.js")(320);

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
        var r = t[i];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
        Object.defineProperty(e, r.key, r);
    }
}

function _createClass(e, t, i) {
    return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e;
}

var BannerDurationFilter = function() {
    function n() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.durationsList, i = e.isShowFinished, r = void 0 !== i && i;
        _classCallCheck(this, n), this._durationsList = t, this._durationsSelected = t, 
        this._initialIsShowFinished = r, this.clean(), this.stash();
    }
    return _createClass(n, [ {
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
            this._isShowFinished = this._initialIsShowFinished, this._updateData();
        }
    }, {
        key: "selectDuration",
        value: function() {}
    }, {
        key: "selectIsShowFinished",
        value: function() {
            this._isShowFinished = !this._isShowFinished;
        }
    }, {
        key: "_updateData",
        value: function() {
            this._durations = this._getDuration(), this._period = this._getPeriod(), this._isFilter = !0;
        }
    }, {
        key: "_getDuration",
        value: function() {
            var e = (0, _ramda.join)("-"), t = (0, _ramda.applySpec)({
                label: e,
                value: _ramda.identity,
                isActive: (0, _ramda.always)(!0)
            });
            return Object.preventExtensions((0, _ramda.map)(t)(this._durationsList));
        }
    }, {
        key: "_getPeriod",
        value: function() {
            return (0, _ramda.into)([], (0, _ramda.compose)((0, _ramda.filter)((0, _ramda.propEq)("isActive", !0)), (0, 
            _ramda.map)((0, _ramda.prop)("value"))))(this._durations);
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
            return this._durationsSelected.length;
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
    } ]), n;
}();

exports.default = BannerDurationFilter;