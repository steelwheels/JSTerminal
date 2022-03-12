/*
 * tavern.ts
 */

/// <reference path="../types/KiwiLibrary.d.ts" />
/// <reference path="../types/KiwiShell.d.ts" />
/// <reference path="../types/KiwiComponent.d.ts" />
/// <reference path="../types/character/character.d.ts" />

module Tavern {

export class CharacterTable
{
        private mTable: ValueTableIF | null ;

        constructor(){
                this.mTable = null ;
        }

        public get table(): ValueTableIF {
                if(this.mTable != null){
                        return this.mTable ;
                } else {
                        let newtable = this.load() ;
                        this.mTable  = newtable ;
                        return newtable ;
                }
        }

        public load(): ValueTableIF {
                let storage = ValueStorage("main") ;
		if(storage == null){
			console.error("Failed to allocate storage") ;
                        exit(ExitCode.exception) ;
		}
		let table = ValueTable("town.tavern.members", storage!) ;
		if(table == null){
			console.error("Failed to allocate table") ;
                        exit(ExitCode.exception) ;
		}
                return table! ;
        }

        public add(newchar: Character.Character) {
		this.table.append(newchar.record) ;
        } 
} 

} // end of module

