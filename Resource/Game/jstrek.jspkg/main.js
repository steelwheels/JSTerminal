/*
 * @file: main.js
 * @description: Main function for jstrek  
 */

const GameResult = {
	doContinue:		0,
	youWon:			1,
	youLost:		2
} ;

function main(args)
{
	let objects = new TKObjects() ;
	let space   = new TKSpace(10, 10) ;
	allocateObjects(objects, space) ;

	let docont = true ;
	while(docont) {
		printScreen(space, objects) ;
		if(setAction(objects)){
			doAction(space, objects) ;
		} else {
			docont = false ;
		}
	}
}

// allocateObjects(objects: TKObjects, space: TKSpace)
function allocateObjects(objects, space){
	const BASE_NUM		= 4 ;
	const ALIEN_NUM		= 2 ;
	const HUMAN_NUM		= 1 ;

	/* Allocate base */
	for(let i=0 ; i<BASE_NUM ; i++){
		let pt      = allocateObject(space) ;
		let newbase = new TKBase(pt) ;
		space.setObject(newbase) ;
		objects.addBase(newbase) ;
	}
	/* Allocate alien ships */
	for(let i=0 ; i<ALIEN_NUM ; i++){
		let pt      = allocateObject(space) ;
		let newship = new TKShip(ObjectType.AlienShip, pt) ;
		space.setObject(newship) ;
		objects.addAlienShip(newship) ;
	}
	/* Allocate human ships */
	do {
		let pt = allocateObject(space) ;
		let newship = new TKShip(ObjectType.HumanShip, pt) ;
		space.setObject(newship) ;
		objects.setHumanShip(newship) ;
	} while(false) ;
}

function allocateObject(space){
	while(true){
		let x = Math.randomInt(0, space.width-1) ;
		let y = Math.randomInt(0, space.height-1) ;
		if(space.object(x, y) == null){
			return Point(x, y) ;
		}
	}
	return null ;
}
// printScreen(space: TKSpace. objects: TKObjects)
function printScreen(space, objects) {
	let mapstr  = space.toStrings() ;
	let statstr = objects.humanShip.status ; 
	let dumpstr = pasteStrings(mapstr, statstr, " ") ;
	console.print(dumpstr.join("\n")) ;
	console.print("\n") ;
}

// setAction(objects: TKObjects) -> Bool
function setAction(objects){
	let docont  = true ;
	let doinput = true ;
	while(doinput){
		let mid = Readline.menu([
			"Set direction and speed",
			"Quit this game"
		]) ;
		switch(mid){
			case 0:
				if(setDirection(objects)){
					doinput = false ;
				}
			break ;
			case 1:
				doinput  = false ;
				docont   = false ;
			break ;
		}
	}
	return docont ;
}

// setDirection(objects: TKObjects) -> Bool
function setDirection(objects){
	console.print("Input direction [0-7]> ") ;
	let dir = Readline.inputInteger() ;
	if(!(0<=dir && dir<=7)){
		console.error(`Unexpected direction: ${dir}\n`) ;
		return false ;
	}

	console.print("Input speed [0-2]> ") ;
	let speed = Readline.inputInteger() ;
	if(!(0<=speed && speed<=2)){
		console.error(`Unexpected speed: ${speed}\n`) ;
		return false ;
	}

	let ship = objects.humanShip ;
	ship.direction = dir ;
	ship.speed     = speed ;

	return true ;
}

// doAction(space: TKSpace, objects: TKObjects) -> GameResult
function doAction(space, objects){
	/* Move ships */
	let allships = objects.alienShips ;
	allships.push(objects.humanShip) ;
	for(let ship of allships){
		let nextpos  = space.nextPosition(ship) ;
		//console.print(`next position: ${nextpos.x}, ${nextpos.y}\n`) ;
		if(nextpos == null){
			continue ;
		}
		/* Check conflict */
		let otherobj = space.object(nextpos.x, nextpos.y) ;
		if(otherobj != null){
			switch(otherobj.type){
			  case ObjectType.humanShip:
				return GameResult.youLost ;
			  break ;
			  case ObjectType.alienShips:
				removeObject(space, objects, otherobj) ;
			  break ;
			  case ObjectType.humanBase:
				if(ship.type == ObjectType.humanShip){
					ship.fillEnergy() ;
				} else {
					removeObject(space, objects, otherobj) ;
				}
			  break ;
			}
		}
		/* Update position */
		space.removeObject(ship) ;
		ship.position = nextpos ;
		space.setObject(ship) ;
	}
	return GameResult.doContinue ;
}

function removeObject(space, objects, target){
	space.removeObject(target) ;
	objects.removeAlianShip(target) ;
}
