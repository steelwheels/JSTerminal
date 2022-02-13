"use strict";
/*
 * alert.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiComponent.d.ts"/>
function main(args) {
    console.print("Hello\n");
    let result = alert("Hello, world");
    console.print("result = " + result + "\n");
    return 0;
}
