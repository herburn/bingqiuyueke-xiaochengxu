Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../vendor.js")(0)), _actionTypes = require("./../../types/index.js"), _seamlessImmutable = _interopRequireDefault(require("./../../../vendor.js")(322)), _wepy = _interopRequireDefault(require("./../../../tmp/index.js")), _sagaFetch = require("./../../utils/sagaFetch.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

var merge = _seamlessImmutable.default.merge, namespace = "biz.sharePicUrlMap", initialState = (0, 
_seamlessImmutable.default)({}), actions = {
    fetchSharePicUrl: [ _actionTypes.FETCH_SHARE_PIC_URL, void 0, function() {
        return {
            isPromise: !0
        };
    } ],
    getSharePicUrl: [ _actionTypes.PICTURE_SHARE_URL_GET, void 0, function() {
        return {
            isFetch: !0,
            isLatest: !0,
            statusName: "sharePicUrlGet"
        };
    } ]
}, reducers = _defineProperty({}, _actionTypes.PICTURE_SHARE_URL_PUT, function(e, t) {
    var r = t.payload;
    return merge(e, r);
}), sagas = function(e, t) {
    var r, l = e.put, _ = e.call, s = e.select, i = t.selectors;
    return _defineProperty(r = {}, _actionTypes.FETCH_SHARE_PIC_URL, _regeneratorRuntime2.default.mark(function e(t) {
        var r, a, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = t.payload, t.meta, a = t.__resolve, e.next = 3, s(i.getSharePicUrlMap);

              case 3:
                if (e.sent[r.page]) {
                    e.next = 12;
                    break;
                }
                return e.next = 7, l({
                    type: _actionTypes.PICTURE_SHARE_URL_GET,
                    payload: r,
                    meta: {
                        isFetch: !0,
                        isLatest: !0,
                        statusName: "sharePicUrlGet"
                    }
                });

              case 7:
                return n = e.sent, e.next = 10, _(a, n);

              case 10:
                e.next = 14;
                break;

              case 12:
                return e.next = 14, _(a, !0);

              case 14:
              case "end":
                return e.stop();
            }
        }, e);
    })), _defineProperty(r, _actionTypes.PICTURE_SHARE_URL_GET_SUCCESS, _regeneratorRuntime2.default.mark(function e(t) {
        var r, a, n, s, i, u, c, o;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = t.payload.sharePostUrl, a = t.meta, n = t.requestPayload, s = n.page, 
                i = n.type, u = n.address, e.prev = 1, e.next = 4, _(_wepy.default.downloadFile, {
                    url: "".concat(r, "&type=").concat(i, "&address=").concat(u)
                });

              case 4:
                return c = e.sent, o = c.tempFilePath, e.next = 8, l({
                    type: _actionTypes.PICTURE_SHARE_URL_PUT,
                    payload: _defineProperty({}, s, o)
                });

              case 8:
                return e.next = 10, _(_sagaFetch.updateFetchDone, a.statusName);

              case 10:
                e.next = 15;
                break;

              case 12:
                e.prev = 12, e.t0 = e.catch(1), console.log(e.t0);

              case 15:
              case "end":
                return e.stop();
            }
        }, e, null, [ [ 1, 12 ] ]);
    })), r;
}, selectors = function(e) {
    function t(e) {
        return e.biz.sharePicUrlMap;
    }
    return {
        getSharePicUrlMap: t,
        getSharePicUrl: (0, e.createSelector)(t, function(e, t) {
            return t;
        }, function(e, t) {
            return e[t];
        })
    };
}, _default = {
    namespace: namespace,
    state: initialState,
    reducers: reducers,
    actions: actions,
    selectors: selectors,
    sagas: sagas
};

exports.default = _default;