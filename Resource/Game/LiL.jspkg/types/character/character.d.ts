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
    }
    function loadInitStatus(race: RaceType): Status | null;
    function loadJobRequirement(job: JobType): Status | null;
    function hasEnoughStatusForJob(job: JobType, srcstatus: Status): boolean;
}
