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
            this.mTable = {};
            for (let name of Character_1.allStatusNames) {
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
        writeToRecord(record) {
            record.setValue(this.hitPoint, Character_1.StatusName.hitPoint);
            record.setValue(this.magicPoint, Character_1.StatusName.magicPoint);
            record.setValue(this.strength, Character_1.StatusName.strength);
            record.setValue(this.vitality, Character_1.StatusName.vitality);
            record.setValue(this.agility, Character_1.StatusName.agility);
            record.setValue(this.intelligence, Character_1.StatusName.intelligence);
            record.setValue(this.piety, Character_1.StatusName.piety);
            record.setValue(this.luck, Character_1.StatusName.luck);
        }
        readFromRecord(record) {
            this.hitPoint = toNumber(record.value(Character_1.StatusName.hitPoint)) || 0;
            this.magicPoint = toNumber(record.value(Character_1.StatusName.magicPoint)) || 0;
            this.strength = toNumber(record.value(Character_1.StatusName.strength)) || 0;
            this.vitality = toNumber(record.value(Character_1.StatusName.vitality)) || 0;
            this.agility = toNumber(record.value(Character_1.StatusName.agility)) || 0;
            this.intelligence = toNumber(record.value(Character_1.StatusName.intelligence)) || 0;
            this.piety = toNumber(record.value(Character_1.StatusName.piety)) || 0;
            this.luck = toNumber(record.value(Character_1.StatusName.luck)) || 0;
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
        constructor(name, race, job, status) {
            this.mName = name;
            this.mAge = 0;
            this.mRace = race;
            this.mJob = job;
            this.mStatus = status;
        }
        get name() { return this.mName; }
        get age() { return this.mAge; }
        get race() { return this.mRace; }
        get job() { return this.mJob; }
        get status() { return this.mStatus; }
        writeToRecord(record) {
            record.setValue(this.name, Character.nameItem);
            record.setValue(this.age, Character.ageItem);
            record.setValue(this.race, Character.raceItem);
            record.setValue(this.job, Character.jobItem);
            this.mStatus.writeToRecord(record);
        }
        readFromRecord(record) {
            this.mName = toString(record.value(Character.nameItem)) || "";
            this.mAge = toNumber(record.value(Character.ageItem)) || 0;
            this.mRace = toNumber(record.value(Character.raceItem)) || RaceType.human;
            this.mJob = toNumber(record.value(Character.jobItem)) || JobType.fighter;
            this.mStatus.readFromRecord(record);
        }
    }
    Character.nameItem = "name";
    Character.ageItem = "age";
    Character.raceItem = "race";
    Character.jobItem = "job";
    Character.statusItem = "status";
    Character_1.Character = Character;
})(Character || (Character = {}));
; // end of module
