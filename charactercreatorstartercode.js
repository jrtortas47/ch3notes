const readline = require('readline-sync')
let diceRolled = []
let character  = {
    //empty to start
}

createChar(diceRolled)

function rolld6(){
    return Math.ceil(Math.random()*6)
}

function rollDice(amount,list){
    for(let i=0; i<amount;i++){
        console.log(`You rolled a ${roll}!`)
        list.push(roll)
    }
}

function sum(list){
    let sum=0;
for (let i=0; i<list.length;i++){
    sum +=list[i];
}

}
