"use strict";
/*
 * symbol.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
function main(args) {
    let size = Symbols.characterA.size;
    console.log("characterA : (" + size.width + ", " + size.height + ")");
    return 0;
}
