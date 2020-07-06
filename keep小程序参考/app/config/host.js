Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var o = "online" == require("./env").env ? "" : "pre.", t = {
    lego: "https://api.".concat(o, "gotokeep.com/lego"),
    jupiter: "https://api.".concat(o, "gotokeep.com/jupiter"),
    store: "https://store.".concat(o, "gotokeep.com"),
    upload: "https://upload.".concat(o, "gotokeep.com/wharf"),
    butler: "https://open.".concat(o, "gotokeep.com/butler"),
    account: "https://api.".concat(o, "gotokeep.com/account"),
    sharePage: "https://show.".concat(o, "gotokeep.com"),
    keeplandWeb: "https://keepland.".concat(o, "gotokeep.com"),
    download: "https://lego.".concat(o, "gotokeep.com"),
    api: "https://api.".concat(o, "gotokeep.com"),
    apm: "https://apm.".concat(o, "gotokeep.com"),
    monitor: "https://apm.gotokeep.com/monitor/wechat/miniprogram",
    echo: "https://echo.".concat(o, "gotokeep.com/help#/?from=keepland_mini_program"),
    sensorHost: "https://apm.".concat(o, "gotokeep.com/v1.1/log/client/wechatapp?format=json"),
    qiniuUploadTokenURL: "https://upload.".concat(o, "gotokeep.com/wharf/token"),
    app: "https://m.".concat(o, "gotokeep.com"),
    activity: "https://activity.".concat(o, "gotokeep.com")
};

exports.default = t;