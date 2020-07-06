require("os");

var e = require("path"), r = require("fs"), n = require("../../project.config.json"), o = require("../../build.json"), i = e.resolve(__dirname, "..", ".."), u = [];

o.components && r.readdirSync(e.join(i, "core", "components")).forEach(function(e) {
    ".DS_Store" != e && -1 === o.components.indexOf(e) && u.push({
        value: e,
        type: "folder"
    });
});

o.miniprogram_npm && r.readdirSync(e.join(i, "miniprogram_npm")).forEach(function(e) {
    ".DS_Store" != e && -1 === o.miniprogram_npm.indexOf(e) && u.push({
        value: e,
        type: "folder"
    });
});

o.excepts && o.excepts.forEach(function(e) {
    u.push({
        value: e,
        type: "folder"
    });
});

var p = o.others, s = p.length;

u.forEach(function(e, r) {
    var n;
    for (n = 0; n < s && p[n].value != e.value; n++) ;
    n == s && p.push(e);
}), p.push({
    type: "suffix",
    value: ".less"
}), p.push({
    type: "suffix",
    value: ".styl"
}), p.push({
    type: "suffix",
    value: ".pug"
}), n.packOptions = {
    ignore: p
}, r.writeFileSync(e.resolve(__dirname, "../../project.config.json"), JSON.stringify(n, null, 2));