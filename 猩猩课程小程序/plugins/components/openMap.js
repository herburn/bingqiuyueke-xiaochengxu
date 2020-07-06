Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, t, n, r, a, o, i) {
    try {
        var u = e[o](i), s = u.value;
    } catch (e) {
        return void n(e);
    }
    u.done ? t(s) : Promise.resolve(s).then(r, a);
}

function _asyncToGenerator(u) {
    return function() {
        var e = this, i = arguments;
        return new Promise(function(t, n) {
            var r = u.apply(e, i);
            function a(e) {
                asyncGeneratorStep(r, t, n, a, o, "next", e);
            }
            function o(e) {
                asyncGeneratorStep(r, t, n, a, o, "throw", e);
            }
            a(void 0);
        });
    };
}

var _default = {
    install: function(e) {
        e.mixin({
            beforeCreate: function() {
                this.$openMap = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                    var t, n, r, a, o, i, u, s, c, d = arguments;
                    return _regeneratorRuntime2.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t = 0 < d.length && void 0 !== d[0] ? d[0] : {}, n = (1 < d.length && void 0 !== d[1] ? d[1] : {}).id, 
                            r = t.latitude, a = t.longitude, o = t.name, i = t.address, u = t.addressGuide, 
                            s = [ {
                                content: "在地图中显示门店地址"
                            } ], u && s.push({
                                content: "查看门店交通指引"
                            }), e.prev = 5, e.next = 8, this.$showActionSheet({
                                itemList: s
                            }, {
                                id: n
                            });

                          case 8:
                            0 === (c = e.sent) ? wx.openLocation({
                                latitude: r,
                                longitude: a,
                                name: o,
                                address: i
                            }) : 1 === c && this.$router.navigateTo({
                                page: "WebView",
                                data: {
                                    url: u
                                }
                            }, !0), e.next = 15;
                            break;

                          case 12:
                            throw e.prev = 12, e.t0 = e.catch(5), e.t0;

                          case 15:
                          case "end":
                            return e.stop();
                        }
                    }, e, this, [ [ 5, 12 ] ]);
                }));
            }
        });
    }
};

exports.default = _default;