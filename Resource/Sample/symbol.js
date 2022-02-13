"use strict";
/*
 * symbol.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
function main(args) {
    let path = Symbols.characterA.path;
    console.print("characterA : " + path + "\n");
    return 0;
}
