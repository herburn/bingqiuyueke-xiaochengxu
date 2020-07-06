var _regeneratorRuntime2 = _interopRequireDefault(require("./vendor.js")(0)), _ramda = require("./vendor.js")(320), _init = require("./imports/init.js"), _frameConfig = require("./configs/frameConfig.js"), _envConfig = require("./configs/envConfig/index.js"), _api = _interopRequireDefault(require("./services/api/index.js")), _core = _interopRequireDefault(require("./tmp/index.js")), _plugins = _interopRequireDefault(require("./plugins/index.js")), _store = require("./store/index.js"), _router = _interopRequireDefault(require("./router/index.js")), _smaInit = _interopRequireDefault(require("./smaInit.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, r, n, i, o, a) {
    try {
        var s = e[o](a), u = s.value;
    } catch (e) {
        return void r(e);
    }
    s.done ? t(u) : Promise.resolve(u).then(n, i);
}

function _asyncToGenerator(s) {
    return function() {
        var e = this, a = arguments;
        return new Promise(function(t, r) {
            var n = s.apply(e, a);
            function i(e) {
                asyncGeneratorStep(n, t, r, i, o, "next", e);
            }
            function o(e) {
                asyncGeneratorStep(n, t, r, i, o, "throw", e);
            }
            i(void 0);
        });
    };
}

(0, _init.smFrameMpInit)({
    debugConfig: _envConfig.debugConfig,
    saConfig: _frameConfig.saConfig,
    wx: wx,
    api: _api.default,
    persistConfig: _frameConfig.persistConfig,
    storeConfig: _frameConfig.storeConfig,
    version: _envConfig.version,
    interceptors: _frameConfig.interceptors,
    apiConfig: _frameConfig.apiConfig
}), (0, _plugins.default)(_core.default), (0, _smaInit.default)(), function() {
    var a = [ "BoxBookingConfirm", "ClassBookingConfirm", "GiveClassBookingConfirm", "PersonalBookingConfirm" ];
    _router.default.beforeEach(function() {
        var n = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t, r, n) {
            var i, o;
            return _regeneratorRuntime2.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (o = function() {
                        return (o = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(p, t, d) {
                            var r, g, n;
                            return _regeneratorRuntime2.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = function() {
                                        return (n = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(t) {
                                            var r, n, i, o, a, s, u, c, f, l;
                                            return _regeneratorRuntime2.default.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    if (null == t) return e.abrupt("return");
                                                    e.next = 2;
                                                    break;

                                                  case 2:
                                                    return r = t.modalId, n = t.title, i = t.content, o = t.contentAlign, a = t.okButtonText, 
                                                    s = t.cancelButtonText, u = t.okModal, c = t.cancelModal, f = t.operation, l = 0 < s.length, 
                                                    e.prev = 4, e.next = 7, this.$showModal({
                                                        isShowCancel: l,
                                                        title: n,
                                                        content: i,
                                                        contentAlign: o,
                                                        confirmText: a,
                                                        cancelText: s
                                                    });

                                                  case 7:
                                                    if (r && _store.store.dispatchAction("postConfirmModal", {
                                                        modalId: r,
                                                        status: 1
                                                    }), "BIND_PHONE_NUMBER" !== f || !_store.store.selectors.getIsNeedBindPhone(_store.store.getState())) {
                                                        e.next = 13;
                                                        break;
                                                    }
                                                    d(!1), this.$router.navigateTo({
                                                        page: "BindPhoneBridge",
                                                        data: {
                                                            page: p.page,
                                                            data: this.$encodeParams(p.data),
                                                            notice: "特殊时期为了确保信息畅通，须先绑定手机号"
                                                        }
                                                    }, !0), e.next = 15;
                                                    break;

                                                  case 13:
                                                    return e.next = 15, g.call(this, u);

                                                  case 15:
                                                    e.next = 23;
                                                    break;

                                                  case 17:
                                                    return e.prev = 17, e.t0 = e.catch(4), r && _store.store.dispatchAction("postConfirmModal", {
                                                        modalId: r,
                                                        status: 2
                                                    }), e.next = 22, g.call(this, c);

                                                  case 22:
                                                    throw new Error(e.t0);

                                                  case 23:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e, this, [ [ 4, 17 ] ]);
                                        }))).apply(this, arguments);
                                    }, g = function(e) {
                                        return n.apply(this, arguments);
                                    }, r = _store.store.selectors.getConfirmModal(_store.store.getState()), e.prev = 3, 
                                    e.next = 6, g.call(this, r);

                                  case 6:
                                    e.next = 11;
                                    break;

                                  case 8:
                                    throw e.prev = 8, e.t0 = e.catch(3), e.t0;

                                  case 11:
                                    return e.prev = 11, null != r && this.$store.dispatch(this.$store.actions.globals.updateInitInfo()), 
                                    e.finish(11);

                                  case 14:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, this, [ [ 3, 8, 11, 14 ] ]);
                        }))).apply(this, arguments);
                    }, i = function(e, t, r) {
                        return o.apply(this, arguments);
                    }, (0, _ramda.contains)(t.page, a)) return e.next = 5, i.call(this, t, r, n);
                    e.next = 5;
                    break;

                  case 5:
                    return e.abrupt("return", !0);

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function(e, t, r) {
            return n.apply(this, arguments);
        };
    }());
}();