Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getClassBookingConfirmInfoCreator = getClassBookingConfirmInfoCreator;

var _moment = _interopRequireDefault(require("./../../../../../vendor.js")(315)), _ramda = require("./../../../../../vendor.js")(320), _price = require("./../../../../../utils/price.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function getClassBookingConfirmInfoCreator(e) {
    var r = e.getSelector;
    return (0, e.createSelector)(r("getScheduleMap"), r("getBoxMap"), r("getClassMap"), r("getTrainerMap"), r("getIsSuperCard"), r("getIsSuperCardFrozen"), function(e) {
        return e.biz.class.booking.confirm;
    }, function(e, r, i, o, n, a, t) {
        var c = t.scheduleId;
        if (-1 === c) return null;
        var s, u, l, g, p, m, f, d, C, b, k, v, _, M, I, B, P, S, h, D, y, N, j, x = e[c], q = r[x.boxId], z = i[x.classId], F = o[x.trainerUserId];
        return {
            enterConfirmDialog: t.enterConfirmDialog,
            waitingConfirm: t.waitingConfirm,
            bg: {
                classInfo: z
            }.classInfo.images[0],
            header: (v = (k = {
                bookingConfirm: t,
                schedule: x,
                box: q,
                classInfo: z,
                trainer: F
            }).bookingConfirm, _ = k.schedule, M = k.box, I = k.classInfo, B = k.trainer, P = v.scoutNote, 
            S = v.waitingCount, h = _.startTime, D = _.endTime, y = M.address, N = I.className, 
            j = B.trainerStageName, {
                title: "".concat(N, "(").concat(j, ")"),
                duration: "".concat((0, _moment.default)(h).format("MM月DD日 HH:mm"), " - ").concat((0, 
                _moment.default)(D).format("HH:mm")),
                address: y,
                scoutNote: P,
                waitingCount: S
            }),
            availableCount: t.bookingPeopleAvailableCount,
            privilegePeopleMap: (f = (m = {
                bookingConfirm: t
            }).bookingConfirm, d = m.isSuperCard, C = m.isSuperCardFrozen, b = d && !C ? "supermonkeyCardPrice" : "price", 
            (0, _ramda.map)((0, _ramda.pipe)((0, _ramda.propOr)({}, "priceMap"), (0, _ramda.map)((0, 
            _ramda.path)([ b, "selected" ]))))(f.privilegePriceMap)),
            privilege: (l = {
                bookingConfirm: t
            }.bookingConfirm, g = l.privilegeList, p = l.privilegePriceMap, {
                privileges: (0, _ramda.map)(function(e) {
                    return {
                        id: e,
                        enable: p[e].enable
                    };
                })(g),
                privilegeNames: (0, _ramda.map)(function(e) {
                    return p[e].privilegeDisplay;
                })(g)
            }),
            tickets: t.ticketList,
            priceMap: function(e) {
                for (var r = e.bookingConfirm, i = e.isSuperCard, o = e.isSuperCardFrozen, n = r.privilegePriceMap, a = {}, t = 0, c = Object.keys(n); t < c.length; t++) {
                    var s = c[t];
                    if (n[s].enable) for (var u = n[s].priceMap, l = 0, g = Object.keys(u); l < g.length; l++) {
                        var p = g[l];
                        a["".concat(s, "|").concat(p, "|normal")] = m(u[p].price), i && !o && (a["".concat(s, "|").concat(p, "|super")] = m(u[p].supermonkeyCardPrice));
                    }
                }
                return a;
                function m(e) {
                    var r = e.originalPrice, i = e.price, o = e.saveMoney;
                    return {
                        originalPrice: (0, _price.cent2Yuan)(r),
                        processPrice: (0, _price.cent2Yuan)(i),
                        saveMoney: (0, _price.cent2Yuan)(o)
                    };
                }
            }({
                bookingConfirm: t,
                isSuperCard: n,
                isSuperCardFrozen: a
            }),
            firstBooking: {
                isFirstBooking: (u = {
                    bookingConfirm: t
                }.bookingConfirm).firstBooking,
                firstBookingPrice: (0, _price.cent2Yuan)(u.firstBookingPrice)
            },
            totalBalance: (0, _price.cent2Yuan)(t.totalBalance),
            btnInfo: {
                confirmDialog: (s = {
                    bookingConfirm: t
                }.bookingConfirm).confirmDialog || null,
                userBadgeInfo: s.userBadgeInfo || null,
                bookingCountLimitMsg: s.bookingCountLimitMsg,
                isNeedBindPhoneNumber: s.isNeedBindPhonenumber
            }
        };
    });
}