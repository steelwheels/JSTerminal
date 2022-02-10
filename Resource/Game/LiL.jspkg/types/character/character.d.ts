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
    function raceToString(race: Race): string;
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
        level: number;
        hitPoint: number;
        magicPoint: number;
        strength: number;
        vitality: number;
        dexterity: number;
        agility: number;
        intelligence: number;
        piety: number;
        luck: number;
        constructor();
    }
    function loadInitStatus(race: Race): Status | null;
}
