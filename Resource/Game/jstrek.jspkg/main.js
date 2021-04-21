/**
 * main.js
 */

let starDate		= new StarDate(0.0, 0.0, 0.0) ;
let spaceObjects	= new SpaceObjects() ;

function main(args)
{
	introduction() ;
	initField() ;
	drawField() ;
	inputCommand() ;
	return 0 ;
}

function introduction(){
	console.print("Welcome to JSTrek.\n\n") ;
}

function initField() {
	/* Initialize time */
	const start = (Math.randomInt(0, 20) + 20) * 100;
	const days  = 25 + Math.randomInt(0, 10) ;
	const end   = start + days ;
	starDate = new StarDate(start, start, end) ;

	/* Initialize bases */
	const bsnum = Math.randomInt(4, 5) ;
	for(let i=0 ; i<bsnum ; i++){
		const base = new SpaceBase() ;
		base.quadrantPosition = randomQuadrantPosition() ;
		base.sectorPosition   = randomSectorPosition() ;
		spaceObjects.addBase(base) ;
	}

	/* Initialize Human's ship */
	const humship = new SpaceShip() ;
	humship.quadrantPosition = randomQuadrantPosition() ;
	humship.sectorPosition   = randomSectorPosition() ;
	humship.energy  	 = 3000 ;
	humship.photone		 = 10 ;
	spaceObjects.setHumanShip(humship) ;

	/* Initialize Enermy's ships */
	const enmnum = Math.randomInt(3, 8) ;
	for(let i=0 ; i<enmnum ; i++){
		const enmship = new SpaceShip() ;
		enmship.quadrantPosition = randomQuadrantPosition() ;
		enmship.sectorPosition   = randomSectorPosition() ;
		enmship.energy  	 = 2000 ;
		enmship.photone		 = 6 ;
		spaceObjects.addEnemyShip(enmship) ;
	}

	/* Initial message */
	console.print("Your orders are as follows:\n") ;
	console.print(`Destroy the ${enmnum} enermy warships which have invaded\n`) ;
	console.print("the galaxy before they can attack Federation Headquarters\n") ;
	console.print(`on stardate ${starDate.start}. This gives you ${days} days. There are\n`) ;
	console.print(`${bsnum} starbase(s) in the galaxy for resupplying your ship.\n`) ;
}

function drawField() {
	let humanship = spaceObjects.humanShip ;
	let humanquad = humanship.quadrantPosition ;

	/* Encode sector */
	let secmap = new SectorMap(humanquad) ;
	secmap.update(spaceObjects) ;
	let maplines = secmap.toStrings() ;

	/* Encode spaceship */
	let desclines0 = starDate.toStrings() ;
	let desclines1 = desclines0.concat(humanship.toStrings()) ;
	let desclines2 = desclines1.concat(spaceObjects.toStrings()) ;

	/* Print */
	console.log("\n") ;
	let summlines = pasteStrings(maplines, desclines2, " ") ;
	for(let line of summlines){
		console.log(line) ;
	}
}

function inputCommand() {
	let mval = Readline.menu([
		"Navigate",		// 0
		"Sense short range",	// 1
		"Sence long range",	// 2
		"Fire Phaser",		// 3
		"Fire Torpedo",		// 4
		"Use Shield",		// 5
		"Check Damage",		// 6
		"Call Computer",	// 7
		"Quit this game"	// 8
	]) ;
	let command = Command.undefined ;
	switch(mval){
	case 0: command = Command.navigate ;		break ;
	case 1: command = Command.senseShortRange ;	break ;
	case 2: command = Command.senceLongRange ;	break ;
	case 3: command = Command.firePhaser ;		break ;
	case 4: command = Command.fireTorpedo ;		break ;
	case 5: command = Command.useShield ;		break ;
	case 6: command = Command.checkDamage ;		break ;
	case 7: command = Command.callComputer ;	break ;
	case 8: command = Command.exitGame ;		break ;
	}
	return command ;
}


