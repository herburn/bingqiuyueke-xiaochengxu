var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/helpers/defineProperty")), a = e(require("../../../@babel/runtime/regenerator")), o = e(require("../../../@babel/runtime/helpers/asyncToGenerator")), i = require("../../utils/wxfunction"), n = getApp();

Page({
    data: {
        visible: 1,
        selectionSelected: "",
        stars: 0,
        content: "",
        textareaFocus: !1,
        uploadPic: [],
        loadFiles: [],
        starDesc: {
            1: "非常不满意 · 各方面都差",
            2: "不满意 · 比较差",
            3: "一般 · 还需改善",
            4: "比较满意 · 还需改善",
            5: "非常满意 · 无可挑剔"
        },
        showLoading: !1,
        personalReviewInfo: null,
        orderNo: "",
        orderInfo: null,
        isIOS: !1,
        tagConfigs: null,
        reviewTag: [],
        scrollTop: 0
    },
    onLoad: function(e) {
        this.data.orderNo = e.orderNo, this.fetchPersonalReviewInfo();
        var t = wx.getSystemInfoSync();
        this.setData({
            isIOS: "ios" == t.platform,
            orderInfo: n.globalData.publisherOrderInfo
        });
    },
    onUnload: function() {
        this.data.orderInfo && wx.lego.publishModalRead(this.data.orderInfo.scheduleId, {}), 
        n.globalData.publisherOrderInfo = null;
    },
    fetchPersonalReviewInfo: function() {
        var e = (0, o.default)(a.default.mark(function e() {
            var t;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, wx.lego.fetchPersonalReviewInfo(this.data.orderNo);

                  case 2:
                    t = e.sent, this.data.personalReviewInfo = t.data, this.setData({
                        personalReviewInfo: this.data.personalReviewInfo,
                        tagConfigs: this.data.personalReviewInfo.reviewTags ? this.data.personalReviewInfo.reviewTags.starTags : null
                    }), n.sensors.track("web_gym_comment_publish_show", {
                        type: this.data.personalReviewInfo.questionItem ? 1 : 0
                    });

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    isVisibleChange: function(e) {
        var t = e.currentTarget.dataset.visible;
        this.setData({
            visible: t
        });
    },
    chooseSelection: function(e) {
        var t = e.currentTarget.dataset.item;
        this.setData({
            selectionSelected: t
        });
    },
    chooseReviewTagSelections: function(e) {
        var a = e.currentTarget.dataset.index;
        this.setData((0, t.default)({}, "reviewTag[".concat(a, "].selected"), !this.data.reviewTag[a].selected));
    },
    formatReviewTag: function(e) {
        var t = [];
        return e.forEach(function(e) {
            t.push({
                text: e,
                selected: !1
            });
        }), t;
    },
    getSubmitResult: function(e) {
        var t = [];
        return e.forEach(function(e) {
            e.selected && t.push(e.text);
        }), t;
    },
    makeStar: function(e) {
        var t = this;
        null != e.target.dataset.index && (this.data.stars || wx.createSelectorQuery().select(".publisher-card").boundingClientRect(function(e) {
            e && e.top && (wx.pageScrollTo({
                scrollTop: e.top
            }), t.data.scrollTop = e.top);
        }).exec(), this.setData({
            stars: e.target.dataset.index + 1,
            reviewTag: this.data.tagConfigs ? this.formatReviewTag(this.data.tagConfigs[e.target.dataset.index]) : []
        }));
    },
    descInput: function(e) {
        this.setData({
            content: e.detail.value
        });
    },
    bindfocus: function() {
        this.setData({
            textareaFocus: !0
        });
    },
    bindblur: function() {
        this.setData({
            textareaFocus: !1
        });
    },
    upload: function() {
        var e = this;
        wx.chooseImage({
            count: 9,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(t) {
                e.setData({
                    uploadPic: e.data.uploadPic.concat(t.tempFilePaths).slice(0, 9)
                }), 4 == e.data.uploadPic.length && wx.pageScrollTo({
                    scrollTop: e.data.scrollTop + 135
                }), 8 == e.data.uploadPic.length && wx.pageScrollTo({
                    scrollTop: e.data.scrollTop + 270
                });
            }
        });
    },
    previewImg: function(e) {
        var t = e.currentTarget.dataset.item;
        t && wx.previewImage({
            current: t,
            urls: this.data.uploadPic
        });
    },
    deleteImage: function(e) {
        var t = this, a = e.currentTarget.dataset.item, o = this.data.uploadPic.indexOf(a);
        wx.showModal({
            title: "删除这张吗？",
            success: function(e) {
                e.confirm && (t.data.uploadPic.splice(o, 1), t.setData({
                    uploadPic: t.data.uploadPic
                }));
            }
        });
    },
    submit: function() {
        var e = this;
        if (this.data.stars) if (this.data.personalReviewInfo.questionItem && !this.data.selectionSelected) wx.showToast({
            title: "请选择问题答案",
            icon: "none"
        }); else {
            if (this.data.showLoading) return;
            this.data.showLoading = !0, this.setData({
                showLoading: !0
            });
            var t = [];
            this.data.uploadPic.forEach(function(a, o) {
                t.push(e.upLoadFiles(o));
            }), Promise.all(t).then(function(t) {
                var a = [];
                e.data.loadFiles.sort(function(e, t) {
                    return e.index > t.index;
                }).forEach(function(e) {
                    a.push(e.url);
                });
                var o = e.data.reviewTag.filter(function(e) {
                    return e.selected;
                }), i = {
                    content: e.data.content,
                    images: a,
                    stars: e.data.stars,
                    traininglog: e.data.orderInfo.trainingLogId,
                    visible: e.data.visible,
                    type: 0,
                    orderNo: e.data.personalReviewInfo.questionItem ? e.data.orderNo : "",
                    questionId: e.data.personalReviewInfo.questionItem ? e.data.personalReviewInfo.questionItem.id : "",
                    selected: e.data.selectionSelected || "",
                    tags: e.getSubmitResult(o)
                };
                wx.lego.publishComment(i).then(function(e) {
                    n.sensors.track("web_gym_comment_publish", {
                        star: i.stars,
                        public: i.visible,
                        content: i.content.length > 0,
                        pic: i.images.length > 0
                    }), n.globalData.finishReview = !0, wx.navigateBack();
                }).catch(function(e) {
                    wx.showToast({
                        title: e.data.text || "网络差，请重试",
                        icon: "none"
                    });
                }).then(function() {
                    e.data.showLoading = !1, e.setData({
                        showLoading: !1
                    });
                });
            });
        } else wx.showToast({
            title: "请选择评分",
            icon: "none"
        });
    },
    upLoadFiles: function(e) {
        var t = this;
        return (0, i.wxUploadFile)(this.data.uploadPic[e], "keepland/".concat(e, "_").concat(new Date().getTime(), ".jpg")).then(function(a) {
            var o = JSON.parse(a);
            0 == o.errorCode && t.data.loadFiles.push({
                index: e,
                url: o.data.url
            });
        });
    }
});