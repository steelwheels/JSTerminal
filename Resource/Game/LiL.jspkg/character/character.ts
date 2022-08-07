/*
 * character.ts
 */

/// <reference path="../types/KiwiLibrary.d.ts" />
/// <reference path="../types/KiwiShell.d.ts" />
/// <reference path="../types/KiwiComponent.d.ts" />
/// <reference path="../types/LiL.d.ts" />

module Character {

export function job_to_char(job: job_t): string
{
        let result = "" ;
        switch(job){
        case job_t.fighter:     result = "F" ;  break ;
        case job_t.mage:        result = "M" ;  break ;
        case job_t.priest:      result = "P" ;  break ;
        case job_t.thief:       result = "T" ;  break ;
        case job_t.samurai:     result = "S" ;  break ;
        case job_t.bishop:      result = "B" ;  break ;
        case job_t.ninjya:      result = "N" ;  break ;
        case job_t.lord:        result = "L" ;  break ;
        }
        return result ;
}

export function char_to_job(c: string): job_t | null
{
        let result: job_t | null = null ;
        switch(c){
        case "F": result = job_t.fighter ;      break ;
        case "M": result = job_t.mage ;         break ;
        case "P": result = job_t.priest ;       break ;
        case "T": result = job_t.thief ;        break ;
        case "S": result = job_t.samurai ;      break ;
        case "B": result = job_t.bishop ;       break ;
        case "N": result = job_t.ninjya ;       break ;
        case "L": result = job_t.lord ;         break ;      
        }
        return result ;
}

export function is_job_in_string(job: job_t, str: string): boolean 
{
        return str.indexOf(job_to_char(job) ) >= 0 ;
}

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
	let table = TableStorage("main", "data.parameters.initStatus") ;
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
	let table = TableStorage("main", "data.parameters.job_requirement") ;
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

