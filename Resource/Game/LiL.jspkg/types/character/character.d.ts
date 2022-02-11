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
    const StatusName: {
        level: string;
        hitPoint: string;
        magicPoint: string;
        strength: string;
        vitality: string;
        dexterity: string;
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
        set level(value: number);
        get level(): number;
        set hitPoint(value: number);
        get hitPoint(): number;
        set magicPoint(value: number);
        get magicPoint(): number;
        set strength(value: number);
        get strength(): number;
        set vitality(value: number);
        get vitality(): number;
        set dexterity(value: number);
        get dexterity(): number;
        set agility(value: number);
        get agility(): number;
        set intelligence(value: number);
        get intelligence(): number;
        set piety(value: number);
        get piety(): number;
        set luck(value: number);
        get luck(): number;
    }
    function loadInitStatus(race: RaceType): Status | null;
}
