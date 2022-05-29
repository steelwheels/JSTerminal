"use strict";
/*
 * main.ts
 */
/// <reference path="../types/KiwiLibrary.d.ts"/>
/// <reference path="../types/KiwiComponent.d.ts"/>
function main(args) {
    console.log("Hello, world !!");
    let retval = enterView("checkbox", null);
    console.log("Result = " + retval);
}
