/* pattern.js */

function makeOnePattern(pattern) { // (pattern) -> String
    let patlen = pattern.length ;
    let result = "" ;
    for(let i=0 ; i<patlen ; i++){
        let c = pattern.charAt(i) ;
        if(c == "F"){
            result = result + "F[+F[F-F]-F]F[-F[F+F]+F]" ;
        } else {
            result = result + c ;
        }
    }
    return result ;
} 

function makePattern(turtle) {    // (turtle) -> String
    turtle.movingDistance = 5 ;
    turtle.movingAngle    = Math.PI * 22.5 / 180.0 ; // 22.5 degree
    let pat = "F" ;
    for(let i=0 ; i<4 ; i++){
        pat = makeOnePattern(pat) ;
    }
    console.log(`result = ${pat}`)
    return pat ;
}
