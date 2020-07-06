var n = require("fs"), e = require("path"), c = require("chokidar"), r = require("stylus"), t = require("pug"), u = require("./utils").log;

function s(n) {
    return n.replace(/(.css|.styl)$/, ".wxss");
}

function i(c) {
    var t = n.readFileSync(c, "utf-8");
    r.render(t, {
        filename: e.resolve(c)
    }, function(e, r) {
        e && u(e, "bgRed"), n.writeFileSync(s(c), r);
    });
}

function a(c) {
    var r = n.readFileSync(c, "utf-8");
    t.render(r, {
        filename: e.resolve(c)
    }, function(e, r) {
        e && u(e, "bgRed"), r = r.replace(/(\=\"wx\:else\"|\=\"scroll-(y|x)\"|&amp;|&lt;|&gt;)/g, function(n) {
            return "&amp;" == n ? "&" : "&lt;" == n ? "<" : "&gt;" == n ? ">" : "";
        }), n.writeFileSync(c.replace(/(.pug)$/, ".wxml"), r);
    });
}

!function(e) {
    u(e, "green");
    var r = e.length - 1;
    "\\" === e[r] && (e = e.substring(0, r));
    var t = c.watch([ "".concat(e, "/**/*.css"), "".concat(e, "/**/*.styl") ]), o = c.watch([ "".concat(e, "/**/*.pug") ]);
    t.on("add", function(n) {
        i(n), u("Add ".concat(n, " success!"), "green");
    }).on("change", function(n) {
        i(n), u("Change ".concat(n, " success!"), "blue");
    }).on("unlink", function(e) {
        n.unlinkSync(s(e)), u("Unlink ".concat(e, " success!"), "red");
    }), o.on("add", function(n) {
        a(n), u("Add ".concat(n, " success!"), "green");
    }).on("change", function(n) {
        a(n), u("Change ".concat(n, " success!"), "blue");
    }).on("unlink", function(e) {
        n.unlinkSync(s(e)), u("Unlink ".concat(e, " success!"), "red");
    });
}(e.resolve(__dirname, "..", "..", "app"));