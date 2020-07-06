Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = sensorTracesEventCapture;

var _ramda = require("./../../../../vendor.js")(320), _extraR = require("./../../../../utils/extraR.js"), _sensorEventCaptureHandler = _interopRequireDefault(require("./sensorEventCaptureHandler.js")), _config = require("./../config.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function ownKeys(r, e) {
    var t = Object.keys(r);
    return Object.getOwnPropertySymbols && t.push.apply(t, Object.getOwnPropertySymbols(r)), 
    e && (t = t.filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable;
    })), t;
}

function _objectSpread(r) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(t, !0).forEach(function(e) {
            _defineProperty(r, e, t[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : ownKeys(t).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
        });
    }
    return r;
}

function _defineProperty(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

function sensorTracesEventCapture() {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, r = e.name, t = e.type, n = e.responseRegionId, o = e.dataset, a = void 0 === o ? {} : o, c = e.comData;
    try {
        var i = {
            type: t,
            currentTarget: {
                dataset: _objectSpread(_defineProperty({}, "regionId".concat(_config.dataSuffix[0].toLocaleUpperCase()).concat((0, 
                _ramda.tail)(_config.dataSuffix)), n), (0, _extraR.mapKeys)(function(e) {
                    return "".concat(e).concat(_config.dataSuffix[0].toLocaleUpperCase()).concat((0, 
                    _ramda.tail)(_config.dataSuffix));
                })(a))
            }
        };
        (0, _sensorEventCaptureHandler.default)({
            name: r,
            event: i,
            comData: c
        });
    } catch (e) {
        console.log("sensorTracesEventCapture error", e);
    }
}