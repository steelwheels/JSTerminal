"use strict";
/*
 * curses-frame.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
function main(args) {
    Curses.begin();
    let width = Curses.width;
    let height = Curses.height;
    Curses.fill(0, 0, width, height, " ");
    let frame = new CFrame(Rect(5, 5, 20, 10));
    frame.foregroundColor = Curses.yellow;
    frame.backgroundColor = Curses.blue;
    frame.fill(" ");
    if (frame.moveTo(4, 4)) {
        frame.put("Hello, world !!");
    }
    else {
        frame.put("Error !!");
    }
    if (frame.moveTo(0, frame.frame.height - 1)) {
        frame.put("Press 'q' to quit");
    }
    else {
        frame.put("Error !!");
    }
    while (Curses.inkey() == null) {
        ;
    }
    Curses.end();
}
