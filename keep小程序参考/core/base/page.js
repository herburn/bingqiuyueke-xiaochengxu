module.exports = function(t) {
    if (t.data || (t.data = {}), t.data._loginState = !1, t.needLoginComp) {
        var e = t.onKeepLoginSuccess;
        t.onKeepLoginSuccess = function(t) {
            this.setData({
                _loginState: !0
            }), e && e.bind(this)(t);
        };
        var n = t.onKeepLoginExit;
        t.onKeepLoginExit = function(t) {
            this.setData({
                _loginState: !1
            }), n && n.bind(this)(t);
        };
    }
    return Page(t);
};