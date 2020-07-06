var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../../@babel/runtime/regenerator")), a = t(require("../../../@babel/runtime/helpers/asyncToGenerator")), n = require("../../utils/util");

Page({
    data: {
        invitationCode: "",
        invitationInfo: null,
        transferToken: "",
        isShowKeyboard: !0,
        tokenError: !1,
        canSubmit: !0,
        courseBaseId: "",
        received: !1,
        invitationType: 1,
        forbid: !1,
        errmsg: "",
        showToken: ""
    },
    actionAcceptInvitation: function() {
        this.data.forbid || this.data.received || this.acceptInvitation();
    },
    gotoCourse: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/app/pages/courseDetail/courseDetail?courseBaseId=".concat(this.data.courseBaseId, "&scheduleId=").concat(e)
        });
    },
    showKeyboard: function(t) {
        var e = t.currentTarget.dataset.show;
        this.setData({
            isShowKeyboard: e
        });
    },
    tokenInput: function(t) {
        this.setData({
            transferToken: t.detail.value,
            showToken: t.detail.value.split("")
        }), 4 == this.data.transferToken.length && this.acceptInvitation(this.data.transferToken);
    },
    onLoad: function(t) {
        this.data.invitationCode = t.invitationCode, this.fetchInvitationInfo(), t.usersource && (0, 
        n.setUserSource)(t.usersource), t.shared && (0, n.setShared)(t.shared);
    },
    onPullDownRefresh: function() {
        this.fetchInvitationInfo();
    },
    getCourseBaseId: function() {
        var t = this;
        wx.lego.getCourseBaseId(this.data.invitationInfo.schedule.id).then(function(e) {
            t.data.courseBaseId = e.data.courseBaseId;
        });
    },
    fetchInvitationInfo: function() {
        var t = this;
        wx.lego.fetchInvitationInfo(this.data.invitationCode).then(function(e) {
            t.data.invitationInfo = e.data;
            var a = e.data.acceptCode;
            t.data.received = 1 === a, t.data.invitationType = e.data.invitationInfo.type, t.data.forbid = 2 === a || 3 === a, 
            t.setData({
                invitationInfo: t.data.invitationInfo,
                received: t.data.received,
                invitationType: t.data.invitationType,
                forbid: t.data.forbid
            }), t.getCourseBaseId();
        }).catch(function(e) {
            t.setData({
                errmsg: e.data.text
            }), console.log(e), wx.showToast({
                title: e.data.text,
                icon: "none",
                duration: 2e3
            });
        }).then(function() {
            wx.stopPullDownRefresh();
        });
    },
    acceptInvitation: function() {
        var t = (0, a.default)(e.default.mark(function t(a) {
            var i, o = this;
            return e.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (t.prev = 0, !this.data.canSubmit) {
                        t.next = 9;
                        break;
                    }
                    return this.data.canSubmit = !1, i = a ? {
                        verificationCode: a
                    } : {}, t.next = 6, wx.lego.acceptInvitation(this.data.invitationCode, i);

                  case 6:
                    this.data.canSubmit = !0, this.setData({
                        isShowKeyboard: !1
                    }), this.fetchInvitationInfo();

                  case 9:
                    t.next = 16;
                    break;

                  case 11:
                    t.prev = 11, t.t0 = t.catch(0), console.log(t.t0), this.data.canSubmit = !0, 401 === t.t0.statusCode ? (0, 
                    n.doLogin)() : (wx.showToast({
                        title: t.t0.data.text,
                        icon: "none",
                        duration: 2e3
                    }), a && (this.setData({
                        tokenError: !0
                    }), setTimeout(function() {
                        o.tokenError = !1, o.setData({
                            transferToken: "",
                            showToken: [],
                            tokenError: !1
                        });
                    }, 2e3)));

                  case 16:
                  case "end":
                    return t.stop();
                }
            }, t, this, [ [ 0, 11 ] ]);
        }));
        return function(e) {
            return t.apply(this, arguments);
        };
    }()
});