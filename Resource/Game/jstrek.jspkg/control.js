"use strict";
/**
 * @file control.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiComponent.d.ts"/>
/// <reference path="types/KiwiShell.d.ts"/>
/// <reference path="types/model.d.ts"/>
var UserAction;
(function (UserAction) {
    UserAction[UserAction["setDirection"] = 0] = "setDirection";
    UserAction[UserAction["quitGame"] = 1] = "quitGame";
})(UserAction || (UserAction = {}));
;
class TKController {
    constructor() {
    }
    initSpace() {
        const MAX_BASE_NUM = 2;
        const MAX_ALIEN_NUM = 2;
        const MAX_HUMAN_NUM = 1;
        let space = new TKSpace(10, 10);
        /* Allocate bases */
        for (let i = 0; i < MAX_BASE_NUM; i++) {
            let pos = this.randomPoint(space);
            let base = new TKBase(pos);
            space.setElement(pos, base);
        }
        /* Allocate alien ships */
        for (let i = 0; i < MAX_ALIEN_NUM; i++) {
            let pos = this.randomPoint(space);
            let radar = new TKRadar(space.width, space.height);
            let alien = new TKShip(ObjectType.alienShip, pos, radar);
            space.setElement(pos, alien);
        }
        /* Allocate humap ships */
        for (let i = 0; i < MAX_HUMAN_NUM; i++) {
            let pos = this.randomPoint(space);
            let radar = new TKRadar(space.width, space.height);
            let alien = new TKShip(ObjectType.humanShip, pos, radar);
            space.setElement(pos, alien);
        }
        return space;
    }
    randomPoint(space) {
        while (true) {
            let x = Math.randomInt(0, space.width - 1);
            let y = Math.randomInt(0, space.height - 1);
            if (space.element(x, y) == null) {
                return Point(x, y);
            }
        }
    }
    /*
     * Update status
     */
    update(space) {
        let humanship = space.humanShip;
        if (humanship != null) {
            let radar = humanship.radar;
            this.updateRadar(radar, space);
        }
    }
    updateRadar(radar, space) {
        radar.clear();
        let owner = this;
        space.forEach(function (obj, pos) {
            if (Math.random() < 0.99) {
                radar.setElement(pos.x, pos.y, owner.objectToType(obj));
            }
            else {
                radar.setElement(pos.x, pos.y, owner.randomObjectType());
            }
        });
    }
    objectToType(obj) {
        return obj != null ? obj.type : null;
    }
    randomObjectType() {
        let result = null;
        let rnd = Math.randomInt(0, ObjectTypeNum);
        switch (rnd) {
            case 0:
                result = ObjectType.humanBase;
                break;
            case 1:
                result = ObjectType.humanShip;
                break;
            case 2:
                result = ObjectType.alienShip;
                break;
            default: result = null;
        }
        return result;
    }
    /*
     * User action
     */
    selectAction() {
        console.log("==== Select action");
        let idx = Readline.menu([
            "Set direction",
            "Quit" // 1
        ]);
        let result = UserAction.quitGame;
        switch (idx) {
            case 0:
                result = UserAction.setDirection;
                break;
            case 1:
                result = UserAction.quitGame;
                break;
        }
        return result;
    }
}
