/**
 * @file control.ts
 */
/// <reference path="KiwiLibrary.d.ts" />
/// <reference path="KiwiComponent.d.ts" />
/// <reference path="model.d.ts" />
declare class TKController {
    constructor();
    initSpace(): TKSpace;
    randomPoint(space: TKSpace): _Point;
    update(space: TKSpace): void;
    updateRadar(radar: TKRadar, space: TKSpace): void;
    objectToType(obj: TKObject | null): ObjectType | null;
    randomObjectType(): ObjectType | null;
}
