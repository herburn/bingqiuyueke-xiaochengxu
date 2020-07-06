var e = require("../../@babel/runtime/helpers/interopRequireDefault"), a = require("./env.js"), r = e(require("./host")), n = "wxfcf4d8d8ad24b86a", o = {
    appId: n,
    env: a.env,
    version: a.version,
    host: r.default,
    updateApi: [ "/fasttrack/book", "/api/v2/prePay", "/order/refund", "/invitation/accept/", "/waiting$", "/waiting/cancel$", "/plan/add", "/plan/remove" ],
    updateAppAuto: !0,
    needCommonHeader: !0,
    qiniuUploadTokenURL: r.default.qiniuUploadTokenURL,
    sensorConfig: {
        name: "sensors",
        appid: n,
        server_url: r.default.sensorHost,
        send_timeout: 1e3,
        max_string_length: 300,
        show_log: !0,
        allow_amend_share_path: !1,
        autoTrack: {
            appLaunch: !1,
            appShow: !1,
            appHide: !1,
            pageShow: !1,
            pageShare: !1
        }
    }
};

module.exports = o;