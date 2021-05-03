/**
 * @file control.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiComponent.d.ts"/>
/// <reference path="types/KiwiShell.d.ts"/>
/// <reference path="types/model.d.ts"/>

enum UserAction {
        setDirection,
        quitGame
} ;

class TKController
{
        constructor(){

        }

	initSpace(): TKSpace {
                const MAX_BASE_NUM              = 2 ;
                const MAX_ALIEN_NUM             = 2 ;
                const MAX_HUMAN_NUM             = 1 ;

                let space = new TKSpace(10, 10) ;
                /* Allocate bases */
                for(let i=0; i<MAX_BASE_NUM ; i++){
                        let pos  = this.randomPoint(space) ;
                        let base = new TKBase(pos) ;
                        space.setElement(pos, base) ;
                }
                /* Allocate alien ships */
                for(let i=0; i<MAX_ALIEN_NUM ; i++){
                        let pos   = this.randomPoint(space) ;
                        let radar = new TKRadar(space.width, space.height) ;
                        let alien = new TKShip(ObjectType.alienShip, pos, radar) ;
                        space.setElement(pos, alien) ;
                }
                /* Allocate humap ships */
                for(let i=0 ; i<MAX_HUMAN_NUM ; i++){
                        let pos   = this.randomPoint(space) ;
                        let radar = new TKRadar(space.width, space.height) ;
                        let alien = new TKShip(ObjectType.humanShip, pos, radar) ;
                        space.setElement(pos, alien) ;
                }
                return space ;
	}

        randomPoint(space: TKSpace): _Point {
                while(true) {
                        let x = Math.randomInt(0, space.width  - 1) ;
                        let y = Math.randomInt(0, space.height - 1) ;
                        if(space.element(x, y) == null){
                                return Point(x, y) ;
                        }
                }
        }

        /*
         * Update status
         */
        update(space: TKSpace): void {
                let humanship = space.humanShip ;
                if(humanship != null){
                        this.updateShip(humanship, space) ;
                }
                for(let alienship of space.alienShips){
                        this.updateShip(alienship, space) ;
                }
        }

        updateShip(ship: TKShip, space: TKSpace): void {
                 /* Update position */
                 let nextpt = this.nextPosition(ship, space) ;
                 if(nextpt != null){
                         this.updatePosition(nextpt!, ship, space) ;
                 }
                 /* Update ladar */
                 let radar = ship.radar ;
                 this.updateRadar(radar, space) ;
        }

        nextPosition(ship: TKShip, space: TKSpace): _Point | null {
                let curpos  = ship.position ;
                let updtpos = addPoint(curpos, ship.speed) ; 
                let nextpos = clampPoint(updtpos, 0, 0, space.width, space.height) ;
                if(isSamePoints(curpos, nextpos)){
                        return null ;
                } else {
                        return nextpos ;
                }
        }

        updatePosition(next: _Point, ship: TKShip, space: TKSpace){
                let otherobj = space.element(next.x, next.y) ;
                if(otherobj != null){
                        /* Remove element */
                        space.setElement(next, null) ;
                }
                /* Move ship */
                space.setElement(ship.position, null) ;
                ship.position = next ;
                space.setElement(ship.position, ship) ; 
        }

        updateRadar(radar: TKRadar, space: TKSpace): void {
                radar.clear() ;
                let owner = this ;
                space.forEach(function(obj, pos){
                        if(Math.random() < 0.99){
                                radar.setElement(pos.x, pos.y, owner.objectToType(obj)) ;
                        } else {
                                radar.setElement(pos.x, pos.y, owner.randomObjectType()) ;
                        }
                }) ;
        }

        objectToType(obj: TKObject | null): ObjectType | null {
                return obj != null ? obj.type : null ;
        }

        randomObjectType(): ObjectType | null {
                let result: ObjectType | null = null ;
                let rnd = Math.randomInt(0, ObjectTypeNum) ;
                switch(rnd){
                case 0: result  = ObjectType.humanBase ; break ;
                case 1: result  = ObjectType.humanShip ; break ;
                case 2: result  = ObjectType.alienShip ; break ;
                default: result = null ;
                }
                return result ;
        }

        /*
         * User action
         */
        selectAction(): UserAction {
                console.log("==== Select action") ;
                let idx = Readline.menu([
                        "Set direction",        // 0
                        "Quit"                  // 1
                ]) ;
                let result: UserAction = UserAction.quitGame ;
                switch(idx){
                case 0: result = UserAction.setDirection ;      break ;
                case 1: result = UserAction.quitGame ;          break ;
                }
                return result ;
        }

        selectSpeed(): _Point {
                let result = Point(0, 0) ;
                let docont = true ;
                while(docont){
                        console.print(  "==== Select direction\n"
                              + "012\n"
                              + "7E3\n"
                              + "654  [0-7]-> ") ;
                        let num = Readline.inputInteger() ;
                        if(0<=num && num<=7){
                                switch(num){
                                case 0: result = Point(-1, -1) ; break ;
                                case 1: result = Point( 0, -1) ; break ;
                                case 2: result = Point(+1, -1) ; break ;
                                case 3: result = Point(+1,  0) ; break ;
                                case 4: result = Point(+1, +1) ; break ;
                                case 5: result = Point( 0, +1) ; break ;
                                case 6: result = Point(-1, +1) ; break ;
                                case 7: result = Point(-1,  0) ; break ;
                                }
                                docont = false ;
                        }
                }
                return result ;
        }

        /*
         * alien action
         */
        alienAction(ship: TKShip, space: TKSpace) {
                /* Update speed */
                let speed = ship.speed ;
                if(speed.x == 0 && speed.y == 0){
                        ship.speed = this.randomSpeed() ;
                        return ;
                }
                let nextpos = this.nextPosition(ship, space) ;
                if(nextpos == null){
                        ship.speed = this.randomSpeed() ;
                        return ;
                }
        }

        randomSpeed(): _Point {
                let x = Math.randomInt(0, 1) ;
                let y = Math.randomInt(0, 1) ;
                return Point(x, y) ;
        }
} 
