//Arrays are 'pass by reference
//This means you can accially change array
//if you change another array that it's equal to

let nums = [5, 4 ,3, 2, 1];
let newnums = numsnewNum [0]= 12
    console.log('nums:'+nums);
console.log('newNums:'+newNums)
//notice both changed?
//this is because newNums is NOT a new
//array, it is another name for the SAME
//array in memory on your pc

//to avoid changes to on affecting the
//other, make a NEW array

//option 1: Use a for loop to push individual items
//allows you to manipulate individual item as you
//add them into the new array
let vals = [5, 4, 3, 2, 1];
let newVals = []
for (leti=0; i<vals.length;i++){
    newvals.push(vals[i]);
}
newVals[0]=12
console.log('vals:'+vals)
console.log('newvals:'+newVals)

