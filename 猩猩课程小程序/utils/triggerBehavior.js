Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.navigate = navigate, exports.navigateToMiniProgram = navigateToMiniProgram, 
exports.previewImage = previewImage;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../vendor.js")(0)), _router = require("./../router/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, r, n, t, a, i, o) {
    try {
        var u = e[i](o), s = u.value;
    } catch (e) {
        return void n(e);
    }
    u.done ? r(s) : Promise.resolve(s).then(t, a);
}

function _asyncToGenerator(u) {
    return function() {
        var e = this, o = arguments;
        return new Promise(function(r, n) {
            var t = u.apply(e, o);
            function a(e) {
                asyncGeneratorStep(t, r, n, a, i, "next", e);
            }
            function i(e) {
                asyncGeneratorStep(t, r, n, a, i, "throw", e);
            }
            a(void 0);
        });
    };
}

function navigate(e) {
    return _navigate.apply(this, arguments);
}

function _navigate() {
    return (_navigate = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var n, t;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = r.navigateURL, t = (0, _router.decodeParams)(n), e.next = 4, _router.router.navigateTo({
                    page: t.url,
                    data: t
                });

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function navigateToMiniProgram(e) {
    var n = e.navigateAppId, t = e.navigateURL, r = e.extraData, a = void 0 === r ? void 0 : r, i = e.envVersion, o = void 0 === i ? "release" : i;
    return new Promise(function(e, r) {
        return wx.navigateToMiniProgram({
            appId: n,
            path: t,
            extraData: a,
            envVersion: o,
            success: e,
            fail: r
        });
    });
}

function previewImage(e) {
    var n = e.urlList, r = e.current, t = void 0 === r ? void 0 : r;
    return new Promise(function(e, r) {
        return wx.previewImage({
            urls: n,
            current: t,
            success: e,
            fail: r
        });
    });
}