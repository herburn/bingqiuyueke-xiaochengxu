var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "BookingConfirmHeader",
    props: {
        renderConfig: {
            type: Object,
            default: {
                time: !1,
                trainer: !1,
                address: !1,
                sections: !1
            }
        },
        headerInfo: {
            type: Object,
            default: {
                title: "",
                duration: "",
                sections: "",
                address: "",
                waitingCount: 0,
                trainerStageName: ""
            }
        }
    }
}, {
    info: {
        components: {},
        on: {}
    },
    handlers: {},
    models: {},
    refs: void 0
});