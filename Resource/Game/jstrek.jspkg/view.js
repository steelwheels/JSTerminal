"use strict";
/**
 * @file view.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiComponent.d.ts"/>
/// <reference path="types/model.d.ts"/>
class TKViewer {
    constructor() {
    }
    update(space) {
        let humanship = space.humanShip;
        let humanradar = humanship != null ? humanship.radar : null;
        let radarlines = [];
        if (humanradar != null) {
            radarlines = humanradar.toStrings();
        }
        let statuslines = this.statusStrings(space);
        let lines = pasteStrings(radarlines, statuslines, " ");
        this.dumpStrings(lines);
    }
    statusStrings(space) {
        let bases = space.humanBases;
        let aliens = space.alienShips;
        return [`Base num:  ${bases.length}`,
            `Alien num: ${aliens.length}`];
    }
    dumpStrings(lines) {
        for (let line of lines) {
            console.log(line);
        }
    }
}
