var e = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/helpers/toConsumableArray")), u = {
    rcount: 0,
    queue: [],
    add: function(e) {
        var r = e.data.length > 0 ? e.data[0] : {}, a = r.complete;
        r.header = r.header || {}, r.complete = function(e) {
            t.checkQueue(), a && a(e);
        };
        return this.rcount >= 8 ? (this.queue.push(e), !1) : (u.rcount++, !0);
    }
}, t = {
    checkQueue: function() {
        if (u.rcount >= 1 && u.rcount--, u.queue.length > 0) {
            var t, r = u.queue.pop();
            (t = wx)[r.apiName].apply(t, (0, e.default)(r.data));
        }
    }
};

module.exports = {
    list: u,
    queueNames: [ "request", "uploadFile", "downloadFile" ]
};