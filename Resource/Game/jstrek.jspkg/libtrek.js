/*
 * libtrek.js: Class definitions for JSTrek
 */

const ObjectType = {
        HumanShip:      0,
        AlienShip:      1,
        HumanBase:      2
} ;

const Direction = {
        UpperLeft:      0,
        Upper:          1,
        UpperRight:     2,
        Right:          3,
        LowerRight:     4,
        Lower:          5,
        LowerLeft:      6,
        Left:           7
} ;

function directionToString(dir) {
        let result = "?" ;
        switch(dir){
          case Direction.UpperLeft:
                result = "UpperLeft" ;
          break ;
          case Direction.Upper:
                result = "Upper" ;
          break ;
          case Direction.UpperRight:
                result = "UpperRight" ;
          break ;
          case Direction.Right:
                result = "Right" ;
          break ;
          case Direction.LowerRight:
                result = "LowerRight" ;
          break ;
          case Direction.Lower:
                result = "Lower" ;
          break ;
          case Direction.LowerLeft:
                result = "LowerLeft" ;
          break ;
          case Direction.Left:
                result = "Left" ;
          break ;
        }
        return result ;
}

class TKObject {
        // constructor(type: ObjectType, pos: Point)
        constructor(type, pos){
                this.mType      = type ;
                this.mPosition  = pos ;
                this.mDirection = Direction.UpperLeft ;
                this.mSpeed     = 0 ;
        }

        // var type: ObjectType
        get type() { return this.mType ; }

        // var position: Point
        set position(pos) { this.mPosition = pos ;}
        get position() { return this.mPosition ; }

        // var direction: Direction
        set direction(dir) { this.mDirection = dir ; }
        get direction() { return this.mDirection ; }

        // var speed
        set speed(spd) { this.mSpeed = spd ; }
        get speed()    { return this.mSpeed ; }
}

class TKShip extends TKObject {
        // constuctor(type: ObjectType, pos: Point)
        constructor(type, pos) {
                super(type, pos) ;
        }

        fillEnergy(){
        }

        // var status: Array<String>
        get status() {
                let pos   = this.position ;
                let dir   = directionToString(this.mDirection) ;
                let speed = this.speed ; 
                return  [`Position:  (${pos.x},${pos.y})`, 
                         `Direction: ${dir}`,
                         `Speed:     ${speed}`]
        }
}

class TKBase extends TKObject {
        // constuctor(pos: Point)
        constructor(pos) {
                super(ObjectType.HumanBase, pos) ;
        }
}

class TKObjects {
        constructor() {
                this.mBases             = [] ;
                this.mAlienShips        = [] ;
                this.mHumanShip         = null ;
        }

        get bases()      { return this.mBases ;       }
        get alienShips() { return this.mAlienShips ;  }
        get humanShip()  { return this.mHumanShip ;  }

        addBase(base)      { this.mBases.push(base) ;      }
        addAlienShip(ship) { this.mAlienShips.push(ship) ; }
        setHumanShip(ship) { this.mHumanShip = ship ; }

        removeAlianShip(ship){
                this.mAlienShips = removeFromArray1D(this.mAlienShips, ship) ;
        }
}

class TKSpace {
        // constructor(width: Int, height: Int)
        constructor(width, height, objs){
                this.mWidth   = width ;
                this.mHeight  = height ;
                this.mTable   = Array2D(width, height, null) ;
        }

        get width()  { return this.mWidth ;  }
        get height() { return this.mHeight ; }
        
        // object(x:Int, y:Int) -> TKObject?
        object(x, y){
                if(0<=x && x<this.mWidth && 0<=y && y<this.mHeight){
                        return this.mTable[y][x] ;
                } else {
                        return null ;
                }
        }

        // setObject(x:Int, y:Int, obj: TKObject)
        setObject(obj){
                let x = obj.position.x ;
                let y = obj.position.y ;
                if(0<=x && x<this.mWidth && 0<=y && y<this.mHeight){
                        this.mTable[y][x] = obj ;
                }  
        }

        removeObject(obj){
                for(let y=0 ; y<this.mHeight ; y++){
                        for(let x=0 ; x<this.mWidth ; x++){
                                if(this.mTable[y][x] == obj){
                                        this.mTable[y][x] = null ;
                                }
                        }
                }
        }

        // nextPosition(object: TKObject) -> Point?
        nextPosition(obj){
                let x     = obj.position.x ;
                let y     = obj.position.y ;
                let dir   = obj.direction ;
                let speed = obj.speed ;
                if(speed != 0){
                        switch(dir){
                          case Direction.UpperLeft:
                                x -= speed ; y -= speed ;
                          break ;                   
                          case Direction.Upper:
                                             y -= speed ;
                          break ;
                          case Direction.UpperRight:
                                x += speed ; y -= speed ;
                          break ;                               
                          case Direction.Right:
                                x += speed ;
                          break ;
                          case Direction.LowerRight:
                                x += speed ; y += speed ;
                          break ;
                          case Direction.Lower:
                                             y += speed ;
                          break ;
                          case Direction.LowerLeft:
                                x -= speed ; y += speed ;
                          break ;
                          case Direction.Left:
                                x -= speed ;
                          break ;
                        }
                }
                x = Math.clamp(x, 0, this.width  - 1) ;
                y = Math.clamp(y, 0, this.height - 1) ;
                let nextpt = Point(x, y) ;
                if(nextpt.x != obj.position.x || nextpt.y != obj.position.y){
                        return nextpt ;
                } else {
                        return null ;
                }
        }

        // toString() -> String
        toStrings(){
                let result = [] ;
                for(let y=0 ; y<this.mHeight ; y++){
                        let line = "" ;
                        for(let x=0 ; x<this.mWidth ; x++){
                                let obj = this.object(x, y) ;
                                if(obj != null){
                                        switch(obj.type){
                                          case ObjectType.HumanBase:
                                                line += "B" ;
                                          break ;
                                          case ObjectType.AlienShip:
                                                line += "K" ;
                                          break ;
                                          case ObjectType.HumanShip:
                                                line += "E" ;
                                          break ;
                                        }
                                } else {
                                        line += "." ;
                                }
                        }
                        result.push(line) ;
                }
                return result ;
        }
}
