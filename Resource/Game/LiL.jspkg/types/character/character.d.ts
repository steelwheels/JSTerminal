/// <reference path="../KiwiLibrary.d.ts" />
/// <reference path="../KiwiShell.d.ts" />
/// <reference path="../KiwiComponent.d.ts" />
/// <reference path="../LiL.d.ts" />
declare module Character {
    function job_to_char(job: job_t): string;
    function char_to_job(c: string): job_t | null;
    function is_job_in_string(job: job_t, str: string): boolean;
    function can_get_job(job: job_t, attr: attr_t): boolean;
    function load_init_status(race: race_t): RecordIF | null;
    function has_status_for_job(job: job_t, srcstatus: RecordIF): boolean;
}
