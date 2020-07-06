var _core = _interopRequireDefault(require("./../../tmp/index.js")), _constants = require("./../../constants/index.js");

function _interopRequireDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

_core.default.component({
    name: "CourseTextAgreement",
    options: {
        styleIsolation: "isolated"
    },
    props: {
        fontColor: {
            type: String,
            default: "#767678"
        },
        hasTitle: {
            type: Boolean,
            default: !0
        }
    },
    data: {
        privacyNoticeUrl: _constants.privacyNoticeUrl,
        trainingAgreementUrl: _constants.trainingAgreementUrl
    },
    methods: {
        routerLink: function(t) {
            this.$router.navigateTo({
                page: "WebView",
                data: {
                    url: t
                }
            });
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1083-0": {
            tap: function() {
                var t = this;
                t.routerLink(t.privacyNoticeUrl);
            }
        },
        "1083-1": {
            tap: function() {
                var t = this;
                t.routerLink(t.trainingAgreementUrl);
            }
        },
        "1083-2": {
            tap: function() {
                var t = this;
                t.routerLink(t.privacyNoticeUrl);
            }
        },
        "1083-3": {
            tap: function() {
                var t = this;
                t.routerLink(t.trainingAgreementUrl);
            }
        }
    },
    models: {},
    refs: void 0
});