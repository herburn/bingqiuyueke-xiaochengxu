var t = require("../../utils/util"), e = require("../../utils/schedule"), a = getApp();

Page({
    data: {
        detail: null,
        reviewId: "",
        source: "",
        courseBaseId: "",
        commentText: "",
        inputFocus: !1,
        placeholder: "写评论",
        replyId: "",
        toView: "",
        noMore: !0,
        commentResponseList: [],
        lastId: "",
        limit: 20,
        maskHidden: !0,
        shareImagePath: "",
        reviewStatu: "",
        iphonex: !1,
        totalNavHeight: 68,
        palette: {
            width: "420px",
            height: "336px",
            background: "#20B2AA",
            views: [ {
                type: "image",
                css: {
                    width: "420px",
                    height: "336px",
                    mode: "scaleToFill"
                },
                url: "https://static1.keepcdn.com/FkhhqepbEnn58qV9biD-OviSaPMp"
            } ]
        }
    },
    displayImage: function(t) {
        var e = t.currentTarget.dataset.imgitem, a = t.currentTarget.dataset.images;
        wx.previewImage({
            current: e,
            urls: a
        });
    },
    deleteComment: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.showActionSheet({
            itemList: [ "删除评价" ],
            itemColor: "#333333",
            success: function(t) {
                wx.lego.deleteComment(e).then(function(t) {
                    wx.navigateBack();
                }).catch(function(t) {
                    wx.showToast({
                        title: "删除失败",
                        icon: "none",
                        duration: 1500
                    }), console.log(t);
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    checkoutReplyType: function(t) {
        var e = t.currentTarget.dataset.item, a = e.author.name, i = e.commentId;
        this.setData({
            maskHidden: !1,
            inputFocus: !0,
            placeholder: "回复" + a
        }), this.data.replyId = i;
    },
    dismissMask: function() {
        this.setData({
            maskHidden: !0,
            inputFocus: !1,
            placeholder: "写评论"
        }), this.data.replyId = "";
    },
    commentInput: function(t) {
        this.setData({
            commentText: t.detail.value
        });
    },
    loadMore: function() {
        this.data.noMore || this.getCommentResponseList();
    },
    getFoucus: function() {
        this.setData({
            inputFocus: !0,
            maskHidden: !1
        });
    },
    replyComment: function() {
        var e = this;
        this.setData({
            maskHidden: !0
        }), this.data.commentText.trim() ? wx.lego.replyComment({
            content: this.data.commentText,
            reviewId: this.data.reviewId,
            replyId: this.data.replyId
        }).then(function(t) {
            a.sensors.track("web_gym_comment_reply", {
                client: "mini_program"
            }), wx.showToast({
                title: e.data.replyId ? "回复成功" : "评论成功！",
                icon: "none",
                duration: 1500
            }), e.resetDatas(), e.onShow();
        }).catch(function(e) {
            401 == e.statusCode ? (0, t.doLogin)() : wx.showToast({
                title: e.data.text,
                icon: "none",
                duration: 2e3
            });
        }) : wx.showToast({
            title: "说点什么吧",
            icon: "none",
            duration: 1500
        });
    },
    resetDatas: function() {
        this.data.replyId = "", this.setData({
            inputFocus: !1,
            commentText: "",
            placeholder: "写评论"
        });
    },
    onShareAppMessage: function() {
        var t = "/app/pages/commentDetail/commentDetail?reviewId=" + this.data.reviewId;
        return {
            title: this.data.detail.review.content,
            path: t,
            imageUrl: this.data.shareImagePath
        };
    },
    onShow: function() {
        this.getCommentDetail(), this.getCommentResponseList();
    },
    onLoad: function(t) {
        this.data.reviewId = t.reviewId, a.sensors.track("web_gym_comment_view", {
            client: "mini_program"
        }), this.setData({
            toView: t.toView || ""
        });
    },
    onReady: function() {
        var t = getCurrentPages();
        if (t.length >= 2) {
            var i = t[t.length - 2].route;
            this.data.source = (0, e.getPathName)(i);
        }
        this.setData({
            iphonex: a.globalData.iphonex,
            totalNavHeight: a.globalData.customNav.totalNavHeight
        });
    },
    getCommentDetail: function() {
        var e = this;
        wx.lego.getCommentDetail(this.data.reviewId, this.data.lastId, this.data.limit).then(function(a) {
            e.data.detail = a.data, e.data.reviewStatu = e.data.detail.review.stateValue, e.data.courseBaseId = e.data.detail.courseBaseId, 
            e.data.detail.review.createTime = (0, t.formateTime)(e.data.detail.review.createTime), 
            e.data.reviewStatu < 20 && wx.hideShareMenu(), e.setData({
                detail: e.data.detail,
                reviewStatu: e.data.reviewStatu
            }), e.drawShareImage();
        });
    },
    getCommentResponseList: function() {
        var t = this;
        wx.lego.getCommentResponseList(this.data.reviewId, this.data.lastId, this.data.limit).then(function(e) {
            var a = e.data;
            t.data.noMore = a.length < t.data.limit, a.length && (t.data.lastId = a[a.length - 1].commentId), 
            t.data.commentResponseList = t.data.commentResponseList.concat(a), t.setData({
                noMore: t.data.noMore,
                commentResponseList: t.data.commentResponseList
            });
        }).catch(function(t) {
            console.log(t);
        });
    },
    drawShareImage: function() {
        var t = this, a = wx.createCanvasContext("shareImgCanvas"), i = (0, e.breakString)(this.data.detail.schedule.scheduleName);
        wx.getImageInfo({
            src: "https://static1.keepcdn.com/2019/04/24/10/1556072924633_420x336.png",
            success: function(e) {
                var n = e.path;
                a.drawImage(n, 0, 0, 420, 336), a.fillStyle = "#ffffff", a.setGlobalAlpha(1), a.setFontSize(40), 
                a.fillText(i.EN, 32, 96), a.fillText(i.CN, 32, 144), a.setFontSize(24), a.setGlobalAlpha(.6), 
                a.fillText(t.data.detail.review.createTime, 32, 46), a.fillText(t.data.detail.coachInfos[0].name, 32, 262), 
                a.fillText(t.data.detail.gymName, 32, 294), a.draw(!0, function() {
                    wx.canvasToTempFilePath({
                        canvasId: "shareImgCanvas",
                        success: function(e) {
                            t.setData({
                                shareImagePath: e.tempFilePath
                            });
                        }
                    });
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    navCoach: function(t) {
        var e = t.currentTarget.dataset.coach;
        if ("coach" == this.data.source) {
            var a = getCurrentPages();
            a[a.length - 2].options.coachId == e ? wx.navigateBack() : wx.navigateTo({
                url: "/app/pages/coach/coach?coachId=" + e
            });
        } else wx.navigateTo({
            url: "/app/pages/coach/coach?coachId=" + e
        });
    },
    navCourse: function() {
        "schedule" == this.data.source ? wx.navigateBack() : wx.navigateTo({
            url: "/app/pages/courseDetail/courseDetail?courseBaseId=" + this.data.courseBaseId
        });
    }
});