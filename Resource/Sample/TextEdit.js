/* TextEdit.js */

function main(args)
{
    console.print("try to launch TextEdit\n")
    let textedit = launch("/System/Applications/TextEdit.app") ;
    if(textedit != null){
        console.print("try to activate\n") ;
        if(textedit.activate()){
            console.print("try to make new document\n")
            if(textedit.makeNewDocument()) {
                console.print("done\n") ;
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