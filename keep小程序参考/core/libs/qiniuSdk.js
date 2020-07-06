!function() {
    var e = {
        qiniuRegion: "",
        qiniuImageURLPrefix: "",
        qiniuUploadToken: "",
        qiniuUploadTokenURL: "",
        qiniuUploadTokenFunction: null,
        qiniuShouldUseQiniuFileName: !1,
        qiniuResType: "image"
    };
    function i(i) {
        i.region ? e.qiniuRegion = i.region : console.error("qiniu uploader need your bucket region"), 
        i.resType && (e.qiniuResType = i.resType), i.uptoken ? e.qiniuUploadToken = i.uptoken : i.uptokenURL ? e.qiniuUploadTokenURL = i.uptokenURL : i.uptokenFunc && (e.qiniuUploadTokenFunction = i.uptokenFunc), 
        i.domain && (e.qiniuImageURLPrefix = i.domain), e.qiniuShouldUseQiniuFileName = i.shouldUseQiniuFileName;
    }
    function n(i, n, o, u, a, r) {
        if (null == e.qiniuUploadToken && e.qiniuUploadToken.length > 0) console.error("qiniu UploadToken is null, please check the init config or networking"); else {
            var t = function(e) {
                var i = null;
                switch (e) {
                  case "ECN":
                    i = "https://upload.qiniup.com";
                    break;

                  case "NCN":
                    i = "https://up-z1.qiniup.com";
                    break;

                  case "SCN":
                    i = "https://up-z2.qiniup.com";
                    break;

                  case "NA":
                    i = "https://up-na0.qiniup.com";
                    break;

                  case "ASG":
                    i = "https://up-as0.qiniup.com";
                    break;

                  default:
                    console.error("please make the region is with one of [ECN, SCN, NCN, NA, ASG]");
                }
                return i;
            }(e.qiniuRegion), l = i.split("//")[1];
            u && u.key && (l = u.key);
            var p = {
                token: e.qiniuUploadToken
            };
            e.qiniuShouldUseQiniuFileName || (p.key = l);
            var c = wx.wxapis.uploadFile(!0, {
                url: t,
                filePath: i,
                name: "file",
                formData: p,
                success: function(i) {
                    var u = i.data;
                    i.data.hasOwnProperty("type") && "Buffer" === i.data.type && (u = String.fromCharCode.apply(null, i.data.data));
                    try {
                        var a = JSON.parse(u), r = e.qiniuImageURLPrefix + "/" + a.key;
                        a.imageURL = r, a.origin = e.qiniuUploadOrigin, n && n(a);
                    } catch (e) {
                        console.log("parse JSON failed, origin String is: " + u), o && o(e);
                    }
                },
                fail: function(e) {
                    console.error(e), o && o(e);
                }
            });
            c.onProgressUpdate(function(e) {
                a && a(e);
            }), r && r(function() {
                c.abort();
            });
        }
    }
    module.exports = {
        init: function(n) {
            e = {
                qiniuRegion: "",
                qiniuImageURLPrefix: "",
                qiniuUploadToken: "",
                qiniuUploadTokenURL: "",
                qiniuUploadTokenFunction: null,
                qiniuShouldUseQiniuFileName: !1,
                qiniuResType: "image"
            }, i(n);
        },
        upload: function(o, u, a, r, t, l) {
            if (null == o) return void console.error("qiniu uploader need filePath to upload");
            r && i(r);
            if (e.qiniuUploadToken) n(o, u, a, r, t, l); else if (e.qiniuUploadTokenURL) (p = getApp(), 
            new Promise(function(i, n) {
                p.http({
                    url: e.qiniuUploadTokenURL,
                    method: "GET",
                    success: function(o) {
                        return 0 !== (o = o.data).errorCode ? (console.error("qiniuUploader cannot get your token, please check the uptokenURL or server"), 
                        void (n && n(o))) : (u = "image" == e.qiniuResType ? o.data.picture : o.data.video) && u.token ? (e.qiniuUploadToken = u.token, 
                        e.qiniuUploadOrigin = u.origin, void (i && i(o))) : (console.error("qiniuUploader cannot get your token, please check the uptokenURL or server"), 
                        void (n && n(o)));
                        var u;
                    },
                    fail: function(e) {
                        console.error("qiniu UploadToken is null, please check the init config or networking: " + e), 
                        n && n(e);
                    }
                });
            })).then(function() {
                n(o, u, a, r, t, l);
            }).catch(a); else {
                if (!e.qiniuUploadTokenFunction) return void console.error("qiniu uploader need one of [uptoken, uptokenURL, uptokenFunc]");
                if (e.qiniuUploadToken = e.qiniuUploadTokenFunction(), null == e.qiniuUploadToken && e.qiniuUploadToken.length > 0) return void console.error("qiniu UploadTokenFunction result is null, please check the return value");
                n(o, u, a, r, t, l);
            }
            var p;
        }
    };
}();