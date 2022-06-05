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
        let table = tableInStorage("main", "data.status.initStatus");
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
        let table = tableInStorage("main", "data.status.jobRequirement");
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
