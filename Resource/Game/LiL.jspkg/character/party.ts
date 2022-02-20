/*
 * party.ts
 */

/// <reference path="../types/KiwiLibrary.d.ts" />
/// <reference path="../types/KiwiShell.d.ts" />
/// <reference path="../types/KiwiComponent.d.ts" />
/// <reference path="../types/character/character.d.ts" />

module Party {

export class Party {
        private mMembers:       Character.Character[] ;

        constructor(){
                this.mMembers = [] ;
        }
}


} ; // end of module: Party
