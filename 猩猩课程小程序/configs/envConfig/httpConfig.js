Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var httpConfigs = {
    prod: {
        loginBase: "https://busi.supermonkey.com.cn",
        generalBase: "https://busi.supermonkey.com.cn",
        specialBase: "https://busi.supermonkey.com.cn",
        trackBase: "https://stat.supermonkey.com.cn/report",
        sensorUrl: "https://sa.supermonkey.com.cn/sa?project=production"
    },
    dev: {
        loginBase: "https://busi.supermonkey.com.cn",
        generalBase: "https://core.fat.supermonkey.com.cn",
        specialBase: "https://core.fat.supermonkey.com.cn",
        trackBase: "https://stat.supermonkey.com.cn/test",
        sensorUrl: "https://sa.supermonkey.com.cn/sa?project=default"
    },
    uat: {
        loginBase: "https://core.uat.supermonkey.com.cn",
        generalBase: "https://core.uat.supermonkey.com.cn",
        specialBase: "https://core.uat.supermonkey.com.cn",
        trackBase: "https://stat.supermonkey.com.cn/test",
        sensorUrl: ""
    }
}, _default = httpConfigs;

exports.default = _default;