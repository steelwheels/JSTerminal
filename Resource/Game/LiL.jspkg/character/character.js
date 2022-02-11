"use strict";
/*
 * character.ts
 */
/// <reference path="../types/KiwiLibrary.d.ts" />
/// <reference path="../types/KiwiShell.d.ts" />
/// <reference path="../types/KiwiComponent.d.ts" />
var Character;
(function (Character) {
    let RaceType;
    (function (RaceType) {
        RaceType[RaceType["human"] = 0] = "human";
        RaceType[RaceType["elf"] = 1] = "elf";
        RaceType[RaceType["dwarf"] = 2] = "dwarf";
        RaceType[RaceType["gnome"] = 3] = "gnome";
        RaceType[RaceType["hobbit"] = 4] = "hobbit";
    })(RaceType = Character.RaceType || (Character.RaceType = {}));
    ;
    Character.RaceName = {
        human: "human",
        elf: "elf",
        dwarf: "dwarf",
        gnome: "gnome",
        hobitt: "hobbit"
    };
    function raceToString(race) {
        let result = "?";
        switch (race) {
            case RaceType.human:
                result = Character.RaceName.human;
                break;
            case RaceType.elf:
                result = Character.RaceName.elf;
                break;
            case RaceType.dwarf:
                result = Character.RaceName.dwarf;
                break;
            case RaceType.gnome:
                result = Character.RaceName.gnome;
                break;
            case RaceType.hobbit:
                result = Character.RaceName.hobitt;
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
    Character.StatusName = {
        level: "level",
        hitPoint: "hitPoint",
        magicPoint: "magicPoint",
        strength: "strength",
        vitality: "vitality",
        dexterity: "dexterity",
        agility: "agility",
        intelligence: "intelligence",
        piety: "piety",
        luck: "luck"
    };
    Character.allStatusNames = [
        Character.StatusName.level,
        Character.StatusName.hitPoint,
        Character.StatusName.magicPoint,
        Character.StatusName.strength,
        Character.StatusName.vitality,
        Character.StatusName.dexterity,
        Character.StatusName.agility,
        Character.StatusName.intelligence,
        Character.StatusName.piety,
        Character.StatusName.luck
    ];
    function statusTypeToString(type) {
        let result = "?";
        switch (type) {
            case StatusType.level:
                result = Character.StatusName.level;
                break;
            case StatusType.hitPoint:
                result = Character.StatusName.hitPoint;
                break;
            case StatusType.magicPoint:
                result = Character.StatusName.magicPoint;
                break;
            case StatusType.strength:
                result = Character.StatusName.strength;
                break;
            case StatusType.vitality:
                result = Character.StatusName.vitality;
                break;
            case StatusType.dexterity:
                result = Character.StatusName.dexterity;
                break;
            case StatusType.agility:
                result = Character.StatusName.agility;
                break;
            case StatusType.intelligence:
                result = Character.StatusName.intelligence;
                break;
            case StatusType.piety:
                result = Character.StatusName.piety;
                break;
            case StatusType.luck:
                result = Character.StatusName.luck;
                break;
        }
        return result;
    }
    Character.statusTypeToString = statusTypeToString;
    class Status {
        constructor() {
            this.mTable = {};
            for (let name of Character.allStatusNames) {
                this.mTable[name] = 0;
            }
        }
        value(key) {
            let val = this.mTable[key];
            if (val != null) {
                return val;
            }
            else {
                console.error("[Error] No member");
                return 0;
            }
        }
        setValue(value, key) {
            this.mTable[key] = value;
        }
        set level(value) { this.setValue(value, Character.StatusName.level); }
        get level() { return this.value(Character.StatusName.level); }
        set hitPoint(value) { this.setValue(value, Character.StatusName.hitPoint); }
        get hitPoint() { return this.value(Character.StatusName.hitPoint); }
        set magicPoint(value) { this.setValue(value, Character.StatusName.magicPoint); }
        get magicPoint() { return this.value(Character.StatusName.magicPoint); }
        set strength(value) { this.setValue(value, Character.StatusName.strength); }
        get strength() { return this.value(Character.StatusName.strength); }
        set vitality(value) { this.setValue(value, Character.StatusName.vitality); }
        get vitality() { return this.value(Character.StatusName.vitality); }
        set dexterity(value) { this.setValue(value, Character.StatusName.dexterity); }
        get dexterity() { return this.value(Character.StatusName.dexterity); }
        set agility(value) { this.setValue(value, Character.StatusName.agility); }
        get agility() { return this.value(Character.StatusName.agility); }
        set intelligence(value) { this.setValue(value, Character.StatusName.intelligence); }
        get intelligence() { return this.value(Character.StatusName.intelligence); }
        set piety(value) { this.setValue(value, Character.StatusName.piety); }
        get piety() { return this.value(Character.StatusName.piety); }
        set luck(value) { this.setValue(value, Character.StatusName.luck); }
        get luck() { return this.value(Character.StatusName.luck); }
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
            console.error("[Error] No table\n");
            return null;
        }
        let racename = raceToString(race);
        let recs = table.search(racename, "race");
        if (recs != null) {
            if (recs.length < 1) {
                console.error("[Error] No records\n");
                return null;
            }
        }
        else {
            console.error("[Error] No records\n");
            return null;
        }
        let status = new Status();
        let record = recs[0];
        for (let name of Character.allStatusNames) {
            let val = record.value(name);
            if (isNumber(val)) {
                status.setValue(val, name);
            }
            else {
                console.error("[Error] Invalid status value: " + val + " for name:" + name + "\n");
            }
        }
        return status;
    }
    Character.loadInitStatus = loadInitStatus;
})(Character || (Character = {}));
; // end of module
