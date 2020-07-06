getApp();

Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        showModalInfo: {
            type: Object,
            value: null
        }
    },
    data: {},
    attached: function() {},
    methods: {
        confirm: function() {
            this.data.showModalInfo && this.data.showModalInfo.confirm();
        },
        cancel: function() {
            this.data.showModalInfo && this.data.showModalInfo.cancel();
        },
        close: function() {
            this.data.showModalInfo && ("confirm" === this.data.showModalInfo.closeModalOpt ? this.data.showModalInfo.confirm() : this.data.showModalInfo.cancel());
        }
    }
});