getApp().Component({
    properties: {
        target: {
            type: String,
            value: "self"
        },
        url: {
            type: String,
            value: ""
        },
        openType: {
            type: String,
            value: "navigate"
        },
        delta: {
            type: Number
        },
        appId: {
            type: String
        },
        path: {
            type: String
        },
        extraData: {
            type: Object
        },
        version: {
            type: String,
            value: "release"
        },
        hoverClass: {
            type: String,
            value: "navigator-hover"
        },
        hoverStopPropagation: {
            type: Boolean,
            value: !1
        },
        hoverStartTime: {
            type: Number,
            value: 50
        },
        hoverStayTime: {
            type: Number,
            value: 600
        },
        bindsuccess: {
            type: String
        },
        bindfail: {
            type: String
        },
        bindcomplete: {
            type: String
        }
    },
    data: {},
    methods: {
        oncomplete: function(e) {
            this.triggerEvent("kcomplete", e.detail, {
                bubbles: !0,
                composed: !0,
                capturePhase: !0
            });
        },
        onsuccess: function(e) {
            this.triggerEvent("ksuccess", e.detail, {
                bubbles: !0,
                composed: !0,
                capturePhase: !0
            });
        },
        onfail: function(e) {
            this.triggerEvent("kfail", e.detail, {
                bubbles: !0,
                composed: !0,
                capturePhase: !0
            });
        },
        ontap: function(e) {
            if (console.log("ontap ---\x3e ", this.data.openType), "self" == this.data.target) if ("navigateBack" === this.data.openType) wx.wxapis[this.data.openType]({
                delta: this.data.delta
            }); else {
                var t = this.data.openType;
                "navigate" != t && "redirect" != t || (t += "To"), wx.wxapis[t](!1, {
                    url: this.data.url
                });
            }
        }
    }
});