function ownKeys(t, e) {
    var r = Object.keys(t);
    return Object.getOwnPropertySymbols && r.push.apply(r, Object.getOwnPropertySymbols(t)), 
    e && (r = r.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), r;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(r, !0).forEach(function(e) {
            _defineProperty(t, e, r[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ownKeys(r).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
        });
    }
    return t;
}

function _defineProperty(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _default = {
    install: function(e) {
        [ "authorize", "login", "checkSession", "chooseAddress", "getUserInfo", "getSystemInfo", "pageScrollTo", "downloadFile", "getSetting", "openSetting", "requestPayment", "showModal", "downloadFile", "saveImageToPhotosAlbum", "getShareInfo", "setStorage", "getStorage", "getLocation", "getNetworkType", "requestSubscribeMessage" ].forEach(function(o) {
            e[o] = function(e) {
                return new Promise(function(t, r) {
                    wx[o](_objectSpread({}, e, {
                        success: function(e) {
                            t(e);
                        },
                        fail: function(e) {
                            r(e);
                        }
                    }));
                });
            };
        });
    }
};

exports.default = _default;