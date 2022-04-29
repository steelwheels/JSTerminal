/// <reference path="../KiwiLibrary.d.ts" />
/// <reference path="../KiwiShell.d.ts" />
/// <reference path="../KiwiComponent.d.ts" />
declare module Weapon {
    class WeaponTable {
        static path: string;
        private mTable;
        constructor();
        get weaponCount(): number;
        weapon(row: number): Weapon | null;
    }
    class Weapon {
        private mRecord;
        constructor(record: RecordIF | null);
        get realName(): string | null;
        get uncertainName(): string | null;
    }
}
