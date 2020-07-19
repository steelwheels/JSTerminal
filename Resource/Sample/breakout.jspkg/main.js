/*
 * main.js
 */

function main(args)
{
	/* Setup */
	let field = setup() ;

	/* main loop */
	let docont = true ;
	let count  = 0 ;
	while(docont){
		/* Check key input */
		let c = Curses.inkey() ;
		if(c != null){
			switch(c){
			  case "h": field.moveBarLeft() ;	break ;
			  case "l": field.moveBarRight() ;	break ;
			  case "q": docont = false ;		break ;
			}
		}
		/* Move ball */
		let domove = false ;
		if(count == 2) {
			domove = true ;
			count  = 0 ; 
		} else {
			count  += 1 ;
		}
		if(domove){
			if(moveBall(field)){
				docont = false ;
			}
		}
		sleep(0.2) ;
	}

	/* Finalize */
	finalize() ;
	return 0 ;
}

function setup() {
	Curses.start() ;

	let field = new Field() ;
	field.foregroundColor = Color.black ;
	field.backgroundColor = Color.white ;

	/* Allocate blocks in the field */
	let width  = field.size.width ;
	let blknum = Math.floor(width / Block.Width) ;
	let blkoff = (width - Block.Width * blknum) / 2 ;
	for(let x=0 ; x<width ; x+=Block.Width) {
		for(let y=0 ; y<6 ; y += Block.Height) {
			let block = new Block(new Point(x, y)) ;
			field.addBlockItem(block) ;
		}
	}

	/* Allocate bar */
	let barpos = Math.floor((width - Bar.Width) / 2) ;
	let bar    = new Bar(new Point(barpos, field.size.height-2)) ;
	field.addBarItem(bar) ;

	/* Allocate ball */
	let balpos = Math.floor((width - Ball.Radius) / 2) ;
	let balorg = new Point(balpos, bar.origin.y - Ball.Radius) ;
	let ball   = new Ball(balorg)
	ball.velocity = new Velocity(1, -1) ;
	field.addBallItem(ball) ;

	/* Draw ininitial state */
	field.draw() ;
	return field
}

/* func moveBall(field: Field) -> Bool */
function moveBall(field) {
	let dofinish = false ;

	/* Update velocity */
	let ball   = field.ballItem ;
	let bnpos  = ball.nextPosition(ball.velocity) ;
	let nextv  = new Velocity(ball.velocity.dx, ball.velocity.dy) ;
	
	/* Check conflict with blocks */
	let blocks = field.blockItems ;
	for(let block of blocks) {
		if(block.visible) {
			if(field.sectRect(ball.frame, block.frame) != null) {
				/* Update ball velocity */
				//nextv.dx = -nextv.dx ;
				nextv.dy = -nextv.dy ;
				bnpos    = ball.nextPosition(nextv) ;
				/* Hide the block */
				block.hide() ;
			}
		}
	}

	/* Check conflict with the bar */
	let bar = field.barItem ;
	if(field.sectRect(ball.frame, bar.frame) != null) {
		//nextv.dx = -nextv.dx ;
		nextv.dy = -nextv.dy ;
		bnpos    = ball.nextPosition(nextv) ;
	}

	/* Check conflict with the wall in the field */
	if(bnpos.x < field.origin.x) {
		nextv.dx =  1 ;
	} else if(field.right <= bnpos.x + ball.size.width) {
		nextv.dx = -1 ;
	}
	if(bnpos.y < field.origin.y) {
		nextv.dy = 1 ;
	} else if(field.bottom <= bnpos.y + ball.size.height) {
		dofinish = true ;
	}
	bnpos    = ball.nextPosition(nextv) ;

	if(!dofinish) {
		ball.hide() ;
		ball.moveTo(bnpos.x, bnpos.y) ;
		ball.velocity = nextv ;
		ball.draw() ;
	}
	return dofinish ;
}

function finalize() {
	Curses.end() ;
}

