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
        private mTable: TableIF | null ;

        constructor(){
                let table = valueTableInStorage("main", "character.alignmentRestriction") ;
	        if(table != null){
                        this.mTable = table ;
                } else {
		        console.error("[Error] No table for character.alignmentRestriction\n") ;
                        this.mTable = null ;
                }
        }

        private recordForJob(job: JobType): RecordIF | null {
                let table = this.mTable ;
                if(table != null){
                        let recs = table.search(jobToString(job), "job") ;
                        if(recs != null){
                                if(recs!.length > 0){
                                        return recs![0] ;
                                }
                        }
                }
		console.log("Invalid job: " + jobToString(job)) ;
                return null ;
        }

        private valueForJob(alignment: string, job: JobType): boolean {
                let rec = this.recordForJob(job) ;
                if(rec != null){
                        let val = toBoolean(rec!.value(alignment)) ;
                        if(val != null){
                                return val! ;
                        } else {
                                console.log("Invalid value for alignment: " 
				 + alignment) ;
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
        private mTable: DictionaryIF ;

	constructor(){
                this.mTable = Dictionary() ;
                for(let name of allStatusNames){
                        this.mTable.setNumber(0, name) ;
                }
	}

        public value(key: string): number {
                let val = this.mTable.number(key) ;
                if(val != null){
                        return val! ;
                } else {
                        console.error("[Error] No member") ;
                        return 0 ;
                }
        }

        public setValue(value: number, key: string): void {
                this.mTable.setNumber(value, key) ;
        }

        public get dictionary(): DictionaryIF {
                return this.mTable ;
        }

        public set hitPoint(value: number) { this.setValue(value, StatusName.hitPoint) ; }
        public get hitPoint() { return this.value(StatusName.hitPoint) ; }

        public set magicPoint(value: number) { this.setValue(value, StatusName.magicPoint) ; }
        public get magicPoint() { return this.value(StatusName.magicPoint) ; }

        public set strength(value: number) { this.setValue(value, StatusName.strength) ; }
        public get strength() { return this.value(StatusName.strength) ; }

        public set vitality(value: number) { this.setValue(value, StatusName.vitality) ; }
        public get vitality() { return this.value(StatusName.vitality) ; }

        public set agility(value: number) { this.setValue(value, StatusName.agility) ; }
        public get agility() { return this.value(StatusName.agility) ; }

        public set intelligence(value: number) { this.setValue(value, StatusName.intelligence) ; }
        public get intelligence() { return this.value(StatusName.intelligence) ; }

        public set piety(value: number) { this.setValue(value, StatusName.piety) ; }
        public get piety() { return this.value(StatusName.piety) ; }

        public set luck(value: number) { this.setValue(value, StatusName.luck) ; }
        public get luck() { return this.value(StatusName.luck) ; }

        public clone(): Status {
                let newstat = new Status() ;
                for(let name of allStatusNames){
                        let val = this.value(name) ;
                        newstat.setValue(val, name) ;
                }
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

export class Character
{
	private static pidItem		= "pid" ;
        private static nameItem         = "name" ;
        private static ageItem          = "age" ;
        private static levelItem        = "level" ;
        private static raceItem         = "race" ;
        private static jobItem          = "job" ;
        private static statusItem       = "status" ;

        private mRecord:        RecordIF

        constructor(record: RecordIF | null){
                if(record != null){
                        this.mRecord = record ;
                } else {
                        this.mRecord = Record() ;
                }
        }

        public get record(): RecordIF {
                return this.mRecord ;
        }

        public set pid(str: number) {
                this.mRecord.setValue(str, Character.pidItem) ;
        }
        public get pid(): number {
                return this.mRecord.value(Character.pidItem) ?? -1 ;
        }

        public set name(str: string) {
                this.mRecord.setValue(str, Character.nameItem) ;
        }
        public get name(): string {
                return this.mRecord.value(Character.nameItem) ?? "?" ;
        }

        public set age(num: number) {
                this.mRecord.setValue(num, Character.ageItem) ;
        }
        public get age(): number {
                return this.mRecord.value(Character.ageItem) ?? "0" ;
        }

        public set level(num: number) {
                this.mRecord.setValue(num, Character.levelItem) ;
        }
        public get level(): number {
                return this.mRecord.value(Character.levelItem) ?? "0" ;
        }

        public set race(typ: RaceType) {
                this.mRecord.setValue(typ, Character.raceItem);
        }
        public get race(): RaceType {
                return this.mRecord.value(Character.raceItem) ?? RaceType.human ;
        }

        public set job(typ: JobType) {
                this.mRecord.setValue(typ, Character.jobItem);
        }
        public get job(): JobType {
                return this.mRecord.value(Character.jobItem) ?? JobType.fighter ;
        }

        public set status(stat: Status) {
                for(let name of allStatusNames){
                        let val = stat.value(name) ;
                        this.mRecord.setValue(val, name) ;
                }
        }
        public get status(): Status {
                let newstat = new Status() ;
                for(let name of allStatusNames){
                        let val = this.mRecord.value(name) ;
                        if(val != null){
                                newstat.setValue(val, name) ;
                        }
                }
                return newstat ;
        }
}

} ; // end of module

