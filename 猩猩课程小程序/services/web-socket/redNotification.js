Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _log = _interopRequireDefault(require("./../../utils/log.js")), _ramda = require("./../../vendor.js")(320), _store = require("./../../store/index.js"), _actionTypes = require("./../../store/types/index.js"), _socket = _interopRequireDefault(require("./socket.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var msgType = "UserSupermonkeyCardRedPointMsg", handlerList = [];

_socket.default.registerEventHandler(msgType, function(e) {
    return _ramda.pipe.apply(void 0, [ _ramda.identity ].concat(handlerList))(e);
});

var notification = {
    addHandler: function(e) {
        handlerList.push(e);
    },
    clearHandlers: function() {
        handlerList.splice(0, 1 / 0);
    }
};

notification.addHandler(redPointMsgHandler);

var _default = notification;

function redPointMsgHandler() {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.expireTickets, r = void 0 === t ? 0 : t, s = e.applyTickets, i = void 0 === s ? 0 : s, o = e.achieveNewBadges, a = void 0 === o ? 0 : o, n = e.inviteUsers, d = void 0 === n ? 0 : n, l = e.expirePersonal, u = void 0 === l ? 0 : l, c = e.applyTicketValue, p = void 0 === c ? 0 : c, _ = _store.store.selectors, g = _.getNewTicketNumber, v = _.getNewBadgeNumber, f = _.getMyInviteInfoNumber, y = _.getPersonalExpireNumber, T = _.getAllTicketValue, h = _store.store.getState(), k = {
        expireTickets: r,
        applyTickets: [ g(h), i ],
        achieveNewBadges: [ v(h), a ],
        inviteUsers: [ f(h), d ],
        expirePersonal: [ y(h), u ],
        applyTicketValue: [ T(h), p ]
    };
    console.error("redPointMsgHandler", k), _log.default.debug("redPointMsgHandler", k), 
    _store.store.dispatch(_store.store.actions.setExpireTicketsNumber(r)), _store.store.dispatch(_store.store.actions.setNewTicketNumber(g(h) + i)), 
    _store.store.dispatch(_store.store.actions.setNewBadgeNumber(v(h) + a)), _store.store.dispatch(_store.store.actions.setMyInviteInfoNumber(f(h) + d)), 
    _store.store.dispatch(_store.store.actions.setPersonalExpireStatus(y(h) + u)), _store.store.dispatch({
        type: _actionTypes.ALL_TICKET_VALUE_PUT,
        payload: T(h) + p
    });
}

exports.default = _default;