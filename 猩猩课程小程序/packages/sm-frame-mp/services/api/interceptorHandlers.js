Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.addLocation = addLocation, exports.addCookie = addCookie, exports.addMapCacheKeys = addMapCacheKeys, 
exports.addLog = addLog, exports.checkRequest = checkRequest, exports.handleErrorCode = handleErrorCode, 
exports.handleMapCache = handleMapCache;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../../vendor.js")(0)), _moment = _interopRequireDefault(require("./../../../../vendor.js")(315)), _ramda = _interopRequireDefault(require("./../../../../vendor.js")(320)), _dependent = require("./dependent.js"), _imports = require("./../../imports.js"), _version = require("./utils/version.js"), _thread = require("./utils/thread.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, r, n, a, o, i) {
    try {
        var c = e[o](i), s = c.value;
    } catch (e) {
        return void r(e);
    }
    c.done ? t(s) : Promise.resolve(s).then(n, a);
}

function _asyncToGenerator(c) {
    return function() {
        var e = this, i = arguments;
        return new Promise(function(t, r) {
            var n = c.apply(e, i);
            function a(e) {
                asyncGeneratorStep(n, t, r, a, o, "next", e);
            }
            function o(e) {
                asyncGeneratorStep(n, t, r, a, o, "throw", e);
            }
            a(void 0);
        });
    };
}

function ownKeys(t, e) {
    var r = Object.keys(t);
    return Object.getOwnPropertySymbols && r.push.apply(r, Object.getOwnPropertySymbols(t)), 
    e && (r = r.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), r;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(r, !0).forEach(function(e) {
            _defineProperty(t, e, r[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ownKeys(r).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
    }
    return t;
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

var location, all = _ramda.default.all, any = _ramda.default.any, indexOf = _ramda.default.indexOf, contains = _ramda.default.contains, pipe = _ramda.default.pipe, split = _ramda.default.split, slice = _ramda.default.slice, join = _ramda.default.join, propOr = _ramda.default.propOr, chain = _ramda.default.chain, forEach = _ramda.default.forEach, GET_LOCATION_TIMEOUT = 3e3;

function getLocation(e) {
    return new Promise(function(t, r) {
        _dependent.wx.getLocation(_objectSpread({}, e, {
            success: function(e) {
                t(e);
            },
            fail: function(e) {
                r(e);
            }
        }));
    });
}

function getLocationInfo(e) {
    return _getLocationInfo.apply(this, arguments);
}

function _getLocationInfo() {
    return (_getLocationInfo = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
        var r, n, a;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (!location || t || 15 <= _moment.default.duration((0, _moment.default)() - _moment.default.unix(location.lastUnix)).asHours()) return e.next = 3, 
                Promise.race([ getLocation({
                    type: "gcj02"
                }), (0, _thread.sleep)(GET_LOCATION_TIMEOUT) ]);
                e.next = 10;
                break;

              case 3:
                if ((r = e.sent).hasOwnProperty("latitude")) {
                    e.next = 8;
                    break;
                }
                throw new Error("getLocation timeout");

              case 8:
                n = r.latitude, a = r.longitude, location = {
                    latitude: n,
                    longitude: a,
                    lastUnix: (0, _moment.default)().unix()
                };

              case 10:
                return e.abrupt("return", location);

              case 11:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function addLocation(e) {
    return _addLocation.apply(this, arguments);
}

function _addLocation() {
    return (_addLocation = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
        var r, n, a, o, i, c, s;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (r = t.header, n = t.meta, a = n.isGetLocation, o = n.isForceGetLocation, a) return e.prev = 2, 
                e.next = 5, getLocationInfo(o);
                e.next = 14;
                break;

              case 5:
                i = e.sent, c = i.latitude, s = i.longitude, t.header = _objectSpread({}, r, {
                    Cookie: "latitude=".concat(c, "; longitude=").concat(s, ";")
                }), e.next = 14;
                break;

              case 11:
                e.prev = 11, e.t0 = e.catch(2), console.log("获取位置信息错误", e.t0);

              case 14:
                return e.abrupt("return", t);

              case 15:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 2, 11 ] ]);
    }))).apply(this, arguments);
}

function addCookie(e) {
    var t = "";
    try {
        t = _dependent.wx.getStorageSync("cookie");
    } catch (e) {}
    return e.header.Cookie = t + "version=".concat(_dependent.version, "; ") + (e.header.Cookie || ""), 
    e;
}

function addMapCacheKeys(t) {
    return all(function(e) {
        return !~indexOf(e)(t.url);
    })(_dependent.logWhiteList) ? _objectSpread({}, t, {
        data: _objectSpread({}, t.data, {}, _imports.persistSelectors.getCacheMapSks(_dependent.store.getState()))
    }) : t;
}

function addLog(t) {
    if (any(function(e) {
        return ~indexOf(e)(t.url);
    })(_dependent.logWhiteList)) {
        var e = "".concat(pipe(split(";"), slice(3, -1), join(";"))(_dependent.wx.getStorageSync("cookie")), "; version=").concat(_dependent.version, "; ");
        t.data = {
            data: t.data,
            cookie: e
        };
    }
    return t;
}

function checkRequest(e) {
    return _checkRequest.apply(this, arguments);
}

function _checkRequest() {
    return (_checkRequest = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
        var r, n, a, o, i, c, s;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (r = t.response, n = t.url, 200 <= r.statusCode && r.statusCode < 300) {
                    e.next = 9;
                    break;
                }
                throw (a = new Error(r.statusText)).statusCode = r.statusCode, a.rtn = 10086, a.msg = r.statusText, 
                a.errMsg = r.statusText, a.response = r, a;

              case 9:
                if (o = r.data, i = o.data, 0 === (c = o.rtn) || _dependent.errorCode[c]) {
                    e.next = 17;
                    break;
                }
                throw (s = new Error("rtn(".concat(c, ") not zero"))).rtn = c, s.msg = i.msg, s.errMsg = i.msg, 
                s.response = r, s;

              case 17:
                return e.abrupt("return", {
                    data: i,
                    rtn: c,
                    url: n
                });

              case 18:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function handleErrorCode(e) {
    var t = e.rtn, r = e.data;
    switch (t) {
      case 11:
      case 21:
      case 25:
        _dependent.wx.redirectTo({
            url: "/pages/Login?rtn=".concat(t)
        });
        break;

      default:
        try {
            var n = _dependent.wx.getSystemInfoSync();
            (0, _version.compareVersion)(n.version, "6.5.8") < 1 && _dependent.wx.redirectTo({
                url: "/pages/LowerVersion"
            });
        } catch (e) {
            console.log("compareVersion", e);
        }
    }
    if (contains(t, [ 11, 21, 25 ])) {
        var a = new Error("rtn(".concat(t, ") not zero"));
        throw a.rtn = t, a.msg = r.msg, a.errMsg = r.msg, a.response = e, a;
    }
    return e;
}

function handleMapCache(e) {
    var t = e.rtn, r = e.data;
    try {
        0 === t && _dependent.store.dispatch({
            type: _imports.persistTypes.MAP_CACHE,
            payload: r
        });
    } catch (e) {
        console.log("err", e);
    }
    return e;
}