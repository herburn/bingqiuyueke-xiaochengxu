Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _socket2 = require("./../../imports/socket.js"), _configs = require("./../../configs/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, r, n, o, s, a) {
    try {
        var c = e[s](a), i = c.value;
    } catch (e) {
        return void r(e);
    }
    c.done ? t(i) : Promise.resolve(i).then(n, o);
}

function _asyncToGenerator(c) {
    return function() {
        var e = this, a = arguments;
        return new Promise(function(t, r) {
            var n = c.apply(e, a);
            function o(e) {
                asyncGeneratorStep(n, t, r, o, s, "next", e);
            }
            function s(e) {
                asyncGeneratorStep(n, t, r, o, s, "throw", e);
            }
            o(void 0);
        });
    };
}

var _socket = new _socket2.Socket(new _socket2.WxSocket(), _configs.socketConfig.baseUrl, {
    heartBeatTimeout: 1e4
}), socket = Object.create(_socket);

socket.connect = function() {
    var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
        var t;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (this.state === _socket2.CLOSING) return e.next = 3, this.stateNextPromise;
                e.next = 3;
                break;

              case 3:
                if (this.state !== _socket2.CLOSED) {
                    e.next = 11;
                    break;
                }
                if (t = wx.getStorageSync("cookie")) return e.next = 8, _socket.connect({
                    isReconnection: !0,
                    reconnectionDelay: function() {
                        return 3e3;
                    },
                    suffixUrl: "/weapp",
                    getHeader: function() {
                        return {
                            "content-type": "application/json",
                            Cookie: t
                        };
                    }
                });
                e.next = 8;
                break;

              case 8:
                if (this.state === _socket2.CONNECTING) return e.next = 11, this.stateNextPromise;
                e.next = 11;
                break;

              case 11:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function() {
        return e.apply(this, arguments);
    };
}(), socket.close = function() {
    var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (this.state === _socket2.CLOSED) return e.abrupt("return");
                e.next = 2;
                break;

              case 2:
                if (this.state === _socket2.CONNECTING || this.state === _socket2.CLOSING) return e.next = 5, 
                this.stateNextPromise;
                e.next = 5;
                break;

              case 5:
                if (this.state === _socket2.OPEN) return e.next = 8, _socket.close();
                e.next = 11;
                break;

              case 8:
                if (this.state === _socket2.CLOSING) return e.next = 11, this.stateNextPromise;
                e.next = 11;
                break;

              case 11:
              case "end":
                return e.stop();
            }
        }, e, this);
    }));
    return function() {
        return e.apply(this, arguments);
    };
}();

var _default = socket;

exports.default = _default;