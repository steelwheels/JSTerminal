"use strict";
/*
 * character.ts
 */
/// <reference path="../types/KiwiLibrary.d.ts" />
/// <reference path="../types/KiwiShell.d.ts" />
/// <reference path="../types/KiwiComponent.d.ts" />
var Character;
(function (Character) {
    let Race;
    (function (Race) {
        Race[Race["human"] = 0] = "human";
        Race[Race["elf"] = 1] = "elf";
        Race[Race["dwarf"] = 2] = "dwarf";
        Race[Race["gnome"] = 3] = "gnome";
        Race[Race["hobbit"] = 4] = "hobbit";
    })(Race = Character.Race || (Character.Race = {}));
    ;
    let Job;
    (function (Job) {
        Job[Job["fighter"] = 0] = "fighter";
        Job[Job["mage"] = 1] = "mage";
        Job[Job["priest"] = 2] = "priest";
        Job[Job["thief"] = 3] = "thief";
    })(Job = Character.Job || (Character.Job = {}));
    ;
    let StatusType;
    (function (StatusType) {
        StatusType[StatusType["level"] = 0] = "level";
        StatusType[StatusType["hitPoint"] = 1] = "hitPoint";
        StatusType[StatusType["magicPoint"] = 2] = "magicPoint";
        StatusType[StatusType["strength"] = 3] = "strength";
        StatusType[StatusType["vitality"] = 4] = "vitality";
        StatusType[StatusType["dexterity"] = 5] = "dexterity";
        StatusType[StatusType["agility"] = 6] = "agility";
        StatusType[StatusType["intelligence"] = 7] = "intelligence";
        StatusType[StatusType["piety"] = 8] = "piety";
        StatusType[StatusType["luck"] = 9] = "luck";
    })(StatusType = Character.StatusType || (Character.StatusType = {}));
    ;
    function statusTypeToString(type) {
        let result = "?";
        switch (type) {
            case StatusType.level:
                result = "level";
                break;
            case StatusType.hitPoint:
                result = "hitPoint";
                break;
            case StatusType.magicPoint:
                result = "magicPoint";
                break;
            case StatusType.strength:
                result = "strength";
                break;
            case StatusType.vitality:
                result = "vitality";
                break;
            case StatusType.dexterity:
                result = "dexterity";
                break;
            case StatusType.agility:
                result = "agility";
                break;
            case StatusType.intelligence:
                result = "intelligence";
                break;
            case StatusType.piety:
                result = "piety";
                break;
            case StatusType.luck:
                result = "luck";
                break;
        }
        return result;
    }
    Character.statusTypeToString = statusTypeToString;
    class Status {
        constructor(record) {
            this.mRecord = record;
        }
        get race() { return toString(this.mRecord.value("race")); }
        get level() { return this.value(StatusType.level); }
        get hitPoint() { return this.value(StatusType.hitPoint); }
        get magicPoint() { return this.value(StatusType.magicPoint); }
        get strength() { return this.value(StatusType.strength); }
        get vitality() { return this.value(StatusType.vitality); }
        get dexterity() { return this.value(StatusType.dexterity); }
        get agility() { return this.value(StatusType.agility); }
        get intelligence() { return this.value(StatusType.intelligence); }
        get piety() { return this.value(StatusType.piety); }
        get luck() { return this.value(StatusType.luck); }
        value(type) {
            let name = statusTypeToString(type);
            return toNumber(this.mRecord.value(name));
        }
    }
    Character.Status = Status;
    ;
    function raceToString(race) {
        let result = "?";
        switch (race) {
            case Race.human:
                result = "human";
                break;
            case Race.elf:
                result = "elf";
                break;
            case Race.dwarf:
                result = "dwarf";
                break;
            case Race.gnome:
                result = "gnome";
                break;
            case Race.hobbit:
                result = "hobbit";
                break;
        }
        return result;
    }
    Character.raceToString = raceToString;
    function initStatus(race) {
        let storage = ValueStorage("main");
        if (storage == null) {
            console.log("[Error] Failed to load storage");
            return null;
        }
        let table = ValueTable("character.initStatus", storage);
        if (table == null) {
            console.log("[Error] Failed to load initStatus");
            return null;
        }
        let racename = raceToString(race);
        let recs = table.search(racename, "race");
        if (recs != null) {
            if (recs.length >= 1) {
                let stat = new Character.Status(recs[0]);
                return stat;
            }
        }
        console.log("[Error] record is not found");
        return null;
    }
    Character.initStatus = initStatus;
})(Character || (Character = {}));
; // end of module
