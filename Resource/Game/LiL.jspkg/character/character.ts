/*
 * character.ts
 */

/// <reference path="../types/KiwiLibrary.d.ts" />
/// <reference path="../types/KiwiShell.d.ts" />
/// <reference path="../types/KiwiComponent.d.ts" />

module Character {

export enum Race {
	human,
        elf,
        dwarf,
        gnome,
        porkul
} ;

function anyToRace(val: any): Race | null {
	if(!isNumber(val)){
		return null ;
	}
	let result: Race | null ;
	switch(val){
	  case Race.human:	result = Race.human ; break ;
	  default:		result = null ; break ;
	}
	return result ;
}

export enum Job {
	fighter,
	mage,
	priest,
	thief
} ;

function anyToJob(val: any): Job | null {
	if(!isNumber(val)){
		return null ;
	}
	let result: Job | null ;
	switch(val){
	  case Job.fighter:	result = Job.fighter ; break ;
	  case Job.mage:	result = Job.mage ; break ;
	  case Job.priest:	result = Job.priest ; break ;
	  case Job.thief:	result = Job.thief ; break ;
	  default:		result = null ; break ;
	}
	return result ;
}

export enum StatusParameter {
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

function maxValueOfStatus(param: StatusParameter): number {
        let result: number ;
        switch(param){
                case StatusParameter.level:             result = 100 ;      break ;
                case StatusParameter.hitPoint:          result = 100 ;      break ;
                case StatusParameter.magicPoint:        result = 100 ;      break ;
                case StatusParameter.strength:          result = 100 ;      break ;
                case StatusParameter.vitality:          result = 100 ;      break ;
                case StatusParameter.dexterity:         result = 100 ;      break ;
                case StatusParameter.agility:           result = 100 ;      break ;
                case StatusParameter.intelligence:      result = 100 ;      break ;
                case StatusParameter.piety:             result = 100 ;      break ;
                case StatusParameter.luck:              result = 100 ;      break ;
        }
        return result ;
}

function minValueOfStatus(param: StatusParameter): number {
        let result: number ;
        switch(param){
                case StatusParameter.level:             result =   0 ;      break ;
                case StatusParameter.hitPoint:          result =   0 ;      break ;
                case StatusParameter.magicPoint:        result =   0 ;      break ;
                case StatusParameter.strength:          result =   0 ;      break ;
                case StatusParameter.vitality:          result =   0 ;      break ;
                case StatusParameter.dexterity:         result =   0 ;      break ;
                case StatusParameter.agility:           result =   0 ;      break ;
                case StatusParameter.intelligence:      result =   0 ;      break ;
                case StatusParameter.piety:             result =   0 ;      break ;
                case StatusParameter.luck:              result =   0 ;      break ;
        }
        return result ;
}

function anyToClippedStatus(val: any, status: StatusParameter): number | null {
	if(isNumber(val)){
		let num = val as number
                let min = minValueOfStatus(status) ;
                let max = maxValueOfStatus(status) ;
		if(min<=num && num<=max){
			return num ;
		} else {
			return min
		}
	} else {
		return null ;
	}
}

export class Status {
	record: ValueRecordIF ;

	constructor(rec: ValueRecordIF){
		this.record = rec ;
	}

	get name(): string | null {
		let nm = this.record.value("name") ;
		return isString(nm) ? nm : null ;
	}

	set name(nm: string | null) {
		this.record.setValue(nm, "name") ;
	}

	get uncertainName(): string | null {
		let nm = this.record.value("uncertainName") ;
		return isString(nm) ? nm : null ;
	}
	set uncertainName(nm: string | null) {
		this.record.setValue(nm, "uncertainName") ;
	}

	get race(): Race | null {
		let rc = this.record.value("race") ;
		return anyToRace(rc) ;
	}
	set race(rc: Race | null) {
		this.record.setValue(rc, "race") ;
	}

	get job(): Job | null {
		let rc = this.record.value("job") ;
		return anyToJob(rc) ;
	}
	set job(rc: Job | null) {
		this.record.setValue(rc, "job") ;
	}

	get level(): number | null {
		let lv = this.record.value("level") ;
		return isNumber(lv) ? lv : null ;
	}
	set level(rc: number | null) {
		let val = anyToClippedStatus(rc, StatusParameter.level) ;
		this.record.setValue(val, "level") ;
	}

        get hitPoint(): number | null {
		let lv = this.record.value("hitPoint") ;
		return isNumber(lv) ? lv : null ;
	}
	set hitPoint(rc: number | null) {
                let val = anyToClippedStatus(rc, StatusParameter.hitPoint) ;
		this.record.setValue(val, "hitPoint") ;
	}

        get magicPoint(): number | null {
		let lv = this.record.value("magicPoint") ;
		return isNumber(lv) ? lv : null ;
	}
	set magicPoint(rc: number | null) {
                let val = anyToClippedStatus(rc, StatusParameter.magicPoint) ;
		this.record.setValue(val, "magicPoint") ;
	}

        get strength(): number | null {
		let lv = this.record.value("strength") ;
		return isNumber(lv) ? lv : null ;
	}
	set strength(rc: number | null) {
                let val = anyToClippedStatus(rc, StatusParameter.strength) ;
		this.record.setValue(val, "strength") ;
	}

        get vitality(): number | null {
		let lv = this.record.value("vitality") ;
		return isNumber(lv) ? lv : null ;
	}
	set vitality(rc: number | null) {
                let val = anyToClippedStatus(rc, StatusParameter.vitality) ;
		this.record.setValue(val, "vitality") ;
	}

        get dexterity(): number | null {
		let lv = this.record.value("dexterity") ;
		return isNumber(lv) ? lv : null ;
	}
	set dexterity(rc: number | null) {
                let val = anyToClippedStatus(rc, StatusParameter.dexterity) ;
		this.record.setValue(val, "dexterity") ;
	}

        get agility(): number | null {
		let lv = this.record.value("agility") ;
		return isNumber(lv) ? lv : null ;
	}
	set agility(rc: number | null) {
		let val = anyToClippedStatus(rc, StatusParameter.agility) ;
		this.record.setValue(val, "agility") ;
	}

        get intelligence(): number | null {
		let lv = this.record.value("intelligence") ;
		return isNumber(lv) ? lv : null ;
	}
	set intelligence(rc: number | null) {
                let val = anyToClippedStatus(rc, StatusParameter.intelligence) ;
		this.record.setValue(val, "intelligence") ;
	}

        get piety(): number | null {
		let lv = this.record.value("piet") ;
		return isNumber(lv) ? lv : null ;
	}
	set piety(rc: number | null) {
                let val = anyToClippedStatus(rc, StatusParameter.piety) ;
		this.record.setValue(val, "piet") ;
	}

        get luck(): number | null {
		let lv = this.record.value("luck") ;
		return isNumber(lv) ? lv : null ;
	}
	set luck(rc: number | null) {
                let val = anyToClippedStatus(rc, StatusParameter.luck) ;
		this.record.setValue(val, "luck") ;
	}
} ;

} ; // end of module

