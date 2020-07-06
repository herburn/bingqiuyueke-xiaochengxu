function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
}

var defaultInviteFriendPrompt = {
    attribs: {
        scheduleId: "{{ scheduleId }}",
        isShow: "{{ isShowInviteFriendPrompt === undefined ? true : isShowInviteFriendPrompt }}"
    }
};

module.exports = function(t) {
    return {
        options: t,
        autoImport: {
            FloatingActionButtonNewUser: function(t) {
                var o = t.FloatingActionButtonNewUser, n = !1;
                !0 === (void 0 === o || o) && (n = !0);
                return n;
            }(t),
            AlertAfterShare: function(t) {
                var o = t.AlertAfterShare, n = !1;
                !0 === (void 0 === o || o) && (n = !0);
                return n;
            }(t),
            BookingFloatingActionButtonInviteFriend: function(t) {
                var o = t.BookingFloatingActionButtonInviteFriend, n = void 0 !== o && o, e = !1;
                !0 === n && (e = defaultInviteFriendPrompt);
                "object" === _typeof(n) && (e = n);
                return e;
            }(t),
            BookingOnlyButtonInviteFriend: function(t) {
                var o = t.BookingOnlyButtonInviteFriend, n = void 0 !== o && o, e = !1;
                !0 === n && (e = defaultInviteFriendPrompt);
                "object" === _typeof(n) && (e = n);
                return e;
            }(t)
        }
    };
};