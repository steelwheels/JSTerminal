/*
 * libtrek.js: Class definitions for JSTrek
 */

const Condition = {
        green:          0,
        yellow:         1,
        red:            2,
        docked:         3
} ;

class StarDate {
        constructor(start, current, end){
                this.mStart     = start ;               // Int
                this.mCurrent   = current ;             // Int
                this.mEnd       = end ;                 // Int
        }

        get start()   { return this.mStart ;   }
        get current() { return this.mCurrent ; }
        get end()     { return this.mEnd ;     }

        toStrings() { // -> Array<String>
                return  [`Time:        ${this.mCurrent}`] ;
        }
}

class Damage {
        constructor(){
                this.mEngine            = 0.0 ;         // 0
                this.mShortRangeSensor  = 0.0 ;         // 1
                this.mLongRangeSensor   = 0.0 ;         // 2
                this.mPhaser            = 0.0 ;         // 4
                this.mPhoton            = 0.0 ;         // 5
                this.mDamageControl     = 0.0 ;         // 6
                this.mShieldControl     = 0.0 ;         // 7
                this.mComputer          = 0.0 ;         // 8
        }

        get didEngineDamaged() { return this.mEngine < 0.0 ;    }
}

class SpaceObject {
        constructor() {
                this.mQuadrantPosition  = Point(0, 0) ; // Position in quadrant
                this.mSectorPosition    = Point(0, 0) ; // Position in sector
        }

        get quadrantPosition()       { return this.mQuadrantPosition ;   }
        set quadrantPosition(newval) { this.mQuadrantPosition = newval ; }

        get sectorPosition()       { return this.mSectorPosition ;   }
        set sectorPosition(newval) { this.mSectorPosition = newval ; }
}

class SpaceShip extends SpaceObject {
        constructor() {
                super() ;
                this.mDocked            = false ;
                this.mDamageRepaired    = false ;
                this.mEnergy            = 0 ;
                this.mMaxEnergy         = 0 ;
                this.mPhoton            = 0 ;          // Photon Torpedoes left
                this.mShield            = 0 ;
        }

        get docked()       { return this.mDocked ;   }
        set docked(newval) { this.mDocked = newval ; }

        get damageRepaired()       { return this.mDamageRepaired ;   }
        set damageRepaired(newval) { this.mDamageRepaired = newval ; }

        get energy()       { return this.mEnergy ;   }
        set energy(newval) {
                this.mEnergy    = newval ;
                this.mMaxEnergy = Math.max(this.mMaxEnergy, newval) ;
        }

        get photon()       { return this.mPhoton ;   }
        set photon(newval) { this.mPhoton = newval ; }

        get shield()       { return this.mShield ;   }
        set shield(newval) { this.mShield = newval ; }

        get condition() {
                let result = Condition.green ;
                if(this.mDocked){
                        result = Condition.docked ;
                } else if(this.mEnergy <= this.mMaxEnergy * 0.1) {
                        result = Condition.yellow ;
                }
                return result ;
        }

        toStrings() { // -> Array<String>
                let quad   = this.quadrantPosition ;
                let sect   = this.sectorPosition ;
                let photon = this.photon ;
                let energy = this.energy ;
                let shield = this.shield ;
                let cond = conditionToString(this.condition) ;
                return [`Condition:   ${cond}`,
                        `Quadrant:    (${quad.x}, ${quad.y})`,
                        `Sector:      (${sect.x}, ${sect.y})`,
                        `Photon:      ${photon}`,
                        `Energy:      ${energy}`,
                        `Shield:      ${shield}`] ;
        }
}

class SpaceBase extends SpaceObject {
        constructor() {
                super() ;
        }
}

class SpaceObjects {
        constructor() {
                this.mBases             = [] ;    // Array<SpaceBase>
                this.mHumanShip         = null ;  // SpaceShip
                this.mEnemyShips        = [] ;    // Array<SpaceShip>
        }

        get bases()      { return this.mBases ;             }
        get humanShip()  { return this.mHumanShip ;         }
        get enemyShips() { return this.mEnemyShips ;        }

        addBase(base)      { this.mBases.push(base) ;       }
        setHumanShip(ship) { this.mHumanShip = ship ;       }
        addEnemyShip(ship) { this.mEnemyShips.push(ship) ;  }

        get humanShip() { return this.mHumanShip ; }

        basesInQuadrant(x, y) { // -> Array<SpaceBase>
                return this._objectsInQuadrant(this.mBases, x, y) ;
        }

        humanShipInQuadrant(x, y) { // -> Spaceship or null
                if(this.mHumanShip != null){
                        let pos = this.mHumanShip.quadrantPosition ;
                        if(pos.x == x && pos.y == y){
                                return this.mHumanShip ;
                        }
                }
                return null ;
        }

        enemyShipsInQuadrant(x, y) { // -> Array<SpaceShip>
                return this._objectsInQuadrant(this.mEnemyShips, x, y) ;
        }

        _objectsInQuadrant(objects, x, y) { // -> Array<SpaceObject>
                let result = [] ;
                for(let obj of objects) {
                        let objpos = obj.quadrantPosition ;
                        if(objpos.x == x && objpos.y == y){
                                result.push(obj) ;
                        }
                }
                return result ;
        }

        toStrings() { // -> Array<String>
                let enmnum = this.enemyShips.length ;
                return [`Enemies:     ${enmnum}`] ;
        }
}

class SectorMap {
        static get width()              { return 10 ; }
        static get height()             { return 10 ; }

        constructor(quadpos){   // (quadpos: Point)
                this.mQuadrantPosition  = quadpos ;
                this.mMap               = Array2D(SectorMap.width, SectorMap.height, " . ") ;
        }

        update(objects) {       // (objects: SpaceObjects)
                let humanship  = objects.humanShip ; 
                let humanquad  = humanship.quadrantPosition ;
                /* Set bases */
                let bases = objects.basesInQuadrant(humanquad.x, humanquad.y) ;
                for(let base of bases) {
                        let basesec = base.sectorPosition ;
                        this.mMap[basesec.y][basesec.x] = " B " ;
                }
                /* Set enemy ships */
                let enemyships = objects.enemyShipsInQuadrant(humanquad.x, humanquad.y) ;
                for(let enemyship of enemyships) {
                        let enemysec = enemyship.sectorPosition ;
                        this.mMap[enemysec.y][enemysec.x] = " K " ;
                }
                /* Set human ship */
                let humansec = humanship.sectorPosition ;
                this.mMap[humansec.y][humansec.x] = "<E>" ;
        }

        toStrings() { // -> Array<String>
                let result = [] ;
                for(let y=0 ; y<SectorMap.height ; y++){
                        let line = ""
                        for(let x=0 ; x<SectorMap.width ; x++){
                                line += this.mMap[y][x] ;
                        }
                        result.push(line) ;
                }
                return result ;
        }
}

class QuadrantMap {
        static get width()              { return  2 ; }
        static get height()             { return  2 ; }
}

function conditionToString(src) {       // (src: Condition)
        let result = "?" ;
        switch(src){
        case Condition.green:   result = "Green" ;      break ;
        case Condition.yellow:  result = "Yellow" ;     break ;
        case Condition.docked:  result = "Docked" ;     break ;
        default:                result = "Red" ;        break ;
        }
        return result ;
}

function randomPosition(maxx, maxy) {
        let x = Math.randomInt(0, maxx) ;
        let y = Math.randomInt(0, maxy) ;
        return Point(x, y) ;
}

function randomQuadrantPosition() {
        return randomPosition(QuadrantMap.width-1, QuadrantMap.height-1) ;
}

function randomSectorPosition() {
        return randomPosition(SectorMap.width-1, SectorMap.height-1) ;
}

const Command = {
        undefined:              0,
        navigate:               1,
        senseShortRange:        2,
        senceLongRange:         3,
        firePhaser:             4,
        fireTorpedo:            5,
        useShield:              6,
        checkDamage:            7,
        callComputer:           8
} ;
