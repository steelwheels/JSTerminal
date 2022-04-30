/**
 * @file moo.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiShell.d.ts"/>

type Result = {
	bull:	number ;
	cow:	number ;
} ;

class Letters
{
	length:		number ;
	values:		number[] ;

	constructor(num: number){
		this.length	= num ;
		this.values	= [] ;
		for(let i=0 ; i<num ; i++){
			this.values.push(0) ;
		}
	}

	randomize(): void{
		for(let i=0 ; i<this.length ; i++){
			this.values[i] = Math.randomInt(0, 9) ;
		}
	}

	set(index: number, value: number): void{
		if(0<=index && index<this.length){
			this.values[index] = value ;
		}
	}

	get(index: number): number | null {
		if(0<=index && index<this.length){
			return this.values[index] ;
		} else {
			return null ;
		}
	}

	compare(source: Letters): Result {
		let bulls: number = 0 ;
		let cows:  number = 0 ;
		for(let i=0 ; i<this.length ; i++){
			let expc = this.get(i) ;
			let srcc = source.get(i) ;
			if(expc == srcc){
				bulls += 1 ;
			} else if(srcc != null && this.contains(srcc)){
				cows  += 1 ;
			}
		}
		let result: Result = {
			bull:	bulls,
			cow:	cows
		} ;
		return result ;
	}

	contains(src: number): boolean {
		let result = false ;
		for(let val of this.values){
			if(val == src){
				result = true ;
				break ;
			}
		}
		return result ;
	}

	print(): void{
		for(let i=0 ; i<this.length ; i++){
			console.print(`${this.values[i]}`) ;
		}
	}
}

function main(args: string[])
{
	const LETTER_NUM = 4 ;

	console.print("Input 4 digital characters\n") ;

	/* Allocate expected */
	let expval  = new Letters(LETTER_NUM) ;
	expval.randomize() ;
	//console.print("expval: ") ; expval.print() ; console.print("\n") ;

	let docont = true ;
	while(docont){
		let inval = input(LETTER_NUM) ;
		//console.print("inval: "); inval.print(); console.print("\n");

		let compres = expval.compare(inval) ;
		console.print(`bull=${compres.bull}, cow=${compres.cow}\n`) ;

		if(compres.bull == LETTER_NUM){
			console.print("Congratulations !!\n") ;
			docont = false ;
		}
	}

	return 0 ;
}

function input(length: number): Letters {
	while(true){
		let letters = new Letters(length) ;
		console.print("guess? > ") ;
		let line = Readline.inputLine() ;
		if(line.length != length){
			console.error("Error: Invalid length:" + line + "\n") ;
			continue ;
		}
		for(let i=0 ; i<length ; i++){
			let val = parseInt(line.charAt(i)) ;
			if(0<=val && val<=9){
				letters.set(i, val) ;
			} else {
				console.error("Error: Digit value required\n") ;
				continue ;
			}
		}
		return letters ;
	}
}

