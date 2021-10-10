"use strict";
/*
 * hello_color.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
function main(args) {
    setColor(Curses.black);
    console.log('Hello World');
    setColor(Curses.red);
    console.log('Hello World');
    setColor(Curses.green);
    console.log('Hello World');
    setColor(Curses.yellow);
    console.log('Hello World');
    setColor(Curses.blue);
    console.log('Hello World');
    setColor(Curses.magenta);
    console.log('Hello World');
    setColor(Curses.cyan);
    console.log('Hello World');
    setColor(Curses.white);
    console.log('Hello World');
    return 0;
}
function setColor(color) {
    let colstr = EscapeCode.color(1, color);
    if (colstr != null) {
        console.print(colstr);
    }
}
