var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../../@babel/runtime/helpers/defineProperty")), n = t(require("../../../@babel/runtime/regenerator")), i = t(require("../../../@babel/runtime/helpers/asyncToGenerator")), a = require("../../utils/util"), o = [ "https://static1.keepcdn.com/2018/08/02/18/1533204929382_750x494.png", "https://static1.keepcdn.com/2018/08/02/18/1533204967937_751x494.png", "https://static1.keepcdn.com/2018/08/02/18/1533204977542_751x494.png", "https://static1.keepcdn.com/2018/08/02/18/1533204988187_751x494.png", "https://static1.keepcdn.com/2018/08/02/18/1533204998544_751x494.png", "https://static1.keepcdn.com/2018/08/02/18/1533205008248_751x494.png" ];

Page((0, e.default)({
    data: {
        entityId: "",
        trainingCount: 0,
        inviter: {},
        promotion: null,
        success: !1,
        inviteImg: "",
        block: !1,
        showBtn: !1
    },
    acceptInvitation: function() {
        !this.data.block && this.acceptInvitation();
    },
    onLoad: function(t) {
        if (t.usersource && (0, a.setUserSource)(t.usersource), t.shared && (0, a.setShared)(t.shared), 
        t.userId) this.data.entityId = t.userId; else {
            var e = decodeURIComponent(t.scene);
            this.data.entityId = e ? e.split("#")[1] : "";
        }
        wx.showLoading({
            title: "加载中…"
        });
    },
    onShow: function() {
        this.fetchInvitationInfo(), this.setData({
            inviteImg: o[Math.floor(6 * Math.random())]
        });
    },
    fetchInvitationInfo: function() {
        var t = (0, i.default)(n.default.mark(function t(e) {
            var i;
            return n.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, t.next = 3, wx.lego.fetchCouponInvitationInfo(this.data.entityId);

                  case 3:
                    i = t.sent, this.setData({
                        invitationInfo: i.data,
                        trainingCount: i.data.trainingCount,
                        inviter: i.data.inviter,
                        promotion: i.data.promotion
                    }), "function" == typeof e && e(), t.next = 12;
                    break;

                  case 8:
                    t.prev = 8, t.t0 = t.catch(0), console.log(t.t0), wx.showToast({
                        title: t.t0.data.text || "网络差，刷新重试",
                        icon: "none",
                        duration: 2e3
                    });

                  case 12:
                    wx.hideLoading();

                  case 13:
                  case "end":
                    return t.stop();
                }
            }, t, this, [ [ 0, 8 ] ]);
        }));
        return function(e) {
            return t.apply(this, arguments);
        };
    }(),
    acceptInvitSuccess: function() {
        var t = this;
        this.fetchInvitationInfo(function() {
            t.data.block = !1, t.setData({
                success: !0,
                showBtn: !0
            }), wx.hideLoading(), wx.showToast({
                title: "优惠券领取成功",
                icon: "none",
                duration: 2e3
            });
        });
    }
}, "acceptInvitation", function() {
    var t = this;
    this.data.promotion.hasBound || this.data.block || (this.data.block = !0, wx.showLoading({
        title: "加载中…"
    }), wx.lego.acceptCouponInvitation({
        entityId: this.data.entityId,
        type: "newUserInvitation"
    }).then(function(e) {
        t.acceptInvitSuccess();
    }).catch(function(e) {
        t.data.block = !1, wx.hideLoading(), 401 === e.statusCode ? (0, a.doLogin)() : (t.setData({
            showBtn: !0
        }), wx.showToast({
            title: e.data.text,
            icon: "none",
            duration: 2e3
        }));
    }));
}));