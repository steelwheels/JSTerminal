/**
 * @file hangman.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiShell.d.ts"/>

const MAX_IMAGE_NUM     = 7 ;

class Word
{
	target:		string ;
	chars:		string[] ;
	count:		number ;

	constructor(word: string){
		this.target	= word ;
		this.chars	= [] ;
		this.count	= 0 ;
		for(let i=0 ; i<word.length ; i++){
			this.chars.push("-") ;
		}
	}
	
	didMatched(): boolean {
		return this.count >= this.target.length ;
	}

	doMatch(c: string): void {
		let target = this.target ;
                let lowc   = c.toLowerCase() ;
		for(let i=0 ; i<target.length ; i++){
			if((this.chars[i] == "-") && (target.charAt(i) == lowc)){
				this.chars[i] = lowc ;
				this.count    += 1 ;
			}
		}
	}

	toString(): string {
		let result: string = "" ;
		for(let i=0 ; i<this.target.length ; i++){
			let c = this.chars[i] ;
			result += c + " " ;
		}
		return result ;
	}
}

function main(args: string[]): number
{
	/* Allocate initial word */
        let answer   = selectTarget()
	let target   = new Word(answer) ;
        let limit    = int(answer.length * 1.5) ;
        let repcount = 0 ;
	while(!target.didMatched()){
                let imgs = hangmanStrings(countToLevel(repcount, limit)) ;
                for(let line of imgs){
                        console.log(line) ;
                }

                console.log("word: " + target.toString()) ;
                console.print("character> ") ;
                let c = Readline.inputLine() ;
                if(c.length == 1){
                        target.doMatch(c) ;
                } else {
                        console.error(`Not a character: ${c}\n`) ;
                }
                repcount += 1 ;
                if(repcount > limit){
                        break ;
                }
	}

        if(target.didMatched()){
                console.log("Conguraturations !") ;
        } else {
                console.log("Sorry, the answer is " + answer) ;
        }

	return 0 ;
}

function selectTarget(): string
{
	let targets: string[] = [
		"January", 
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	] ;
	let idx = Math.randomInt(0, targets.length - 1) ;
	return targets[idx].toLowerCase() ;
}

function countToLevel(repcount: number, limit: number): number 
{
        let per = repcount / limit ;
        return Math.ceil(per * MAX_IMAGE_NUM) ;

}

function hangmanStrings(level: number): string[]
{
	let strs1: string[] =
		[" +----+",
		 "      |",
		 "      |",
		 "      |",
		 "      |",
		 "      |",
		 "+-----+"] ;

	let strs2: string[] =
		[" +----+",
		 " o    |",
		 "      |",
		 "      |",
		 "      |",
		 "      |",
		 "+-----+"] ;

	let strs3: string[] =
		[" +----+",
		 " o    |",
		 " |    |",
		 " |    |",
		 "      |",
		 "      |",
		 "+-----+"] ;

	let strs4: string[] =
		[" +----+",
		 " o    |",
		 "\\|    |",
		 " |    |",
		 "      |",
		 "      |",
		 "+-----+"] ;

	let strs5: string[] =
		[" +----+",
		 " o    |",
		 "\\|/   |",
		 " |    |",
		 "      |",
		 "      |",
		 "+-----+"] ;

	let strs6: string[] =
		[" +----+",
		 " o    |",
		 "\\|/   |",
		 " |    |",
		 "/     |",
		 "      |",
		 "+-----+"] ;

	let strs7: string[] =
		[" +----+",
		 " o    |",
		 "\|/   |",
		 " |    |",
		 "/ \\   |",
		 "      |",
		 "+-----+"] ;

	let result: string[] ;
	switch(level){
	  case 0:  result = strs1 ;	break ;
	  case 1:  result = strs2 ;	break ;
	  case 2:  result = strs3 ;	break ;
	  case 3:  result = strs4 ;	break ;
	  case 3:  result = strs5 ;	break ;
	  case 4:  result = strs6 ;	break ;
	  case 6:  result = strs7 ;	break ;
	  default: result = strs7 ;	break ;
	}
	return result ;
}

