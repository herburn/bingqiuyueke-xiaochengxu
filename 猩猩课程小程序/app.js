require("./init.js");

var _core = _interopRequireDefault(require("./tmp/index.js")), _store = require("./store/index.js"), _router = require("./router/index.js"), _ramda = require("./vendor.js")(320), _smEventCaptureHandler = _interopRequireDefault(require("./sma/traceConfig/sm/utils/smEventCaptureHandler.js")), _sensorEventCaptureHandler = _interopRequireDefault(require("./sma/traceConfig/sensor/utils/sensorEventCaptureHandler.js"));

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var getPage = (0, _ramda.pipe)((0, _ramda.split)("/"), _ramda.last);

_core.default.app({
    hooks: {
        "before-setData": function(t) {
            return t;
        },
        "before-event": function(t) {
            var e = t.event, a = t.params, i = void 0 === a ? [] : a;
            (0, _smEventCaptureHandler.default)({
                name: this.name,
                event: e,
                comData: (0, _ramda.last)(i)
            }), (0, _sensorEventCaptureHandler.default)({
                name: this.name,
                event: e,
                comData: (0, _ramda.last)(i)
            });
        }
    },
    globalData: {
        statusBarHeightPx: -1,
        navigatorHeightPx: -1,
        menuButtonHeightPx: -1,
        menuButtonRightPx: -1,
        navigatorFullHeightPx: -1,
        statusBarHeightRpx: -1,
        navigatorHeightRpx: -1,
        menuButtonHeightRpx: -1,
        menuButtonRightRpx: -1,
        navigatorFullHeightRpx: -1,
        isFullDisplay: !1,
        path: "",
        scene: -1,
        query: null,
        shareTicket: "",
        referrerInfo: null,
        extPage: "",
        extPageData: {},
        extNeedPageAuthorize: !1,
        firstScreenLoading: {
            isFirst: void 0,
            openType: -1,
            isHttpFail: !1,
            splashScreen0Timestamp: -1,
            sceneBeforeTimestamp: -1,
            sceneAfterTimestamp: -1,
            initHttp0BeforeTimestamp: -1,
            initHttp0AfterTimestamp: -1,
            promotionHttpBeforeTimestamp: -1,
            promotionHttpAfterTimestamp: -1,
            splashScreen0FinishedTimestamp: -1,
            loginTimestamp: -1,
            loginHttpBeforeTimestamp: -1,
            loginHttpAfterTimestamp: -1,
            loginFinishedTimestamp: -1,
            splashScreen1Timestamp: -1,
            initHttp1BeforeTimestamp: -1,
            initHttp1AfterTimestamp: -1,
            splashScreen1FinishedTimestamp: -1,
            firstPageTimestamp: -1,
            firstPageHttpBeforeTimestamp: -1,
            firstPageHttpAfterTimestamp: -1,
            firstPageFinishedTimestamp: -1
        }
    },
    _launchLock: !1,
    onLaunch: function() {
        var i;
        this._launchLock = !0, wx.onAppRouteDone((i = "", function(t) {
            var e = t.path, a = getPage(e);
            _router.router.tabPageMap[i] !== _router.router.tabPageMap[a] && _store.store.dispatch(_store.store.actions.setSystemInfo(wx.getSystemInfoSync())), 
            i = a;
        }));
    },
    onShow: function(t) {
        this.globalData.firstScreenLoading.isFirst = void 0 === this.globalData.firstScreenLoading.isFirst, 
        console.error("app onShow", t);
        var e = t.path, a = t.scene, i = t.query, r = t.shareTicket, n = t.referrerInfo;
        this._launchLock ? (this._setNavigatorBarStyleInfo(), this._launchLock = !1) : _store.store.dispatch(_store.store.actions.globals.updateInitInfo(i)), 
        this.globalData.path = e, this.globalData.scene = a, this.globalData.query = i, 
        r ? this.globalData.shareTicket = r : 1007 === a && (this.globalData.shareTicket = ""), 
        this.globalData.referrerInfo = n;
    },
    onError: function(t) {
        this.$log.error(t);
    },
    _setNavigatorBarStyleInfo: function() {
        var e, a, i, r, t = wx.getSystemInfoSync(), n = t.statusBarHeight, o = t.platform, s = t.system, l = t.windowWidth, u = t.screenWidth, g = t.model, h = !1, p = 40;
        try {
            if (h = (0, _ramda.any)((0, _ramda.flip)(_ramda.test)(g))([ /iPhone X/i, /iPhone XR/i, /iPhone XS/i, /iPhone XS MAX/i ]), 
            !wx.getMenuButtonBoundingClientRect) throw new Error("getMenuButtonBoundingClientRect 不支持");
            var m = wx.getMenuButtonBoundingClientRect();
            if (!m || !m.height || !m.top) throw new Error("getMenuButtonBoundingClientRect rect 返回值错误");
            p = m.height + 2 * (m.top - n), a = c(e = m.height), r = c(i = l - m.right);
        } catch (t) {
            "android" === o ? p = 48 : "devtools" === o && (p = (0, _ramda.contains)("iOS", s) ? 44 : 48), 
            a = c(e = 32), r = c(i = 10), console.log("_setNavigatorBarStyleInfo", t);
        }
        function c(t) {
            return t * (750 / (l || u));
        }
        this.globalData.statusBarHeightPx = n, this.globalData.navigatorHeightPx = p, this.globalData.menuButtonHeightPx = e, 
        this.globalData.menuButtonRightPx = i, this.globalData.navigatorFullHeightPx = n + p, 
        this.globalData.statusBarHeightRpx = c(n), this.globalData.navigatorHeightRpx = c(p), 
        this.globalData.menuButtonHeightRpx = a, this.globalData.menuButtonRightRpx = r, 
        this.globalData.navigatorFullHeightRpx = c(n + p), this.globalData.isFullDisplay = h;
    }
}, {
    info: {
        noPromiseAPI: [ "createSelectorQuery" ]
    },
    handlers: {},
    models: {},
    refs: void 0
});