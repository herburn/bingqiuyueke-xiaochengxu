var n = require("../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.wxCheckSession = function() {
    return new Promise(function(n, e) {
        wx.checkSession({
            success: function(e) {
                n(e);
            },
            fail: function(n) {
                e(n);
            }
        });
    });
}, exports.wxLogin = function() {
    return new Promise(function(n, e) {
        wx.login({
            success: function(e) {
                n(e);
            },
            fail: function(n) {
                e(n);
            }
        });
    });
}, exports.wxGetUserInfo = function(n) {
    return new Promise(function(e, t) {
        wx.getUserInfo({
            withCredentials: n,
            success: function(n) {
                e(n);
            },
            fail: function(n) {
                t(n);
            }
        });
    });
}, exports.wxGetNetworkType = function() {
    return new Promise(function(n, e) {
        wx.getNetworkType({
            success: function(e) {
                n(e);
            },
            fail: function(n) {
                e(n);
            }
        });
    });
}, exports.wxChooseImage = function(n) {
    return new Promise(function(e, t) {
        wx.chooseImage({
            count: n,
            sizeType: [ "compressed" ],
            success: function(n) {
                e(n);
            },
            fail: function(n) {
                t(n);
            }
        });
    });
}, exports.wxGetImageInfo = function(n) {
    return new Promise(function(e, t) {
        wx.getImageInfo({
            src: n,
            success: function(n) {
                e(n);
            },
            fail: function(n) {
                t(n);
            }
        });
    });
}, exports.wxUploadFile = function(n, t) {
    return new Promise(function(o, i) {
        wx.uploadFile({
            url: e.default.host.upload + "/upload",
            filePath: n,
            name: t,
            header: {
                Authorization: "Bearer " + wx.getStorageSync(wx.keys.authorization),
                "Content-Type": "multipart/form-data"
            },
            formData: {
                key: t,
                file: n
            },
            success: function(n) {
                200 != n.statusCode ? i(n) : o(n.data);
            },
            fail: function(n) {
                i(n);
            }
        });
    });
}, exports.wxDownloadFile = function(n) {
    return new Promise(function(e, t) {
        wx.downloadFile({
            url: n,
            success: function(n) {
                200 != n.statusCode ? t(n) : e(n.tempFilePath);
            },
            fail: function(n) {
                t(n);
            }
        });
    });
}, exports.wxSaveImageToPhotosAlbum = function(n) {
    return new Promise(function(e, t) {
        wx.saveImageToPhotosAlbum({
            filePath: n,
            success: function(n) {
                e(n);
            },
            fail: function(n) {
                t(n), new Promise(function(n, e) {
                    wx.getSetting({
                        success: function(e) {
                            n(e);
                        }
                    });
                }).then(function(n) {
                    n.authSetting["scope.writePhotosAlbum"] ? wx.showToast({
                        title: "保存失败",
                        icon: "none",
                        duration: 2e3
                    }) : wx.showModal({
                        title: "",
                        content: "请先开启保存相册权限",
                        success: function(n) {
                            n.confirm && wx.openSetting();
                        }
                    });
                });
            }
        });
    });
}, exports.wxScanCode = function() {
    return new Promise(function(n, e) {
        wx.scanCode({
            success: function(e) {
                n(e);
            },
            fail: function(n) {
                e(n);
            }
        });
    });
}, exports.wxOpenLocation = function(n) {
    return new Promise(function(e, t) {
        wx.openLocation({
            latitude: n.latitude,
            longitude: n.longitude,
            name: n.name,
            address: n.address,
            success: function(n) {
                e(n);
            },
            fail: function(n) {
                t(n);
            }
        });
    });
}, exports.getLocation = function() {
    return new Promise(function(n, e) {
        wx.getLocation({
            type: "wgs84",
            success: function(e) {
                n(e);
            },
            fail: function(n) {
                e(n);
            }
        });
    });
}, exports.navigateToMiniProgram = function(n) {
    return new Promise(function(e, t) {
        wx.navigateToMiniProgram({
            appId: n.appId,
            path: n.path,
            extraData: n.extraData,
            envVersion: n.envVersion,
            success: function(n) {
                e(n);
            },
            fail: function(n) {
                t(n);
            }
        });
    });
};

var e = n(require("../config/config"));