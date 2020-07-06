Page({
    data: {
        scheduleId: "",
        campId: "",
        bookList: [],
        navTitle: "",
        lastId: "",
        limit: 30,
        canLoad: !0
    },
    previewImg: function(a) {
        var t = a.currentTarget.dataset.src;
        t && wx.previewImage({
            urls: [ t ]
        });
    },
    fetchOrderUserList: function() {
        var a = this;
        this.data.canLoad = !1, (this.data.scheduleId ? wx.lego.fetchBookUsers(this.data.scheduleId, this.data.lastId, this.data.limit) : wx.lego.fetchCampBookUsers(this.data.campId)).then(this.data.scheduleId, this.data.lastId, this.data.limit).then(function(t) {
            if (t.data.bookedUsers) {
                var d = t.data.bookedUsers;
                a.setData({
                    bookList: a.data.bookList.concat(d)
                }), a.data.lastId = t.data.lastId, a.data.canLoad = d.length == a.data.limit;
            } else if (t.data) {
                var e = t.data;
                a.setData({
                    bookList: e
                });
            }
            a.data.navTitle || a.setData({
                navTitle: "已预约".concat(t.data.bookedCount, "/").concat(t.data.capacity)
            });
        });
    },
    onLoad: function(a) {
        this.data.scheduleId = a.scheduleId, this.data.campId = a.campId, this.fetchOrderUserList();
    },
    onReachBottom: function() {
        this.data.canLoad && this.fetchOrderUserList();
    }
});