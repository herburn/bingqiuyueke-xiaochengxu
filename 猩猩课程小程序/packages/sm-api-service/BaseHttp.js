function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
        var o = t[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
        Object.defineProperty(e, o.key, o);
    }
}

function _createClass(e, t, r) {
    return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var BaseHttp = function() {
    function e() {
        if (_classCallCheck(this, e), (this instanceof e ? this.constructor : void 0) === e) throw new Error("本类不能实例化");
    }
    return _createClass(e, [ {
        key: "get",
        value: function(e) {
            e.url, e.data, e.header, e.forceGetLocation;
            throw new Error("未实现get方法");
        }
    }, {
        key: "post",
        value: function(e) {
            e.url, e.data, e.header, e.forceGetLocation;
            throw new Error("未实现post方法");
        }
    } ]), e;
}(), _default = BaseHttp;

exports.default = _default;