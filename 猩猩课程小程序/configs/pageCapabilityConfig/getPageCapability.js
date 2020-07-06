var R = require("./../../vendor.js")(320), capabilityHandlerMap = require("./capabilityHandlerMap/index.js"), pageCapabilityMap = require("./pageCapabilityMap.js");

function getPageCapability(i) {
    var e = pageCapabilityMap[i];
    return e ? R.mapObjIndexed(function(e, a) {
        return capabilityHandlerMap[a](e, i);
    })(e) : null;
}

function getReplaceTemplateConfig(e) {
    var a = getPageCapability(e);
    if (a) {
        var i = R.pipe(R.values, R.map(R.propOr({}, "template")));
        return R.pipe(i, R.reduce(R.mergeDeepRight, {}))(a);
    }
    return {};
}

function getMergeConfigPluginConfig(e) {
    var a = getPageCapability(e);
    if (a) {
        var i = R.pipe(R.values, R.map(R.propOr({}, "config")));
        return R.pipe(i, R.reduce(R.mergeDeepRight, {}))(a);
    }
    return {};
}

function getAutoImportConfig(e) {
    var a = getPageCapability(e);
    if (a) {
        var i = R.pipe(R.values, R.map(R.propOr({}, "autoImport")));
        return R.pipe(i, R.reduce(R.mergeDeepRight, {}))(a);
    }
    return {};
}

module.exports = {
    getPageCapability: getPageCapability,
    getReplaceTemplateConfig: getReplaceTemplateConfig,
    getMergeConfigPluginConfig: getMergeConfigPluginConfig,
    getAutoImportConfig: getAutoImportConfig
};