function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
        Object.defineProperty(e, o.key, o);
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var Semaphore = function() {
    function n(e, t) {
        _classCallCheck(this, n), this._maxCount = e, this._count = t, this.blockList = [];
    }
    return _createClass(n, [ {
        key: "lock",
        value: function() {
            var n = this;
            return new Promise(function(e, t) {
                0 < n._count ? e(!0) : n.blockList.push(function() {
                    return e(!0);
                }), n._count--;
            });
        }
    }, {
        key: "unLock",
        value: function() {
            this._count >= this._maxCount || (this._count < 0 && this.blockList.shift()(), this._count++);
        }
    } ]), n;
}(), _default = Semaphore;

exports.default = _default;