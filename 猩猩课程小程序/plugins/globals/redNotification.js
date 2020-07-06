Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _socket = require("./../../services/web-socket/index.js"), _default = {
    install: function(e) {
        e.mixin({
            onShow: function() {
                connect.call(this), close.call(this);
            }
        });
    }
};

function connect() {
    this.name && this.$router.tabPageMap[this.name] && (_socket.socket.state !== _socket.CLOSED || this.$store.selectors.getIsUnregistered(this.$store.getState()) || _socket.socket.connect());
}

function close() {
    this.name && !this.$router.tabPageMap[this.name] && (_socket.socket.state !== _socket.CONNECTING && _socket.socket.state !== _socket.OPEN || _socket.socket.close());
}

exports.default = _default;