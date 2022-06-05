/// <reference path="../KiwiLibrary.d.ts" />
/// <reference path="../KiwiShell.d.ts" />
/// <reference path="../KiwiComponent.d.ts" />
/// <reference path="../LiL.d.ts" />
declare module Character {
    function can_get_job(job: job_t, attr: attr_t): boolean;
    function load_init_status(race: race_t): RecordIF | null;
    function has_status_for_job(job: job_t, srcstatus: RecordIF): boolean;
}
