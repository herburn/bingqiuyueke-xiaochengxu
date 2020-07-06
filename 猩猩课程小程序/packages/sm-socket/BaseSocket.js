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

var BaseSocket = function() {
    function e() {
        _classCallCheck(this, e);
    }
    return _createClass(e, [ {
        key: "connectSocket",
        value: function(e, t) {
            t.onOpen, t.onError, t.onClose, t.onMessage;
            throw new Error("未实现connectSocket方法");
        }
    }, {
        key: "closeSocket",
        value: function() {
            throw new Error("未实现post方法");
        }
    }, {
        key: "sendMsg",
        value: function() {
            throw new Error("未实现post方法");
        }
    }, {
        key: "readyState",
        get: function() {}
    } ]), e;
}(), _default = BaseSocket;

exports.default = _default;