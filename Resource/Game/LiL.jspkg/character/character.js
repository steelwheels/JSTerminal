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
        Race[Race["porkul"] = 4] = "porkul";
    })(Race = Character.Race || (Character.Race = {}));
    ;
    function anyToRace(val) {
        if (!isNumber(val)) {
            return null;
        }
        let result;
        switch (val) {
            case Race.human:
                result = Race.human;
                break;
            default:
                result = null;
                break;
        }
        return result;
    }
    let Job;
    (function (Job) {
        Job[Job["fighter"] = 0] = "fighter";
        Job[Job["mage"] = 1] = "mage";
        Job[Job["priest"] = 2] = "priest";
        Job[Job["thief"] = 3] = "thief";
    })(Job = Character.Job || (Character.Job = {}));
    ;
    function anyToJob(val) {
        if (!isNumber(val)) {
            return null;
        }
        let result;
        switch (val) {
            case Job.fighter:
                result = Job.fighter;
                break;
            case Job.mage:
                result = Job.mage;
                break;
            case Job.priest:
                result = Job.priest;
                break;
            case Job.thief:
                result = Job.thief;
                break;
            default:
                result = null;
                break;
        }
        return result;
    }
    let StatusParameter;
    (function (StatusParameter) {
        StatusParameter[StatusParameter["level"] = 0] = "level";
        StatusParameter[StatusParameter["hitPoint"] = 1] = "hitPoint";
        StatusParameter[StatusParameter["magicPoint"] = 2] = "magicPoint";
        StatusParameter[StatusParameter["strength"] = 3] = "strength";
        StatusParameter[StatusParameter["vitality"] = 4] = "vitality";
        StatusParameter[StatusParameter["dexterity"] = 5] = "dexterity";
        StatusParameter[StatusParameter["agility"] = 6] = "agility";
        StatusParameter[StatusParameter["intelligence"] = 7] = "intelligence";
        StatusParameter[StatusParameter["piety"] = 8] = "piety";
        StatusParameter[StatusParameter["luck"] = 9] = "luck";
    })(StatusParameter = Character.StatusParameter || (Character.StatusParameter = {}));
    ;
    function maxValueOfStatus(param) {
        let result;
        switch (param) {
            case StatusParameter.level:
                result = 100;
                break;
            case StatusParameter.hitPoint:
                result = 100;
                break;
            case StatusParameter.magicPoint:
                result = 100;
                break;
            case StatusParameter.strength:
                result = 100;
                break;
            case StatusParameter.vitality:
                result = 100;
                break;
            case StatusParameter.dexterity:
                result = 100;
                break;
            case StatusParameter.agility:
                result = 100;
                break;
            case StatusParameter.intelligence:
                result = 100;
                break;
            case StatusParameter.piety:
                result = 100;
                break;
            case StatusParameter.luck:
                result = 100;
                break;
        }
        return result;
    }
    function minValueOfStatus(param) {
        let result;
        switch (param) {
            case StatusParameter.level:
                result = 0;
                break;
            case StatusParameter.hitPoint:
                result = 0;
                break;
            case StatusParameter.magicPoint:
                result = 0;
                break;
            case StatusParameter.strength:
                result = 0;
                break;
            case StatusParameter.vitality:
                result = 0;
                break;
            case StatusParameter.dexterity:
                result = 0;
                break;
            case StatusParameter.agility:
                result = 0;
                break;
            case StatusParameter.intelligence:
                result = 0;
                break;
            case StatusParameter.piety:
                result = 0;
                break;
            case StatusParameter.luck:
                result = 0;
                break;
        }
        return result;
    }
    function anyToClippedStatus(val, status) {
        if (isNumber(val)) {
            let num = val;
            let min = minValueOfStatus(status);
            let max = maxValueOfStatus(status);
            if (min <= num && num <= max) {
                return num;
            }
            else {
                return min;
            }
        }
        else {
            return null;
        }
    }
    class Status {
        constructor(rec) {
            this.record = rec;
        }
        get name() {
            let nm = this.record.value("name");
            return isString(nm) ? nm : null;
        }
        set name(nm) {
            this.record.setValue(nm, "name");
        }
        get uncertainName() {
            let nm = this.record.value("uncertainName");
            return isString(nm) ? nm : null;
        }
        set uncertainName(nm) {
            this.record.setValue(nm, "uncertainName");
        }
        get race() {
            let rc = this.record.value("race");
            return anyToRace(rc);
        }
        set race(rc) {
            this.record.setValue(rc, "race");
        }
        get job() {
            let rc = this.record.value("job");
            return anyToJob(rc);
        }
        set job(rc) {
            this.record.setValue(rc, "job");
        }
        get level() {
            let lv = this.record.value("level");
            return isNumber(lv) ? lv : null;
        }
        set level(rc) {
            let val = anyToClippedStatus(rc, StatusParameter.level);
            this.record.setValue(val, "level");
        }
        get hitPoint() {
            let lv = this.record.value("hitPoint");
            return isNumber(lv) ? lv : null;
        }
        set hitPoint(rc) {
            let val = anyToClippedStatus(rc, StatusParameter.hitPoint);
            this.record.setValue(val, "hitPoint");
        }
        get magicPoint() {
            let lv = this.record.value("magicPoint");
            return isNumber(lv) ? lv : null;
        }
        set magicPoint(rc) {
            let val = anyToClippedStatus(rc, StatusParameter.magicPoint);
            this.record.setValue(val, "magicPoint");
        }
        get strength() {
            let lv = this.record.value("strength");
            return isNumber(lv) ? lv : null;
        }
        set strength(rc) {
            let val = anyToClippedStatus(rc, StatusParameter.strength);
            this.record.setValue(val, "strength");
        }
        get vitality() {
            let lv = this.record.value("vitality");
            return isNumber(lv) ? lv : null;
        }
        set vitality(rc) {
            let val = anyToClippedStatus(rc, StatusParameter.vitality);
            this.record.setValue(val, "vitality");
        }
        get dexterity() {
            let lv = this.record.value("dexterity");
            return isNumber(lv) ? lv : null;
        }
        set dexterity(rc) {
            let val = anyToClippedStatus(rc, StatusParameter.dexterity);
            this.record.setValue(val, "dexterity");
        }
        get agility() {
            let lv = this.record.value("agility");
            return isNumber(lv) ? lv : null;
        }
        set agility(rc) {
            let val = anyToClippedStatus(rc, StatusParameter.agility);
            this.record.setValue(val, "agility");
        }
        get intelligence() {
            let lv = this.record.value("intelligence");
            return isNumber(lv) ? lv : null;
        }
        set intelligence(rc) {
            let val = anyToClippedStatus(rc, StatusParameter.intelligence);
            this.record.setValue(val, "intelligence");
        }
        get piety() {
            let lv = this.record.value("piet");
            return isNumber(lv) ? lv : null;
        }
        set piety(rc) {
            let val = anyToClippedStatus(rc, StatusParameter.piety);
            this.record.setValue(val, "piet");
        }
        get luck() {
            let lv = this.record.value("luck");
            return isNumber(lv) ? lv : null;
        }
        set luck(rc) {
            let val = anyToClippedStatus(rc, StatusParameter.luck);
            this.record.setValue(val, "luck");
        }
    }
    Character.Status = Status;
    ;
})(Character || (Character = {}));
; // end of module
