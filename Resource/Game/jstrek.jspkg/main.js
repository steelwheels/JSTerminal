"use strict";
/*
 * @file: main.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiComponent.d.ts"/>
/// <reference path="types/model.d.ts"/>
/// <reference path="types/view.d.ts"/>
/// <reference path="types/control.d.ts"/>
function main(args) {
    /* initialization */
    let control = new TKController();
    let viewer = new TKViewer();
    let space = control.initSpace();
    let docont = true;
    while (docont) {
        control.update(space);
        viewer.update(space);
        switch (control.selectAction()) {
            case UserAction.setDirection:
                break;
            case UserAction.quitGame:
                docont = false;
                break;
        }
    }
    return 0;
}
