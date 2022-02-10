/*
 * character.ts
 */

/// <reference path="../types/KiwiLibrary.d.ts" />
/// <reference path="../types/KiwiShell.d.ts" />
/// <reference path="../types/KiwiComponent.d.ts" />

module Character {

export enum Race {
	human		= 0,
        elf,
        dwarf,
        gnome,
        hobbit
} ;

export enum Job {
	fighter,
	mage,
	priest,
	thief
} ;

export enum StatusType {
        level,
        hitPoint,
        magicPoint,
        strength,
        vitality,
        dexterity,
        agility,
        intelligence,
        piety,
        luck
} ;

export function statusTypeToString(type: StatusType): string {
        let result = "?" ;
        switch(type){
        case StatusType.level:          result = "level" ;              break ;
        case StatusType.hitPoint:       result = "hitPoint" ;           break ;
        case StatusType.magicPoint:     result = "magicPoint" ;         break ;
        case StatusType.strength:       result = "strength" ;           break ;
        case StatusType.vitality:       result = "vitality" ;           break ;
        case StatusType.dexterity:      result = "dexterity" ;          break ;
        case StatusType.agility:        result = "agility" ;            break ;
        case StatusType.intelligence:   result = "intelligence" ;       break ;
        case StatusType.piety:          result = "piety" ;              break ;
        case StatusType.luck:           result = "luck" ;               break ;
        }
        return result ;
}

export class Status
{
	private mRecord: ValueRecordIF ;

	constructor(record: ValueRecordIF){
		this.mRecord = record ;
	}

        public  get race():         string | null { return toString(this.mRecord.value("race")) ; }
	public	get level():        number | null { return this.value(StatusType.level) ;         }
	public	get hitPoint():	    number | null { return this.value(StatusType.hitPoint) ;      }
	public	get magicPoint():   number | null { return this.value(StatusType.magicPoint) ;    }
	public	get strength():     number | null { return this.value(StatusType.strength) ;      }
	public	get vitality():     number | null { return this.value(StatusType.vitality) ;      }
	public	get dexterity():    number | null { return this.value(StatusType.dexterity) ;     }
	public	get agility():      number | null { return this.value(StatusType.agility) ;       }
	public	get intelligence(): number | null { return this.value(StatusType.intelligence) ;  }
	public	get piety():        number | null { return this.value(StatusType.piety) ;         }
	public	get luck():         number | null { return this.value(StatusType.luck) ;          }

	private value(type: StatusType): number | null {
		let name = statusTypeToString(type) ;
		return toNumber(this.mRecord.value(name)) ;
	}
} ;

export function raceToString(race: Race): string {
	let result = "?" ;
	switch(race){
	  case Race.human:	result = "human" ;	break ;
          case Race.elf:	result = "elf" ;	break ;
          case Race.dwarf:	result = "dwarf" ;	break ;
          case Race.gnome:	result = "gnome" ;	break ;
          case Race.hobbit:	result = "hobbit" ;	break ;
	}
	return result ;
}

export function initStatus(race: Race): Status | null {
	let storage = ValueStorage("main") ;
	if(storage == null){
		console.log("[Error] Failed to load storage") ;
		return null ;
	}
	let table = ValueTable("character.initStatus", storage!) ;
	if(table == null){
		console.log("[Error] Failed to load initStatus") ;
		return null ;
	}

        let racename = raceToString(race) ;
	let recs     = table.search(racename, "race") ;
	if(recs != null){
		if(recs!.length >= 1){
			let stat = new Character.Status(recs![0]) ;
			return stat ;
		}
	}

	console.log("[Error] record is not found") ;
        return null ;
}

} ; // end of module

