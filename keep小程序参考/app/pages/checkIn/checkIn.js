var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), r = e(require("../../../@babel/runtime/regenerator")), t = e(require("../../../@babel/runtime/helpers/asyncToGenerator")), a = require("../../utils/util");

Page({
    data: {
        gymId: "",
        source: ""
    },
    onLoad: function(e) {
        this.data.gymId = e.gymId, this.data.source = e.source || "", e.usersource && (0, 
        a.setUserSource)(e.usersource), e.shared && (0, a.setShared)(e.shared), this.userCheckIn(), 
        console.log("gymId -> ", this.data.gymId);
    },
    userCheckIn: function() {
        var e = (0, t.default)(r.default.mark(function e() {
            var t, o;
            return r.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, t = {
                        gymId: this.data.gymId
                    }, e.next = 4, wx.lego.userCheckIn(t);

                  case 4:
                    "roomSchedule" === (o = e.sent).data.checkInType ? wx.redirectTo({
                        url: "/app/pages/courseOrder/courseOrder?source=checkIn&orderNo=".concat(o.data.orderNo)
                    }) : wx.redirectTo({
                        url: "/app/pages/campOrder/campOrder?orderNo=".concat(o.data.orderNo)
                    }), e.next = 12;
                    break;

                  case 8:
                    e.prev = 8, e.t0 = e.catch(0), console.log(e.t0), 400 === e.t0.statusCode ? wx.navigateTo({
                        url: "/app/pages/checkInFailed/checkInFailed"
                    }) : 401 === e.t0.statusCode ? (0, a.doLogin)() : wx.showToast({
                        title: e.t0.data.text,
                        icon: "none",
                        duration: 2e3
                    });

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 0, 8 ] ]);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }()
});