var getPageShareCapability = require("./getPageShareCapability.js"), getPullDownRefreshCapability = require("./getPullDownRefreshCapability.js"), getTitleCapability = require("./getTitleCapability.js");

module.exports = {
    pageShare: getPageShareCapability,
    pullDownRefresh: getPullDownRefreshCapability,
    title: getTitleCapability
};