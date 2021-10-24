"use strict";
/**
 * collection0.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
function main(args) {
    let col0 = Collection();
    let paths = [
        Symbols.chevronBackward,
        Symbols.chevronForward
    ];
    col0.add("Header", "Footer", paths);
    console.print("/* result */\n");
    let strs = col0.toStrings();
    for (let line of strs) {
        console.print(line + "\n");
    }
    return 0;
}
