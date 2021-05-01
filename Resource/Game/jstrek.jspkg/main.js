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
	let space   = new TKSpace(10, 10) ;
	allocateObjects(space) ;

	let docont = true ;
	while(docont) {
		/* Sense */
		updateRadarInfo(space) ;

		printScreen(space) ;
		if(!setHumanAction(space)){
			break ;
		}
		setAlienAction(objects) ;
		doAction(space, objects) ;

		switch(checkResult(space, objects)){
		  case GameResult.doContinue:
			  docont = true ;
		  break ;
		  case GameResult.youWon:
			  docont = false ;
		  break ;
		  case GameResult.youLost:
			  docont = false ;
		  break ;
		}
	}
}

// allocateObjects(space: TKSpace)
function allocateObjects(space){
	const BASE_NUM		= 4 ;
	const ALIEN_NUM		= 2 ;

	/* Allocate base */
	for(let i=0 ; i<BASE_NUM ; i++){
		let pt      = allocateObject(space) ;
		let newbase = new TKBase(pt) ;
		space.setObject(newbase) ;
	}
	/* Allocate alien ships */
	for(let i=0 ; i<ALIEN_NUM ; i++){
		let pt      = allocateObject(space) ;
		let newship = new TKShip(ObjectType.AlienShip, pt) ;
		space.setObject(newship) ;
	}
	/* Allocate human ships */
	do {
		let pt = allocateObject(space) ;
		let newship = new TKShip(ObjectType.HumanShip, pt) ;
		space.setObject(newship) ;
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

// updateRadarInfo(space: TKSpace)
function updateRadarInfo(space){
	/* Move ships */
	for(let ship of space.allShips){
		let radar = new TKRadar(space.width, space.height) ;
		radar.sense(space, 0.999) ;
		ship.radar = radar ;
	}
}

// printScreen(space: TKSpace)
function printScreen(space) {
	let ship     = space.humanShip ;
	let mapstr   = ship.radar.toStrings() ;
	let statstrs = space.status ;
	statstrs     = statstrs.concat(ship.status) ;
	let dumpstr  = pasteStrings(mapstr, statstrs , " ") ;
	console.print(dumpstr.join("\n")) ;
	console.print("\n") ;
}

// setHumanAction(space: TKSpace)
function setHumanAction(space){
	let doinput = true ;
	let docont  = true ;
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

function setAlienAction(objects){
}

// setDirection(objects: TKObjects) -> Bool
function setDirection(objects){
	console.print("Input speed for X direction [-2 - +2]> ") ;
	let xspeed = Readline.inputInteger() ;
	if(!(-2<=xspeed && xspeed<=2)){
		return false ;
	}

	console.print("Input speed for Y direction [-2 + +2]> ") ;
	let yspeed = Readline.inputInteger() ;
	if(!(-2<=yspeed && yspeed<=2)){
		return false ;
	}

	let ship   = objects.humanShip ;
	ship.speed = Point(xspeed, yspeed) ;
	return true ;
}

// doAction(space: TKSpace, objects: TKObjects)
function doAction(space, objects){
	/* Move ships */
	for(let ship of objects.allShips){
		let dx = ship.speed.x ;
		let dy = ship.speed.y ;
		while(dx != 0 || dy != 0){
			if(dx > 0){
				if(dy > 0){
					doShipAction(space, objects, ship, Point( 1,  1)) ;
					dx -=  1 ; dy -=  1 ;
				} else if(dy == 0){
					doShipAction(space, objects, ship, Point( 1,  0)) ;
					dx -=  1 ; dy -=  0 ;
				} else { // dy < 0
					doShipAction(space, objects, ship, Point( 1, -1)) ;
					dx -=  1 ; dy -= -1 ;
				}
			} else if(dx == 0){
				if(dy > 0){
					doShipAction(space, objects, ship, Point( 0,  1)) ;
					dx -=  0 ; dy -=  1 ;
				} else { // dy < 0
					doShipAction(space, objects, ship, Point( 0, -1)) ;
					dx -=  0 ; dy -= -1 ;
				}
			} else { // dx < 0
				if(dy > 0){
					doShipAction(space, objects, ship, Point(-1,  1)) ;
					dx -= -1 ; dy -=  1 ;
				} else if(dy == 0){
					doShipAction(space, objects, ship, Point(-1,  0)) ;
					dx -= -1 ; dy -=  0 ;
				} else { // dy < 0
					doShipAction(space, objects, ship, Point(-1, -1)) ;
					dx -= -1 ; dy -= -1 ;
				}
			}
		}		
	}
}

function doShipAction(space, objects, ship, delta){
	let curpos  = ship.position ;
	let nextpos = addPoint(curpos, delta) ;
	if(!(0<=nextpos.x && nextpos.x<space.width && 0<=nextpos.y && nextpos.y<space.width)){
		return ;
	}

	console.log(`dSA (0) ${nextpos.x}, ${nextpos.y}`) ;
	let otherobj = space.object(nextpos.x, nextpos.y) ;
	if(otherobj != null){
		switch(otherobj.type){
		  case ObjectType.humanShip:
			console.log("dSA (1)") ;
			space.removeObject(nextpos.x, nextpos.y) ;
			objects.removeHumanShip(otherobj) ;
		  break ;
		  case ObjectType.alienShip:
			console.log("dSA (2)") ;
			space.removeObject(nextpos.x, nextpos.y) ;
			objects.removeAlienShip(otherobj) ;
		  break ;
		  case ObjectType.humanBase:
			console.log("dSA (3)") ;
			if(ship.type == ObjectType.humanShip){
				ship.fillEnergy() ;
			} else {
				space.removeObject(nextpos.x, nextpos.y) ;
				objects.removeAlienShip(otherobj) ;
			}
		  break ;
		}
	}
	console.log("dSA (4)") ;

	/* Update position */
	space.removeObject(curpos.x, curpos.y) ;
	ship.position = nextpos ;
	space.setObject(ship) ;	
}

// checkResult(space: TKSpace, objects: TKObjects) -> GameResult
function checkResult(space, objects){
	if(objects.humanShip == null){
		return GameResult.youLost ;
	} else if(objects.alienShips.length == 0){
		return GameResult.youWin ;
	}

	return GameResult.doContinue ;
}
