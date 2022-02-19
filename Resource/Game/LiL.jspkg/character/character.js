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
    })(JobType = Character.JobType || (Character.JobType = {}));
    ;
    Character.JobName = {
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
                result = Character.JobName.fighter;
                break;
            case JobType.mage:
                result = Character.JobName.mage;
                break;
            case JobType.priest:
                result = Character.JobName.priest;
                break;
            case JobType.thief:
                result = Character.JobName.thief;
                break;
            case JobType.samurai:
                result = Character.JobName.samurai;
                break;
            case JobType.bishop:
                result = Character.JobName.bishop;
                break;
            case JobType.ninjya:
                result = Character.JobName.ninjya;
                break;
            case JobType.lord:
                result = Character.JobName.lord;
                break;
        }
        return result;
    }
    Character.jobToString = jobToString;
    let AlignmentType;
    (function (AlignmentType) {
        AlignmentType[AlignmentType["good"] = 0] = "good";
        AlignmentType[AlignmentType["neutral"] = 1] = "neutral";
        AlignmentType[AlignmentType["evil"] = 2] = "evil";
    })(AlignmentType = Character.AlignmentType || (Character.AlignmentType = {}));
    ;
    Character.AlignmentName = {
        good: "good",
        neutral: "neutral",
        evil: "evil"
    };
    Character.allAlignmentNames = [
        Character.AlignmentName.good,
        Character.AlignmentName.neutral,
        Character.AlignmentName.evil
    ];
    function alignmentToString(align) {
        let result = "";
        switch (align) {
            case AlignmentType.good:
                result = Character.AlignmentName.good;
                break;
            case AlignmentType.neutral:
                result = Character.AlignmentName.neutral;
                break;
            case AlignmentType.evil:
                result = Character.AlignmentName.evil;
                break;
        }
        return result;
    }
    Character.alignmentToString = alignmentToString;
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
                    console.log("Invalid value for alignment of job");
                    return false;
                }
            }
            else {
                console.log("No record for job");
                return false;
            }
        }
        canBeGood(job) {
            return this.valueForJob(Character.AlignmentName.good, job);
        }
        canBeNeutral(job) {
            return this.valueForJob(Character.AlignmentName.neutral, job);
        }
        canBeEvil(job) {
            return this.valueForJob(Character.AlignmentName.evil, job);
        }
    }
    Character.AlignmentRestriction = AlignmentRestriction;
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
    })(StatusType = Character.StatusType || (Character.StatusType = {}));
    ;
    Character.StatusName = {
        hitPoint: "hitPoint",
        magicPoint: "magicPoint",
        strength: "strength",
        vitality: "vitality",
        agility: "agility",
        intelligence: "intelligence",
        piety: "piety",
        luck: "luck"
    };
    Character.allStatusNames = [
        Character.StatusName.hitPoint,
        Character.StatusName.magicPoint,
        Character.StatusName.strength,
        Character.StatusName.vitality,
        Character.StatusName.agility,
        Character.StatusName.intelligence,
        Character.StatusName.piety,
        Character.StatusName.luck
    ];
    function statusTypeToString(type) {
        let result = "?";
        switch (type) {
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
        set hitPoint(value) { this.setValue(value, Character.StatusName.hitPoint); }
        get hitPoint() { return this.value(Character.StatusName.hitPoint); }
        set magicPoint(value) { this.setValue(value, Character.StatusName.magicPoint); }
        get magicPoint() { return this.value(Character.StatusName.magicPoint); }
        set strength(value) { this.setValue(value, Character.StatusName.strength); }
        get strength() { return this.value(Character.StatusName.strength); }
        set vitality(value) { this.setValue(value, Character.StatusName.vitality); }
        get vitality() { return this.value(Character.StatusName.vitality); }
        set agility(value) { this.setValue(value, Character.StatusName.agility); }
        get agility() { return this.value(Character.StatusName.agility); }
        set intelligence(value) { this.setValue(value, Character.StatusName.intelligence); }
        get intelligence() { return this.value(Character.StatusName.intelligence); }
        set piety(value) { this.setValue(value, Character.StatusName.piety); }
        get piety() { return this.value(Character.StatusName.piety); }
        set luck(value) { this.setValue(value, Character.StatusName.luck); }
        get luck() { return this.value(Character.StatusName.luck); }
        clone() {
            let newstat = new Status();
            newstat.hitPoint = this.hitPoint;
            newstat.magicPoint = this.magicPoint;
            newstat.strength = this.strength;
            newstat.vitality = this.vitality;
            newstat.agility = this.agility;
            newstat.intelligence = this.intelligence;
            newstat.piety = this.piety;
            newstat.luck = this.luck;
            return newstat;
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
        let racevalue = raceToString(race);
        return loadAnyStatus("initStatus", "race", racevalue);
    }
    Character.loadInitStatus = loadInitStatus;
    function loadJobRequirement(job) {
        let jobvalue = jobToString(job);
        return loadAnyStatus("jobRequirement", "job", jobvalue);
    }
    Character.loadJobRequirement = loadJobRequirement;
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
    function hasEnoughStatusForJob(job, srcstatus) {
        let reqstatus = loadJobRequirement(job);
        if (reqstatus == null) {
            console.error("[Error] No job requirement");
            return false;
        }
        let result = true;
        for (let name of Character.allStatusNames) {
            if (srcstatus.value(name) < reqstatus.value(name)) {
                result = false;
                break;
            }
        }
        return result;
    }
    Character.hasEnoughStatusForJob = hasEnoughStatusForJob;
})(Character || (Character = {}));
; // end of module
