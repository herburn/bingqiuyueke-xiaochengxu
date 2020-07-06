Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _ramda = require("./../../../../vendor.js")(320), _extraR = require("./../../../../utils/extraR.js"), _isNeedTrack = _interopRequireDefault(require("./../../utils/isNeedTrack.js")), _getTracesDataset = _interopRequireDefault(require("./../../utils/getTracesDataset.js")), _config = require("./../config.js");

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

var sensorEventCaptureHandler = function(e) {
    var r, t, a, n = e.name, o = e.event, s = e.comData;
    try {
        var i = o.currentTarget.dataset, c = void 0 === i ? {} : i, u = o.type, f = c["regionId".concat(_config.dataSuffix[0].toLocaleUpperCase()).concat((0, 
        _ramda.tail)(_config.dataSuffix))];
        if ((0, _isNeedTrack.default)({
            name: n,
            responseRegionId: f,
            event: u,
            responseRegionsConfigMap: _config.responseRegionsConfigMap
        })) {
            var d = _config.responseRegionsConfigMap[n][f][u], p = (0, _extraR.mapKeys)((0, 
            _ramda.dropLast)(_config.dataSuffix.length))(c);
            delete p.regionId;
            var l = _objectSpread({
                comData: s
            }, p), g = (0, _getTracesDataset.default)({
                responseRegionId: f,
                schema: d.schema,
                dataset: l,
                console: !1 === d.error ? void 0 : console
            });
            wx.sma.sensorTrack({
                event: (r = {
                    event: d.event,
                    data: l
                }, t = r.event, a = r.data, "function" == typeof t ? t(a) : t),
                data: g
            });
        }
    } catch (o) {
        console.error("smEventCaptureHandler", o);
    }
}, _default = sensorEventCaptureHandler;

exports.default = _default;