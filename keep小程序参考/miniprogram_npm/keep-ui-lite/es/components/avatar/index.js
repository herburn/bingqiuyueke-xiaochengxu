(0, require("../../common/component").KeepComponent)({
    field: !1,
    externalClasses: [],
    relations: {},
    data: {},
    properties: {
        size: {
            type: Number,
            value: 60
        },
        borderWidth: {
            type: Number,
            value: 0
        },
        borderColor: {
            type: String,
            value: "#ffffff"
        },
        src: {
            type: String,
            value: ""
        },
        preview: {
            type: Boolean,
            value: !1
        }
    },
    observers: {},
    behaviors: [],
    created: function() {},
    attached: function() {},
    ready: function() {},
    detached: function() {},
    methods: {
        previewAvatar: function() {
            this.data.src && this.data.preview && wx.previewImage({
                urls: [ this.data.src ]
            });
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