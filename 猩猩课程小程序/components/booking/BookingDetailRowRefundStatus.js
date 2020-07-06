var _core = _interopRequireDefault(require("./../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "BookingDetailRowRefundStatus",
    props: {
        refundStatus: {
            type: Number,
            default: -1
        },
        refundAmount: {
            type: Number,
            default: -1
        },
        needAmount: {
            type: Number,
            default: -1
        }
    },
    computed: {
        status: function() {
            return Number(this.refundStatus);
        },
        payWay: function() {
            return 0 < this.needAmount ? "微信钱包" : "超猩卡";
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