(0, require("../../common/component").KeepComponent)({
    field: !1,
    externalClasses: [],
    relations: {
        "../tab/index": {
            type: "child",
            linked: function() {
                this.changeCurrent();
            },
            linkChanged: function() {
                this.changeCurrent();
            },
            unlinked: function() {
                this.changeCurrent();
            }
        }
    },
    data: {},
    properties: {
        current: {
            type: String,
            value: "",
            observer: "changeCurrent"
        },
        scroll: {
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
        changeCurrent: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data.current, n = this.getRelationNodes("../tab/index");
            n.length > 0 && n.forEach(function(n) {
                n.changeCurrent(n.data.name === e);
            });
        },
        emitEvent: function(e) {
            this.$emit("change", {
                name: e
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