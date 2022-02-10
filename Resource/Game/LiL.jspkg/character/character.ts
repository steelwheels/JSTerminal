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
	level:		number ;
	hitPoint:	number ;
	magicPoint:	number ;
	strength:	number ;
	vitality:	number ;
	dexterity:	number ;
	agility:	number ;
	intelligence:	number ;
	piety:		number ;
	luck:		number ;

	constructor(){
		this.level		= 0 ;
		this.hitPoint		= 0 ;
		this.magicPoint		= 0 ;
		this.strength		= 0 ;
		this.vitality		= 0 ;
		this.dexterity		= 0 ;
		this.agility		= 0 ;
		this.intelligence	= 0 ;
		this.piety		= 0 ;
		this.luck		= 0 ;
	}
} ;

function anyToNumber(value: any | null): number {
	if(isNumber(value)){
		return value! ;
	} else {
		return 0 ;
	}
}

export function loadInitStatus(race: Race): Status | null {
	let table = valueTableInStorage("main", "character.initStatus") ;
	if(table == null){
		console.log("[Error] No table") ;
		return null ;
	}

        let racename = raceToString(race) ;
	let recs     = table!.search(racename, "race") ;
	if(recs != null){
                if(recs!.length < 1){
                        console.log("[Error] No records")
                        return null ;
                }
        } else {
                console.log("[Error] No records") ;
                return null ;
        }
        
	let status = new Status() ;
	let record = recs![0] ;

	status.level		= anyToNumber(record.value("level")) ;
	status.hitPoint		= anyToNumber(record.value("hitPoint")) ;
	status.magicPoint	= anyToNumber(record.value("magicPoint")) ;
	status.strength		= anyToNumber(record.value("strength")) ;
	status.vitality		= anyToNumber(record.value("vitality")) ;
	status.dexterity	= anyToNumber(record.value("dexterity")) ;
	status.agility		= anyToNumber(record.value("agility")) ;
	status.intelligence	= anyToNumber(record.value("intelligence")) ;
	status.piety		= anyToNumber(record.value("piety")) ;
	status.luck		= anyToNumber(record.value("luck")) ;

        return status ;
}

} ; // end of module

