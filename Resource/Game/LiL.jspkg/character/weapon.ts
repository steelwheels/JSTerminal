/*
 * weapon.ts
 */

/// <reference path="../types/KiwiLibrary.d.ts" />
/// <reference path="../types/KiwiShell.d.ts" />
/// <reference path="../types/KiwiComponent.d.ts" />

module Weapon {

export class WeaponTable
{
        private mTable: TableIF | null ;

        constructor(){
                let table = valueTableInStorage("main", "item.weapon.weapons") ;
	        if(table != null){
                        this.mTable = table ;
                } else {
		        console.error("[Error] No table for item.weapon.weapons\n") ;
                        this.mTable = null ;
                }
        }
}

} ; // end of module

