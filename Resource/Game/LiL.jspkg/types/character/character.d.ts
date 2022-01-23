/// <reference path="../KiwiLibrary.d.ts" />
/// <reference path="../KiwiShell.d.ts" />
/// <reference path="../KiwiComponent.d.ts" />
declare const MaxLevel: number;
declare const MinLevel: number;
declare module Character {
    enum Race {
        human = 0
    }
    enum Job {
        fighter = 0,
        mage = 1,
        priest = 2,
        thief = 3
    }
    class Attributes {
        record: ValueRecordIF;
        constructor(rec: ValueRecordIF);
        get name(): string | null;
        set name(nm: string | null);
        get uncertainName(): string | null;
        set uncertainName(nm: string | null);
        get race(): Race | null;
        set race(rc: Race | null);
        get job(): Job | null;
        set job(rc: Job | null);
        get level(): number | null;
        set level(rc: number | null);
    }
}
