/*
 * field.js
 */

class Field extends CComponent
{
    constructor() {
        let origin = Point(0, 0) ;
        let size   = Size(Curses.width, Curses.height) ;
        super(origin, size) ;

        this.barItem    = null ;
        this.ballItem   = null ;
        this.blockItems = [] ;
    }

    addBlockItem(item) {
        this.blockItems.push(item) ;
        super.addItem(item) ;
    }

    addBarItem(item) {
        this.barItem = item ;
        super.addItem(item) ;
    }

    addBallItem(item) {
        this.ballItem = item ;
        super.addItem(item) ;
    }
    moveBarLeft() {
        this.barItem.move(-1) ;
    }

    moveBarRight() {
        this.barItem.move(1) ;
    }
}

class Block extends CLabel
{
    static get Width()  { return 8 ; }
    static get Height() { return 2 ; }

    /* constructor(origin: Point) */
    constructor(origin) {
        let size = Size(Block.Width, Block.Height) ;
        super(origin, size) ;

        switch((origin.x + origin.y) % 3){
            case 0: this.setColor(Color.red   ) ;   break ;
            case 1: this.setColor(Color.green ) ;   break ;
            case 2: this.setColor(Color.blue  ) ;   break ;
        }
    }

    setColor(color) {
        this.foregoundColor  = color ;
        this.backgroundColor = color ;
    }
}

class Bar extends CLabel
{
    static get Width()  { return 7 ; }
    static get Height() { return 1 ; }

    /* constructor(origin: Point) */
    constructor(origin) {
        let size = Size(Bar.Width, Bar.Height) ;
        super(origin, size) ;
        this.foregoundColor  = Color.cyan ;
        this.backgroundColor = Color.cyan ;
    }

    /* move(delta: Int) */
    move(delta) {
        let parent = this.parent ;
        if(parent != null) {
            this.hide() ;
            /* Update position */
            if(delta > 0){
                /* Move right */
                let nextx = this.origin.x + delta ;
                if(nextx + this.size.width < parent.size.width) {
                    this.moveTo(nextx, this.origin.y) ;
                }
            } else if(delta < 0) {
                /* Move left */
                let nextx = this.origin.x + delta ;
                if(0 <= nextx) {
                    this.moveTo(nextx, this.origin.y) ;
                }
            }
            this.draw() ;
        }        
    }
}

class Velocity
{
    /* constructor(dx: Int, dy: Int) */
    constructor(dx, dy) {
        this.dx = dx ;
        this.dy = dy ;
    }
}

class Ball extends CLabel
{
    static get Radius()  { return 2 ; }

    /* constructor(origin: Point) */
    constructor(origin) {
        let size = Size(Ball.Radius, Ball.Radius) ;
        super(origin, size) ;
        this.velocity        = new Velocity(0, 0) ;
        this.foregoundColor  = Color.red ;
        this.backgroundColor = Color.red ;
    }

    /* func nextPosition(veloc: Velocity) -> Point */
    nextPosition(veloc) {
        let x = this.origin.x + veloc.dx ;
        let y = this.origin.y + veloc.dy ;
        return new Point(x, y) ;
    }
}


