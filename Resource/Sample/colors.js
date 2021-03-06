"use strict";
/*
 * colors.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
function main(args) {
    const mincol = Curses.minColor;
    const maxcol = Curses.maxColor;
    for (var fg = mincol; fg <= maxcol; fg++) {
        for (var bg = mincol; bg <= maxcol; bg++) {
            let fgstr = EscapeCode.color(1, fg);
            let bgstr = EscapeCode.color(0, bg);
            let fgname = colorName(fg);
            let bgname = colorName(bg);
            console.print(fgstr + bgstr + fgname + "/" + bgname);
        }
        console.print("\n");
    }
    console.print(EscapeCode.reset());
    return 0;
}
function colorName(code) {
    let result = "?";
    switch (code) {
        case 0:
            result = "black  ";
            break;
        case 1:
            result = "red    ";
            break;
        case 2:
            result = "green  ";
            break;
        case 3:
            result = "yellow ";
            break;
        case 4:
            result = "blue   ";
            break;
        case 5:
            result = "magenta";
            break;
        case 6:
            result = "cyan   ";
            break;
        case 7:
            result = "white  ";
            break;
    }
    return result;
}
