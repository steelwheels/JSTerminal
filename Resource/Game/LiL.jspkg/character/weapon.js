"use strict";
/*
 * weapon.ts
 */
/// <reference path="../types/KiwiLibrary.d.ts" />
/// <reference path="../types/KiwiShell.d.ts" />
/// <reference path="../types/KiwiComponent.d.ts" />
var Weapon;
(function (Weapon) {
    class WeaponTable {
        constructor() {
            let table = valueTableInStorage("main", "item.weapon.weapons");
            if (table != null) {
                this.mTable = table;
            }
            else {
                console.error("[Error] No table for item.weapon.weapons\n");
                this.mTable = null;
            }
        }
    }
    Weapon.WeaponTable = WeaponTable;
})(Weapon || (Weapon = {}));
; // end of module
