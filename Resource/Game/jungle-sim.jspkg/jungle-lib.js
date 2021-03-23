/*
 * jungle-lib.js
 */

const JLifeKind = {
    Grass:      0,
    Zebra:      1
}

class JConfig {
    constructor() {
        this.mProbGrass     = 0.30 ;
        this.mProbZebra     = 0.05 ;
    }
    get probGrass() { return this.mProbGrass ; }
    get probZebra() { return this.mProbZebra ; }
}

class JLife {
    constructor(kind, life) {
        this.kind = kind ;
        this.life = life ;
    }

    updateLife() {
        if(this.life > 0) {
            this.life -= 1 ;
        }
        return this.life ;
    }

    static countNonNullMembers(field) {
        let height = field.length ;
        let width  = field[0].length ;
        let result = 0 ;
        for(let y=0 ; y<height ; y++) {
            for(let x=0 ; x<width ; x++) {
                if(field[y][x] != null) {
                    result += 1 ;
                }
            }
        }
        return result ;
    }
}

class JGrass extends JLife {
    constructor() {
        super(JLifeKind.Grass, 30) ;
    }

    update(x, y, neigbors) { // (array[3][3]) -> Array[3][3]
        let newneigbors = Array.from(neigbors) ;
        //let count   = JLife.countNonNullMembers(neigbors) - 1 ; // 1 for myself
        if(this.updateLife() > 0) {
            let rndx = Math.randomInt(0, 2) ; // 0, 1, 2
            let rndy = Math.randomInt(0, 2) ; // 0, 1, 2
            if(rndx != 0 || rndy != 0) {
                if(neigbors[rndy][rndx] == null) {
                    newneigbors[rndy][rndx] = new JGrass() ;
                }
            }
        } else {
            newneigbors[1][1] = null ;
        }
        return newneigbors ;
    }
}

class JZebra extends JLife {
    constructor() {
        super(JLifeKind.Zebra, 10) ;
    }
}

class JWorld {
    constructor(width, height) {
        this.width  = width ;
        this.height = height ;
        this.ground = Array2D(width, height, null) ;
        this.field  = Array2D(width, height, null) ;
    }

    setup(config) {
        for(let y=0 ; y<this.height ; y++) {
            for(let x=0 ; x<this.width ; x++) {
                if(Math.random() <= config.probGrass) {
                    this.ground[y][x] = new JGrass() ;
                } else {
                    this.ground[y][x] = null ;
                }
                if(Math.random() <= config.probZebra) {
                    this.field[y][x] = new JZebra() ;
                } else {
                    this.field[y][x] = null ;
                }
            }
        }
    }

    draw(context) {
        /* Draw current ground & field */
        for(let y=0 ; y<this.height ; y++) {
            for(let x=0 ; x<this.width ; x++) {
                let g = this.ground[y][x] ;
                if(g != null) {
                    context.set(x, y, Color.green) ;
                } else {
                    context.set(x, y, Color.clear) ;
                }
                let f = this.field[y][x] ;
                if(f != null) {
                    context.set(x, y, Color.blue) ;
                }
            }
        }
    
        /* Update ground objects */
        let newground = Array2D(this.width, this.height, null) ;
        for(let y=0 ; y<this.height ; y++) {
            for(let x=0 ; x<this.width ; x++) {
                let cell     = this.ground[y][x] ;
                if(cell != null){
                    let neigbors    = this.collectNeigbors(x, y, this.ground) ;
                    let newneigbors = cell.update(x, y, neigbors) ;
                    this.setNeigbors(x, y, newground, newneigbors) ;
                } 
            }
        }

        /* Update field objects */
        let newfield = Array2D(this.width, this.height, null) ;
        for(let y=0 ; y<this.height ; y++) {
            for(let x=0 ; x<this.width ; x++) {
                let cell     = this.field[y][x] ;
                if(cell != null){
                       let neigbors    = this.collectNeigbors(x, y, this.field) ;
                       let newneigbors = cell.update(x, y, neigbors) ;
                       this.setNeigbors(x, y, newfield, newneigbors) ;
                } 
            }
        }

        this.ground = newground ;
        this.field  = newfield ;
    }

    collectNeigbors(x, y, field){
        let result = Array2D(this.width, this.height, null) ;
        let dy     = 0 ;
        for(let y0=y-1 ; y0<y+1 ; y0++, dy++) {
            let dx = 0 ;
            for(let x0=x-1 ; x0<x+1 ; x0++, dx++) {
                if(0<=y0 && y0<this.height && 0<=x0 && x0<this.width) {
                    result[dy][dx] = field[y0][x0] ;
                }
            }
        }
        return result ;
    }

    setNeigbors(x, y, field, neigbors){
        let dy = 0 ;
        for(let y0=y-1 ; y0<y+1 ; y0++, dy++) {
            let dx = 0 ;
            for(let x0=x-1 ; x0<x+1 ; x0++, dx++) {
                if(0<=y0 && y0<this.height && 0<=x0 && x0<this.width) {
                    field[y0][x0] = neigbors[dy][dx] ;
                }
            }
        }
    }

    dump() {
        console.log(`World: ${this.width} x ${this.height}`) ;
    }
}
