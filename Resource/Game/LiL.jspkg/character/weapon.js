"use strict";
/*
 * weapon.ts
 */
/// <reference path="../types/KiwiLibrary.d.ts" />
/// <reference path="../types/KiwiShell.d.ts" />
/// <reference path="../types/KiwiComponent.d.ts" />
var Weapon;
(function (Weapon_1) {
    class WeaponTable {
        constructor() {
            let table = tableInStorage("main", WeaponTable.path);
            if (table != null) {
                this.mTable = table;
            }
            else {
                console.error("[Error] No table for " +
                    WeaponTable.path + "\n");
                this.mTable = null;
            }
        }
        get weaponCount() {
            let table = this.mTable;
            if (table != null) {
                return table.recordCount;
            }
            else {
                return 0;
            }
        }
        weapon(row) {
            let table = this.mTable;
            if (table != null) {
                let record = table.record(row);
                if (record != null) {
                    return new Weapon(record);
                }
            }
            return null;
        }
    }
    WeaponTable.path = "item.weapon.weapons";
    Weapon_1.WeaponTable = WeaponTable;
    class Weapon {
        constructor(record) {
            if (record != null) {
                this.mRecord = record;
            }
            else {
                this.mRecord = Record();
            }
        }
        get realName() {
            return this.mRecord.value("name_r");
        }
        get uncertainName() {
            return this.mRecord.value("name_u");
        }
    }
    Weapon_1.Weapon = Weapon;
})(Weapon || (Weapon = {}));
; // end of module
