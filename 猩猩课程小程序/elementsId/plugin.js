Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var elementsIdMap = _interopRequireWildcard(require("./index.js"));

function _interopRequireWildcard(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
        var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
        i.get || i.set ? Object.defineProperty(t, r, i) : t[r] = e[r];
    }
    return t.default = e, t;
}

var _default = {
    install: function(e) {
        e.mixin({
            attached: function() {
                this.name in elementsIdMap && (this._elementIdMap = elementsIdMap[this.name]);
            }
        });
    }
};

exports.default = _default;