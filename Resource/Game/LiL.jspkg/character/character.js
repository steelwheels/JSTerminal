"use strict";
/*
 * character.ts
 */
/// <reference path="../types/KiwiLibrary.d.ts" />
/// <reference path="../types/KiwiShell.d.ts" />
/// <reference path="../types/KiwiComponent.d.ts" />
const MaxLevel = 100;
const MinLevel = 0;
var Character;
(function (Character) {
    let Race;
    (function (Race) {
        Race[Race["human"] = 0] = "human";
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
    function anyToClippedNumber(val, max, min) {
        if (isNumber(val)) {
            let num = val;
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
    /*
     * property:
     *	name:			string | null
     *	uncertainName:		string | null
     *	race:			Race | null
     *	job:			Job | null
     *	level:			number | null
     */
    class Attributes {
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
            let val = anyToClippedNumber(rc, MinLevel, MaxLevel);
            this.record.setValue(val, "level");
        }
    }
    Character.Attributes = Attributes;
    ;
})(Character || (Character = {}));
; // end of module
