> run ${HOME}/Test/unit-test.jspkg | tee > ${HOME}/Test/unit-test.log

let ecode = -1 ;
> diff ${HOME}/Test/unit-test.log ${HOME}/Test/unit-test.log.OK -> ecode
console.log("exit code: " + ecode) ;

