Component({
    options: {
        addGlobalClass: !0
    },
    properties: {
        comments: {
            type: Array,
            value: []
        }
    },
    data: {},
    methods: {
        natoDetail: function(e) {
            var t = e.currentTarget.dataset.reviewid;
            wx.navigateTo({
                url: "/app/pages/commentDetail/commentDetail?reviewId=".concat(t)
            });
        },
        previewBanner: function(e) {
            var t = e.currentTarget.dataset.item.review.images, a = e.currentTarget.dataset.imageitem;
            wx.previewImage({
                current: a || t[0],
                urls: t
            });
        }
    }
});