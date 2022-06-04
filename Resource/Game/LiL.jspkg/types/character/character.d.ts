/// <reference path="../KiwiLibrary.d.ts" />
/// <reference path="../KiwiShell.d.ts" />
/// <reference path="../KiwiComponent.d.ts" />
/// <reference path="../LiL.d.ts" />
declare module Character {
    function can_get_job(job: job_t, attr: attr_t): boolean;
    class Status {
        private mTable;
        constructor();
        value(key: string): number;
        setValue(value: number, key: string): void;
        get dictionary(): DictionaryIF;
        set hitPoint(value: number);
        get hitPoint(): number;
        set magicPoint(value: number);
        get magicPoint(): number;
        set strength(value: number);
        get strength(): number;
        set vitality(value: number);
        get vitality(): number;
        set agility(value: number);
        get agility(): number;
        set intelligence(value: number);
        get intelligence(): number;
        set piety(value: number);
        get piety(): number;
        set luck(value: number);
        get luck(): number;
        clone(): Status;
    }
    function loadInitStatus(race: race_t): Status | null;
    function loadJobRequirement(job: job_t): Status | null;
    function hasEnoughStatusForJob(job: job_t, srcstatus: Status): boolean;
    class Character {
        private static pidItem;
        private static nameItem;
        private static ageItem;
        private static levelItem;
        private static raceItem;
        private static jobItem;
        private static statusItem;
        private mRecord;
        constructor(record: RecordIF | null);
        get record(): RecordIF;
        set pid(num: number);
        get pid(): number;
        set name(str: string);
        get name(): string;
        set age(num: number);
        get age(): number;
        set level(num: number);
        get level(): number;
        set race(typ: race_t);
        get race(): race_t;
        set job(typ: job_t);
        get job(): job_t;
        set status(stat: Status);
        get status(): Status;
        isPartyMember(): boolean;
    }
}
