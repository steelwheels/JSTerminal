/**
 * @file control.ts
 */
/// <reference path="KiwiLibrary.d.ts" />
/// <reference path="KiwiComponent.d.ts" />
/// <reference path="KiwiShell.d.ts" />
/// <reference path="model.d.ts" />
declare enum UserAction {
    setDirection = 0,
    quitGame = 1
}
declare class TKController {
    constructor();
    initSpace(): TKSpace;
    randomPoint(space: TKSpace): _Point;
    update(space: TKSpace): void;
    updateShip(ship: TKShip, space: TKSpace): void;
    nextPosition(ship: TKShip, space: TKSpace): _Point | null;
    updatePosition(next: _Point, ship: TKShip, space: TKSpace): void;
    updateRadar(radar: TKRadar, space: TKSpace): void;
    objectToType(obj: TKObject | null): ObjectType | null;
    randomObjectType(): ObjectType | null;
    selectAction(): UserAction;
    selectSpeed(): _Point;
    alienAction(ship: TKShip, space: TKSpace): void;
    randomSpeed(): _Point;
}
