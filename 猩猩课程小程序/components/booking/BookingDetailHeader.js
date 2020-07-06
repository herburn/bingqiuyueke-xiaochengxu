var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

_core.default.component({
    name: "BookingDetailHeader",
    options: {
        multipleSlots: !0
    },
    props: {
        theme: {
            type: String,
            default: ""
        },
        detail: {
            type: Object,
            default: {
                title: "",
                chatSessionId: "",
                navigatorPage: "",
                navigatorData: "",
                dateStr: "",
                face: "",
                name: ""
            }
        },
        chatType: {
            type: String,
            default: ""
        },
        customBox: {
            type: Boolean,
            default: !1
        },
        isShowDetail: {
            type: Boolean,
            default: !0
        }
    },
    computed: {
        chatText: function() {
            var t = {
                friend: "欢迎加好友聊聊",
                group: "欢迎加群聊聊"
            };
            return t[this.chatType];
        }
    },
    methods: {
        routerLink: function(t) {
            var e = t.page, a = t.method, i = void 0 === a ? "navigateTo" : a, o = t.data;
            this.$router[i]({
                page: e,
                data: o
            });
        },
        addWeChat: function() {
            "friend" === this.chatType && this.$addFriend({
                code: this.detail.chatSessionId,
                success: function() {}
            }), "group" === this.chatType && this.$addGroup({
                code: this.detail.chatSessionId,
                success: function() {}
            });
        }
    }
}, {
    info: {
        components: {
            face: {
                path: "./../common/dataDisplay/Face"
            }
        },
        on: {}
    },
    handlers: {
        "1085-0": {
            tap: function() {
                var t = this;
                t.routerLink({
                    page: t.detail.navigatorPage,
                    data: t.detail.navigatorData
                });
            }
        },
        "1085-1": {
            tap: function() {
                var t = arguments[arguments.length - 1];
                this.addWeChat(t);
            }
        }
    },
    models: {},
    refs: void 0
});