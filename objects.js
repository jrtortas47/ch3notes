//create an object of key-value pairs
let contacts = {
    bff: 1234567,
    mom: 5555555,
    bro: 9876543,
}

//log all
console.log(contacts);

//access a specific entry by its key (name)
console.log(contacts.bff);

//can't access if the key doesn't exist
console.log(contact.myself);

//add a new entry
contact.sis = 3456677;
console.log(contacts);

//update an entry
contact.bff = 1111111;
console.log(contacts);

//delete an entry
delete contacts.mom;
console.log(contacts);

//is there a key called_in there?
console.log("bff" in contacts);
coonsole.log("myself" in contacts);

//objects are like arrays - pass by reference 98h
