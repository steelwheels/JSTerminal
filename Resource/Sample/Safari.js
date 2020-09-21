/* Safari.js */

function main(args)
{
    console.print("try to launch Safari\n") ;
    let safari = launch("/Applications/Safari.app") ;
    if(safari == null){
        console.print("Failed to launch safari\n") ;
        return -1 ;
    }
    if(safari.activate()) {
        console.print("activate safari\n") ;
    } else {
	    console.print("Failed to activate safari\n") ;
	    return -1 ;
    }
    if(safari.open("https://github.com/steelwheels")){
        console.print("open web page\n") ;
    } else {    
        console.print("Failed to open web page\n") ;
        return -1 ;
    }
    console.print("launch safari ... done\n") ;
    return 0 ;
}
