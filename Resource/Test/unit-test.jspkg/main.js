"use strict";
/*
 * main.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/test_color.d.ts"/>
/// <reference path="types/test_graphics.d.ts"/>
/// <reference path="types/test_string.d.ts"/>
/// <reference path="types/test_table.d.ts"/>
function main(args) {
    let result = true;
    console.log("===== Test: Color");
    result && (result = test_color());
    console.log("===== Test: Graphics");
    result && (result = test_graphics());
    console.log("===== Test: String");
    result && (result = test_string());
    console.log("===== Test: Table");
    result && (result = test_table());
    return result ? 0 : 1;
}
