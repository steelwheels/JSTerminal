"use strict";
/*
 * character.ts
 */
/// <reference path="../types/KiwiLibrary.d.ts" />
/// <reference path="../types/KiwiShell.d.ts" />
/// <reference path="../types/KiwiComponent.d.ts" />
/// <reference path="../types/LiL.d.ts" />
var Character;
(function (Character) {
    function job_to_char(job) {
        let result = "";
        switch (job) {
            case job_t.fighter:
                result = "F";
                break;
            case job_t.mage:
                result = "M";
                break;
            case job_t.priest:
                result = "P";
                break;
            case job_t.thief:
                result = "T";
                break;
            case job_t.samurai:
                result = "S";
                break;
            case job_t.bishop:
                result = "B";
                break;
            case job_t.ninjya:
                result = "N";
                break;
            case job_t.lord:
                result = "L";
                break;
        }
        return result;
    }
    Character.job_to_char = job_to_char;
    function char_to_job(c) {
        let result = null;
        switch (c) {
            case "F":
                result = job_t.fighter;
                break;
            case "M":
                result = job_t.mage;
                break;
            case "P":
                result = job_t.priest;
                break;
            case "T":
                result = job_t.thief;
                break;
            case "S":
                result = job_t.samurai;
                break;
            case "B":
                result = job_t.bishop;
                break;
            case "N":
                result = job_t.ninjya;
                break;
            case "L":
                result = job_t.lord;
                break;
        }
        return result;
    }
    Character.char_to_job = char_to_job;
    function is_job_in_string(job, str) {
        return str.indexOf(job_to_char(job)) >= 0;
    }
    Character.is_job_in_string = is_job_in_string;
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
    Character.can_get_job = can_get_job;
    function load_init_status(race) {
        let table = TableStorage("main", "data.parameters.initStatus");
        if (table != null) {
            let recs = table.search(race, "race");
            if (recs != null) {
                return recs[0];
            }
        }
        else {
            console.error("Failed to load init status\n");
        }
        return null;
    }
    Character.load_init_status = load_init_status;
    function has_status_for_job(job, srcstatus) {
        let table = TableStorage("main", "data.parameters.job_requirement");
        if (table != null) {
            let result = false;
            let recs = table.search(job, "job");
            let reqstatus = first(recs);
            if (reqstatus != null) {
                result = true;
                for (let key of status_t.keys) {
                    if (srcstatus.value(key) < reqstatus.value(key)) {
                        result = false;
                        break;
                    }
                }
                return result;
            }
            else {
                console.error("Failed to search job requirement\n");
                return false;
            }
        }
        else {
            console.error("Failed to load job requirement\n");
            return false;
        }
    }
    Character.has_status_for_job = has_status_for_job;
})(Character || (Character = {}));
; // end of module
