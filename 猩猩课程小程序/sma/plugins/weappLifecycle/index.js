Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = _default, exports.onShareAppMessage = onShareAppMessage, exports.patchPagePlugin = exports.patchAppPlugin = void 0;

var lifecycleHandlers = [];

function _default() {
    return {
        install: function(n) {
            return lifecycleHandlers.push(function(e, a) {
                n.track({
                    event: e,
                    data: a
                });
            }), {};
        }
    };
}

function handleEvent(a, n) {
    lifecycleHandlers.forEach(function(e) {
        return e(a, n);
    });
}

var patchAppPlugin = {
    install: function(e) {
        e.mixin({
            onLaunch: function(e) {
                try {
                    handleEvent("appLaunch", e);
                } catch (e) {
                    console.error("sma appLaunch error:", e);
                }
            },
            onShow: function(e) {
                try {
                    this.$app || handleEvent("appShow", e);
                } catch (e) {
                    console.error("sma appShow error:", e);
                }
            },
            onHide: function(e) {
                try {
                    this.$app || handleEvent("appHide", e);
                } catch (e) {
                    console.error("sma appHide error:", e);
                }
            }
        });
    }
};

exports.patchAppPlugin = patchAppPlugin;

var patchPagePlugin = {
    install: function(e) {
        e.mixin({
            onLoad: function(e) {
                try {
                    handleEvent("pageLoad", e);
                } catch (e) {
                    console.error("sma pageLoad error:", e);
                }
            },
            onShow: function(e) {
                try {
                    this.$app && handleEvent("pageShow", e);
                } catch (e) {
                    console.error("sma pageShow error:", e);
                }
            },
            onReady: function(e) {
                try {
                    handleEvent("pageReady", e);
                } catch (e) {
                    console.error("sma pageReady error:", e);
                }
            },
            onHide: function(e) {
                try {
                    this.$app && handleEvent("pageHide", e);
                } catch (e) {
                    console.error(" sma pageHide error:", e);
                }
            },
            onUnload: function(e) {
                try {
                    handleEvent("pageUnload", e);
                } catch (e) {
                    console.error("sma pageUnload error:", e);
                }
            },
            onPullDownRefresh: function(e) {
                try {
                    handleEvent("pagePullDownRefresh", e);
                } catch (e) {
                    console.error("sma pullDownRefresh error:", e);
                }
            },
            onReachBottom: function(e) {
                try {
                    handleEvent("pageReachBottom", e);
                } catch (e) {
                    console.error("sma reachBottom error:", e);
                }
            },
            onTabItemTap: function(e) {
                try {
                    handleEvent("pageTabItemTap", e);
                } catch (e) {
                    console.error("sma tabItemTap error:", e);
                }
            }
        });
    }
};

function onShareAppMessage(e) {
    try {
        handleEvent("pageShareAppMessage", e);
    } catch (e) {
        console.error("sma pageShareAppMessage error:", e);
    }
}

exports.patchPagePlugin = patchPagePlugin;