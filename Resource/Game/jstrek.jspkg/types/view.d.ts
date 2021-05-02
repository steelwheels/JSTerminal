/**
 * @file view.ts
 */
/// <reference path="KiwiLibrary.d.ts" />
/// <reference path="KiwiComponent.d.ts" />
/// <reference path="model.d.ts" />
declare class TKViewer {
    constructor();
    update(space: TKSpace): void;
    statusStrings(space: TKSpace): string[];
    dumpStrings(lines: string[]): void;
}
