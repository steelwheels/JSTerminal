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

export enum AlignmentType {
        good,
        neutral,
        evil
} ;

export const AlignmentName = {
	good:		"good",
	neutral:	"neutral",
	evil:		"evil"
} ;

export const allAlignmentNames: string[] = [
        AlignmentName.good,
        AlignmentName.neutral,
        AlignmentName.evil
] ;

export function alignmentToString(align: AlignmentType): string {
        let result: string = "" ;
        switch(align){
          case AlignmentType.good:
		result = AlignmentName.good ;
	  break ;
          case AlignmentType.neutral:
		result = AlignmentName.neutral ;
	  break ;
          case AlignmentType.evil:
		result = AlignmentName.evil ;
	  break ;
        }
        return result ;
}

export class AlignmentRestriction
{
        private mTable: ValueTableIF | null ;

        constructor(){
                let table = valueTableInStorage("main", "character.alignmentRestriction") ;
	        if(table != null){
                        this.mTable = table ;
                } else {
		        console.error("[Error] No table for character.alignmentRestriction\n") ;
                        this.mTable = null ;
                }
        }

        private recordForJob(job: JobType): ValueRecordIF | null {
                let table = this.mTable ;
                if(table != null){
                        let recs = table.search(jobToString(job), "job") ;
                        if(recs != null){
                                if(recs!.length > 0){
                                        return recs![0] ;
                                }
                        }
                }
                return null ;
        }

        private valueForJob(alignment: string, job: JobType): boolean {
                let rec = this.recordForJob(job) ;
                if(rec != null){
                        let val = toBoolean(rec!.value(alignment)) ;
                        if(val != null){
                                return val! ;
                        } else {
                                console.log("Invalid value for alignment of job") ;
                                return false ;
                        }
                } else {
                        console.log("No record for job") ;
                        return false ;
                }
        }

        public canBeGood(job: JobType): boolean {
                return this.valueForJob(AlignmentName.good, job) ;
        }

        public canBeNeutral(job: JobType): boolean {
                return this.valueForJob(AlignmentName.neutral, job) ;
        }

        public canBeEvil(job: JobType): boolean {
                return this.valueForJob(AlignmentName.evil, job) ;
        }
}

export enum StatusType {
        hitPoint,
        magicPoint,
        strength,
        vitality,
        agility,
        intelligence,
        piety,
        luck
} ;

export const StatusName = {
        hitPoint:       "hitPoint",
        magicPoint:     "magicPoint",
        strength:       "strength",
        vitality:       "vitality",
        agility:        "agility",
        intelligence:   "intelligence",
        piety:          "piety",
        luck:           "luck"
} ;

export const allStatusNames: string[] = [
        StatusName.hitPoint,
        StatusName.magicPoint,
        StatusName.strength,
        StatusName.vitality,
        StatusName.agility,
        StatusName.intelligence,
        StatusName.piety,
        StatusName.luck
] ;

export function statusTypeToString(type: StatusType): string {
        let result: string = "?" ;
        switch(type){
        case StatusType.hitPoint:       result = StatusName.hitPoint ;           break ;
        case StatusType.magicPoint:     result = StatusName.magicPoint ;         break ;
        case StatusType.strength:       result = StatusName.strength ;           break ;
        case StatusType.vitality:       result = StatusName.vitality ;           break ;
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

        public value(key: string): number {
                let val = this.mTable[key] ;
                if(val != null){
                        return val! ;
                } else {
                        console.error("[Error] No member") ;
                        return 0 ;
                }
        }

        public setValue(value: number, key: string): void {
                this.mTable[key] = value ;
        }

        set hitPoint(value: number) { this.setValue(value, StatusName.hitPoint) ; }
        get hitPoint() { return this.value(StatusName.hitPoint) ; }

        set magicPoint(value: number) { this.setValue(value, StatusName.magicPoint) ; }
        get magicPoint() { return this.value(StatusName.magicPoint) ; }

        set strength(value: number) { this.setValue(value, StatusName.strength) ; }
        get strength() { return this.value(StatusName.strength) ; }

        set vitality(value: number) { this.setValue(value, StatusName.vitality) ; }
        get vitality() { return this.value(StatusName.vitality) ; }

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
                newstat.hitPoint        = this.hitPoint ;
                newstat.magicPoint      = this.magicPoint ;
                newstat.strength        = this.strength ;
                newstat.vitality        = this.vitality ;
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
        let racevalue = raceToString(race) ;
	return loadAnyStatus("initStatus", "race", racevalue) ;
}

export function loadJobRequirement(job: JobType): Status | null {
        let jobvalue = jobToString(job) ;
	return loadAnyStatus("jobRequirement", "job", jobvalue) ;
}

function loadAnyStatus(tablename: string, typename: string, typevalue: string): Status | null {
	let table = valueTableInStorage("main", "character." + tablename) ;
	if(table == null){
		console.error("[Error] No table:" + tablename + "\n") ;
		return null ;
	}
        let recs  = table!.search(typevalue, typename) ;
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

export function hasEnoughStatusForJob(job: JobType, srcstatus: Status): boolean {
        let reqstatus = loadJobRequirement(job) ;
        if(reqstatus == null) {
                console.error("[Error] No job requirement") ;
                return false ;
        }
        let result = true ;
        for(let name of allStatusNames){
                if(srcstatus.value(name) < reqstatus.value(name)){
                        result = false ;
                        break ;
                }
        }
        return result ;
}

export class Character {
        private mName:          string ;
        private mRace:          RaceType ;
        private mJob:           JobType ;
        private mStatus:        Status ;

        constructor(name: string, race: RaceType, job: JobType, status: Status){
                this.mName      = name ;
                this.mRace      = race ;
                this.mJob       = job ;
                this.mStatus    = status ;
        }

        get name():   string   { return this.mName ; }
        get race():   RaceType { return this.mRace ; }
        get job():    JobType  { return this.mJob ;  }
        get status(): Status   { return this.mStatus ; }
}

} ; // end of module

