"use strict";
/*
 * tavern.ts
 */
/// <reference path="../types/KiwiLibrary.d.ts" />
/// <reference path="../types/KiwiShell.d.ts" />
/// <reference path="../types/KiwiComponent.d.ts" />
/// <reference path="../types/character/character.d.ts" />
var Tavern;
(function (Tavern) {
    class CharacterTable {
        constructor() {
            this.mTable = null;
        }
        get table() {
            if (this.mTable != null) {
                return this.mTable;
            }
            else {
                let newtable = this.load();
                this.mTable = newtable;
                return newtable;
            }
        }
        load() {
            let storage = ValueStorage("main");
            if (storage == null) {
                console.error("Failed to allocate storage");
                exit(ExitCode.exception);
            }
            let table = ValueTable("town.tavern.members", storage);
            if (table == null) {
                console.error("Failed to allocate table");
                exit(ExitCode.exception);
            }
            return table;
        }
        add(newchar) {
            this.table.append(newchar.record);
        }
    }
    Tavern.CharacterTable = CharacterTable;
})(Tavern || (Tavern = {})); // end of module
