"use strict";
/*
 * cli-menu.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiShell.d.ts"/>
function main(args) {
    console.print("Readline: menu\n");
    let items = [
        { key: "A", label: "Item A" },
        { key: "B", label: "Item B" },
        { key: "C", label: "Item C" }
    ];
    let result = Readline.menu(items);
    console.print("result = " + result + "\n");
    return 0;
}
