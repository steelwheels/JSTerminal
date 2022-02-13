"use strict";
/*
 * openPanel.js
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
function main() {
    let result = -1;
    let url = openPanel("Select JS file", FileType.file, ["js"]);
    if (url != null) {
        console.print("Selected URL = " + url.path + "\n");
        result = 0;
    }
    else {
        console.print("Selected URL = NULL\n");
    }
    return result;
}
