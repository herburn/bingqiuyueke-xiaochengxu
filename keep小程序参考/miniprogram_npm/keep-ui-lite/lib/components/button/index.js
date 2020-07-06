(0, require("../../common/component").KeepComponent)({
    field: !1,
    externalClasses: [],
    relations: {},
    data: {},
    properties: {
        type: {
            type: String,
            value: "default"
        },
        size: {
            type: String,
            value: "normal"
        },
        shape: {
            type: String,
            value: "square"
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        border: {
            type: Boolean,
            value: !1
        },
        formType: String,
        openType: String,
        appParameter: String,
        sessionFrom: {
            type: String,
            value: ""
        },
        sendMessageTitle: String,
        sendMessagePath: String,
        sendMessageImg: String,
        showMessageCard: Boolean
    },
    observers: {},
    behaviors: [],
    created: function() {},
    attached: function() {},
    ready: function() {},
    detached: function() {},
    methods: {
        bindclick: function() {
            if ("finish" === this.data.type || this.data.disabled) return !1;
            this.$emit("click");
        },
        bindgetuserinfo: function(e) {
            this.$emit("getuserinfo", e);
        },
        bindgetphonenumber: function(e) {
            this.$emit("getphonenumber", e);
        },
        bindcontact: function(e) {
            this.$emit("contact", e);
        },
        binderror: function(e) {
            this.$emit("error", e);
        }
    },
    lifetimes: {
        attached: function() {},
        moved: function() {},
        detached: function() {}
    },
    pageLifetimes: {
        show: function() {},
        hide: function() {},
        resize: function() {}
    }
});