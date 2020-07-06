var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "BookingOnlyButtonInviteFriend",
    props: {
        courseType: {
            type: String,
            default: "personal"
        },
        scheduleId: {
            type: String,
            default: ""
        },
        isShow: {
            type: Boolean,
            default: !0
        }
    },
    computed: {},
    methods: {}
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1094-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.onTap(e);
            }
        }
    },
    models: {},
    refs: void 0
});