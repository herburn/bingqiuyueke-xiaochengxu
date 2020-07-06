Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _ramda = require("./../../vendor.js")(320), _pageCapabilityConfig = require("./../../configs/pageCapabilityConfig/index.js"), _router = require("./../../router/index.js"), _weappLifecycle = require("./../../sma/plugins/weappLifecycle/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
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

function asyncGeneratorStep(e, t, r, n, o, i, a) {
    try {
        var s = e[i](a), c = s.value;
    } catch (e) {
        return void r(e);
    }
    s.done ? t(c) : Promise.resolve(c).then(n, o);
}

function _asyncToGenerator(s) {
    return function() {
        var e = this, a = arguments;
        return new Promise(function(t, r) {
            var n = s.apply(e, a);
            function o(e) {
                asyncGeneratorStep(n, t, r, o, i, "next", e);
            }
            function i(e) {
                asyncGeneratorStep(n, t, r, o, i, "throw", e);
            }
            o(void 0);
        });
    };
}

var configProp = "pageShare", itemList = [ {
    content: "发送给微信好友",
    isShare: !0
}, {
    content: "生成图片分享"
} ], _default = {
    install: function(e) {
        e.mixin({
            beforeCreate: function() {
                this.$sharePage = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                    var t, r, n, o, i, a, s, c, u, p, f, l = arguments;
                    return _regeneratorRuntime2.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return r = (t = 0 < l.length && void 0 !== l[0] ? l[0] : {}).title, n = t.url, o = t.path, 
                            i = t.backgroundImageUrl, a = t.address, s = void 0 === a ? "" : a, c = t.shareType, 
                            u = t.picTitle, p = getInviterInfo.call(this), f = getSharePath({
                                shareInfo: {
                                    url: n,
                                    path: o
                                },
                                shareInviterInfo: p
                            }), e.prev = 4, e.next = 7, this.$showActionSheet({
                                itemList: itemList
                            });

                          case 7:
                            1 === e.sent && this.$router.navigateTo({
                                page: "ShareMiniScan",
                                data: {
                                    title: u || r,
                                    page: f,
                                    backgroundImageUrl: i,
                                    address: s,
                                    shareType: c
                                }
                            }, !0), e.next = 14;
                            break;

                          case 11:
                            throw e.prev = 11, e.t0 = e.catch(4), e.t0;

                          case 14:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 4, 11 ] ]);
                }));
            },
            onLoad: function() {
                var e, t, r, n, o = null === (e = (0, _pageCapabilityConfig.getPageCapability)(this.name)) || void 0 === e ? void 0 : e[configProp], i = null === (t = (0, 
                _pageCapabilityConfig.getPageCapability)(this.name)) || void 0 === t || null === (r = t[configProp]) || void 0 === r || null === (n = r.options) || void 0 === n ? void 0 : n.menu;
                o && !1 !== i || wx.hideShareMenu();
            },
            onShareAppMessage: function(e) {
                (function() {
                    var e = this;
                    !1 !== (0, _pageCapabilityConfig.getPageCapability)(this.name)[configProp].options.AlertAfterShare && setTimeout(function() {
                        try {
                            e.$invokeChild("__AlertAfterShare__", "openPrompt");
                        } catch (e) {
                            console.log("invokeChild after-share-prompt err", e);
                        }
                    }, 1e3);
                }).call(this);
                var t = function(e) {
                    var t = e.config, r = e.shareInviterInfo, n = (null == this ? void 0 : this[null == t ? void 0 : t.shareInfoPropName]) || this.shareInfo || this._shareInfo;
                    if (n) return _objectSpread({
                        path: getSharePath({
                            shareInfo: n,
                            shareInviterInfo: r
                        })
                    }, (0, _ramda.pick)([ "title", "imageUrl" ], n));
                }.call(this, {
                    config: function() {
                        var e, t, r = null === (e = (0, _pageCapabilityConfig.getPageCapability)(this.name)) || void 0 === e || null === (t = e[configProp]) || void 0 === t ? void 0 : t.options;
                        return "object" === _typeof(r) ? r : {};
                    }.call(this),
                    shareInviterInfo: getInviterInfo.call(this)
                });
                return (0, _weappLifecycle.onShareAppMessage)(_objectSpread({}, e, {
                    params: t
                })), t;
            }
        });
    }
};

function getInviterInfo() {
    var e = this.$store.selectors.getInviterInfo(this.$store.getState());
    return e ? {
        inviterUserId: e.userId,
        inviterKey: e.key
    } : (console.error("getInviterInfo", e), {});
}

function getSharePath(e) {
    var t = e.shareInfo, r = e.shareInviterInfo, n = t.path, o = t.url, i = n;
    return n || (i = function(e) {
        if (!e) return "";
        var t = e.page, r = e.data;
        return (0, _router.encodeUrl)({
            page: "SplashScreen",
            data: _objectSpread({
                url: t
            }, r)
        }, {
            isAbsolutePath: !0
        });
    }(o)), "".concat(i, "&").concat((0, _router.encodeParams)(r));
}

exports.default = _default;