var _core = _interopRequireDefault(require("./../../../tmp/index.js"));

function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

_core.default.component({
    name: "TextRenderParagraph",
    options: {
        styleIsolation: "isolated"
    },
    props: {
        paragraphs: {
            type: Array,
            default: []
        },
        fontColor: {
            type: String,
            default: "#767678"
        }
    }
}, {
    info: {
        components: {
            "text-parse-html": {
                path: "./TextParseHtml"
            }
        },
        on: {}
    },
    handlers: {},
    models: {},
    refs: void 0
});