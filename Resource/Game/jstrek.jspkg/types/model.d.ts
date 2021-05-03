/**
 * @file model.ts
 */
/// <reference path="KiwiLibrary.d.ts" />
/// <reference path="KiwiComponent.d.ts" />
declare enum ObjectType {
    humanBase = 0,
    humanShip = 1,
    alienShip = 2
}
declare const ObjectTypeNum: number;
declare enum GameStatus {
    inProgress = 0,
    terminated = 1,
    humanWin = 2,
    alienWin = 3
}
declare class TKRadar {
    mTable: Table;
    constructor(width: number, height: number);
    get width(): number;
    get height(): number;
    element(x: number, y: number): ObjectType | null;
    setElement(x: number, y: number, obj: ObjectType | null): void;
    clear(): void;
    toSymbol(obj: ObjectType | null): string;
    toStrings(): string[];
}
declare class TKObject {
    mType: ObjectType;
    mPosition: _Point;
    mSpeed: _Point;
    constructor(type: ObjectType, pos: _Point);
    get type(): ObjectType;
    set position(pos: _Point);
    get position(): _Point;
    set speed(spd: _Point);
    get speed(): _Point;
}
declare class TKShip extends TKObject {
    mRadar: TKRadar;
    constructor(type: ObjectType, pos: _Point, radar: TKRadar);
    set radar(radar: TKRadar);
    get radar(): TKRadar;
}
declare class TKBase extends TKObject {
    constructor(pos: _Point);
}
declare class TKSpace {
    mTable: Table;
    mIsDirty: boolean;
    mHumanBases: TKBase[];
    mHumanShip: TKShip | null;
    mAlienShips: TKShip[];
    constructor(width: number, height: number);
    get width(): number;
    get height(): number;
    get humanShip(): TKShip | null;
    get humanBases(): TKBase[];
    get alienShips(): TKShip[];
    gameStatus(): GameStatus;
    element(x: number, y: number): TKObject | null;
    setElement(pos: _Point, obj: TKObject | null): void;
    forEach(childFunc: (value: TKObject | null, index: _Point) => void): void;
    update(): void;
}
