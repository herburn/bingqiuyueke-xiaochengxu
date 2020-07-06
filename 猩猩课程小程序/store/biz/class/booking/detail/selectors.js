Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getClassBookingDetailInfoCreator = getClassBookingDetailInfoCreator;

var _moment = _interopRequireDefault(require("./../../../../../vendor.js")(315)), _ramda = require("./../../../../../vendor.js")(320), _calendar = require("./../../../../../utils/calendar.js"), _price = require("./../../../../../utils/price.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function getClassBookingDetailInfoCreator(e) {
    var t = e.getSelector, a = e.createSelector, n = t("getTrainerMap"), r = t("getClassMap"), o = t("getBoxMap"), i = t("getScheduleMap"), d = t("getClassBookingDetailMap");
    return a(n, r, o, i, function(e, t) {
        return d(e)[t];
    }, function(e, t, a, n, r) {
        if (!r) return {};
        var o, i, d, l, s, u, c, m, f, b, g, h, I, k, p, _, x, v, C = r.booking, T = C.classId, D = C.scheduleId, M = C.trainerUserId, y = r.order.status, N = e[M], S = t[T], w = n[D], A = a[w.boxId], H = (0, 
        _moment.default)().isAfter((0, _moment.default)(w.endTime));
        if ((0, _ramda.contains)(y, [ 1, 7 ]) && !H) return i = (o = {
            trainer: N,
            classInfo: S,
            box: A,
            schedule: w,
            detail: r
        }).trainer, d = o.classInfo, l = o.box, s = o.schedule, {
            id: (u = o.detail).order.orderId,
            pageStatus: 1,
            className: d.className,
            header: P({
                trainer: i,
                classInfo: d,
                box: l,
                schedule: s,
                detail: u
            }),
            waitInfo: function(e) {
                var t = e.detail, a = t.waitingCount, n = t.waitingOrder;
                return 7 !== t.order.status ? null : {
                    waitingCount: a,
                    waitingOrder: n
                };
            }({
                detail: u
            }),
            subscribeMsg: function(e) {
                var t = e.detail, a = e.classInfo, n = e.box, r = e.schedule;
                return {
                    orderId: t.order.orderId,
                    title: "".concat(a.className, "-").concat(n.boxname),
                    dateTime: getTime(r.startTime, r.endTime)
                };
            }({
                detail: u,
                classInfo: d,
                box: l,
                schedule: s
            }),
            bookingTip: function(e) {
                var t = e.classInfo.tipUrl, a = e.detail.isFirstTimeBooking;
                return t ? a ? {
                    tipUrl: t,
                    label: "首次必读"
                } : {
                    tipUrl: t,
                    label: "课程tips"
                } : null;
            }({
                classInfo: d,
                detail: u
            }),
            entryPassword: u.booking.entryPassword,
            bookingCount: u.booking.bookingCount,
            boxInfo: function(e) {
                var t = e.box, a = t.boxId, n = t.boxname, r = t.address, o = t.longitude, i = t.latitude, d = t.addressGuide;
                return {
                    boxId: a,
                    name: n,
                    address: r,
                    longitude: o,
                    latitude: i,
                    addressGuide: d
                };
            }({
                box: l
            }),
            bookingNumberInfo: B({
                trainer: i,
                schedule: s,
                detail: u
            }),
            notes: u.notes,
            price: q({
                detail: u
            }),
            btnInfo: function(e) {
                var t = e.detail, a = t.expireRefundTime;
                return 7 !== t.order.status ? {
                    items: [ {
                        label: "取消预约",
                        status: "enableGrey"
                    } ],
                    tip: "(".concat((0, _moment.default)(a).format("MM月DD日 HH:mm"), "后取消，不支持退款)")
                } : {
                    items: [ {
                        label: "取消等候",
                        status: "enableGrey"
                    } ],
                    tip: "(若取消等候或未排上课程，预付金额会自动退回超猩卡)"
                };
            }({
                detail: u
            }),
            schedule: s
        };
        if (1 === y && H) return m = (c = {
            trainer: N,
            classInfo: S,
            box: A,
            schedule: w,
            detail: r
        }).trainer, f = c.classInfo, b = c.box, g = c.schedule, {
            id: (h = c.detail).order.orderId,
            pageStatus: 2,
            className: f.className,
            header: P({
                trainer: m,
                classInfo: f,
                box: b,
                schedule: g,
                detail: h
            }),
            checkinInfo: function(e) {
                var t = e.schedule, a = e.detail, n = t.endTime;
                if (0 !== a.booking.checkin) return {
                    checkin: a.booking.checkin,
                    label: "已成功签到",
                    note: ""
                };
                var r = (0, _moment.default)(n).add(30, "m");
                return (0, _moment.default)().isAfter(r) ? {
                    checkin: a.booking.checkin,
                    label: "未成功签到",
                    note: "已过".concat(r.format("MM月DD日 HH:mm"), "，无法签到")
                } : {
                    checkin: a.booking.checkin,
                    label: "未成功签到",
                    note: "你仍可在".concat(r.format("MM月DD日 HH:mm"), " 前签到，未签到的课程不计入训练时长，会影响SuperRank的排名哦！")
                };
            }({
                schedule: g,
                detail: h
            }),
            entryPassword: function(e) {
                var t = e.detail;
                return (0, _moment.default)().isAfter((0, _moment.default)(g.endTime).add(30, "m")) ? "" : t.booking.entryPassword;
            }({
                detail: h
            }),
            bookingCount: h.booking.bookingCount,
            bookingNumberInfo: B({
                trainer: m,
                schedule: g,
                detail: h
            }),
            schedulePhotoUrl: h.schedulePhoto,
            price: q({
                detail: h
            })
        };
        if ((0, _ramda.contains)(y, [ 4, 5, 6, 8, 9, 12 ])) return k = (I = {
            trainer: N,
            classInfo: S,
            box: A,
            schedule: w,
            detail: r
        }).trainer, p = I.classInfo, _ = I.box, x = I.schedule, {
            id: (v = I.detail).order.orderId,
            pageStatus: 3,
            className: p.className,
            header: P({
                trainer: k,
                classInfo: p,
                box: _,
                schedule: x,
                detail: v
            }),
            refund: function(e) {
                var t = e.detail;
                return {
                    refundStatus: t.order.status,
                    refundAmount: (0, _price.cent2Yuan)(t.refundAmount),
                    needAmount: (0, _price.cent2Yuan)(t.order.needAmount)
                };
            }({
                detail: v
            }),
            bookingCount: v.booking.bookingCount,
            price: q({
                detail: v
            }),
            btnInfo: {
                items: [ {
                    label: "返回",
                    status: "enable"
                } ]
            }
        };
        function P(e) {
            var t = e.trainer, a = e.classInfo, n = e.box, r = e.schedule, o = e.detail.chatSessionId, i = a.className, d = t.face, l = t.trainerStageName, s = r.startTime, u = r.endTime, c = r.scheduleId, m = r.sk, f = n.boxname;
            return {
                title: "".concat(i, "-").concat(f),
                chatSessionId: o,
                navigatorPage: "ClassDetail",
                navigatorData: {
                    scheduleId: c,
                    sk: m
                },
                dateStr: getTime(s, u),
                face: d,
                name: l
            };
        }
        function B(e) {
            var t = e.trainer, a = e.schedule, n = e.detail, r = a.startTime, o = a.endTime, i = (0, 
            _moment.default)(r).subtract(15, "m"), d = (0, _moment.default)(o).add(30, "m");
            return (0, _moment.default)().isBetween(i, d, null, "[]") ? {
                bookingNumbers: n.bookingNumbers,
                trainer: {
                    face: t.face,
                    name: t.trainerStageName
                }
            } : null;
        }
        function q(e) {
            var t = e.detail, a = 0 < {
                detail: t
            }.detail.order.needAmount ? "wxpay" : "balance";
            return {
                totalPrice: (0, _price.cent2Yuan)(t.order.orderAmount),
                actuallyPay: (0, _price.cent2Yuan)("wxpay" == a ? t.order.needAmount : t.order.balanceUsed),
                payTypeStr: "wxpay" == a ? "微信" : "超猩卡"
            };
        }
    });
}

function getTime(e, t) {
    var a = (0, _moment.default)(e), n = (0, _moment.default)(t), r = a.format("MM月DD日"), o = (0, 
    _calendar.getWeekDayCN)(e, 2);
    return "".concat(r, " ").concat(o, " ").concat(a.format("HH:mm"), "-").concat(n.format("HH:mm"));
}