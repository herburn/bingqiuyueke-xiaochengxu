Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "CONNECTING", {
    enumerable: !0,
    get: function() {
        return _socket.CONNECTING;
    }
}), Object.defineProperty(exports, "OPEN", {
    enumerable: !0,
    get: function() {
        return _socket.OPEN;
    }
}), Object.defineProperty(exports, "CLOSING", {
    enumerable: !0,
    get: function() {
        return _socket.CLOSING;
    }
}), Object.defineProperty(exports, "CLOSED", {
    enumerable: !0,
    get: function() {
        return _socket.CLOSED;
    }
}), Object.defineProperty(exports, "socket", {
    enumerable: !0,
    get: function() {
        return _socket2.default;
    }
});

var _socket = require("./../../imports/socket.js");

require("./redNotification.js");

var _socket2 = _interopRequireDefault(require("./socket.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}