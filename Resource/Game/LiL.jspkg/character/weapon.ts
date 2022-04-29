/*
 * weapon.ts
 */

/// <reference path="../types/KiwiLibrary.d.ts" />
/// <reference path="../types/KiwiShell.d.ts" />
/// <reference path="../types/KiwiComponent.d.ts" />

module Weapon {

export class WeaponTable
{
	static path: string = "item.weapon.weapons" ;

        private mTable: TableIF | null ;

        constructor(){
                let table = tableInStorage("main", WeaponTable.path) ;
	        if(table != null){
                        this.mTable = table ;
                } else {
		        console.error("[Error] No table for " +
			  WeaponTable.path +  "\n") ;
                        this.mTable = null ;
                }
        }

	get weaponCount(): number {
		let table = this.mTable ;
		if(table != null){
			return table.recordCount ;
		} else {
			return 0 ;
		}
	}

	weapon(row: number): Weapon | null {
		let table = this.mTable ;
		if(table != null){
			let record = table.record(row) ;
			if(record != null){
				return new Weapon(record) ;
			}
		}
		return null ;
	}
}

export class Weapon
{
	private mRecord: RecordIF ;

        constructor(record: RecordIF | null){
		if(record != null){
			this.mRecord = record ;
		} else {
			this.mRecord = Record() ;
		}
	}
	
	get realName(): string | null {
		return this.mRecord.value("name_r") ;
	}

	get uncertainName(): string | null {
		return this.mRecord.value("name_u") ;
	}
}

} ; // end of module

