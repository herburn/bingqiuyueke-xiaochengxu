var _core = _interopRequireDefault(require("./../tmp/index.js")), _reduxPlugin = require("./../plugins/redux/index.js");

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function ownKeys(t, e) {
    var n = Object.keys(t);
    return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(t)), 
    e && (n = n.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), n;
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(n, !0).forEach(function(e) {
            _defineProperty(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
    }
    return t;
}

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

_core.default.page({
    name: "SplashScreen",
    _params: null,
    data: {
        contentType: "splashScreen"
    },
    computed: _objectSpread({}, (0, _reduxPlugin.mapSelectors)({
        isNeedBindPhone: function(e) {
            return this.$store.selectors.getIsNeedBindPhone(e);
        },
        isNovice: function(e) {
            return this.$store.selectors.getIsNovice(e);
        }
    })),
    beforeRouteLeave: function(e, t, n) {
        1 == +e.data.checkoutPhone && this.isNeedBindPhone ? n({
            page: "BindPhoneBridge",
            data: {
                page: e.page,
                data: this.$encodeParams(e.data)
            },
            jumpMethodName: "redirectTo",
            encode: !0
        }) : e.data.msgId && e.data.sk && "CustomService" !== e.page ? n({
            page: "CustomService",
            data: {
                msgId: e.data.msgId,
                sk: e.data.sk
            },
            jumpMethodName: "redirectTo"
        }) : "" === this.$app.globalData.extPage && this.isNovice && "NoviceClassList" !== e.page ? n({
            page: "NoviceClassList",
            jumpMethodName: "redirectTo"
        }) : n();
    },
    beforeRouteUpdate: function(e, t, n) {
        this._params = e.data, function() {
            if (this.contentType === this._params.contentType) return;
            this.contentType = this._params.contentType, this._handleInvokeChild("onLoad", this._params);
        }.call(this), n(!0);
    },
    onLoad: function(e) {
        var t = e.contentType, n = void 0 === t ? "splashScreen" : t, o = e.login;
        this._params = e, this.contentType = n, 1 == +o && (this._params.internalJump = 1);
    },
    onShow: function() {
        this._handleInvokeChild("onShow", this._params);
    },
    onReady: function() {
        this._handleInvokeChild("onLoad", this._params);
    },
    onUnload: function() {
        this._handleInvokeChild("onUnload");
    },
    methods: {
        handleReload: function() {
            this._handleInvokeChild("handleReload");
        }
    },
    _handleInvokeChild: function(e, t) {
        var n = 1 < arguments.length && void 0 !== t ? t : null;
        try {
            "splashScreen" === this.contentType ? this.$invokeChild("splashScreen", e, n) : "login" === this.contentType ? this.$invokeChild("login", e, n) : "notLogin" === this.contentType ? this.$invokeChild("notLogin", e, n) : "serviceUnavailable" === this.contentType && this.$invokeChild("serviceUnavailable", e, n);
        } catch (e) {}
    }
}, {
    info: {
        components: {
            "splash-screen-content": {
                path: "./splashScreenComponents/SplashScreenContent"
            },
            "login-content": {
                path: "./splashScreenComponents/LoginContent"
            },
            "not-login-content": {
                path: "./splashScreenComponents/NotLoginContent"
            },
            "service-unavailable": {
                path: "./splashScreenComponents/ServiceUnavailable"
            },
            "unauthorized-msg": {
                path: "./../components/subscribeMsg/ModalUnauthorizedMsg"
            },
            "reject-msg": {
                path: "./../components/subscribeMsg/ModalRejectMsg"
            },
            "modal-subscribe-msg-guide1": {
                path: "./../components/subscribeMsg/ModalSubscribeMsgGuide1"
            },
            "modal-subscribe-msg-guide2": {
                path: "./../components/subscribeMsg/ModalSubscribeMsgGuide2"
            },
            "page-loading": {
                path: "./../components/common/loading/LoadingPage"
            },
            "show-toast": {
                path: "./../components/common/feedback/Toast"
            },
            "show-modal": {
                path: "./../components/common/feedback/Modal"
            },
            "show-add-wechat-modal": {
                path: "./../components/common/feedback/ModalAddWeChat"
            },
            "register-user": {
                path: "./../components/common/feedback/ModalRegisterUser"
            },
            "show-action-sheet": {
                path: "./../components/common/dataEntry/ActionSheet"
            },
            "show-picker-view": {
                path: "./../components/common/dataEntry/PickerView"
            }
        },
        on: {
            "833-0": [ "reload" ]
        }
    },
    handlers: {
        "833-0": {
            reload: function() {
                var e = arguments[arguments.length - 1];
                this.handleReload(e);
            }
        }
    },
    models: {},
    refs: void 0
});