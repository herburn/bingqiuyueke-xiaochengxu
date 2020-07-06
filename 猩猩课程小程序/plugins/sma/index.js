Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _weappLifecycle = require("./../../sma/plugins/weappLifecycle/index.js"), _sensorResponseRegionIdMapPlugin = _interopRequireDefault(require("./../../sma/traceConfig/sensor/utils/sensorResponseRegionIdMapPlugin.js")), _sensorTracesEventCapturePlugin = _interopRequireDefault(require("./../../sma/traceConfig/sensor/utils/sensorTracesEventCapturePlugin.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var _default = [ _weappLifecycle.patchAppPlugin, _weappLifecycle.patchPagePlugin, _sensorResponseRegionIdMapPlugin.default, _sensorTracesEventCapturePlugin.default ];

exports.default = _default;