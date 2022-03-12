"use strict";
/*
 * main.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiComponent.d.ts"/>
function main(args) {
    console.print("# value-storage-2\n");
    let retval = enterView("table");
    console.print("retval = " + retval + "\n");
    return 0;
}
