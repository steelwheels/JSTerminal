"use strict";
/**
 * @file readline.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiShell.d.ts"/>
function main(args) {
    console.print("input line> ");
    let line = Readline.inputLine();
    console.log("line -> " + line);
    console.print("===== menu =====");
    let idx = Readline.menu(["a", "b", "c"]);
    console.log("menu -> " + idx);
    return 0;
}
