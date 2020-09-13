/* TextEdit.js */

function main(args)
{
    console.print("try to launch TextEdit\n")
    let textedit = launch("/System/Applications/TextEdit.app") ;
    if(textedit != null){
        console.print("try to activate\n") ;
        if(textedit.activate()){
            let furl = FileManager.homeDirectory().appendingPathComponent("/Documents/Sample/hello.js") ;
            console.print("try to open document:" + furl.path + "\n") ;
            if(textedit.open(furl)) {
                console.log("Open document ... done\n") ;
            } else {
                console.log("Failed to open document\n") ;
            }
            console.print("try to make new document\n")
            if(textedit.makeNewDocument()) {
                if(textedit.setContentOfFrontWindow("Hello from JSTerminal\n")){
                    let str = textedit.contentOfFrontWindow() ;
                    if(str != null) {
                        console.print("CONTENT OF FRONT WINDOW: " + str + "\n") ;
                        if(textedit.setNameOfFrontWindow("new-name")) {
                            let str = textedit.nameOfFrontWindow() ;
                            if(str != null) {
                                console.print("Name of front window: " + str + "\n") ;
                                let dirurl  = FileManager.homeDirectory() ;
                                let fileurl = dirurl.appendingPathComponent("new.txt") ;
                                if(textedit.save(fileurl)) {
                                    console.print("done\n") ;
                                } else {
                                    console.print("Failed to save the file " + fileurl.path + "\n") ;
                                }
                            } else {
                                console.print("Failed to get name of front window") ;
                            }
                        } else {
                            console.print("Failed to set name of front window") ;
                        }
                    } else {
                        console.print("Failed to get content\n") ;
                    }
                } else {
                    console.print("Failed to set content")
                }
            } else {
                console.print("Failed to make new document\n") ;
            }
        } else {
            console.print("Failed to activate\n") ;
        }
    } else {
        console.print("Failed to launch\n") ;
    }
    return 0 ;
}
