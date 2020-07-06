function ownKeys(r, e) {
    var n = Object.keys(r);
    return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(r)), 
    e && (n = n.filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable;
    })), n;
}

function _objectSpread(r) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(n, !0).forEach(function(e) {
            _defineProperty(r, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n)) : ownKeys(n).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(n, e));
        });
    }
    return r;
}

function _defineProperty(e, r, n) {
    return r in e ? Object.defineProperty(e, r, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = n, e;
}

function getDataBindingMapCreator(e) {
    var i = e.elementsIdMap, a = e.responseRegionsConfigMap;
    return function(e) {
        var r = {};
        if (e in a) {
            var n = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, r = {};
                for (var n in e) "id" in e[n] && (r[e[n].id] = _objectSpread({
                    responseRegionId: n
                }, e[n]));
                return r;
            }(a[e]);
            for (var t in i[e]) {
                var o = i[e][t];
                o in n && (r[o] = n[o].bindingMap || {}, r[o].regionId = n[o].responseRegionId);
            }
        }
        return r;
    };
}

module.exports = getDataBindingMapCreator;