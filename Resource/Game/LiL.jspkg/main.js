"use strict";
/*
 * main.js
 */
/// <reference path="types/KiwiLibrary.d.ts" />
/// <reference path="types/KiwiShell.d.ts" />
/// <reference path="types/KiwiComponent.d.ts" />
function main(args) {
    console.print("the labyrinth in the lake\n");
    let retval = enterView("main");
    console.print("Result = " + retval + "\n");
}
