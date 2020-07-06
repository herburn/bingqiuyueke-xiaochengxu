var _core = _interopRequireDefault(require("./../../../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "MonthRecordCard",
    props: {
        record: {
            type: Object,
            default: {
                yearMonth: "",
                monthText: "",
                workoutCount: -1,
                workoutMin: -1,
                workoutDays: -1,
                background: ""
            }
        }
    },
    data: {
        defaultBg: "https://img.supermonkey.com.cn/webapp/wx11/class2/23.png"
    },
    computed: {},
    methods: {
        goDetail: function() {
            this.$router.navigateTo({
                page: "BookingRecordList",
                data: {
                    yearMonth: this.record.month
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
        "1037-0": {
            tap: function() {
                var e = arguments[arguments.length - 1];
                this.goDetail(e);
            }
        }
    },
    models: {},
    refs: void 0
});