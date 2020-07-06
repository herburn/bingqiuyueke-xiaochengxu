(0, require("../../common/component").KeepComponent)({
    field: !1,
    externalClasses: [],
    relations: {
        "../tabs/index": {
            type: "parent"
        }
    },
    data: {
        current: !1
    },
    properties: {
        name: {
            type: String,
            value: ""
        },
        title: {
            type: String,
            value: ""
        }
    },
    observers: {},
    behaviors: [],
    created: function() {},
    attached: function() {},
    ready: function() {},
    detached: function() {},
    methods: {
        changeCurrent: function(e) {
            this.setData({
                current: e
            });
        },
        handleClickItem: function() {
            this.getRelationNodes("../tabs/index")[0].emitEvent(this.data.name);
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