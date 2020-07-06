Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require("./../../vendor.js")(0)), _seamlessImmutable = _interopRequireDefault(require("./../../vendor.js")(322)), _actionTypes = require("./../types/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
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

var merge = _seamlessImmutable.default.merge, _default = {
    namespace: [ "globals", "confirmModal" ],
    actions: {
        postConfirmModal: [ _actionTypes.CONFIRM_MODAL_POST, function(e) {
            return {
                modalId: e.modalId,
                status: e.status
            };
        }, function() {
            return {
                isFetch: !0
            };
        } ]
    },
    state: (0, _seamlessImmutable.default)({
        bookingConfirmModal: null
    }),
    reducers: _defineProperty({}, _actionTypes.BOOKING_CONFIRM_MODAL_PUT, function(e, r) {
        var t = r.payload;
        return merge(e, {
            bookingConfirmModal: t
        });
    }),
    sagas: _defineProperty({}, _actionTypes.INIT_INFO_SUCCESS, _regeneratorRuntime2.default.mark(function e(r, t) {
        var n, o;
        return _regeneratorRuntime2.default.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return n = r.payload, o = t.put, e.next = 4, o({
                    type: _actionTypes.BOOKING_CONFIRM_MODAL_PUT,
                    payload: n.bookingConfirmModal
                });

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
    })),
    selectors: function() {
        return {
            getConfirmModal: function(e) {
                return e.globals.confirmModal.bookingConfirmModal;
            }
        };
    }
};

exports.default = _default;