//paramenters are placeholder variables that allow us to use fuctions

//example 1:without parameter
function printYes(){
    console.log('yes');
}

printYes();//prints 'yes' when called
printYes();//prints 'yes' when called

//Example 2: with parameter
function printText(text){ //one parameter text
    console.log(text);
}
printText('yes'); //arguments 'yes' replace parameter text
printText('no'); //argument 'no' replaces parameter text

//Return statements provide values to the rest of the program
//Return values can be used by other parts of the code
//console.log only produce "side effects" that cannot be used by other parts of the code

//Example 3: with side effects (no return)
function double(num){
    console.log(num*2);
}

double(3);

//example4:U sing return
function triple(num){
    return (num*3);
}
console.log(triple(5)); //to print out the value returned

let lives = triple(7); //to use the value returned in the program,
lives = lives-1; //save it to a variable and continue on with your code
console.log(lives);

//scope is the part of the program where the binding (value of a variable) is  visible.
//global scope: created outside all{}and only accessible everywhere
//local scope: created inside a {} and only accessible inside that{}

//Example5: Different scopes
let x=10; //global x
if (true){
    let y=29; //local y
    let z=30; //local z
    console.log(x+y+z);
}
console.log(x); //y and z are not accessible outside the {} where they were created

//Example 6:no naming conflict
function half(n){ //local n created is accessible inside this function only
    return (n/2);
}

let n=10; //global n is NOT THE SAME n
console.log(half(100)); //go to the half function and use THAT n.
console.log(n); //since there is no direction to go to{}, use the global n
