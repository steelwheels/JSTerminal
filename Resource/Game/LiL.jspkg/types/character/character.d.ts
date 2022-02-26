/// <reference path="../KiwiLibrary.d.ts" />
/// <reference path="../KiwiShell.d.ts" />
/// <reference path="../KiwiComponent.d.ts" />
declare module Character {
    enum RaceType {
        human = 0,
        elf = 1,
        dwarf = 2,
        gnome = 3,
        hobbit = 4
    }
    const RaceName: {
        human: string;
        elf: string;
        dwarf: string;
        gnome: string;
        hobitt: string;
    };
    function raceToString(race: RaceType): string;
    enum JobType {
        fighter = 0,
        mage = 1,
        priest = 2,
        thief = 3,
        samurai = 4,
        bishop = 5,
        ninjya = 6,
        lord = 7
    }
    const JobName: {
        fighter: string;
        mage: string;
        priest: string;
        thief: string;
        samurai: string;
        bishop: string;
        ninjya: string;
        lord: string;
    };
    function jobToString(job: JobType): string;
    enum AlignmentType {
        good = 0,
        neutral = 1,
        evil = 2
    }
    const AlignmentName: {
        good: string;
        neutral: string;
        evil: string;
    };
    const allAlignmentNames: string[];
    function alignmentToString(align: AlignmentType): string;
    class AlignmentRestriction {
        private mTable;
        constructor();
        private recordForJob;
        private valueForJob;
        canBeGood(job: JobType): boolean;
        canBeNeutral(job: JobType): boolean;
        canBeEvil(job: JobType): boolean;
    }
    enum StatusType {
        hitPoint = 0,
        magicPoint = 1,
        strength = 2,
        vitality = 3,
        agility = 4,
        intelligence = 5,
        piety = 6,
        luck = 7
    }
    const StatusName: {
        hitPoint: string;
        magicPoint: string;
        strength: string;
        vitality: string;
        agility: string;
        intelligence: string;
        piety: string;
        luck: string;
    };
    const allStatusNames: string[];
    function statusTypeToString(type: StatusType): string;
    class Status {
        private mTable;
        constructor();
        value(key: string): number;
        setValue(value: number, key: string): void;
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
        writeToDictionary(dst: DictionaryIF): void;
        readFromDictionary(src: DictionaryIF): void;
    }
    function loadInitStatus(race: RaceType): Status | null;
    function loadJobRequirement(job: JobType): Status | null;
    function hasEnoughStatusForJob(job: JobType, srcstatus: Status): boolean;
    class Character {
        private static nameItem;
        private static ageItem;
        private static raceItem;
        private static jobItem;
        private static statusItem;
        private mName;
        private mAge;
        private mRace;
        private mJob;
        private mStatus;
        constructor();
        set name(str: string);
        set age(num: number);
        set race(val: RaceType);
        set job(val: JobType);
        set status(val: Status);
        get name(): string;
        get age(): number;
        get race(): RaceType;
        get job(): JobType;
        get status(): Status;
        writeToDictionary(dst: DictionaryIF): void;
        readFromDictionary(src: DictionaryIF): void;
    }
}
