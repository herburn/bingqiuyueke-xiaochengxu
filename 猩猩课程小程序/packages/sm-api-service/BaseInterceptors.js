function _classCallCheck(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperty(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var BaseInterceptors = function e() {
    if (_classCallCheck(this, e), _defineProperty(this, "request", {
        use: function() {
            throw new Error("未实现request.use方法");
        }
    }), _defineProperty(this, "response", {
        use: function() {
            throw new Error("未实现response.use方法");
        }
    }), (this instanceof e ? this.constructor : void 0) === e) throw new Error("本类不能实例化");
}, _default = BaseInterceptors;

exports.default = _default;