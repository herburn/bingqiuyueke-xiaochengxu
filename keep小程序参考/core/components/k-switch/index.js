getApp().Component({
    externalClasses: [ "i-class" ],
    properties: {
        value: {
            type: Boolean,
            value: !1
        },
        size: {
            type: String,
            value: "default"
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        name: {
            type: String,
            value: ""
        }
    },
    options: {
        multipleSlots: !0
    },
    methods: {
        toggle: function(e) {
            if (console.log(e), !this.data.disabled) {
                var t = !this.data.value;
                this.triggerEvent("change", {
                    value: t
                });
            }
        }
    }
});