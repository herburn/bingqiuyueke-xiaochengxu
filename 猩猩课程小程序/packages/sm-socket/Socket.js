Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _ramda = require("./../../vendor.js")(320), _constant = require("./constant.js"), _Semaphore = _interopRequireDefault(require("./Semaphore.js")), _utils = require("./utils.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, n, r, s, a, i) {
    try {
        var o = e[a](i), c = o.value;
    } catch (e) {
        return void n(e);
    }
    o.done ? t(c) : Promise.resolve(c).then(r, s);
}

function _asyncToGenerator(o) {
    return function() {
        var e = this, i = arguments;
        return new Promise(function(t, n) {
            var r = o.apply(e, i);
            function s(e) {
                asyncGeneratorStep(r, t, n, s, a, "next", e);
            }
            function a(e) {
                asyncGeneratorStep(r, t, n, s, a, "throw", e);
            }
            s(void 0);
        });
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
        Object.defineProperty(e, r.key, r);
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
}

var Socket = function() {
    function c(t, e) {
        var n = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, s = r.heartBeatTimeout, a = void 0 === s ? 1e4 : s, i = r.heatBeatMsg, o = void 0 === i ? JSON.stringify({
            msgType: "HeartBeat"
        }) : i;
        _classCallCheck(this, c), this._baseUrl = e, this._heartBeatTimeout = a, this._heatBeatMsg = o, 
        this._mutex = new _Semaphore.default(1, 1), this._isReconnection = void 0, this._reconnectionDelay = function() {}, 
        this._connectionParams = void 0, this._state = _constant.CLOSED, this._stateNextPromiseCb = null, 
        this._stateNextPromise = new Promise(function(e) {
            return n._stateNextPromiseCb = e;
        }), this._socket = t, this._openHandlerList = [], this._errorHandlerList = [], this._closeHandlerList = [], 
        this._eventMap = {}, this._socketMsgQueue = [], this._connectSocket = function(e) {
            return t.connectSocket(e, {
                onOpen: n._openHandler.bind(n),
                onError: n._errorHandler.bind(n),
                onClose: n._closeHandler.bind(n),
                onMessage: n._eventHandler.bind(n)
            });
        }, this._closeSocket = function(e) {
            return t.closeSocket(e);
        }, this._sendMsg = function(e) {
            return t.sendMsg(e);
        };
    }
    var t, n, e, r;
    return _createClass(c, [ {
        key: "_updateState",
        value: function(e) {
            var t = this;
            this._state !== e && (this._state = e, this._stateNextPromiseCb(), this._stateNextPromise = new Promise(function(e) {
                return t._stateNextPromiseCb = e;
            }));
        }
    }, {
        key: "connect",
        value: (r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            var n, r, s, a, i, o, c, u, _, l, h = this;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return n = t.baseUrl, r = t.suffixUrl, s = t.getHeader, a = t.isReconnection, i = void 0 === a || a, 
                    o = t.reconnectionDelay, c = void 0 === o ? function() {
                        return 1e3;
                    } : o, n = n || this._baseUrl, this._isReconnection = i, this._reconnectionDelay = c, 
                    this._connectionParams = {
                        baseUrl: n,
                        suffixUrl: r,
                        getHeader: s,
                        isReconnection: i,
                        reconnectionDelay: c
                    }, e.next = 7, this._mutex.lock();

                  case 7:
                    if (this._state === _constant.CLOSED) return u = "".concat(n).concat(r), e.prev = 9, 
                    e.next = 12, s();
                    e.next = 31;
                    break;

                  case 12:
                    return _ = e.sent, this._heartBeat = createHeartBeat(function() {
                        return h._sendMsg(h._heatBeatMsg);
                    }, this._heartBeatTimeout), e.next = 16, this._connectSocket({
                        url: u,
                        header: _
                    });

                  case 16:
                    return this._updateState(_constant.CONNECTING), e.abrupt("return", !0);

                  case 20:
                    throw e.prev = 20, e.t0 = e.catch(9), console.log("socket 连接失败...，fail", e.t0), 
                    this._heartBeat.close(), this._closeHandler({
                        type: "connect_fail",
                        msg: "连接失败"
                    }), e.t0;

                  case 26:
                    return e.prev = 26, this._mutex.unLock(), e.finish(26);

                  case 29:
                    e.next = 37;
                    break;

                  case 31:
                    throw console.log("当前状态不能发起连接请求：", this._state), (l = new Error()).errMsg = "当前状态不能发起连接请求：".concat(this._state), 
                    l.status = this._state, this._mutex.unLock(), l;

                  case 37:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 9, 20, 26, 29 ] ]);
        })), function(e) {
            return r.apply(this, arguments);
        })
    }, {
        key: "close",
        value: (e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return this._isReconnection = !1, e.prev = 1, e.next = 4, this._closeSocket({});

                  case 4:
                    this._state !== _constant.CLOSED && this._updateState(_constant.CLOSING), e.next = 10;
                    break;

                  case 7:
                    e.prev = 7, e.t0 = e.catch(1), console.log("关闭失败", e.t0);

                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 1, 7 ] ]);
        })), function() {
            return e.apply(this, arguments);
        })
    }, {
        key: "sendMsg",
        value: (n = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (this._state === _constant.OPEN) return e.next = 3, this._sendMsg(JSON.stringify(t));
                    e.next = 5;
                    break;

                  case 3:
                    e.next = 6;
                    break;

                  case 5:
                    this._socketMsgQueue.push(t);

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return n.apply(this, arguments);
        })
    }, {
        key: "addOpenHanler",
        value: function(e) {
            this._openHandlerList.push(e);
        }
    }, {
        key: "removeOpenHandler",
        value: function(e) {
            var t = (0, _ramda.indexOf)(e)(this._openHandlerList);
            ~t && this._openHandlerList.splice(t, 1);
        }
    }, {
        key: "addErrorHanler",
        value: function(e) {
            this._errorHandlerList.push(e);
        }
    }, {
        key: "removeErrorHandler",
        value: function(e) {
            var t = (0, _ramda.indexOf)(e)(this._errorHandlerList);
            ~t && this._errorHandlerList.splice(t, 1);
        }
    }, {
        key: "addCloseHandler",
        value: function(e) {
            this._closeHandlerList.push(e);
        }
    }, {
        key: "removeCloseHandler",
        value: function(e) {
            var t = (0, _ramda.indexOf)(e)(this._closeHandlerList);
            ~t && this._closeHandlerList.splice(t, 1);
        }
    }, {
        key: "registerEventHandler",
        value: function(e, t) {
            this._eventMap[e] = t;
        }
    }, {
        key: "unregisterEventHanler",
        value: function(e) {
            e in this._eventMap && delete this._eventMap[e];
        }
    }, {
        key: "clearCb",
        value: function() {
            this._openHandlerList = [], this._errorHandlerList = [], this._closeHandlerList = [], 
            this._eventMap = {};
        }
    }, {
        key: "_openHandler",
        value: function(t) {
            this._updateState(_constant.OPEN), console.log("socket 连接...!", {
                state: this._state,
                socketState: this._socket && this._socket.readyState
            }), this._heartBeat.start(), (0, _ramda.forEach)(this.sendMsg.bind(this))(this._socketMsgQueue), 
            this._socketMsgQueue = [], (0, _ramda.forEach)(function(e) {
                return e(t);
            })(this._openHandlerList);
        }
    }, {
        key: "_errorHandler",
        value: function(t) {
            var e = this._state;
            this._updateState(_constant.CLOSED), console.log("socket 出错...!", t, {
                state: this._state,
                socketState: this._socket && this._socket.readyState
            }), this._heartBeat.pause(), (0, _ramda.forEach)(function(e) {
                return e(t);
            })(this._errorHandlerList), e === _constant.CONNECTING && this._closeHandler(t);
        }
    }, {
        key: "_closeHandler",
        value: (t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (this._updateState(_constant.CLOSED), console.log("socket 关闭...!", t, {
                        state: this._state,
                        socketState: this._socket && this._socket.readyState
                    }), this._heartBeat.pause(), this._isReconnection) return e.next = 6, (0, _utils.sleep)(this._reconnectionDelay());
                    e.next = 10;
                    break;

                  case 6:
                    console.log("发起断线重连..."), this.connect(this._connectionParams), e.next = 12;
                    break;

                  case 10:
                    this._heartBeat.close(), (0, _ramda.forEach)(function(e) {
                        return e(t);
                    })(this._closeHandlerList);

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        })), function(e) {
            return t.apply(this, arguments);
        })
    }, {
        key: "_eventHandler",
        value: function(e) {
            var t = JSON.parse(e.data), n = t.msgType, r = t.data;
            n in this._eventMap && this._eventMap[n](r);
        }
    }, {
        key: "state",
        get: function() {
            return this._state;
        }
    }, {
        key: "stateNextPromise",
        get: function() {
            return this._stateNextPromise;
        }
    } ]), c;
}(), _default = Socket;

function createHeartBeat(t, n) {
    var r = !0, s = !1;
    return setTimeout(_asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (r) return s && t(), e.next = 4, (0, _utils.sleep)(n);
                e.next = 6;
                break;

              case 4:
                e.next = 0;
                break;

              case 6:
              case "end":
                return e.stop();
            }
        }, e);
    })), 0), {
        start: function() {
            return s = !0;
        },
        pause: function() {
            return s = !1;
        },
        close: function() {
            return r = !1;
        }
    };
}

exports.default = _default;