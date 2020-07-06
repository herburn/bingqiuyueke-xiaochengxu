var _regeneratorRuntime2 = _interopRequireDefault(require("./../../../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../../../tmp/index.js")), R = _interopRequireWildcard(require("./../../../../vendor.js")(320));

function _interopRequireWildcard(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var a in t) if (Object.prototype.hasOwnProperty.call(t, a)) {
        var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, a) : {};
        r.get || r.set ? Object.defineProperty(e, a, r) : e[a] = t[a];
    }
    return e.default = t, e;
}

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function asyncGeneratorStep(t, e, a, r, n, s, o) {
    try {
        var i = t[s](o), u = i.value;
    } catch (t) {
        return void a(t);
    }
    i.done ? e(u) : Promise.resolve(u).then(r, n);
}

function _asyncToGenerator(i) {
    return function() {
        var t = this, o = arguments;
        return new Promise(function(e, a) {
            var r = i.apply(t, o);
            function n(t) {
                asyncGeneratorStep(r, e, a, n, s, "next", t);
            }
            function s(t) {
                asyncGeneratorStep(r, e, a, n, s, "throw", t);
            }
            n(void 0);
        });
    };
}

function ownKeys(e, t) {
    var a = Object.keys(e);
    return Object.getOwnPropertySymbols && a.push.apply(a, Object.getOwnPropertySymbols(e)), 
    t && (a = a.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), a;
}

function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ownKeys(a, !0).forEach(function(t) {
            _defineProperty(e, t, a[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ownKeys(a).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
    }
    return e;
}

function _defineProperty(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var contains = R.contains, forEach = R.forEach, find = R.find, map = R.map, findIndex = R.findIndex, filter = R.filter, any = R.any, forEachObjIndexed = R.forEachObjIndexed;

_core.default.component({
    name: "ClassBookingDetailClassEvaluation",
    props: {
        orderId: {
            type: String,
            default: ""
        }
    },
    _suggestion: void 0,
    _isEvaluating: !0,
    _isSubmitting: !1,
    data: {
        awardSuper: 15,
        evaluateStatus: 0,
        evaluateTips: "",
        suggestionDisabled: !1,
        suggestionPlaceHoler: "对猩猩有什么想说的吗（不超过200字）",
        templateType: "a",
        totalScore: 0,
        totalScoreImgs: [],
        questionComments: [],
        scoreImgMap: {},
        evaluateData: {
            template: {}
        },
        suggestionResult: "",
        evaluateStatusMap: {
            total: !1
        },
        canSubmit: !1,
        nOrderId: ""
    },
    computed: {
        questionBoxStyle: function() {
            return "b" === this.templateType && 0 === this.totalScore ? "overflow: hidden" : "height:auto";
        },
        suggestionDisabled: function() {
            return 1 !== this.evaluateStatus;
        },
        showEvaluateBox: function() {
            return contains(this.evaluateStatus, [ 1, 2 ]);
        },
        suggestionBoxShow: function() {
            return 1 === this.evaluateStatus || 2 === this.evaluateStatus && "" !== this.suggestionResult;
        }
    },
    watch: {
        orderId: function(t) {
            this.nOrderId = t, this._fetchData(t);
        },
        evaluateStatusMap: function(t) {
            var e = !0;
            forEachObjIndexed(function(t) {
                t || (e = !1);
            })(t), this.canSubmit = e;
        }
    },
    methods: {
        suggestionInput: function(t) {
            this._suggestion = t.$wx.detail.value, 200 <= this._suggestion.length && this.$showToast("已超过限定字数（200字）");
        },
        totalScoreClick: function(t) {
            if (1 === this.evaluateStatus) {
                this.evaluateStatusMap = _objectSpread({}, this.evaluateStatusMap, {
                    total: !0
                });
                var e = parseInt(t, 10) + 1;
                this.totalScore = e, this.totalScoreImgs = this.scoreImgMap[e], this.$emit("updateEvaluate", {
                    status: this.evaluateStatus,
                    awardSuper: this.awardSuper,
                    templateType: this.templateType,
                    evaluating: !0
                });
            }
        },
        scoreClick: function(t, e) {
            if (1 === this.evaluateStatus) {
                this.evaluateStatusMap = _objectSpread({}, this.evaluateStatusMap, _defineProperty({}, e, !0));
                var a = parseInt(t, 10) + 1, r = findIndex(function(t) {
                    return t.extId === e;
                })(this.questionComments), n = this.questionComments[r];
                if (a !== n.score) {
                    var s = n.sub ? n.sub : {
                        good: {},
                        bad: {}
                    }, o = 5 <= a ? s.good : s.bad;
                    this.questionComments.splice(r, 1, _objectSpread({}, this.questionComments[r], {
                        subTitle: o.title,
                        tagRowShow: "a" !== this.templateType && 0 < a,
                        score: a,
                        tags: map(function(t) {
                            return {
                                extId: n.extId,
                                active: !1,
                                name: t,
                                show: !0
                            };
                        })(o.tags || []),
                        scoreImgs: map(function(t) {
                            return {
                                img: t,
                                extId: e
                            };
                        })(this.scoreImgMap[a])
                    })), this.$emit("updateEvaluate", {
                        status: this.evaluateStatus,
                        awardSuper: this.awardSuper,
                        templateType: this.templateType,
                        evaluating: !0
                    });
                }
            }
        },
        tagClick: function(e) {
            if (1 === this.evaluateStatus) {
                var t = findIndex(function(t) {
                    return t.extId === e.extId;
                })(this.questionComments), a = this.questionComments[t], r = findIndex(function(t) {
                    return t.name === e.name;
                })(a.tags), n = a.tags[r];
                a.tags.splice(r, 1, _objectSpread({}, n, {
                    active: !n.active
                })), this.questionComments.splice(t, 1, _objectSpread({}, a, {
                    tags: a.tags
                }));
            }
        },
        onSubmit: function() {
            var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function t() {
                var r, e, a, n;
                return _regeneratorRuntime2.default.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (this._isSubmitting) return t.abrupt("return");
                        t.next = 2;
                        break;

                      case 2:
                        if (r = "", 0 === this.totalScore && (r = "整体满意度尚未评价~"), e = map(function(t) {
                            var e = filter(function(t) {
                                return t.active;
                            })(t.tags), a = map(function(t) {
                                return t.name;
                            })(e);
                            return 0 === t.score && "" === r && (r = "".concat(t.title, "尚未评价~")), {
                                extId: t.extId,
                                score: t.score,
                                tags: a
                            };
                        })(this.questionComments), r) return t.abrupt("return", this.$showToast(r));
                        t.next = 7;
                        break;

                      case 7:
                        return a = {
                            orderId: this.orderId,
                            score: this.totalScore,
                            templateId: this.evaluateData.template.templateId,
                            comments: e,
                            suggest: this._suggestion
                        }, n = {}, t.prev = 9, this._isSubmitting = !0, t.next = 13, this.$store.dispatch(this.$store.actions.submitClassEvaluation(a));

                      case 13:
                        if (2 !== (n = t.sent).status) {
                            t.next = 22;
                            break;
                        }
                        wx.pageScrollTo({
                            scrollTop: 0,
                            duration: 0
                        }), this._updateData(), this._showAwardModal(), this.evaluateStatus = n.status, 
                        this.$emit("updateEvaluate", {
                            status: n.status,
                            awardSuper: this.awardSuper,
                            templateType: this.templateType,
                            evaluating: !1
                        }), t.next = 23;
                        break;

                      case 22:
                        throw new Error();

                      case 23:
                        t.next = 29;
                        break;

                      case 25:
                        t.prev = 25, t.t0 = t.catch(9), console.log("submit error:", t.t0), this.$showModal({
                            title: "提示",
                            content: "评价提交失败，建议稍后尝试",
                            confirmText: "我知道了"
                        });

                      case 29:
                        this._isSubmitting = !1;

                      case 30:
                      case "end":
                        return t.stop();
                    }
                }, t, this, [ [ 9, 25 ] ]);
            }));
            return function() {
                return t.apply(this, arguments);
            };
        }()
    },
    _initScoreImgMap: function() {
        var t = "https://img.supermonkey.com.cn/webapp/monkey-reservation2/evaluate/", e = "".concat(t, "star.png"), a = "".concat(t, "star_active.png"), r = {
            0: Array(5).fill(e),
            1: [ a, e, e, e, e ],
            2: [ a, a, e, e, e ],
            3: [ a, a, a, e, e ],
            4: [ a, a, a, a, e ],
            5: Array(5).fill(a)
        };
        this.scoreImgMap = r;
    },
    _dealData: function(t) {
        var s = this;
        if (!contains(t.status, [ 1, 2 ])) return this.$emit("updateEvaluate", {
            status: t.status,
            awardSuper: 0,
            templateType: ""
        }), this.evaluateStatus = t.status;
        this.evaluateData = t, this._initScoreImgMap();
        var e = t.status, a = t.awardSuper, r = t.detail, n = void 0 === r ? {
            score: 0,
            comments: []
        } : r, o = t.template;
        this.evaluateStatus = e, this.awardSuper = a, this.evaluateTips = "完成评价可得".concat(a, "点super值"), 
        this.suggestionResult = n.suggest || "", this.templateType = o.templateType;
        var i = n.comments;
        this.totalScore = n.score || 0, this.totalScoreImgs = this.scoreImgMap[n.score];
        var u = [];
        forEach(function(e) {
            var a = find(function(t) {
                return t.extId === e.extId;
            })(i) || {
                tags: []
            }, t = a.score || 0, r = e.sub ? e.sub : {
                good: {},
                bad: {}
            }, n = 5 <= t ? r.good : r.bad;
            s.evaluateStatusMap = _objectSpread({}, s.evaluateStatusMap, _defineProperty({}, e.extId, !1)), 
            u.push({
                extId: e.extId,
                score: t,
                sub: r,
                order: e.order,
                title: e.title,
                tagRowShow: 0 < t && 0 < a.tags.length,
                subTitle: n.title,
                scoreImgs: map(function(t) {
                    return {
                        img: t,
                        extId: e.extId
                    };
                })(s.scoreImgMap[t]),
                tags: map(function(t) {
                    return {
                        extId: e.extId,
                        active: contains(t, a.tags),
                        name: t
                    };
                })(n.tags || [])
            });
        })(o.comments), u.sort(function(t, e) {
            return t.order - e.order;
        }), this.questionComments = u, this.$emit("updateEvaluate", {
            status: this.evaluateStatus,
            awardSuper: this.awardSuper,
            templateType: this.templateType
        }), 1014 === this.$app.globalData.scene && this.$nextTick(function() {
            wx.pageScrollTo({
                scrollTop: 300,
                duration: 0
            });
        });
    },
    _updateData: function() {
        this.suggestionResult = this._suggestion || "", this.questionComments = map(function(t) {
            return _objectSpread({}, t, {
                tagRowShow: any(function(t) {
                    return t.active;
                })(t.tags)
            });
        })(this.questionComments);
    },
    _fetchData: function() {
        var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function t(e) {
            var a;
            return _regeneratorRuntime2.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, t.next = 3, this.$store.dispatch(this.$store.actions.getClassEvaluationDetail({
                        orderId: e
                    }));

                  case 3:
                    a = t.sent, this._dealData(a), t.next = 10;
                    break;

                  case 7:
                    t.prev = 7, t.t0 = t.catch(0), console.log(t.t0);

                  case 10:
                  case "end":
                    return t.stop();
                }
            }, t, this, [ [ 0, 7 ] ]);
        }));
        return function(t) {
            return e.apply(this, arguments);
        };
    }(),
    _showAwardModal: function() {
        var t = this;
        this.$invokeChild("award-modal", "openShowModal", {
            openType: "custom",
            width: "540rpx",
            title: "恭喜你",
            confirmText: "返回",
            overflow: "unset",
            titleStyle: "padding: 78rpx 0 17rpx;",
            btnStyle: "overflow: hidden",
            success: function() {
                if (1 < (t.$router.route || []).routes.length) return t.$router.navigateBack();
                t.$router.backHome();
            }
        });
    }
}, {
    info: {
        components: {
            "award-modal": {
                path: "./../../../../components/common/feedback/Modal"
            }
        },
        on: {}
    },
    handlers: {
        "1068-0": {
            tap: function(t) {
                this.totalScoreClick(t);
            }
        },
        "1068-1": {
            tap: function(t, e) {
                this.scoreClick(t, e.extId);
            }
        },
        "1068-2": {
            tap: function(t) {
                this.tagClick(t);
            }
        },
        "1068-3": {
            input: function() {
                var t = arguments[arguments.length - 1];
                this.suggestionInput(t);
            }
        },
        "1068-4": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.onSubmit(t);
            }
        }
    },
    models: {},
    refs: void 0
});