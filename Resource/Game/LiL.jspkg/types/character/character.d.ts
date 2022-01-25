/// <reference path="../KiwiLibrary.d.ts" />
/// <reference path="../KiwiShell.d.ts" />
/// <reference path="../KiwiComponent.d.ts" />
declare module Character {
    enum Race {
        human = 0,
        elf = 1,
        dwarf = 2,
        gnome = 3,
        porkul = 4
    }
    enum Job {
        fighter = 0,
        mage = 1,
        priest = 2,
        thief = 3
    }
    enum StatusParameter {
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
    class Status {
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
        get hitPoint(): number | null;
        set hitPoint(rc: number | null);
        get magicPoint(): number | null;
        set magicPoint(rc: number | null);
        get strength(): number | null;
        set strength(rc: number | null);
        get vitality(): number | null;
        set vitality(rc: number | null);
        get dexterity(): number | null;
        set dexterity(rc: number | null);
        get agility(): number | null;
        set agility(rc: number | null);
        get intelligence(): number | null;
        set intelligence(rc: number | null);
        get piety(): number | null;
        set piety(rc: number | null);
        get luck(): number | null;
        set luck(rc: number | null);
    }
}
