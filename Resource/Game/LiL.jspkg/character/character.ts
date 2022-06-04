/*
 * character.ts
 */

/// <reference path="../types/KiwiLibrary.d.ts" />
/// <reference path="../types/KiwiShell.d.ts" />
/// <reference path="../types/KiwiComponent.d.ts" />
/// <reference path="../types/LiL.d.ts" />

module Character {

export function can_get_job(job: job_t, attr: attr_t): boolean
{
	let result: boolean ;
	switch(job){
 	  case job_t.fighter:
		result = true ;
	  break ;
	  case job_t.mage:
		result = true ;
	  break ;
	  case job_t.priest:
		result = (attr != attr_t.neutral) ;
	  break ;
	  case job_t.thief:
		result = (attr != attr_t.good) ;
	  break ;
	  case job_t.samurai:
		result = (attr != attr_t.evil) ;
	  break ;
	  case job_t.bishop:
		result = (attr != attr_t.neutral) ;
	  break ;
	  case job_t.ninjya:
		result = (attr == attr_t.evil) ;
	  break ;
	  case job_t.lord:
		result = (attr == attr_t.good) ;
	  break ;
	}
	return result ;
}

export const allStatusNames: string[] = [
        status_t.description(status_t.hitPoint),
        status_t.description(status_t.magicPoint),
        status_t.description(status_t.strength),
        status_t.description(status_t.vitality),
        status_t.description(status_t.agility),
        status_t.description(status_t.intelligence),
        status_t.description(status_t.piety),
        status_t.description(status_t.luck)
] ;

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

        public set hitPoint(value: number) { this.setValue(value, status_t.description(status_t.hitPoint)) ; }
        public get hitPoint() { return this.value(status_t.description(status_t.hitPoint)) ; }

        public set magicPoint(value: number) { this.setValue(value, status_t.description(status_t.magicPoint)) ; }
        public get magicPoint() { return this.value(status_t.description(status_t.magicPoint)) ; }

        public set strength(value: number) { this.setValue(value, status_t.description(status_t.strength)) ; }
        public get strength() { return this.value(status_t.description(status_t.strength)) ; }

        public set vitality(value: number) { this.setValue(value, status_t.description(status_t.vitality)) ; }
        public get vitality() { return this.value(status_t.description(status_t.vitality)) ; }

        public set agility(value: number) { this.setValue(value, status_t.description(status_t.agility)) ; }
        public get agility() { return this.value(status_t.description(status_t.agility)) ; }

        public set intelligence(value: number) { this.setValue(value, status_t.description(status_t.intelligence)) ; }
        public get intelligence() { return this.value(status_t.description(status_t.intelligence)) ; }

        public set piety(value: number) { this.setValue(value, status_t.description(status_t.piety)) ; }
        public get piety() { return this.value(status_t.description(status_t.piety)) ; }

        public set luck(value: number) { this.setValue(value, status_t.description(status_t.luck)) ; }
        public get luck() { return this.value(status_t.description(status_t.luck)) ; }

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

export function loadInitStatus(race: race_t): Status | null {
	let racevalue = race_t.description(race) ;
	return loadAnyStatus("initStatus", "race", racevalue) ;
}

export function loadJobRequirement(job: job_t): Status | null {
	let jobvalue = job_t.description(job) ;
	return loadAnyStatus("jobRequirement", "job", jobvalue) ;
}

function loadAnyStatus(tablename: string, typename: string, typevalue: string): Status | null {
	let table = tableInStorage("main", "character." + tablename) ;
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

export function hasEnoughStatusForJob(job: job_t, srcstatus: Status): boolean {
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

        public set pid(num: number) {
                this.mRecord.setValue(num, Character.pidItem) ;
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

        public set race(typ: race_t) {
                this.mRecord.setValue(typ, Character.raceItem);
        }
        public get race(): race_t {
                return this.mRecord.value(Character.raceItem) ?? race_t.human;
        }

        public set job(typ: job_t) {
                this.mRecord.setValue(typ, Character.jobItem);
        }
        public get job(): job_t {
                return this.mRecord.value(Character.jobItem) ?? job_t.fighter;
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

	public isPartyMember(): boolean {
		return this.pid > 0 ;
	}
}

} ; // end of module

