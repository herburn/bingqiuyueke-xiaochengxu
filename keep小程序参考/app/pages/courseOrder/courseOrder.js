var e = require("../../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../../@babel/runtime/helpers/defineProperty")), a = e(require("../../../@babel/runtime/regenerator")), n = e(require("../../../@babel/runtime/helpers/asyncToGenerator")), r = require("../../utils/wxfunction"), o = require("../../utils/util"), i = e(require("../../config/host")), s = getApp();

Page({
    data: {
        db11: !1,
        course: null,
        order: null,
        countdownStr: "",
        totalNavHeight: 68,
        orderNo: "",
        scheduleId: "",
        source: "",
        wristbandId: "",
        signedInSuccess: !1,
        currentBpm: null,
        canFetchbpm: !0,
        calorieRank: 0,
        shareInfo: null,
        newCourseEnvelopes: null,
        tempFilePath: "",
        canSaveTrainingData: !0,
        transferOrderInfo: null,
        refundOrderInfo: null,
        canSubmit: !0,
        monthAt: "",
        medalCheckin: null,
        operationPath: i.default.keeplandWeb + "/cardCollect/",
        ruleDetails: [ "距离课程开始 4 小时内不支持取消预约", "多人入场券仅支持购买者操作取消预约，取消后该订单内所有入场券均失效", "使用门店新人券的课程无法转课", "其他课程在结束前都支持转课给朋友，课程被好友领取后，不支持取消预约及二次转课" ],
        newCourseEnvelopesHide: !0,
        popupPackageRecomme: !1,
        floatPackageRecomme: !1,
        useKeepBand: !1,
        adiLink: "",
        showBpmLoading: !1,
        showBpmError: !1,
        anchor: !1,
        showPreviewImg: !1,
        previewCurrent: 0,
        showSuccessTips: !1,
        iphonex: !1
    },
    onLoad: function(e) {
        this.data.orderNo = e.orderNo, this.data.scheduleId = e.scheduleId || "", this.data.source = e.source, 
        e.usersource && (0, o.setUserSource)(e.usersource), e.shared && (0, o.setShared)(e.shared), 
        (0 == e.opened_from || e.opened_from) && s.sensors.track("web_gym_order_detail", {
            opened_from: e.opened_from
        }), e.anchor && (this.data.anchor = e.anchor);
    },
    onReady: function() {
        this.setData({
            totalNavHeight: s.globalData.customNav.totalNavHeight
        }), wx.hideShareMenu();
    },
    onShow: function() {
        var e = (0, n.default)(a.default.mark(function e() {
            var t = this;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, this.fetchData();

                  case 2:
                    s.globalData.finishReview && this.scrollToReview(), wx.lego.fetchDb11Mine().then(function(e) {
                        t.setData({
                            db11: e.data
                        });
                    }), this.setData({
                        iphonex: s.globalData.iphonex
                    });

                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    banMove: function() {
        return wx.stopPullDownRefresh(), !1;
    },
    progressCircle: function() {
        var e = this;
        this.context = wx.createCanvasContext("keepLine");
        var t = 0;
        clearInterval(this.circleTimer), this.circleTimer = setInterval(function() {
            t += .1, e.drawCircle(t), t >= 100 && (clearInterval(e.circleTimer), e.setData({
                showBpmLoading: !1,
                showBpmError: !0
            }));
        }, 25);
    },
    drawCircle: function(e) {
        this.context.clearRect(0, 0, 140, 140);
        var t = 1.5 * Math.PI, a = e / 100 * Math.PI * 2;
        this.context.arc(70, 70, 67, t, a + t, !1), this.context.setLineWidth(6), this.context.setStrokeStyle("#24C789"), 
        this.context.lineCap = "round", this.context.stroke(), this.context.draw();
    },
    readyKeep: function() {
        var e = this, t = !this.data.showBpmLoading;
        this.setData({
            showBpmLoading: t
        }, function() {
            t ? (e.progressCircle(), e.setData({
                showBpmError: !1
            })) : clearInterval(e.circleTimer);
        });
    },
    changeKeepWristband: function() {
        var e = this;
        this.setData({
            useKeepBand: !this.data.useKeepBand
        }), this.data.useKeepBand ? (this.setData((0, t.default)({}, "course.braceletInfo.currentBind", "bracelet")), 
        wx.lego.changeKeepWristband({
            scheduleId: this.data.order.orderDetailInfo.scheduleId
        }).then(function() {
            e.bpmArr = [];
        }), clearInterval(this.bpmTimer), this.bpmTimer = setInterval(function() {
            e.data.canFetchbpm && (e.data.canFetchbpm = !1, e.fetchUserCurrentBpm());
        }, 3e3)) : (this.setData((0, t.default)({}, "course.braceletInfo.currentBind", "")), 
        this.changeWristband());
    },
    courseControl: function(e) {
        var t = this;
        e.braceletInfo && ("bracelet" === e.braceletInfo.currentBind && (e.braceletInfo.wristbandId = ""), 
        e.braceletInfo.braceletBind && e.braceletInfo.gymBraceletSwitch && !e.braceletInfo.currentBind && (e.braceletInfo.currentBind = "bracelet", 
        e.braceletInfo.wristbandId = "")), e.promotingInfo.cooperationResources && e.promotingInfo.cooperationResources.link && this.setData({
            adiLink: encodeURIComponent(e.promotingInfo.cooperationResources.link)
        }), this.setData({
            course: e
        }), wx.lego.medalCheckin(e.gymInfo.gymId).then(function(e) {
            t.setData({
                medalCheckin: e.data
            });
        });
    },
    orderControl: function(e, t) {
        var a = this;
        if (2 === e.userBookStatus) this.setData({
            countdownStr: ""
        }), e.scheduleInfo.countdownSeconds > 0 && this.processCounting(e.scheduleInfo.countdownSeconds), 
        "checkIn" !== this.data.source || e.scheduleInfo.enableCheckin || wx.showToast({
            title: "未到签到时间",
            icon: "none",
            duration: 2e3
        }), 0 !== e.orderDetailInfo.invitationType || e.orderDetailInfo.invitee || (this.data.shareInfo = {
            title: "你有一张入场券，点击领取",
            imageUrl: "https://static1.keepcdn.com/2018/05/09/16/1525854940755_420x336.png",
            path: "/app/pages/invitation/invitation?invitationCode=".concat(e.orderDetailInfo.invitationCode)
        }); else if (4 === e.userBookStatus) (t.braceletInfo.wristbandId || t.braceletInfo.braceletBind && t.braceletInfo.gymBraceletSwitch) && (this.data.wristbandId = t.braceletInfo.wristbandId, 
        this.data.signedInSuccess = !0, this.fetchUserCurrentBpm(), clearInterval(this.bpmTimer), 
        this.bpmTimer = setInterval(function() {
            a.data.canFetchbpm && (a.data.canFetchbpm = !1, a.fetchUserCurrentBpm());
        }, 3e3)), 0 !== e.orderDetailInfo.invitationType || e.orderDetailInfo.invitee || (this.data.shareInfo = {
            title: "你有一张入场券，点击领取",
            imageUrl: "https://static1.keepcdn.com/2018/05/09/16/1525854940755_420x336.png",
            path: "/app/pages/invitation/invitation?invitationCode=".concat(e.orderDetailInfo.invitationCode)
        }), this.setData({
            wristbandId: this.data.wristbandId,
            useKeepBand: t.braceletInfo.braceletBind,
            signedInSuccess: this.data.signedInSuccess
        }); else if (5 === e.userBookStatus || 6 === e.userBookStatus) {
            e.packageRecommendInfo && (this.data.popupPackageRecomme = e.packageRecommendInfo.popupPackageRecommend, 
            this.data.floatPackageRecomme = e.packageRecommendInfo.floatPackageRecommend), !t.promotingInfo.newCourseEnvelopes || this.data.popupPackageRecomme || this.data.floatPackageRecomme || (this.data.newCourseEnvelopes = t.promotingInfo.newCourseEnvelopes, 
            this.data.newCourseEnvelopes.trainingLogId = t.userTrainingInfo.trainingLogId, this.data.shareInfo = {
                title: "我是第".concat(this.data.newCourseEnvelopes.rank, "位打卡新课的Keeper，送你一张专属优惠券"),
                path: "/app/pages/coupon/coupon?trainingLogId=".concat(t.userTrainingInfo.trainingLogId),
                imageUrl: this.data.newCourseEnvelopes.imgUrl || "https://static1.keepcdn.com/2019/04/08/19/1554723108884_420x336.png"
            }), t.reviewInfo.popupReviewTxtBox && this.jumpToPublish(e, t);
            var n = 0;
            if (t.userTrainingInfo.calorieRanking.forEach(function(e, a) {
                e.userId === t.userPersonalInfo.id && (n = a + 1);
            }), this.setData({
                calorieRank: n,
                popupPackageRecomme: this.data.popupPackageRecomme,
                floatPackageRecomme: this.data.floatPackageRecomme,
                newCourseEnvelopes: this.data.newCourseEnvelopes
            }), this.data.anchor) {
                var r = 5 == e.userBookStatus ? 56 + s.globalData.customNav.totalNavHeight : s.globalData.customNav.totalNavHeight;
                wx.nextTick(function() {
                    wx.createSelectorQuery().select("#train_photo").boundingClientRect(function(e) {
                        if (e && e.top) {
                            var t = e.top - r;
                            wx.pageScrollTo({
                                scrollTop: t
                            });
                        }
                    }).exec();
                });
            }
        }
        this.setData({
            order: e,
            monthAt: e.scheduleInfo.date.substr(0, 6)
        }), this.data.orderNo = e.orderDetailInfo.orderNo;
    },
    fetchData: function() {
        var e = (0, n.default)(a.default.mark(function e() {
            var t = this;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", Promise.all([ wx.lego.orderCourseInfo(this.data.orderNo, this.data.scheduleId), wx.lego.orderDetail(this.data.orderNo, this.data.scheduleId) ]).then(function(e) {
                        var a = e[0].data, n = e[1].data;
                        t.courseControl(a), t.orderControl(n, a);
                    }).catch(function(e) {
                        console.log(e), 401 === e.statusCode && (0, o.doLogin)();
                    }));

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    gotoPublish: function() {
        this.jumpToPublish(this.data.order, this.data.course);
    },
    jumpCampDetail: function() {
        wx.navigateTo({
            url: "/app/pages/campDetail/campDetail?campId=".concat(this.data.course.coachCampDetail.campId)
        });
    },
    jumpToPublish: function(e, t) {
        s.globalData.publisherOrderInfo = {
            coachInfos: e.scheduleInfo.coachInfos,
            scheduleId: e.orderDetailInfo.scheduleId,
            trainingLogId: t.userTrainingInfo.trainingLogId
        }, wx.navigateTo({
            url: "/app/pages/publisher/publisher?orderNo=".concat(e.orderDetailInfo.orderNo)
        });
    },
    fetchUserCurrentBpm: function() {
        var e = (0, n.default)(a.default.mark(function e() {
            var t;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, wx.lego.fetchUserCurrentBpm();

                  case 3:
                    t = e.sent, this.data.canFetchbpm = !0, this.data.currentBpm = t.data, this.bpmArr ? (this.bpmArr.push(t.data.timestamp), 
                    this.bpmArr.length > 4 && (this.bpmArr[0] == t.data.timestamp && (this.data.currentBpm = ""), 
                    this.bpmArr.shift())) : this.bpmArr = [ t.data.timestamp ], this.setData({
                        currentBpm: this.data.currentBpm
                    }), this.data.currentBpm && this.data.currentBpm.bpm && this.data.showBpmLoading && (this.setData({
                        showBpmLoading: !1,
                        showBpmError: !1
                    }), clearInterval(this.circleTimer)), e.next = 15;
                    break;

                  case 11:
                    e.prev = 11, e.t0 = e.catch(0), console.log(e.t0), 401 === e.t0.statusCode ? (0, 
                    o.doLogin)() : this.data.canFetchbpm = !0;

                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 0, 11 ] ]);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    processCounting: function(e) {
        var t = this;
        clearInterval(this.countdownTimer), this.countdownTimer = setInterval(function() {
            t.countdownFormat(--e);
        }, 1e3);
    },
    countdownFormat: function(e) {
        e < 1 && (clearInterval(this.countdownTimer), this.setData({
            countdownStr: ""
        }));
        var t = this.formatNumber(e % 60), a = parseInt(e / 60), n = this.formatNumber(a % 60), r = this.formatNumber(parseInt(a / 60));
        this.setData({
            countdownStr: "".concat(r, ":").concat(n, ":").concat(t)
        });
    },
    formatNumber: function(e) {
        return (e = parseInt(e)) < 10 ? "0" + e : e;
    },
    move: function() {
        if (5 == this.data.order.userBookStatus || 6 == this.data.order.userBookStatus) {
            if (!this.data.newCourseEnvelopesHide) return;
            this.setData({
                newCourseEnvelopesHide: !1
            });
        }
    },
    end: function() {
        var e = this;
        5 != this.data.order.userBookStatus && 6 != this.data.order.userBookStatus || (clearTimeout(this.endTimer), 
        this.endTimer = setTimeout(function() {
            e.setData({
                newCourseEnvelopesHide: !0
            });
        }, 800));
    },
    scrollToReview: function() {
        wx.showToast({
            title: "评价成功",
            icon: "none"
        }), wx.nextTick(function() {
            wx.createSelectorQuery().select("#review").boundingClientRect(function(e) {
                e && e.top && (wx.pageScrollTo({
                    scrollTop: e.top - 250
                }), s.globalData.finishReview = !1);
            }).exec();
        });
    },
    saveTrainingData: function() {
        var e = (0, n.default)(a.default.mark(function e() {
            var t, n, o;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (t = this.data.course.promotingInfo.operationCardItem, n = t ? t.scheduleOperationId : "", 
                    s.sensors.track("web_gym_traininglog_save", {
                        schedule_operation_id: n
                    }), !this.data.tempFilePath) {
                        e.next = 6;
                        break;
                    }
                    return this.saveImage(this.data.tempFilePath), e.abrupt("return");

                  case 6:
                    if (e.prev = 6, !this.data.canSaveTrainingData) {
                        e.next = 16;
                        break;
                    }
                    return this.data.canSaveTrainingData = !1, wx.showLoading({
                        title: "图片生成中"
                    }), o = "".concat(i.default.download, "/wxphoto?url=").concat(encodeURIComponent(i.default.keeplandWeb + "/createreport/" + this.data.course.userTrainingInfo.trainingLogId)), 
                    e.next = 13, (0, r.wxDownloadFile)(o);

                  case 13:
                    this.data.tempFilePath = e.sent, wx.hideLoading(), this.saveImage(this.data.tempFilePath);

                  case 16:
                    e.next = 24;
                    break;

                  case 18:
                    e.prev = 18, e.t0 = e.catch(6), console.log(e.t0), this.data.canSaveTrainingData = !0, 
                    wx.showToast({
                        title: "图片生成失败,请重试",
                        icon: "none",
                        duration: 2e3
                    }), wx.hideLoading();

                  case 24:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 6, 18 ] ]);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    saveImage: function() {
        var e = (0, n.default)(a.default.mark(function e(t) {
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, (0, r.wxSaveImageToPhotosAlbum)(t);

                  case 3:
                    this.data.canSaveTrainingData = !0, wx.showToast({
                        title: "已保存到本地相册，快去分享吧",
                        icon: "none",
                        duration: 2e3
                    }), e.next = 11;
                    break;

                  case 7:
                    e.prev = 7, e.t0 = e.catch(0), console.log(e.t0), this.data.canSaveTrainingData = !0;

                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 0, 7 ] ]);
        }));
        return function(t) {
            return e.apply(this, arguments);
        };
    }(),
    moreRank: function(e) {
        var t = e.currentTarget.dataset, a = encodeURIComponent("".concat(i.default.keeplandWeb, "/schedule/").concat(t.scheduleid, "/rank?userId=").concat(t.userid, "&pagesource=wxapp"));
        wx.navigateTo({
            url: "/app/pages/trainingRank/trainingRank?url=".concat(a)
        });
    },
    getQuery: function(e) {
        var t = e.match(/(?:&|\?)gymId=([^&]*)/g);
        return t[t.length - 1].split("=")[1];
    },
    scanCode: function() {
        var e = (0, n.default)(a.default.mark(function e() {
            var t, n;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (this.data.order.scheduleInfo.enableCheckin) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return");

                  case 2:
                    return e.prev = 2, e.next = 5, (0, r.wxScanCode)();

                  case 5:
                    (t = e.sent).path ? (n = this.getQuery(t.path), wx.redirectTo({
                        url: "/app/pages/checkIn/checkIn?gymId=".concat(n, "&source=order")
                    })) : wx.showToast({
                        title: "二维码不正确，请重新扫码！",
                        icon: "none",
                        duration: 2e3
                    }), e.next = 13;
                    break;

                  case 9:
                    e.prev = 9, e.t0 = e.catch(2), wx.showToast({
                        title: "扫码失败，请重新扫码！",
                        icon: "none",
                        duration: 2e3
                    }), console.log(e.t0);

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 2, 9 ] ]);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    changeWristband: function() {
        var e;
        this.setData((e = {
            wristbandId: "",
            signedInSuccess: !1
        }, (0, t.default)(e, "course.braceletInfo.currentBind", ""), (0, t.default)(e, "useKeepBand", !1), 
        e)), this.data.canFetchbpm = !0, clearInterval(this.bpmTimer);
    },
    changeWristbandId: function(e) {
        this.setData({
            wristbandId: e.detail.value
        });
    },
    bindWristband: function() {
        var e = (0, n.default)(a.default.mark(function e() {
            var t, n = this;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (this.data.wristbandId && this.data.canSubmit) {
                        e.next = 2;
                        break;
                    }
                    return e.abrupt("return");

                  case 2:
                    return e.prev = 2, this.data.canSubmit = !1, t = {
                        wristbandId: this.data.wristbandId,
                        scheduleId: this.data.order.orderDetailInfo.scheduleId
                    }, e.next = 7, wx.lego.bindWristband(t);

                  case 7:
                    this.setData({
                        signedInSuccess: !0
                    }), this.data.canSubmit = !0, wx.showToast({
                        title: "绑定成功",
                        icon: "none",
                        duration: 2e3
                    }), clearInterval(this.bpmTimer), this.bpmTimer = setInterval(function() {
                        n.data.canFetchbpm && (n.data.canFetchbpm = !1, n.fetchUserCurrentBpm());
                    }, 3e3), e.next = 19;
                    break;

                  case 14:
                    e.prev = 14, e.t0 = e.catch(2), console.log(e.t0), this.data.canSubmit = !0, 401 === e.t0.statusCode ? (0, 
                    o.doLogin)() : wx.showToast({
                        title: e.t0.data.text,
                        icon: "none",
                        duration: 2e3
                    });

                  case 19:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 2, 14 ] ]);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    transferOrder: function() {
        var e = (0, n.default)(a.default.mark(function e() {
            var t, n = this;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, wx.lego.createTransferOrder(this.data.orderNo || this.data.order.orderDetailInfo.orderNo);

                  case 3:
                    t = e.sent, this.data.shareInfo = {
                        title: "你有一张入场券，点击领取",
                        imageUrl: "https://static1.keepcdn.com/2018/05/09/16/1525854940755_420x336.png",
                        path: "/app/pages/invitation/invitation?invitationCode=".concat(t.data.transferCode)
                    }, this.setData({
                        transferOrderInfo: {
                            title: "转课口令",
                            content: "朋友输入同样的 4 个数字，才能领取入场券",
                            type: "strong",
                            transferToken: t.data.verificationCode,
                            confirmText: "继续转课",
                            cancelText: "取消",
                            openType: "share",
                            confirm: function() {},
                            cancel: function() {
                                n.setData({
                                    transferOrderInfo: null
                                });
                            }
                        }
                    }), e.next = 12;
                    break;

                  case 8:
                    e.prev = 8, e.t0 = e.catch(0), console.log(e.t0), wx.showToast({
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
    }(),
    orderPreRefund: function() {
        var e = this, t = "", a = "";
        wx.lego.orderPreRefund(this.data.orderNo || this.data.order.orderDetailInfo.orderNo).then(function(n) {
            t = n.data.message;
            var r = n.data.code;
            a = "2" == r ? "课包已过期" : "4" == r ? "优惠券已过期" : "确定取消预约？", e.setData({
                refundOrderInfo: {
                    title: a,
                    content: t,
                    type: "strong",
                    confirmText: "确定取消",
                    cancelText: "再想想",
                    confirm: function() {
                        e.orderRefund();
                    },
                    cancel: function() {
                        e.setData({
                            refundOrderInfo: null
                        });
                    }
                }
            });
        });
    },
    orderRefund: function() {
        var e = (0, n.default)(a.default.mark(function e() {
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (e.prev = 0, !this.data.canSubmit) {
                        e.next = 9;
                        break;
                    }
                    return this.data.canSubmit = !1, e.next = 5, wx.lego.orderRefund({
                        orderNo: this.data.orderNo || this.data.order.orderDetailInfo.orderNo
                    });

                  case 5:
                    wx.showToast({
                        title: "企业专场" === this.data.order.scheduleInfo.courseTag || "新课体验专场" === this.data.order.scheduleInfo.courseTag ? "课程已取消" : "退款申请已提交",
                        icon: "none",
                        duration: 2e3
                    }), this.data.canSubmit = !0, this.setData({
                        refundOrderInfo: null
                    }), this.fetchData();

                  case 9:
                    e.next = 16;
                    break;

                  case 11:
                    e.prev = 11, e.t0 = e.catch(0), console.log(e.t0), this.data.canSubmit = !0, 401 === e.t0.statusCode ? (0, 
                    o.doLogin)() : (wx.showToast({
                        title: e.t0.data.text,
                        icon: "none",
                        duration: 2e3
                    }), this.setData({
                        refundOrderInfo: null
                    }));

                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 0, 11 ] ]);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    bindcontact: function(e) {
        e.detail.path && wx.navigateTo({
            url: e.detail.path
        });
    },
    copyAccount: function() {
        wx.setClipboardData({
            data: "Keepland",
            success: function(e) {
                wx.showToast({
                    title: "已复制公众号名称，快去搜索关注",
                    icon: "none",
                    duration: 2e3
                });
            },
            fail: function() {
                wx.showToast({
                    title: "复制失败，请重试",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    },
    previewImg: function(e) {
        var t = e.currentTarget.dataset.index;
        this.setData({
            showPreviewImg: !0,
            previewCurrent: t
        });
    },
    hidePreviewImg: function() {
        this.setData({
            showPreviewImg: !1
        });
    },
    swiperChange: function(e) {
        "touch" == e.detail.source && this.setData({
            previewCurrent: e.detail.current
        });
    },
    addLike: function() {
        var e = this;
        this.addLikeInner(), wx.lego.updateOrderImgLike(this.data.orderNo || "", this.data.scheduleId).then(function() {
            e.fetchData();
        });
    },
    addLikeInner: function() {
        this.setData((0, t.default)({}, "course.userTrainingInfo.likeImage", !this.data.course.userTrainingInfo.likeImage));
        var e = this.data.course.userTrainingInfo.imageLikeCount;
        this.data.course.userTrainingInfo.likeImage ? e++ : e--, this.setData((0, t.default)({}, "course.userTrainingInfo.imageLikeCount", e));
    },
    downloadImg: function() {
        var e = (0, n.default)(a.default.mark(function e() {
            var t, n = this;
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return wx.showLoading({
                        title: "图片生成中",
                        mask: !0
                    }), e.next = 3, (0, r.wxDownloadFile)(this.data.course.userTrainingInfo.imageList[this.data.previewCurrent]);

                  case 3:
                    return t = e.sent, wx.hideLoading(), e.prev = 5, e.next = 8, (0, r.wxSaveImageToPhotosAlbum)(t);

                  case 8:
                    this.data.course.reviewInfo && this.data.course.reviewInfo.review ? wx.showToast({
                        title: "保存成功",
                        icon: "none",
                        duration: 2e3
                    }) : (this.setData({
                        showSuccessTips: !0
                    }), clearTimeout(this.downloadTimer), this.downloadTimer = setTimeout(function() {
                        n.setData({
                            showSuccessTips: !1
                        });
                    }, 5e3)), e.next = 14;
                    break;

                  case 11:
                    e.prev = 11, e.t0 = e.catch(5), console.log(e.t0);

                  case 14:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 5, 11 ] ]);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    onHide: function() {
        clearInterval(this.circleTimer), clearInterval(this.bpmTimer), clearTimeout(this.endTimer), 
        clearInterval(this.countdownTimer), clearTimeout(this.downloadTimer), this.setData({
            showPreviewImg: !1,
            showSuccessTips: !1
        });
    },
    onUnload: function() {
        clearInterval(this.circleTimer), clearInterval(this.bpmTimer), clearTimeout(this.endTimer), 
        clearInterval(this.countdownTimer), clearTimeout(this.downloadTimer);
    },
    onPullDownRefresh: function() {
        var e = (0, n.default)(a.default.mark(function e() {
            return a.default.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, e.next = 3, this.fetchData();

                  case 3:
                    wx.stopPullDownRefresh(), e.next = 9;
                    break;

                  case 6:
                    e.prev = 6, e.t0 = e.catch(0), console.log(e.t0);

                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 0, 6 ] ]);
        }));
        return function() {
            return e.apply(this, arguments);
        };
    }(),
    onShareAppMessage: function(e) {
        var a = this;
        return 5 != this.data.order.userBookStatus && 6 != this.data.order.userBookStatus || (clearTimeout(this.endTimer), 
        this.endTimer = setTimeout(function() {
            a.setData((0, t.default)({}, "newCourseEnvelopes.needCoupon", !1)), wx.lego.reportNewClassEnvelopes(a.data.course.userTrainingInfo.trainingLogId);
        }, 800)), e && "coupon" == e.target.id && s.sensors.track("web_gym_coupon_share"), 
        {
            title: this.data.shareInfo.title,
            path: this.data.shareInfo.path,
            imageUrl: this.data.shareInfo.imageUrl
        };
    }
});