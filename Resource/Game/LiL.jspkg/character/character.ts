/*
 * character.ts
 */

/// <reference path="../types/KiwiLibrary.d.ts" />
/// <reference path="../types/KiwiShell.d.ts" />
/// <reference path="../types/KiwiComponent.d.ts" />

const MaxLevel: number	= 100
const MinLevel: number  =   0

module Character {

export enum Race {
	human
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

function anyToClippedNumber(val: any, max: number, min: number): number | null {
	if(isNumber(val)){
		let num = val as number
		if(min<=num && num<=max){
			return num ;
		} else {
			return min
		}
	} else {
		return null ;
	}
}

/*
 * property:
 *	name:			string | null
 *	uncertainName:		string | null
 *	race:			Race | null
 *	job:			Job | null
 *	level:			number | null
 */
export class Attributes {
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
		let val = anyToClippedNumber(rc, MinLevel, MaxLevel) ;
		this.record.setValue(val, "level") ;
	}
} ;

} ; // end of module

