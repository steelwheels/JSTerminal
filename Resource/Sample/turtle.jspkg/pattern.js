/* pattern.js */

function makeOnePattern(pattern) { // (pattern) -> String
    let patlen = pattern.length ;
    let result = "" ;
    for(let i=0 ; i<patlen ; i++){
        let c = pattern.charAt(i) ;
        if(c == "F"){
            result = result + "F-F+F+F-F" ;
        } else {
            result = result + c ;
        }
    }
    return result ;
} 

function makePattern(turtle) {    // (turtle) -> String
    turtle.setup(0, 0, Math.PI/2.0, 0.5) ;
    turtle.movingAngle    = Math.PI / 2.0 ;
    turtle.movingDistance = 3.0 ;

    let pat = "F" ;
    for(let i=0 ; i<3 ; i++){
        pat = makeOnePattern(pat) ;
    }
    console.log(`result = ${pat}`)
    return pat ;
}
