"use strict";
/**
 * @file model.ts
 */
/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiComponent.d.ts"/>
var ObjectType;
(function (ObjectType) {
    ObjectType[ObjectType["humanBase"] = 0] = "humanBase";
    ObjectType[ObjectType["humanShip"] = 1] = "humanShip";
    ObjectType[ObjectType["alienShip"] = 2] = "alienShip";
})(ObjectType || (ObjectType = {}));
;
const ObjectTypeNum = 3;
var GameStatus;
(function (GameStatus) {
    GameStatus[GameStatus["inProgress"] = 0] = "inProgress";
    GameStatus[GameStatus["terminated"] = 1] = "terminated";
    GameStatus[GameStatus["humanWin"] = 2] = "humanWin";
    GameStatus[GameStatus["alienWin"] = 3] = "alienWin";
})(GameStatus || (GameStatus = {}));
;
class TKRadar {
    constructor(width, height) {
        this.mTable = new Table(width, height);
    }
    get width() { return this.mTable.width; }
    get height() { return this.mTable.height; }
    element(x, y) {
        return this.mTable.element(x, y);
    }
    setElement(x, y, obj) {
        this.mTable.setElement(x, y, obj);
    }
    clear() {
        this.mTable.fill(null);
    }
    toSymbol(obj) {
        let result;
        if (obj != null) {
            result = "?";
            switch (obj) {
                case ObjectType.humanBase:
                    result = "B";
                    break;
                case ObjectType.humanShip:
                    result = "E";
                    break;
                case ObjectType.alienShip:
                    result = "K";
                    break;
            }
        }
        else {
            result = ".";
        }
        return result;
    }
    toStrings() {
        let owner = this;
        let result = [];
        for (let i = 0; i < this.height; i++) {
            let line = "";
            this.mTable.forEachRow(i, function (value, pos) {
                let sym = owner.toSymbol(value);
                line += sym;
            });
            result.push(line);
        }
        return result;
    }
}
class TKObject {
    constructor(type, pos) {
        this.mType = type;
        this.mPosition = pos;
        this.mSpeed = Point(0, 0);
    }
    get type() { return this.mType; }
    set position(pos) { this.mPosition = pos; }
    get position() { return this.mPosition; }
    set speed(spd) { this.mSpeed = spd; }
    get speed() { return this.mSpeed; }
}
class TKShip extends TKObject {
    constructor(type, pos, radar) {
        super(type, pos);
        this.mRadar = radar;
    }
    set radar(radar) { this.mRadar = radar; }
    get radar() { return this.mRadar; }
}
class TKBase extends TKObject {
    constructor(pos) {
        super(ObjectType.humanBase, pos);
    }
}
class TKSpace {
    constructor(width, height) {
        this.mTable = new Table(width, height);
        this.mIsDirty = true;
        this.mHumanBases = [];
        this.mHumanShip = null;
        this.mAlienShips = [];
    }
    get width() { return this.mTable.width; }
    get height() { return this.mTable.height; }
    get humanShip() {
        this.update();
        return this.mHumanShip;
    }
    get humanBases() {
        this.update();
        return this.mHumanBases;
    }
    get alienShips() {
        this.update();
        return this.mAlienShips;
    }
    gameStatus() {
        let result;
        if (this.mHumanShip == null) {
            result = GameStatus.alienWin;
        }
        else if (this.mAlienShips.length == 0) {
            result = GameStatus.humanWin;
        }
        else {
            result = GameStatus.inProgress;
        }
        return result;
    }
    element(x, y) {
        return this.mTable.element(x, y);
    }
    setElement(pos, obj) {
        this.mTable.setElement(pos.x, pos.y, obj);
        this.mIsDirty = true;
    }
    forEach(childFunc) {
        this.mTable.forEach(childFunc);
    }
    update() {
        if (!this.mIsDirty) {
            return; // Nothing have to do
        }
        this.mHumanBases = [];
        this.mHumanShip = null;
        this.mAlienShips = [];
        let owner = this;
        this.mTable.forEach(function (obj, pos) {
            if (obj != null) {
                switch (obj.type) {
                    case ObjectType.humanBase:
                        owner.mHumanBases.push(obj);
                        break;
                    case ObjectType.humanShip:
                        owner.mHumanShip = obj;
                        break;
                    case ObjectType.alienShip:
                        owner.mAlienShips.push(obj);
                        break;
                }
            }
        });
        this.mIsDirty = false;
    }
}
