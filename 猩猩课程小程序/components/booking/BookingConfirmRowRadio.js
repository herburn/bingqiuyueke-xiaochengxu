var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "BookingConfirmRowRadio",
    props: {
        numArray: {
            type: Array,
            default: [ {
                label: "1人",
                value: 1,
                recommend: !1,
                disabled: !1
            } ]
        },
        label: {
            type: String,
            default: "人数"
        },
        selectedIndex: {
            type: Number,
            default: -1
        }
    },
    data: {},
    methods: {
        confirmNum: function(e) {
            this.$emit("confirmNum", e);
        }
    }
}, {
    info: {
        components: {
            "radio-button": {
                path: "./../common/dataEntry/RadioButton"
            }
        },
        on: {
            "1055-0": [ "confirmNum" ]
        }
    },
    handlers: {
        "1055-0": {
            confirmNum: function() {
                var e = arguments[arguments.length - 1];
                this.confirmNum(e);
            }
        }
    },
    models: {},
    refs: void 0
});