"use strict";
/*
 * character.ts
 */
/// <reference path="../types/KiwiLibrary.d.ts" />
/// <reference path="../types/KiwiShell.d.ts" />
/// <reference path="../types/KiwiComponent.d.ts" />
var Character;
(function (Character_1) {
    let RaceType;
    (function (RaceType) {
        RaceType[RaceType["human"] = 0] = "human";
        RaceType[RaceType["elf"] = 1] = "elf";
        RaceType[RaceType["dwarf"] = 2] = "dwarf";
        RaceType[RaceType["gnome"] = 3] = "gnome";
        RaceType[RaceType["hobbit"] = 4] = "hobbit";
    })(RaceType = Character_1.RaceType || (Character_1.RaceType = {}));
    ;
    Character_1.RaceName = {
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
                result = Character_1.RaceName.human;
                break;
            case RaceType.elf:
                result = Character_1.RaceName.elf;
                break;
            case RaceType.dwarf:
                result = Character_1.RaceName.dwarf;
                break;
            case RaceType.gnome:
                result = Character_1.RaceName.gnome;
                break;
            case RaceType.hobbit:
                result = Character_1.RaceName.hobitt;
                break;
        }
        return result;
    }
    Character_1.raceToString = raceToString;
    let JobType;
    (function (JobType) {
        JobType[JobType["fighter"] = 0] = "fighter";
        JobType[JobType["mage"] = 1] = "mage";
        JobType[JobType["priest"] = 2] = "priest";
        JobType[JobType["thief"] = 3] = "thief";
        JobType[JobType["samurai"] = 4] = "samurai";
        JobType[JobType["bishop"] = 5] = "bishop";
        JobType[JobType["ninjya"] = 6] = "ninjya";
        JobType[JobType["lord"] = 7] = "lord";
    })(JobType = Character_1.JobType || (Character_1.JobType = {}));
    ;
    Character_1.JobName = {
        fighter: "fighter",
        mage: "mage",
        priest: "priest",
        thief: "thief",
        samurai: "samurai",
        bishop: "bishop",
        ninjya: "ninjya",
        lord: "lord"
    };
    function jobToString(job) {
        let result = "?";
        switch (job) {
            case JobType.fighter:
                result = Character_1.JobName.fighter;
                break;
            case JobType.mage:
                result = Character_1.JobName.mage;
                break;
            case JobType.priest:
                result = Character_1.JobName.priest;
                break;
            case JobType.thief:
                result = Character_1.JobName.thief;
                break;
            case JobType.samurai:
                result = Character_1.JobName.samurai;
                break;
            case JobType.bishop:
                result = Character_1.JobName.bishop;
                break;
            case JobType.ninjya:
                result = Character_1.JobName.ninjya;
                break;
            case JobType.lord:
                result = Character_1.JobName.lord;
                break;
        }
        return result;
    }
    Character_1.jobToString = jobToString;
    let AlignmentType;
    (function (AlignmentType) {
        AlignmentType[AlignmentType["good"] = 0] = "good";
        AlignmentType[AlignmentType["neutral"] = 1] = "neutral";
        AlignmentType[AlignmentType["evil"] = 2] = "evil";
    })(AlignmentType = Character_1.AlignmentType || (Character_1.AlignmentType = {}));
    ;
    Character_1.AlignmentName = {
        good: "good",
        neutral: "neutral",
        evil: "evil"
    };
    Character_1.allAlignmentNames = [
        Character_1.AlignmentName.good,
        Character_1.AlignmentName.neutral,
        Character_1.AlignmentName.evil
    ];
    function alignmentToString(align) {
        let result = "";
        switch (align) {
            case AlignmentType.good:
                result = Character_1.AlignmentName.good;
                break;
            case AlignmentType.neutral:
                result = Character_1.AlignmentName.neutral;
                break;
            case AlignmentType.evil:
                result = Character_1.AlignmentName.evil;
                break;
        }
        return result;
    }
    Character_1.alignmentToString = alignmentToString;
    class AlignmentRestriction {
        constructor() {
            let table = valueTableInStorage("main", "character.alignmentRestriction");
            if (table != null) {
                this.mTable = table;
            }
            else {
                console.error("[Error] No table for character.alignmentRestriction\n");
                this.mTable = null;
            }
        }
        recordForJob(job) {
            let table = this.mTable;
            if (table != null) {
                let recs = table.search(jobToString(job), "job");
                if (recs != null) {
                    if (recs.length > 0) {
                        return recs[0];
                    }
                }
            }
            console.log("Invalid job: " + jobToString(job));
            return null;
        }
        valueForJob(alignment, job) {
            let rec = this.recordForJob(job);
            if (rec != null) {
                let val = toBoolean(rec.value(alignment));
                if (val != null) {
                    return val;
                }
                else {
                    console.log("Invalid value for alignment: "
                        + alignment);
                    return false;
                }
            }
            else {
                console.log("No record for job");
                return false;
            }
        }
        canBeGood(job) {
            return this.valueForJob(Character_1.AlignmentName.good, job);
        }
        canBeNeutral(job) {
            return this.valueForJob(Character_1.AlignmentName.neutral, job);
        }
        canBeEvil(job) {
            return this.valueForJob(Character_1.AlignmentName.evil, job);
        }
    }
    Character_1.AlignmentRestriction = AlignmentRestriction;
    let StatusType;
    (function (StatusType) {
        StatusType[StatusType["hitPoint"] = 0] = "hitPoint";
        StatusType[StatusType["magicPoint"] = 1] = "magicPoint";
        StatusType[StatusType["strength"] = 2] = "strength";
        StatusType[StatusType["vitality"] = 3] = "vitality";
        StatusType[StatusType["agility"] = 4] = "agility";
        StatusType[StatusType["intelligence"] = 5] = "intelligence";
        StatusType[StatusType["piety"] = 6] = "piety";
        StatusType[StatusType["luck"] = 7] = "luck";
    })(StatusType = Character_1.StatusType || (Character_1.StatusType = {}));
    ;
    Character_1.StatusName = {
        hitPoint: "hitPoint",
        magicPoint: "magicPoint",
        strength: "strength",
        vitality: "vitality",
        agility: "agility",
        intelligence: "intelligence",
        piety: "piety",
        luck: "luck"
    };
    Character_1.allStatusNames = [
        Character_1.StatusName.hitPoint,
        Character_1.StatusName.magicPoint,
        Character_1.StatusName.strength,
        Character_1.StatusName.vitality,
        Character_1.StatusName.agility,
        Character_1.StatusName.intelligence,
        Character_1.StatusName.piety,
        Character_1.StatusName.luck
    ];
    function statusTypeToString(type) {
        let result = "?";
        switch (type) {
            case StatusType.hitPoint:
                result = Character_1.StatusName.hitPoint;
                break;
            case StatusType.magicPoint:
                result = Character_1.StatusName.magicPoint;
                break;
            case StatusType.strength:
                result = Character_1.StatusName.strength;
                break;
            case StatusType.vitality:
                result = Character_1.StatusName.vitality;
                break;
            case StatusType.agility:
                result = Character_1.StatusName.agility;
                break;
            case StatusType.intelligence:
                result = Character_1.StatusName.intelligence;
                break;
            case StatusType.piety:
                result = Character_1.StatusName.piety;
                break;
            case StatusType.luck:
                result = Character_1.StatusName.luck;
                break;
        }
        return result;
    }
    Character_1.statusTypeToString = statusTypeToString;
    class Status {
        constructor() {
            this.mTable = Dictionary();
            for (let name of Character_1.allStatusNames) {
                this.mTable.setNumber(0, name);
            }
        }
        value(key) {
            let val = this.mTable.number(key);
            if (val != null) {
                return val;
            }
            else {
                console.error("[Error] No member");
                return 0;
            }
        }
        setValue(value, key) {
            this.mTable.setNumber(value, key);
        }
        get dictionary() {
            return this.mTable;
        }
        set hitPoint(value) { this.setValue(value, Character_1.StatusName.hitPoint); }
        get hitPoint() { return this.value(Character_1.StatusName.hitPoint); }
        set magicPoint(value) { this.setValue(value, Character_1.StatusName.magicPoint); }
        get magicPoint() { return this.value(Character_1.StatusName.magicPoint); }
        set strength(value) { this.setValue(value, Character_1.StatusName.strength); }
        get strength() { return this.value(Character_1.StatusName.strength); }
        set vitality(value) { this.setValue(value, Character_1.StatusName.vitality); }
        get vitality() { return this.value(Character_1.StatusName.vitality); }
        set agility(value) { this.setValue(value, Character_1.StatusName.agility); }
        get agility() { return this.value(Character_1.StatusName.agility); }
        set intelligence(value) { this.setValue(value, Character_1.StatusName.intelligence); }
        get intelligence() { return this.value(Character_1.StatusName.intelligence); }
        set piety(value) { this.setValue(value, Character_1.StatusName.piety); }
        get piety() { return this.value(Character_1.StatusName.piety); }
        set luck(value) { this.setValue(value, Character_1.StatusName.luck); }
        get luck() { return this.value(Character_1.StatusName.luck); }
        clone() {
            let newstat = new Status();
            for (let name of Character_1.allStatusNames) {
                let val = this.value(name);
                newstat.setValue(val, name);
            }
            return newstat;
        }
    }
    Character_1.Status = Status;
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
        let racevalue = raceToString(race);
        return loadAnyStatus("initStatus", "race", racevalue);
    }
    Character_1.loadInitStatus = loadInitStatus;
    function loadJobRequirement(job) {
        let jobvalue = jobToString(job);
        return loadAnyStatus("jobRequirement", "job", jobvalue);
    }
    Character_1.loadJobRequirement = loadJobRequirement;
    function loadAnyStatus(tablename, typename, typevalue) {
        let table = valueTableInStorage("main", "character." + tablename);
        if (table == null) {
            console.error("[Error] No table:" + tablename + "\n");
            return null;
        }
        let recs = table.search(typevalue, typename);
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
        for (let name of Character_1.allStatusNames) {
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
    function hasEnoughStatusForJob(job, srcstatus) {
        let reqstatus = loadJobRequirement(job);
        if (reqstatus == null) {
            console.error("[Error] No job requirement");
            return false;
        }
        let result = true;
        for (let name of Character_1.allStatusNames) {
            if (srcstatus.value(name) < reqstatus.value(name)) {
                result = false;
                break;
            }
        }
        return result;
    }
    Character_1.hasEnoughStatusForJob = hasEnoughStatusForJob;
    class Character {
        constructor(record) {
            if (record != null) {
                this.mRecord = record;
            }
            else {
                this.mRecord = Record();
            }
        }
        get record() {
            return this.mRecord;
        }
        set pid(str) {
            this.mRecord.setValue(str, Character.pidItem);
        }
        get pid() {
            var _a;
            return (_a = this.mRecord.value(Character.pidItem)) !== null && _a !== void 0 ? _a : -1;
        }
        set name(str) {
            this.mRecord.setValue(str, Character.nameItem);
        }
        get name() {
            var _a;
            return (_a = this.mRecord.value(Character.nameItem)) !== null && _a !== void 0 ? _a : "?";
        }
        set age(num) {
            this.mRecord.setValue(num, Character.ageItem);
        }
        get age() {
            var _a;
            return (_a = this.mRecord.value(Character.ageItem)) !== null && _a !== void 0 ? _a : "0";
        }
        set level(num) {
            this.mRecord.setValue(num, Character.levelItem);
        }
        get level() {
            var _a;
            return (_a = this.mRecord.value(Character.levelItem)) !== null && _a !== void 0 ? _a : "0";
        }
        set race(typ) {
            this.mRecord.setValue(typ, Character.raceItem);
        }
        get race() {
            var _a;
            return (_a = this.mRecord.value(Character.raceItem)) !== null && _a !== void 0 ? _a : RaceType.human;
        }
        set job(typ) {
            this.mRecord.setValue(typ, Character.jobItem);
        }
        get job() {
            var _a;
            return (_a = this.mRecord.value(Character.jobItem)) !== null && _a !== void 0 ? _a : JobType.fighter;
        }
        set status(stat) {
            for (let name of Character_1.allStatusNames) {
                let val = stat.value(name);
                this.mRecord.setValue(val, name);
            }
        }
        get status() {
            let newstat = new Status();
            for (let name of Character_1.allStatusNames) {
                let val = this.mRecord.value(name);
                if (val != null) {
                    newstat.setValue(val, name);
                }
            }
            return newstat;
        }
    }
    Character.pidItem = "pid";
    Character.nameItem = "name";
    Character.ageItem = "age";
    Character.levelItem = "level";
    Character.raceItem = "race";
    Character.jobItem = "job";
    Character.statusItem = "status";
    Character_1.Character = Character;
})(Character || (Character = {}));
; // end of module
