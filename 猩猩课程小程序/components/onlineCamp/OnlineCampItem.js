var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "OnlineCampItem",
    props: {
        schedule: {
            type: Object,
            default: {}
        }
    },
    data: {
        isModal: !1
    },
    methods: {
        handleTap: function() {
            this.$router.navigateTo({
                page: 3 === this.schedule.campType ? "OnlineCampDetail" : "CampDetail",
                data: {
                    sk: this.schedule.campInfo.sk,
                    campId: this.schedule.campInfo.campId,
                    city: this.schedule.city
                }
            });
        }
    }
}, {
    info: {
        components: {
            "camp-item-layout": {
                path: "./CampItemLayout"
            }
        },
        on: {}
    },
    handlers: {
        "1187-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.handleTap(e);
            }
        }
    },
    models: {},
    refs: void 0
});