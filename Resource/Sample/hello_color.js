"use strict";
/*
 * hello_color.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
function main(args) {
    console.log('\033[30m Hello World \033[39m'); // Black
    console.log('\033[31m Hello World \033[39m'); // Red
    console.log('\033[32m Hello World \033[39m'); // Green
    console.log('\033[33m Hello World \033[39m'); // Yellow
    console.log('\033[34m Hello World \033[39m'); // Blue
    console.log('\033[35m Hello World \033[39m'); // Magenta
    console.log('\033[36m Hello World \033[39m'); // Cyan
    console.log('\033[37m Hello World \033[39m'); // White
    return 0;
}
