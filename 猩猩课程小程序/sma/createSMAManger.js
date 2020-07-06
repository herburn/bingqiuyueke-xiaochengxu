Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = createSMAManger;

var _configs = require("./../configs/index.js"), _core = require("./core/index.js"), _plugins = require("./plugins/index.js"), _sensor = require("./traceConfig/sensor/index.js"), _sensorTracesEventCapture = _interopRequireDefault(require("./traceConfig/sensor/utils/sensorTracesEventCapture.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function createSMAManger() {
    var r = new _core.SMA({
        plugins: [ (0, _plugins.logPlugin)({
            debug: "error",
            name: "smTrack"
        }), (0, _plugins.weappLifecyclePlugin)(), (0, _plugins.smPlugin)({
            type: "track",
            weId: "supermonkey-weapp",
            url: "".concat(_configs.httpConfig.trackBase, "/statistic"),
            version: "2.0",
            isTrackWXEvent: !0
        }), (0, _plugins.dataPlugin)(), (0, _plugins.reportStrategyPlugin)({
            netWorkBlackList: [ "2g", "3g" ],
            opportunity: "appHide",
            intervalTime: 15,
            maxReportNum: 40
        }), (0, _plugins.persistPlugin)({
            storageKey: "__smTrack__"
        }) ]
    }), s = new _core.SMA({
        plugins: [ (0, _plugins.logPlugin)({
            debug: "error",
            name: "sensorTrack"
        }), (0, _plugins.weappLifecyclePlugin)(), (0, _plugins.sensorPlugin)({
            weId: "预约系统",
            url: _configs.httpConfig.sensorUrl,
            debug: !0,
            responseRegionsIdMap: _sensor.responseRegionsIdMap,
            sensorTracesEventCapture: _sensorTracesEventCapture.default
        }) ]
    });
    return {
        init: function(e) {
            "sma" in wx && console.error("sma 已经初始化了"), r.init(e), s.init(e), wx.sma = {
                sm: r,
                sensor: s,
                _isStarted: !1,
                start: function(e) {
                    this._isStarted || (this._isStarted = !0, r.start(e), s.start(e));
                },
                smTrack: function(e) {
                    r.track(e);
                },
                sensorTrack: function(e) {
                    s.track(e);
                }
            };
        }
    };
}