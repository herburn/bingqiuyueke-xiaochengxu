Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _ramda = require("./../../../../vendor.js")(320), _extraR = require("./../../../../utils/extraR.js"), _isNeedTrack = _interopRequireDefault(require("./../../utils/isNeedTrack.js")), _getTracesDataset = _interopRequireDefault(require("./../../utils/getTracesDataset.js")), _config = require("./../config.js"), _constants = require("./../constants.js");

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

var smEventCaptureHandler = function(e) {
    var r = e.name, t = e.event, n = e.comData, a = void 0 === n ? {} : n;
    try {
        var o = t.currentTarget.dataset, s = void 0 === o ? {} : o, i = _constants.type2event[t.type], c = s["regionId".concat(_config.dataSuffix[0].toLocaleUpperCase()).concat((0, 
        _ramda.tail)(_config.dataSuffix))];
        if ((0, _isNeedTrack.default)({
            name: r,
            responseRegionId: c,
            event: i,
            responseRegionsConfigMap: _config.responseRegionsConfigMap
        })) {
            var u = _config.responseRegionsConfigMap[r][c], p = (0, _extraR.mapKeys)((0, _ramda.dropLast)(_config.dataSuffix.length))(s);
            delete p.regionId;
            var d = (0, _getTracesDataset.default)({
                responseRegionId: c,
                schema: u[i],
                dataset: _objectSpread({
                    comData: a
                }, p),
                console: console
            });
            "responseRegionIdMap" in u && i in u.responseRegionIdMap && (c = u.responseRegionIdMap[i]), 
            wx.sma.smTrack({
                event: i,
                responseRegionId: c,
                data: d
            });
        }
    } catch (t) {
        console.error("smEventCaptureHandler", t);
    }
}, _default = smEventCaptureHandler;

exports.default = _default;