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

export function load_init_status(race: race_t): RecordIF | null {
	let storage = Storage("main") ;
	if(storage == null){
		console.error("Failed to load storage\n") ;
		return null ;
	}
	let table = TableInStorage("data.status.initStatus", storage) ;
	if(table != null){
		let recs = table.search(race, "race") ;
		if(recs != null){
			return recs[0] ;
		}
	} else {
		console.error("Failed to load init status\n") ;
	}
	return null ;
}

export function has_status_for_job(job: job_t, srcstatus: RecordIF): boolean {
	let storage = Storage("main") ;
	if(storage == null){
		console.error("Failed to load storage\n") ;
		return false ;
	}
	let table = TableInStorage("data.status.job_requirement", storage) ;
	if(table != null){
		let result = false ;
		let recs   = table.search(job, "job") ;
		let reqstatus = first(recs) ;
		if(reqstatus != null){
			result = true ;
			for(let key of status_t.keys){
					if(srcstatus.value(key) < reqstatus.value(key)){
							result = false ;
							break ;
					}
			}
			return result ;
		} else {
			console.error("Failed to search job requirement\n") ;
			return false ;
		}
	} else {
		console.error("Failed to load job requirement\n") ;
		return false ;
	}
}

} ; // end of module

