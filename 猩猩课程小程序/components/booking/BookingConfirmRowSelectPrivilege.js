var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "BookingConfirmRowSelectPrivilege",
    props: {
        label: {
            type: String,
            default: "特权使用"
        },
        privileges: {
            type: Array,
            default: []
        },
        privilegeSelected: {
            type: Number,
            default: 0
        },
        privilegeText: {
            type: String,
            default: ""
        }
    },
    methods: {
        select: function() {
            this.$emit("changePrivilege", (this.privilegeSelected + 1) % 2);
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {
        "1058-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.select(e);
            }
        }
    },
    models: {},
    refs: void 0
});