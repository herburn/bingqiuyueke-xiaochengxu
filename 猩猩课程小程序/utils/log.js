Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var log = wx.getRealtimeLogManager ? wx.getRealtimeLogManager() : null, enrichLog = {
    debug: function() {
        null !== log && log.debug.apply(log, arguments);
    },
    info: function() {
        null !== log && log.info.apply(log, arguments);
    },
    warn: function() {
        null !== log && log.warn.apply(log, arguments);
    },
    error: function() {
        null !== log && log.error.apply(log, arguments);
    },
    setFilterMsg: function(l) {
        null !== log && "setFilterMsg" in log && "string" == typeof l && log.setFilterMsg(l);
    },
    addFilterMsg: function(l) {
        null !== log && "addFilterMsg" in log && "string" == typeof l && log.addFilterMsg(l);
    }
}, _default = enrichLog;

exports.default = _default;