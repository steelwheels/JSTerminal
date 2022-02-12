/*
 * character.ts
 */

/// <reference path="../types/KiwiLibrary.d.ts" />
/// <reference path="../types/KiwiShell.d.ts" />
/// <reference path="../types/KiwiComponent.d.ts" />

module Character {

export enum RaceType {
	human		= 0,
        elf,
        dwarf,
        gnome,
        hobbit
} ;

export const RaceName = {
        human:          "human",
        elf:            "elf",
        dwarf:          "dwarf",
        gnome:          "gnome",
        hobitt:         "hobbit"
} ;

export function raceToString(race: RaceType): string {
	let result = "?" ;
	switch(race){
	  case RaceType.human:	result = RaceName.human ;	break ;
          case RaceType.elf:	result = RaceName.elf ;	        break ;
          case RaceType.dwarf:	result = RaceName.dwarf ;	break ;
          case RaceType.gnome:	result = RaceName.gnome ;	break ;
          case RaceType.hobbit:	result = RaceName.hobitt ;	break ;
	}
	return result ;
}

export enum JobType {
	fighter,
	mage,
	priest,
	thief,
	samurai,
	bishop,
	ninjya,
	lord
} ;

export const JobName = {
	fighter:	"fighter",
	mage:		"mage",
	priest:		"priest",
	thief:		"thief",
	samurai:	"samurai",
	bishop:		"bishop",
	ninjya:		"ninjya",
	lord:		"lord"
} ;

export function jobToString(job: JobType): string {
	let result = "?" ;
	switch(job){
	  case JobType.fighter:	result = JobName.fighter ;	break ;
          case JobType.mage:	result = JobName.mage ;	        break ;
          case JobType.priest:	result = JobName.priest ;	break ;
          case JobType.thief:	result = JobName.thief ;	break ;
          case JobType.samurai:	result = JobName.samurai ;	break ;
          case JobType.bishop:	result = JobName.bishop ;	break ;
          case JobType.ninjya:	result = JobName.ninjya ;	break ;
          case JobType.lord:	result = JobName.lord ;		break ;
	}
	return result ;
}

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

export const StatusName = {
	level:		"level",
        hitPoint:       "hitPoint",
        magicPoint:     "magicPoint",
        strength:       "strength",
        vitality:       "vitality",
        dexterity:      "dexterity",
        agility:        "agility",
        intelligence:   "intelligence",
        piety:          "piety",
        luck:           "luck"
} ;

export const allStatusNames: string[] = [
        StatusName.level,
        StatusName.hitPoint,
        StatusName.magicPoint,
        StatusName.strength,
        StatusName.vitality,
        StatusName.dexterity,
        StatusName.agility,
        StatusName.intelligence,
        StatusName.piety,
        StatusName.luck
] ;

export function statusTypeToString(type: StatusType): string {
        let result: string = "?" ;
        switch(type){
        case StatusType.level:          result = StatusName.level ;              break ;
        case StatusType.hitPoint:       result = StatusName.hitPoint ;           break ;
        case StatusType.magicPoint:     result = StatusName.magicPoint ;         break ;
        case StatusType.strength:       result = StatusName.strength ;           break ;
        case StatusType.vitality:       result = StatusName.vitality ;           break ;
        case StatusType.dexterity:      result = StatusName.dexterity ;          break ;
        case StatusType.agility:        result = StatusName.agility ;            break ;
        case StatusType.intelligence:   result = StatusName.intelligence ;       break ;
        case StatusType.piety:          result = StatusName.piety ;              break ;
        case StatusType.luck:           result = StatusName.luck ;               break ;
        }
        return result ;
}

export class Status
{
        private mTable: {[index: string]: number} ;

	constructor(){
                this.mTable = {} ;
                for(let name of allStatusNames){
                        this.mTable[name] = 0 ;
                }
	}

        value(key: string): number {
                let val = this.mTable[key] ;
                if(val != null){
                        return val! ;
                } else {
                        console.error("[Error] No member") ;
                        return 0 ;
                }
        }

        setValue(value: number, key: string): void {
                this.mTable[key] = value ;
        }

        set level(value: number) { this.setValue(value, StatusName.level) ; }
        get level() { return this.value(StatusName.level) ; }

        set hitPoint(value: number) { this.setValue(value, StatusName.hitPoint) ; }
        get hitPoint() { return this.value(StatusName.hitPoint) ; }

        set magicPoint(value: number) { this.setValue(value, StatusName.magicPoint) ; }
        get magicPoint() { return this.value(StatusName.magicPoint) ; }

        set strength(value: number) { this.setValue(value, StatusName.strength) ; }
        get strength() { return this.value(StatusName.strength) ; }

        set vitality(value: number) { this.setValue(value, StatusName.vitality) ; }
        get vitality() { return this.value(StatusName.vitality) ; }

        set dexterity(value: number) { this.setValue(value, StatusName.dexterity) ; }
        get dexterity() { return this.value(StatusName.dexterity) ; }

        set agility(value: number) { this.setValue(value, StatusName.agility) ; }
        get agility() { return this.value(StatusName.agility) ; }

        set intelligence(value: number) { this.setValue(value, StatusName.intelligence) ; }
        get intelligence() { return this.value(StatusName.intelligence) ; }

        set piety(value: number) { this.setValue(value, StatusName.piety) ; }
        get piety() { return this.value(StatusName.piety) ; }

        set luck(value: number) { this.setValue(value, StatusName.luck) ; }
        get luck() { return this.value(StatusName.luck) ; }

        clone(): Status {
                let newstat = new Status() ;
                newstat.level           = this.level ;
                newstat.hitPoint        = this.hitPoint ;
                newstat.magicPoint      = this.magicPoint ;
                newstat.strength        = this.strength ;
                newstat.vitality        = this.vitality ;
                newstat.dexterity       = this.dexterity ;
                newstat.agility         = this.agility ;
                newstat.intelligence    = this.intelligence ;
                newstat.piety           = this.piety ;
                newstat.luck            = this.luck ;
                return newstat ;
        }
} ;

function anyToNumber(value: any | null): number {
	if(isNumber(value)){
		return value! ;
	} else {
		return 0 ;
	}
}

export function loadInitStatus(race: RaceType): Status | null {
	let table = valueTableInStorage("main", "character.initStatus") ;
	if(table == null){
		console.error("[Error] No table\n") ;
		return null ;
	}

        let racename = raceToString(race) ;
	let recs     = table!.search(racename, "race") ;
	if(recs != null){
                if(recs!.length < 1){
                        console.error("[Error] No records\n")
                        return null ;
                }
        } else {
                console.error("[Error] No records\n") ;
                return null ;
        }
        
	let status = new Status() ;
	let record = recs![0] ;

        for(let name of allStatusNames) {
                let val = record.value(name) ;
                if(isNumber(val)){
                        status.setValue(val!, name) ;
                } else {
                        console.error("[Error] Invalid status value: " + val + " for name:" + name + "\n") ;    
                }
        }

        return status ;
}

export function hasEnoughStatusForJob(job: JobType, status: Status): boolean {
        let result = false ;
        console.log("JT " + job) ;
        switch(job){
        case JobType.fighter:
                console.log("JT(F)") ;
                result = (status.strength >= 11) ;
        break ;
        case JobType.mage:
                result = (status.intelligence >= 11) ;
        break ;
        case JobType.priest:
                result = (status.piety >= 11) ;
        break ;
        case JobType.thief:
                result = (status.agility >= 11) ;
        break ;
        case JobType.samurai:
                result =   (status.strength >= 15) && (status.intelligence >= 11)
                        && (status.piety    >= 10) && (status.vitality     >= 14)
                        && (status.agility  >= 10) ;
        break ;
        case JobType.bishop:
                result =   (status.intelligence >= 12) && (status.piety >= 12) ;
        break ;
        case JobType.ninjya:
                result =   (status.strength >= 17) && (status.intelligence >= 17)
                        && (status.piety    >= 17) && (status.vitality     >= 17)
                        && (status.agility  >= 17) && (status.luck         >= 17) ;
        break ;
        case JobType.lord:
                result =   (status.strength >= 15) && (status.intelligence >= 12)
                        && (status.piety    >= 12) && (status.vitality     >= 15)
                        && (status.agility  >= 15) && (status.luck         >= 15) ;
        break ;
        }
        return result ;
}

} ; // end of module

