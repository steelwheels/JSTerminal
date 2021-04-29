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
          case Direction.UpperLeft:     result = "UpperLeft" ;          break ;
          case Direction.Upper:         result = "Upper" ;              break ;
          case Direction.UpperRight:    result = "UpperRight" ;         break ;
          case Direction.Right:         result = "Right" ;              break ;
          case Direction.LowerRight:    result = "LowerRight" ;         break ;
          case Direction.Lower:         result = "Lower" ;              break ;
          case Direction.LowerLeft:     result = "LowerLeft" ;          break ;
          case Direction.Left:          result = "Left" ;               break ;
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
                this.mRadar = null ;
        }

        // var radar: TKRadar
        set radar(newdata) { this.mRadar = newdata ;}
        get radar()        { return this.mRadar ;}
        
        fillEnergy(){
        }

        // var status: Array<String>
        get status() {
                let pos   = this.position ;
                let dir   = directionToString(this.mDirection) ;
                let speed = this.speed ; 
                return  [`Position:  (${pos.x},${pos.y})`, 
                         `Direction: ${dir}`,
                         `Speed:     ${speed}`] ;
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
                this.mTable   = new Table(width, height) ;
        }

        get width()  { return this.mWidth ;  }
        get height() { return this.mHeight ; }
        
        // object(x:Int, y:Int) -> TKObject?
        object(x, y){
                return this.mTable.element(x, y) ;
        }

        // setObject(x:Int, y:Int, obj: TKObject)
        setObject(obj){
                let x = obj.position.x ;
                let y = obj.position.y ;
                this.mTable.setElement(x, y, obj) ;
        }

        // removeObject(x: Int, y: Int)
        removeObject(x, y){
                this.mTable.setElement(x, y, null) ;
        }

        // nextPosition(object: TKObject) -> Point?
        nextPosition(obj){
                let x     = obj.position.x ;
                let y     = obj.position.y ;
                let dir   = obj.direction ;
                switch(dir){
                  case Direction.UpperLeft:
                        x -= 1 ; y -= 1 ;
                  break ;                   
                  case Direction.Upper:
                                 y -= 1 ;
                  break ;
                  case Direction.UpperRight:
                        x += 1 ; y -= 1 ;
                  break ;
                  case Direction.Right:
                        x += 1 ;
                  break ;
                  case Direction.LowerRight:
                        x += 1 ; y += 1 ;
                  break ;
                  case Direction.Lower:
                                 y += 1 ;
                  break ;
                  case Direction.LowerLeft:
                        x -= 1 ; y += 1 ;
                  break ;
                  case Direction.Left:
                        x -= 1 ;
                  break ;
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

        mapTable(mfunc){
                return this.mTable.map(mfunc) ;
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

class TKRadar {
        // constructor(width: Int, height: Int)
        constructor(width, height){
                this.mWidth  = width ;
                this.mHeight = height ;
                this.mTable  = new Table(width, height) ;
        }

        // sence(space: TKSpace, accurary: Double)
        sense(space, acc){
                let newtable = space.mapTable(function(obj){
                        if(Math.random() <= acc){
                                return obj != null ? obj.type : null ;
                        } else {
                                let rnd = Math.randomInt(ObjectType.HumanShip, ObjectType.HumanBase+1) ;
                                return (rnd == ObjectType.HumanBase+1) ? null : rnd ;
                        }
                }) ;
                this.mTable = newtable ;
        }

         // toString() -> String
         toStrings(){
                return this.mTable.toStrings(function(obj){
                        let symbol = "?" ;
                        if(obj != null){
                                switch(obj){
                                  case ObjectType.HumanBase:
                                        symbol = "B" ;
                                  break ;
                                  case ObjectType.AlienShip:
                                        symbol = "K" ;
                                  break ;
                                  case ObjectType.HumanShip:
                                        symbol = "E" ;
                                  break ;
                                }
                        } else {
                                symbol = "." ;
                        }
                        return symbol ;
                }) ;
        }
}