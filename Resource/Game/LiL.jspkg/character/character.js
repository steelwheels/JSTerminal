"use strict";
/*
 * character.ts
 */
/// <reference path="../types/KiwiLibrary.d.ts" />
/// <reference path="../types/KiwiShell.d.ts" />
/// <reference path="../types/KiwiComponent.d.ts" />
/// <reference path="../types/LiL.d.ts" />
var Character;
(function (Character_1) {
    function can_get_job(job, attr) {
        let result;
        switch (job) {
            case job_t.fighter:
                result = true;
                break;
            case job_t.mage:
                result = true;
                break;
            case job_t.priest:
                result = (attr != attr_t.neutral);
                break;
            case job_t.thief:
                result = (attr != attr_t.good);
                break;
            case job_t.samurai:
                result = (attr != attr_t.evil);
                break;
            case job_t.bishop:
                result = (attr != attr_t.neutral);
                break;
            case job_t.ninjya:
                result = (attr == attr_t.evil);
                break;
            case job_t.lord:
                result = (attr == attr_t.good);
                break;
        }
        return result;
    }
    Character_1.can_get_job = can_get_job;
    class Status {
        constructor() {
            this.mTable = Dictionary();
            for (let name of status_t.keys) {
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
        set hitPoint(value) { this.setValue(value, status_t.description(status_t.hitPoint)); }
        get hitPoint() { return this.value(status_t.description(status_t.hitPoint)); }
        set magicPoint(value) { this.setValue(value, status_t.description(status_t.magicPoint)); }
        get magicPoint() { return this.value(status_t.description(status_t.magicPoint)); }
        set strength(value) { this.setValue(value, status_t.description(status_t.strength)); }
        get strength() { return this.value(status_t.description(status_t.strength)); }
        set vitality(value) { this.setValue(value, status_t.description(status_t.vitality)); }
        get vitality() { return this.value(status_t.description(status_t.vitality)); }
        set agility(value) { this.setValue(value, status_t.description(status_t.agility)); }
        get agility() { return this.value(status_t.description(status_t.agility)); }
        set intelligence(value) { this.setValue(value, status_t.description(status_t.intelligence)); }
        get intelligence() { return this.value(status_t.description(status_t.intelligence)); }
        set piety(value) { this.setValue(value, status_t.description(status_t.piety)); }
        get piety() { return this.value(status_t.description(status_t.piety)); }
        set luck(value) { this.setValue(value, status_t.description(status_t.luck)); }
        get luck() { return this.value(status_t.description(status_t.luck)); }
        clone() {
            let newstat = new Status();
            for (let name of status_t.keys) {
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
        let racevalue = race_t.description(race);
        return loadAnyStatus("initStatus", "race", racevalue);
    }
    Character_1.loadInitStatus = loadInitStatus;
    function loadJobRequirement(job) {
        let jobvalue = job_t.description(job);
        return loadAnyStatus("jobRequirement", "job", jobvalue);
    }
    Character_1.loadJobRequirement = loadJobRequirement;
    function loadAnyStatus(tablename, typename, typevalue) {
        let table = tableInStorage("main", "character." + tablename);
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
        for (let name of status_t.keys) {
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
        for (let name of status_t.keys) {
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
        set pid(num) {
            this.mRecord.setValue(num, Character.pidItem);
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
            return (_a = this.mRecord.value(Character.raceItem)) !== null && _a !== void 0 ? _a : race_t.human;
        }
        set job(typ) {
            this.mRecord.setValue(typ, Character.jobItem);
        }
        get job() {
            var _a;
            return (_a = this.mRecord.value(Character.jobItem)) !== null && _a !== void 0 ? _a : job_t.fighter;
        }
        set status(stat) {
            for (let name of status_t.keys) {
                let val = stat.value(name);
                this.mRecord.setValue(val, name);
            }
        }
        get status() {
            let newstat = new Status();
            for (let name of status_t.keys) {
                let val = this.mRecord.value(name);
                if (val != null) {
                    newstat.setValue(val, name);
                }
            }
            return newstat;
        }
        isPartyMember() {
            return this.pid > 0;
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
