Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _config = require("./../config.js"), _default = {
    install: function(e) {
        e.mixin({
            attached: function() {
                this.name in _config.responseRegionsIdMap && (this._sensorResponseRegionIdMap = _config.responseRegionsIdMap[this.name]);
            }
        });
    }
};

exports.default = _default;