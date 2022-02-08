/// <reference path="../KiwiLibrary.d.ts" />
/// <reference path="../KiwiShell.d.ts" />
/// <reference path="../KiwiComponent.d.ts" />
declare module Character {
    enum Race {
        human = 0,
        elf = 1,
        dwarf = 2,
        gnome = 3,
        hobbit = 4
    }
    enum Job {
        fighter = 0,
        mage = 1,
        priest = 2,
        thief = 3
    }
    enum StatusType {
        level = 0,
        hitPoint = 1,
        magicPoint = 2,
        strength = 3,
        vitality = 4,
        dexterity = 5,
        agility = 6,
        intelligence = 7,
        piety = 8,
        luck = 9
    }
    function statusTypeToString(type: StatusType): string;
    class Status {
        private mRecord;
        constructor(record: ValueRecordIF);
        get race(): string | null;
        get level(): number | null;
        get hitPoint(): number | null;
        get magicPoint(): number | null;
        get strength(): number | null;
        get vitality(): number | null;
        get dexterity(): number | null;
        get agility(): number | null;
        get intelligence(): number | null;
        get piety(): number | null;
        get luck(): number | null;
        private value;
    }
    function raceToString(race: Race): string;
    function initStatus(race: Race): Status | null;
}
