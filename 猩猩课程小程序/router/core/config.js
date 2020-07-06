Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.setConfig = setConfig, exports.default = void 0;

var config = {
    homePage: "",
    tabPageMap: {},
    routeMap: {}
};

function setConfig(e) {
    Object.assign(config, e);
}

var _default = config;

exports.default = _default;