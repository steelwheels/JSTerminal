/**
 * @file view.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiComponent.d.ts"/>
/// <reference path="types/model.d.ts"/>

class TKViewer 
{
        constructor(){
        }

        update(space: TKSpace): void {
                let humanship  = space.humanShip ;
                let humanradar = humanship != null ? humanship.radar : null ;

                let radarlines: string[] = [] ;
                if(humanradar != null){
                        radarlines = humanradar.toStrings() ;
                }
                let statuslines = this.statusStrings(space) ;

                let lines = pasteStrings(radarlines, statuslines, " ") ;
                this.dumpStrings(lines) ;
        }

        statusStrings(space: TKSpace): string[] {
                let bases  = space.humanBases ;
                let aliens = space.alienShips ; 
                return [`Base num:  ${bases.length}`,
                        `Alien num: ${aliens.length}`] ;
        }

        dumpStrings(lines: string[]){
                for(let line of lines){
                        console.log(line) ;
                }
        }
}
