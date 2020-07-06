var e = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/helpers/defineProperty"));

Component({
    properties: {
        newCourseEnvelopes: Object,
        newCourseEnvelopesHide: {
            type: Boolean,
            value: !0
        }
    },
    data: {},
    methods: {
        close: function() {
            this.setData((0, e.default)({}, "newCourseEnvelopes.needCoupon", !1)), this.data.newCourseEnvelopes && wx.lego.reportNewClassEnvelopes(this.data.newCourseEnvelopes.trainingLogId);
        }
    }
});