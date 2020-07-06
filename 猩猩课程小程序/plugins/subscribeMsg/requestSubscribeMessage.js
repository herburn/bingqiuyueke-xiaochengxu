Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _core = _interopRequireDefault(require("./../../tmp/index.js")), _ramda = require("./../../vendor.js")(320), _version = require("./../../utils/version.js"), _storage = require("./../../utils/storage.js"), _constants = require("./../../constants/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function asyncGeneratorStep(e, r, t, a, s, n, u) {
    try {
        var i = e[n](u), c = i.value;
    } catch (e) {
        return void t(e);
    }
    i.done ? r(c) : Promise.resolve(c).then(a, s);
}

function _asyncToGenerator(i) {
    return function() {
        var e = this, u = arguments;
        return new Promise(function(r, t) {
            var a = i.apply(e, u);
            function s(e) {
                asyncGeneratorStep(a, r, t, s, n, "next", e);
            }
            function n(e) {
                asyncGeneratorStep(a, r, t, s, n, "throw", e);
            }
            s(void 0);
        });
    };
}

function _defineProperty(e, r, t) {
    return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}

var modalUnauthorizedMsgId = "__ModalUnauthorizedMsg__", modalRejectMsgId = "__ModalRejectMsg__", modalSubscribeMsgGuide1Id = "__ModalSubscribeMsgGuide1__", modalSubscribeMsgGuide2Id = "__ModalSubscribeMsgGuide2__", statusProp = "userSubscribeStatus", msgManagementPage = "MsgManagement", ACCEPT = 11, UNAUTHORIZED = 21, REJECT = 22, BAN = 23, isAnyReject = (0, 
_ramda.pipe)((0, _ramda.pluck)(statusProp), (0, _ramda.any)((0, _ramda.identical)(REJECT))), isAnyUnauthorized = (0, 
_ramda.pipe)((0, _ramda.pluck)(statusProp), (0, _ramda.any)((0, _ramda.identical)(UNAUTHORIZED))), isAllAccept = (0, 
_ramda.pipe)((0, _ramda.pluck)(statusProp), (0, _ramda.all)((0, _ramda.identical)(ACCEPT))), isAllUnauthorized = (0, 
_ramda.pipe)((0, _ramda.pluck)(statusProp), (0, _ramda.all)((0, _ramda.identical)(UNAUTHORIZED))), getRejectTemplates = (0, 
_ramda.filter)((0, _ramda.propEq)(statusProp, REJECT)), getUnauthorizedTemplates = (0, 
_ramda.filter)((0, _ramda.propEq)(statusProp, UNAUTHORIZED)), getTemplatesWithoutBan = (0, 
_ramda.reject)((0, _ramda.propEq)(statusProp, BAN)), scenePageMap = _defineProperty({}, _constants.SCENE101, (0, 
_ramda.flip)(_ramda.contains)([ "BoxList", "CourseList", "MyBooking", "My" ])), sceneVisitedMap = (0, 
_ramda.zipObj)((0, _ramda.keys)(scenePageMap), (0, _ramda.repeat)(!1, (0, _ramda.length)((0, 
_ramda.keys)(scenePageMap)))), _default = {
    install: function(e) {
        e.mixin({
            beforeCreate: function() {
                this.$reqSubscribeMsgByA = reqSubscribeMsgByA, this.$reqSubscribeMsgByB = reqSubscribeMsgByB, 
                this.$reqSubscribeMsgByC = reqSubscribeMsgByC, this.$reqSubscribeMsgByD = reqSubscribeMsgByD, 
                this.$reqSubscribeMsgByE = reqSubscribeMsgByE, this.$reqSubscribeMsgByF = reqSubscribeMsgByF;
            },
            onLoad: function() {}
        });
    }
};

function reqSubscribeMsgByA(e) {
    return _reqSubscribeMsgByA.apply(this, arguments);
}

function _reqSubscribeMsgByA() {
    return (_reqSubscribeMsgByA = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, a, s, n = this;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (s = function() {
                    return (s = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
                        var t;
                        return _regeneratorRuntime2.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.prev = 0, e.next = 3, enrichRequestSubscribeMessage.call(this, r);

                              case 3:
                                if (t = e.sent, isAnyReject(t)) return e.next = 7, openRejectMsgModal.call(this, {
                                    templates: getRejectTemplates(t)
                                });
                                e.next = 8;
                                break;

                              case 7:
                                this.$router.navigateTo({
                                    page: msgManagementPage
                                });

                              case 8:
                                e.next = 14;
                                break;

                              case 10:
                                throw e.prev = 10, e.t0 = e.catch(0), handleSubscribeMapErr.call(this, e.t0, "A"), 
                                e.t0;

                              case 14:
                              case "end":
                                return e.stop();
                            }
                        }, e, this, [ [ 0, 10 ] ]);
                    }))).apply(this, arguments);
                }, a = function(e) {
                    return s.apply(this, arguments);
                }, e.prev = 2, 0 === (0, _version.getSubscribeMsgVersionStatus)()) return e.abrupt("return");
                e.next = 5;
                break;

              case 5:
                if (this.$store.selectors.getIsUnregistered(this.$store.getState())) return e.abrupt("return");
                e.next = 7;
                break;

              case 7:
                if (sceneVisitedMap[r]) return e.abrupt("return");
                e.next = 9;
                break;

              case 9:
                if (sceneVisitedMap[r] = !0, 0 === (t = this.$store.selectors.getSubscribeMsgTemplatesByScene(this.$store.getState(), r)).length) return e.abrupt("return");
                e.next = 13;
                break;

              case 13:
                if (isAnyReject(t)) return e.next = 16, openRejectMsgModal.call(this, {
                    templates: getRejectTemplates(t)
                });
                e.next = 19;
                break;

              case 16:
                this.$router.navigateTo({
                    page: msgManagementPage
                }), e.next = 20;
                break;

              case 19:
                isAnyUnauthorized(t) ? openUnauthorizedMsgModal.call(this, {
                    templates: getUnauthorizedTemplates(t),
                    success: function() {
                        return a.call(n, t);
                    }
                }) : a.call(this, t);

              case 20:
                e.next = 25;
                break;

              case 22:
                e.prev = 22, e.t0 = e.catch(2), console.log("reqSubscribeMsgByA error", e.t0);

              case 25:
              case "end":
                return e.stop();
            }
        }, e, this, [ [ 2, 22 ] ]);
    }))).apply(this, arguments);
}

function reqSubscribeMsgByB(e) {
    return _reqSubscribeMsgByB.apply(this, arguments);
}

function _reqSubscribeMsgByB() {
    return (_reqSubscribeMsgByB = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, a, s, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (n = function() {
                    return (n = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
                        var t;
                        return _regeneratorRuntime2.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.prev = 0, e.next = 3, enrichRequestSubscribeMessage.call(this, r);

                              case 3:
                                if (t = e.sent, isAnyReject(t)) return e.next = 7, openRejectMsgModal.call(this, {
                                    templates: getRejectTemplates(t)
                                });
                                e.next = 7;
                                break;

                              case 7:
                                return e.abrupt("return", t);

                              case 10:
                                throw e.prev = 10, e.t0 = e.catch(0), handleSubscribeMapErr.call(this, e.t0, "B"), 
                                e.t0;

                              case 14:
                              case "end":
                                return e.stop();
                            }
                        }, e, this, [ [ 0, 10 ] ]);
                    }))).apply(this, arguments);
                }, s = function(e) {
                    return n.apply(this, arguments);
                }, e.prev = 2, t = this.$store.selectors.getUserSubscribeById(this.$store.getState(), r), 
                (0, _ramda.contains)(t[statusProp], [ UNAUTHORIZED, ACCEPT ])) return e.next = 7, 
                s.call(this, [ t ]);
                e.next = 10;
                break;

              case 7:
                a = e.sent, e.next = 17;
                break;

              case 10:
                if (t[statusProp] === REJECT) return e.next = 13, s.call(this, [ t ]);
                e.next = 17;
                break;

              case 13:
                if (a = e.sent, isAnyReject(a)) return e.next = 17, openSubscribeMsgGuideModal2.call(this);
                e.next = 17;
                break;

              case 17:
                if (0 === a.length || a[0][statusProp] === BAN) return e.abrupt("return", "ban");
                e.next = 19;
                break;

              case 19:
                if (a[0][statusProp] === REJECT) return e.abrupt("return", "reject");
                e.next = 21;
                break;

              case 21:
                if (a[0][statusProp] === ACCEPT) return e.abrupt("return", (0, _ramda.contains)(t[statusProp])([ UNAUTHORIZED, REJECT ]) ? "accept" : "continue");
                e.next = 23;
                break;

              case 23:
                return console.error("reqSubscribeMsgByB processedTemplates error", a), e.abrupt("return", "unknown");

              case 27:
                e.prev = 27, e.t0 = e.catch(2), console.log("handleMsgManagement", e.t0);

              case 30:
              case "end":
                return e.stop();
            }
        }, e, this, [ [ 2, 27 ] ]);
    }))).apply(this, arguments);
}

function reqSubscribeMsgByC(e, r) {
    return _reqSubscribeMsgByC.apply(this, arguments);
}

function _reqSubscribeMsgByC() {
    return (_reqSubscribeMsgByC = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(a, s) {
        var n, t, u = this;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = function() {
                    return (t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r, t) {
                        var a, s;
                        return _regeneratorRuntime2.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.prev = 0, e.next = 3, requestSubscribeMessage.call(this, r);

                              case 3:
                                return a = e.sent, s = this.$store.actions.subscribeMessage, wx.showLoading({
                                    mask: !0
                                }), e.next = 8, this.$store.dispatch(s((0, _ramda.map)((0, _ramda.assoc)("orderId", t))(a)));

                              case 8:
                                return e.abrupt("return", (0, _ramda.converge)(_ramda.zipObj, [ (0, _ramda.map)((0, 
                                _ramda.prop)("templateId")), (0, _ramda.map)((0, _ramda.pipe)((0, _ramda.propEq)("result", "accept"), Number)) ])(a));

                              case 11:
                                throw e.prev = 11, e.t0 = e.catch(0), handleSubscribeMapErr.call(this, e.t0, "C"), 
                                e.t0;

                              case 15:
                                return e.prev = 15, wx.hideLoading(), e.finish(15);

                              case 18:
                              case "end":
                                return e.stop();
                            }
                        }, e, this, [ [ 0, 11, 15, 18 ] ]);
                    }))).apply(this, arguments);
                }, n = function(e, r) {
                    return t.apply(this, arguments);
                }, e.abrupt("return", new Promise(function() {
                    var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r, t) {
                        return _regeneratorRuntime2.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if ((e.prev = 0) === (0, _version.getSubscribeMsgVersionStatus)()) return e.abrupt("return");
                                e.next = 3;
                                break;

                              case 3:
                                if (0 !== a.length) {
                                    e.next = 7;
                                    break;
                                }
                                r((0, _ramda.zipObj)(a, (0, _ramda.repeat)(0, (0, _ramda.length)(a)))), e.next = 16;
                                break;

                              case 7:
                                if (!isAllUnauthorized((0, _ramda.values)(getUserSubscribeMap.call(u)))) {
                                    e.next = 11;
                                    break;
                                }
                                openSubscribeMsgGuideModal1.call(u, {
                                    success: function() {
                                        var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                                            return _regeneratorRuntime2.default.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    return e.prev = 0, e.t0 = r, e.next = 4, n.call(u, a, s);

                                                  case 4:
                                                    e.t1 = e.sent, (0, e.t0)(e.t1), e.next = 11;
                                                    break;

                                                  case 8:
                                                    e.prev = 8, e.t2 = e.catch(0), t(e.t2);

                                                  case 11:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e, null, [ [ 0, 8 ] ]);
                                        }));
                                        return function() {
                                            return e.apply(this, arguments);
                                        };
                                    }()
                                }), e.next = 16;
                                break;

                              case 11:
                                return e.t0 = r, e.next = 14, n.call(u, a, s);

                              case 14:
                                e.t1 = e.sent, (0, e.t0)(e.t1);

                              case 16:
                                e.next = 21;
                                break;

                              case 18:
                                e.prev = 18, e.t2 = e.catch(0), t(e.t2);

                              case 21:
                              case "end":
                                return e.stop();
                            }
                        }, e, null, [ [ 0, 18 ] ]);
                    }));
                    return function(e, r) {
                        return t.apply(this, arguments);
                    };
                }()));

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function reqSubscribeMsgByD(e) {
    return _reqSubscribeMsgByD.apply(this, arguments);
}

function _reqSubscribeMsgByD() {
    return (_reqSubscribeMsgByD = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, a, s, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (n = function() {
                    return (n = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
                        var t;
                        return _regeneratorRuntime2.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.prev = 0, e.next = 3, requestSubscribeMessage.call(this, r);

                              case 3:
                                return t = e.sent, e.next = 6, this.$store.dispatchAction("subscribeMessage", t);

                              case 6:
                                e.next = 11;
                                break;

                              case 8:
                                throw e.prev = 8, e.t0 = e.catch(0), e.t0;

                              case 11:
                              case "end":
                                return e.stop();
                            }
                        }, e, this, [ [ 0, 8 ] ]);
                    }))).apply(this, arguments);
                }, s = function(e) {
                    return n.apply(this, arguments);
                }, e.prev = 2, 0 === (0, _version.getSubscribeMsgVersionStatus)()) return e.abrupt("return");
                e.next = 5;
                break;

              case 5:
                if (t = this.$store.selectors.getSubscribeMsgTemplatesByScene(this.$store.getState(), r), 
                isAllAccept(t)) {
                    e.next = 8;
                    break;
                }
                return e.abrupt("return");

              case 8:
                return a = (0, _ramda.pipe)(getTemplatesWithoutBan, (0, _ramda.pluck)("templateId"))(t), 
                e.next = 11, s.call(this, a);

              case 11:
                e.next = 16;
                break;

              case 13:
                e.prev = 13, e.t0 = e.catch(2), console.error("reqSubscribeMsgByD", e.t0);

              case 16:
              case "end":
                return e.stop();
            }
        }, e, this, [ [ 2, 13 ] ]);
    }))).apply(this, arguments);
}

function reqSubscribeMsgByE(e, r) {
    return _reqSubscribeMsgByE.apply(this, arguments);
}

function _reqSubscribeMsgByE() {
    return (_reqSubscribeMsgByE = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r, t) {
        var a, s, n, u, i;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (i = function() {
                    return (i = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
                        var t, a, s, n, u;
                        return _regeneratorRuntime2.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.prev = 0, e.next = 3, requestSubscribeMessage.call(this, r);

                              case 3:
                                return t = e.sent, a = this.$store, s = a.actions.subscribeMessage, n = a.selectors, 
                                wx.showLoading({
                                    mask: !0
                                }), e.next = 8, this.$store.dispatch(s(t));

                              case 8:
                                return u = (0, _ramda.curryN)(2, n.getUserSubscribeById)(this.$store.getState()), 
                                e.abrupt("return", (0, _ramda.map)(u)(r));

                              case 12:
                                throw e.prev = 12, e.t0 = e.catch(0), handleSubscribeMapErr.call(this, e.t0, "C"), 
                                e.t0;

                              case 16:
                                return e.prev = 16, wx.hideLoading(), e.finish(16);

                              case 19:
                              case "end":
                                return e.stop();
                            }
                        }, e, this, [ [ 0, 12, 16, 19 ] ]);
                    }))).apply(this, arguments);
                }, u = function(e) {
                    return i.apply(this, arguments);
                }, e.prev = 2, 0 === (0, _version.getSubscribeMsgVersionStatus)()) return e.abrupt("return");
                e.next = 5;
                break;

              case 5:
                if (0 === (a = this.$store.selectors.getSubscribeMsgTemplatesByScene(this.$store.getState(), r)).length) return e.abrupt("return");
                e.next = 8;
                break;

              case 8:
                return s = (0, _ramda.pipe)(getTemplatesWithoutBan, (0, _ramda.pluck)("templateId"))(a), 
                e.next = 11, u.call(this, s);

              case 11:
                if (n = e.sent, isAnyReject(n)) return e.next = 15, openRejectMsgModal.call(this, {
                    templates: getRejectTemplates(n)
                });
                e.next = 17;
                break;

              case 15:
                return this.$router.navigateTo({
                    page: msgManagementPage
                }), e.abrupt("return", "router");

              case 17:
                return e.next = 19, t(n);

              case 19:
                this.$showToast("开启成功"), e.next = 25;
                break;

              case 22:
                e.prev = 22, e.t0 = e.catch(2), console.error("reqSubscribeMsgByE", e.t0);

              case 25:
              case "end":
                return e.stop();
            }
        }, e, this, [ [ 2, 22 ] ]);
    }))).apply(this, arguments);
}

function reqSubscribeMsgByF(e) {
    return _reqSubscribeMsgByF.apply(this, arguments);
}

function _reqSubscribeMsgByF() {
    return (_reqSubscribeMsgByF = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t, a, s, n;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (n = function() {
                    return (n = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
                        var t;
                        return _regeneratorRuntime2.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.prev = 0, e.next = 3, requestSubscribeMessage.call(this, r);

                              case 3:
                                return t = e.sent, e.next = 6, this.$store.dispatchAction("subscribeMessage", t);

                              case 6:
                                e.next = 11;
                                break;

                              case 8:
                                throw e.prev = 8, e.t0 = e.catch(0), e.t0;

                              case 11:
                              case "end":
                                return e.stop();
                            }
                        }, e, this, [ [ 0, 8 ] ]);
                    }))).apply(this, arguments);
                }, s = function(e) {
                    return n.apply(this, arguments);
                }, e.prev = 2, 0 === (0, _version.getSubscribeMsgVersionStatus)()) return e.abrupt("return");
                e.next = 5;
                break;

              case 5:
                if (0 === (t = this.$store.selectors.getSubscribeMsgTemplatesByScene(this.$store.getState(), r)).length) return e.abrupt("return");
                e.next = 8;
                break;

              case 8:
                return a = (0, _ramda.pipe)(getTemplatesWithoutBan, (0, _ramda.pluck)("templateId"))(t), 
                e.next = 11, s.call(this, a);

              case 11:
                e.next = 16;
                break;

              case 13:
                e.prev = 13, e.t0 = e.catch(2), console.error("reqSubscribeMsgByF", e.t0);

              case 16:
              case "end":
                return e.stop();
            }
        }, e, this, [ [ 2, 13 ] ]);
    }))).apply(this, arguments);
}

function enrichRequestSubscribeMessage(e) {
    return _enrichRequestSubscribeMessage.apply(this, arguments);
}

function _enrichRequestSubscribeMessage() {
    return (_enrichRequestSubscribeMessage = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(s) {
        var n, r, u = this;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = function() {
                    return (r = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
                        var t, a, s, n, u;
                        return _regeneratorRuntime2.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.prev = 0, e.next = 3, requestSubscribeMessage.call(this, r);

                              case 3:
                                return t = e.sent, a = this.$store, s = a.actions.subscribeMessage, n = a.selectors, 
                                wx.showLoading({
                                    mask: !0
                                }), e.next = 8, this.$store.dispatch(s(t));

                              case 8:
                                return u = (0, _ramda.curryN)(2, n.getUserSubscribeById)(this.$store.getState()), 
                                e.abrupt("return", (0, _ramda.map)((0, _ramda.pipe)((0, _ramda.prop)("templateId"), u))(t));

                              case 12:
                                throw e.prev = 12, e.t0 = e.catch(0), e.t0;

                              case 15:
                                return e.prev = 15, wx.hideLoading(), e.finish(15);

                              case 18:
                              case "end":
                                return e.stop();
                            }
                        }, e, this, [ [ 0, 12, 15, 18 ] ]);
                    }))).apply(this, arguments);
                }, n = function(e) {
                    return r.apply(this, arguments);
                }, e.abrupt("return", new Promise(function() {
                    var t = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r, t) {
                        var a;
                        return _regeneratorRuntime2.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if ((e.prev = 0) !== (a = (0, _ramda.pipe)(getTemplatesWithoutBan, (0, _ramda.pluck)("templateId"))(s)).length) {
                                    e.next = 6;
                                    break;
                                }
                                r([]), e.next = 27;
                                break;

                              case 6:
                                if (!isAnyReject(s)) {
                                    e.next = 10;
                                    break;
                                }
                                openSubscribeMsgGuideModal1.call(u, {
                                    success: function() {
                                        var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                                            return _regeneratorRuntime2.default.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    return e.prev = 0, e.t0 = r, e.next = 4, n.call(u, a);

                                                  case 4:
                                                    e.t1 = e.sent, (0, e.t0)(e.t1), e.next = 11;
                                                    break;

                                                  case 8:
                                                    e.prev = 8, e.t2 = e.catch(0), t(e.t2);

                                                  case 11:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e, null, [ [ 0, 8 ] ]);
                                        }));
                                        return function() {
                                            return e.apply(this, arguments);
                                        };
                                    }()
                                }), e.next = 27;
                                break;

                              case 10:
                                if (!isAnyUnauthorized(s)) {
                                    e.next = 22;
                                    break;
                                }
                                if (!isAllUnauthorized((0, _ramda.values)(getUserSubscribeMap.call(u)))) {
                                    e.next = 15;
                                    break;
                                }
                                openSubscribeMsgGuideModal1.call(u, {
                                    success: function() {
                                        var e = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e() {
                                            return _regeneratorRuntime2.default.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    return e.prev = 0, e.t0 = r, e.next = 4, n.call(u, a);

                                                  case 4:
                                                    e.t1 = e.sent, (0, e.t0)(e.t1), e.next = 11;
                                                    break;

                                                  case 8:
                                                    e.prev = 8, e.t2 = e.catch(0), t(e.t2);

                                                  case 11:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e, null, [ [ 0, 8 ] ]);
                                        }));
                                        return function() {
                                            return e.apply(this, arguments);
                                        };
                                    }()
                                }), e.next = 20;
                                break;

                              case 15:
                                return e.t0 = r, e.next = 18, n.call(u, a);

                              case 18:
                                e.t1 = e.sent, (0, e.t0)(e.t1);

                              case 20:
                                e.next = 27;
                                break;

                              case 22:
                                return e.t2 = r, e.next = 25, n.call(u, a);

                              case 25:
                                e.t3 = e.sent, (0, e.t2)(e.t3);

                              case 27:
                                e.next = 32;
                                break;

                              case 29:
                                e.prev = 29, e.t4 = e.catch(0), t(e.t4);

                              case 32:
                              case "end":
                                return e.stop();
                            }
                        }, e, null, [ [ 0, 29 ] ]);
                    }));
                    return function(e, r) {
                        return t.apply(this, arguments);
                    };
                }()));

              case 3:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function requestSubscribeMessage(e) {
    return _requestSubscribeMessage2.apply(this, arguments);
}

function _requestSubscribeMessage2() {
    return (_requestSubscribeMessage2 = _asyncToGenerator(_regeneratorRuntime2.default.mark(function e(r) {
        var t;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, _core.default.requestSubscribeMessage({
                    tmplIds: r
                });

              case 2:
                return t = e.sent, e.abrupt("return", (0, _ramda.pipe)((0, _ramda.dissoc)("errMsg"), _ramda.toPairs, (0, 
                _ramda.map)((0, _ramda.zipObj)([ "templateId", "result" ])))(t));

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    }))).apply(this, arguments);
}

function openUnauthorizedMsgModal(e) {
    var r = this, t = e.templates, a = e.success;
    return new Promise(function(e) {
        (0, _storage.getStorageSync)("isVisitedUnauthorizedMsgModal") ? a() : ((0, _storage.setStorage)({
            key: "isVisitedUnauthorizedMsgModal",
            data: !0
        }), r.$invokeChild(modalUnauthorizedMsgId, "open", {
            templates: t,
            success: function() {
                e(), a();
            }
        }));
    });
}

function openRejectMsgModal(e) {
    var t = this, a = e.templates, r = e.success, s = void 0 === r ? _constants.noop : r;
    return new Promise(function(e, r) {
        t.$invokeChild(modalRejectMsgId, "open", {
            templates: a,
            success: function() {
                e(), s();
            },
            cancel: r
        });
    });
}

function openSubscribeMsgGuideModal1(e) {
    var r = this, t = e.success;
    return new Promise(function(e) {
        r.$invokeChild(modalSubscribeMsgGuide1Id, "open", {
            success: function() {
                e(), t();
            }
        });
    });
}

function openSubscribeMsgGuideModal2() {
    var r = this, e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).success, t = void 0 === e ? _constants.noop : e;
    return new Promise(function(e) {
        r.$invokeChild(modalSubscribeMsgGuide2Id, "open", {
            success: function() {
                e(), t();
            }
        });
    });
}

exports.default = _default;

var errorHandlerMap = {
    10001: {
        A: [],
        B: [ {
            toast: "暂时无法开启，紧急修复中..."
        }, {
            report: !0
        } ],
        C: [ {
            toast: "暂时无法开启，紧急修复中..."
        }, {
            report: !0
        } ]
    },
    10002: {
        A: [ {
            toast: "网络较慢..."
        } ],
        B: [ {
            toast: "网络请求失败，请检查后重试..."
        } ],
        C: [ {
            toast: "网络请求失败，请检查后重试..."
        } ]
    },
    10003: {
        A: [ {
            toast: "网络较慢..."
        } ],
        B: [ {
            toast: "网络请求失败，请检查后重试..."
        } ],
        C: [ {
            toast: "网络请求失败，请检查后重试..."
        } ]
    },
    10004: {
        A: [],
        B: [ {
            toast: "暂时无法开启，紧急修复中..."
        }, {
            report: !0
        } ],
        C: [ {
            toast: "暂时无法开启，紧急修复中..."
        }, {
            report: !0
        } ]
    },
    10005: {
        A: [],
        B: [ {
            toast: "开启失败，请重试"
        } ],
        C: [ {
            toast: "开启失败，请重试"
        } ]
    },
    20001: {
        A: [],
        B: [ {
            toast: "通知维护中，请稍后重试..."
        } ],
        C: [ {
            toast: "通知维护中，请稍后重试..."
        } ]
    },
    20002: {
        A: [],
        B: [ {
            toast: "暂时无法开启，紧急修复中..."
        }, {
            report: !0
        } ],
        C: [ {
            toast: "暂时无法开启，紧急修复中..."
        }, {
            report: !0
        } ]
    },
    20003: {
        A: [],
        B: [ {
            toast: "开启成功"
        } ],
        C: [ {
            toast: "开启成功"
        } ]
    },
    20004: {
        A: [ function() {
            openSubscribeMsgGuideModal2.call(this);
        } ],
        B: [ function() {
            openSubscribeMsgGuideModal2.call(this);
        } ],
        C: [ function() {
            openSubscribeMsgGuideModal2.call(this);
        } ]
    },
    20005: {
        A: [ {
            toast: "系统维护中..."
        } ],
        B: [ {
            toast: "系统维护中..."
        } ],
        C: [ {
            toast: "系统维护中..."
        } ]
    },
    other: {
        A: [],
        B: [],
        C: []
    }
};

function handleSubscribeMapErr() {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, r = e.errCode, t = e.errMsg, a = 1 < arguments.length ? arguments[1] : void 0, s = r in errorHandlerMap ? errorHandlerMap[r][a] : errorHandlerMap.other[a];
    (function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [], r = 1 < arguments.length ? arguments[1] : void 0, t = r.errCode, a = r.errMsg, s = !0, n = !1, u = void 0;
        try {
            for (var i, c = e[Symbol.iterator](); !(s = (i = c.next()).done); s = !0) {
                var o = i.value;
                "function" == typeof o ? o.call(this, {
                    errCode: t,
                    errMsg: a
                }) : "toast" in o ? this.$showToast(o.toast) : "report" in o && wx.sma.errorReport({
                    event: "requestSubscribeMessage"
                }, {
                    errCode: t,
                    errMsg: a
                });
            }
        } catch (e) {
            n = !0, u = e;
        } finally {
            try {
                s || null == c.return || c.return();
            } finally {
                if (n) throw u;
            }
        }
    }).call(this, s, {
        errCode: r,
        errMsg: t
    }), console.error("wepy.requestSubscribeMessage error:", r, t);
}

function getUserSubscribeMap() {
    return this.$store.selectors.getUserSubscribeMap(this.$store.getState());
}