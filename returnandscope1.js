const readline=require('readline-sync')

function nameswapper(){
    let first = readline.question("first:");
    let last = readline.question("last:");
    return('${last}, ${firs}');
}
nameswapper();

