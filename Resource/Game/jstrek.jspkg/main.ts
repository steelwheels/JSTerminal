/*
 * @file: main.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiComponent.d.ts"/>
/// <reference path="types/KiwiShell.d.ts"/>
/// <reference path="types/model.d.ts"/>
/// <reference path="types/view.d.ts"/>
/// <reference path="types/control.d.ts"/>

function main(args: string[])
{
        /* initialization */
        let control = new TKController() ;
        let viewer  = new TKViewer() ;
        let space   = control.initSpace() ;
       
        let status: GameStatus = GameStatus.inProgress ;
        while(status == GameStatus.inProgress){
                control.update(space) ;
                viewer.update(space) ;

                status = space.gameStatus() ;
                if(status == GameStatus.inProgress) {
                        /* Decide user action */
                        let doquit = false ;
                        switch(control.selectAction()){
                          case UserAction.setDirection: {
                                let humanship = space.humanShip! ;
                                humanship.speed = control.selectSpeed() ;
                          } break ;
                          case UserAction.quitGame:
                                doquit = true ;        
                          break ;
                        }
                        /* Decide next status */
                        if(doquit){
                                status = GameStatus.terminated ;
                        }
                }
                if(status == GameStatus.inProgress){
                        for(let alien of space.alienShips){
                                control.alienAction(alien, space) ;
                        }
                }
        }

        return 0 ;
}
