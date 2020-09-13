/* TextEdit.js */

function main(args)
{
    console.print("try to launch Mail\n")
    let mail = launch("/System/Applications/Mail.app") ;
    if(mail == null){
        console.print("Failed to launch mail\n") ;
        return -1 ;
    }
    if(!mail.activate()) {
       console.print("Failed to activate mail\n") ;
        return -1 ;
    }
    if(!mail.makeNewMail("This is mail subect")){
        console.print("Failed to make new mail\n") ;
    }
    return 0 ;
}
