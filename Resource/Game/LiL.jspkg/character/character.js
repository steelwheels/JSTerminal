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
        constructor() {
            this.level = 0;
            this.hitPoint = 0;
            this.magicPoint = 0;
            this.strength = 0;
            this.vitality = 0;
            this.dexterity = 0;
            this.agility = 0;
            this.intelligence = 0;
            this.piety = 0;
            this.luck = 0;
        }
    }
    Character.Status = Status;
    ;
    function anyToNumber(value) {
        if (isNumber(value)) {
            return value;
        }
        else {
            return 0;
        }
    }
    function loadInitStatus(race) {
        let table = valueTableInStorage("main", "character.initStatus");
        if (table == null) {
            console.log("[Error] No table");
            return null;
        }
        let racename = raceToString(race);
        let recs = table.search(racename, "race");
        if (recs != null) {
            if (recs.length < 1) {
                console.log("[Error] No records");
                return null;
            }
        }
        else {
            console.log("[Error] No records");
            return null;
        }
        let status = new Status();
        let record = recs[0];
        status.level = anyToNumber(record.value("level"));
        status.hitPoint = anyToNumber(record.value("hitPoint"));
        status.magicPoint = anyToNumber(record.value("magicPoint"));
        status.strength = anyToNumber(record.value("strength"));
        status.vitality = anyToNumber(record.value("vitality"));
        status.dexterity = anyToNumber(record.value("dexterity"));
        status.agility = anyToNumber(record.value("agility"));
        status.intelligence = anyToNumber(record.value("intelligence"));
        status.piety = anyToNumber(record.value("piety"));
        status.luck = anyToNumber(record.value("luck"));
        return status;
    }
    Character.loadInitStatus = loadInitStatus;
})(Character || (Character = {}));
; // end of module
