/**
 * @file model.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiComponent.d.ts"/>

enum ObjectType {
	humanBase,
	humanShip,
	alienShip,
} ;

const ObjectTypeNum: number = 3 ;

enum GameStatus {
        inProgress,
        terminated,
        humanWin,
        alienWin
} ;

class TKRadar
{
	mTable:		Table ;

	constructor(width: number, height: number){
		this.mTable = new Table(width, height) ;
	}

	get width():  number { return this.mTable.width ;	}
	get height(): number { return this.mTable.height ;	}

	element(x: number, y:number): ObjectType | null {
		return this.mTable.element(x, y) ;
	}

	setElement(x: number, y:number, obj: ObjectType | null){
		this.mTable.setElement(x, y, obj) ;
	}

        clear(): void {
                this.mTable.fill(null) ;
        }

        toSymbol(obj: ObjectType | null): string {
                let result: string
                if(obj != null){
                        result = "?" ;
                        switch(obj){
                          case ObjectType.humanBase: result = "B" ; break ;
                          case ObjectType.humanShip: result = "E" ; break ;
                          case ObjectType.alienShip: result = "K" ; break ;    
                        }
                } else {
                        result = "." ;
                }
                return result ;
        }

        toStrings(): string[] {
                let owner = this ;
                let result: string[] = [] ;
                for(let i=0 ; i<this.height ; i++){
                        let line: string = "" ;
                        this.mTable.forEachRow(i, function(value, pos){
                                let sym = owner.toSymbol(value) ;
                                line += sym ;
                        }) ;
                        result.push(line) ;
                }
                return result ;
        }
}

class TKObject
{
	mType:		ObjectType ;
	mPosition:	_Point ;
	mSpeed:		_Point ;
	
        constructor(type: ObjectType, pos: _Point){
                this.mType      = type ;
                this.mPosition  = pos ;
                this.mSpeed     = Point(0, 0) ;
        }

        get type(): ObjectType    { return this.mType ;         }

        set position(pos: _Point) { this.mPosition = pos ;	}
        get position(): _Point	  { return this.mPosition ;	}

        set speed(spd: _Point)    { this.mSpeed = spd ;         }
        get speed(): _Point       { return this.mSpeed ;        }
}

class TKShip extends TKObject
{
        mRadar:		TKRadar ;

        constructor(type: ObjectType, pos: _Point, radar: TKRadar){
                super(type, pos) ;
                this.mRadar = radar ;
        }

        set radar(radar: TKRadar)        { this.mRadar = radar ; }
	get radar(): TKRadar	        { return this.mRadar ;  }
}

class TKBase extends TKObject
{
        constructor(pos: _Point){
                super(ObjectType.humanBase, pos) ;
        }
}

class TKSpace 
{
        mTable:         Table ;
        mIsDirty:       boolean ;
        mHumanBases:    TKBase[] ;
        mHumanShip:     TKShip | null ;
        mAlienShips:    TKShip[] ;

        constructor(width: number, height: number){
                this.mTable             = new Table(width, height) ;
                this.mIsDirty           = true ;
                this.mHumanBases        = [] ;
                this.mHumanShip         = null ;
                this.mAlienShips        = [] ;
        }

        get width():  number { return this.mTable.width ;	}
	get height(): number { return this.mTable.height ;	}

        get humanShip(): TKShip | null {
                this.update() ;
                return this.mHumanShip ;
        }

        get humanBases(): TKBase[] {
                this.update() ;
                return this.mHumanBases ;
        }

        get alienShips(): TKShip[] {
                this.update() ;
                return this.mAlienShips ;
        }

        gameStatus(): GameStatus {
                let result: GameStatus ;
                if(this.mHumanShip == null){
                        result = GameStatus.alienWin ;
                } else if(this.mAlienShips.length == 0){
                        result = GameStatus.humanWin ;
                } else {
                        result = GameStatus.inProgress ;
                }
                return result ;
        }

	element(x: number, y:number): TKObject | null {
		return this.mTable.element(x, y) ;
	}

	setElement(pos: _Point, obj: TKObject | null){
		this.mTable.setElement(pos.x, pos.y, obj) ;
                this.mIsDirty = true ;
	}

        forEach(childFunc: (value: TKObject | null, index: _Point) => void): void {
                this.mTable.forEach(childFunc) ;
	}

        update(){
                if(!this.mIsDirty){
                        return ;        // Nothing have to do
                }
                this.mHumanBases        = [] ;
                this.mHumanShip         = null ;
                this.mAlienShips        = [] ;
                let owner               = this ;
                this.mTable.forEach(function(obj: TKObject | null, pos: _Point){
                        if(obj != null){
                                switch(obj.type){
                                  case ObjectType.humanBase:
                                        owner.mHumanBases.push(obj as TKBase) ;
                                  break ;
                                  case ObjectType.humanShip:
                                        owner.mHumanShip = obj as TKShip ;
                                  break ;
                                  case ObjectType.alienShip:
                                        owner.mAlienShips.push(obj as TKShip) ;
                                  break ;
                                }
                        }
                }) ;
                this.mIsDirty           = false ;
        }
}
