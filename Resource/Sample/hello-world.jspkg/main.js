"use strict";
/*
 * main.js
 */
/// <reference path="../types/KiwiLibrary.d.ts"/>
/// <reference path="../types/KiwiComponent.d.ts"/>
function main(args) {
    console.log("Hello, world !!");
    let retval = enterView("hello", null);
    console.log("Result = " + retval);
}
