var e = require("fs"), n = require("path"), c = require("chokidar"), s = require("less"), r = require("./utils").log;

function i(e) {
    return e.replace(/(.css|.less)$/, ".wxss");
}

function t(c) {
    var t = e.readFileSync(c, "utf-8");
    s.render(t, {
        filename: n.resolve(c)
    }).then(function(n) {
        var s = n.css;
        e.writeFileSync(i(c), s);
    }).catch(function(e) {
        r(e, "bgRed");
    });
}

!function(n) {
    r(n, "green");
    var s = n.length - 1;
    "\\" === n[s] && (n = n.substring(0, s)), c.watch([ "".concat(n, "/**/*.css"), "".concat(n, "/**/*.less") ]).on("add", function(e) {
        t(e), r("Add ".concat(e, " success!"), "green");
    }).on("change", function(e) {
        t(e), r("Change ".concat(e, " success!"), "blue");
    }).on("unlink", function(n) {
        e.unlinkSync(i(n)), r("Unlink ".concat(n, " success!"), "red");
    });
}(n.resolve(__dirname, "..", "..", "app"));