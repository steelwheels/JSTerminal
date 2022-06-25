"use strict";
/*
 * main.ts
 */
/// <reference path="../types/KiwiLibrary.d.ts"/>
/// <reference path="../types/KiwiComponent.d.ts"/>
function main(args) {
    console.print("# table-view-2\n");
    let retval = enterView("table", null);
    console.print("retval = " + retval + "\n");
    return 0;
}
