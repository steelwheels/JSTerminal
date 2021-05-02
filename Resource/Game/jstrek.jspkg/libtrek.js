/*
 * libtrek.js: Class definitions for JSTrek
 */

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
        get allShips() {
                let allships = [] ;
                allships = allships.concat(this.mAlienShips) ;
                allships.push(this.mHumanShip) ;
                return allships ;
        }

        addBase(base)      { this.mBases.push(base) ;      }
        addAlienShip(ship) { this.mAlienShips.push(ship) ; }
        setHumanShip(ship) { this.mHumanShip = ship ; }

        removeAlienShip(ship){
                console.log(`rAS: (b) ${this.mAlienShips.length}`) ;
                this.mAlienShips = this.mAlienShips.filter(elm => elm != ship) ;
                console.log(`rAS: (e) ${this.mAlienShips.length}`) ;
        }
        removeHumanShip(){
                this.mHumanShip = null ;
        }

        // var status: Array<String>
        get status() {
                let basenum  = this.mBases.length ;
                let aliennum = this.mAlienShips.length ; 
                return  [`Base num:        ${basenum}`, 
                         `Alien ship num:  ${aliennum}`] ;
        }
}

class TKSpace {
        // constructor(width: Int, height: Int)
        constructor(width, height){
                this.mWidth             = width ;
                this.mHeight            = height ;
                this.mTable             = new Table(width, height) ;

                this.mCacheDirty        = true ;
                this.mHumanShip         = nil ;
                this.mHumanBases        = [] ;
                this.mAlienShips        = [] ;
        }

        get width()  { return this.mWidth ;  }
        get height() { return this.mHeight ; }
        
        get allShips() {
                if(this.mCacheDirty){ updateCache() ; }
                let ships = [] ;
                ships = ships.concat(this.mAlienShips) ;
                if(this.mHumanShip){
                        ships.push(this.mHumanShip) ;
                }
                return ships ;
        }

        get humanShip() {
                if(this.mCacheDirty){ updateCache() ; }
                return this.mHumanShip ;
        }

        get humanBases(){
                if(this.mCacheDirty){ updateCache() ; }
                return this.mHumanBases ;
        }

        get alienShips() {
                if(this.mCacheDirty){ updateCache() ; }
                return this.mAlienShips ;  
        }

         // var status: Array<String>
         get status() {
                 let basenum  = this.humanBases.length ;
                 let aliennum = this.alienShips.length ;
                return  [`Base num:        ${basenum}`, 
                         `Alien ship num:  ${aliennum}`] ;
         }

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
                let newpos  = addPoint(obj.position, obj.speed) ;
                let nextpos = clampPoint(newpos, 0, 0, this.mWidth, this.mHeight) ; 
                if(nextpos.x != obj.position.x || nextpos.y != obj.position.y){
                        return nextpos ;
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
                                let rnd = Math.randomInt(ObjectType.HumanShip, ObjectType.HumanBase) ;
                                return (rnd == ObjectType.HumanShip) ? null : rnd ;
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
