"use strict";
/**
 * namespace.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
var ns;
(function (ns) {
    function add(a, b) {
        return a + b;
    }
    ns.add = add;
})(ns || (ns = {}));
function main(args) {
    console.log("1 + 2 = " + ns.add(1, 2));
    return 0;
}
