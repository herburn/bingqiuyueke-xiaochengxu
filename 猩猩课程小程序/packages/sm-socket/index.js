Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "CONNECTING", {
    enumerable: !0,
    get: function() {
        return _constant.CONNECTING;
    }
}), Object.defineProperty(exports, "OPEN", {
    enumerable: !0,
    get: function() {
        return _constant.OPEN;
    }
}), Object.defineProperty(exports, "CLOSING", {
    enumerable: !0,
    get: function() {
        return _constant.CLOSING;
    }
}), Object.defineProperty(exports, "CLOSED", {
    enumerable: !0,
    get: function() {
        return _constant.CLOSED;
    }
}), Object.defineProperty(exports, "Socket", {
    enumerable: !0,
    get: function() {
        return _Socket.default;
    }
}), Object.defineProperty(exports, "WxSocket", {
    enumerable: !0,
    get: function() {
        return _WxSocket.default;
    }
});

var _constant = require("./constant.js"), _Socket = _interopRequireDefault(require("./Socket.js")), _WxSocket = _interopRequireDefault(require("./WxSocket.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}