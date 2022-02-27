/// <reference path="../KiwiLibrary.d.ts" />
/// <reference path="../KiwiShell.d.ts" />
/// <reference path="../KiwiComponent.d.ts" />
/// <reference path="../character/character.d.ts" />
declare module Tavern {
    class CharacterTable {
        private mTable;
        constructor();
        get table(): ValueTableIF;
        load(): ValueTableIF;
        add(newchar: Character.Character): void;
    }
}
