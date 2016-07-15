// - First prompt the user to ask how many disaster victims they wish to enter.
// - For each disaster victim that will be added, prompt the user to enter their name, phone number, and street. You don't need to validate the information. Add each newly entered user to three arrays, 
// one for each piece of information, using array.push. <em>Think!</em> How will you know how many times to prompt the user for a name/phone/street? How can you make this dynamic so that it works for 
// any number of people?
// - Repeat steps 1 and 2, but this time you are asking for volunteers. You'll need a separate set of arrays.



function countVictims(){
    var victimNumber = prompt("How many humans are injured?");
    var numberEntries = victimNumber;
    for (var i = 0; i < numberEntries; i++){
        folksToHelp();
    }
}

var victimNameArray = [];
var victimPhoneArray = [];
var victimAddressArray = [];

function folksToHelp() {
    var victimName = prompt("What's this human's name?");
    victimNameArray.push(victimName);
    var victimPhone = prompt("What's this human's phone number?");
    victimPhoneArray.push(victimPhone);
    var victimAddress = prompt("What's this human's address?");
    victimAddressArray.push(victimAddress);
}

countVictims();
console.log(victimNameArray);
console.log(victimPhoneArray);
console.log(victimAddressArray);



function countVolunteers(){
    var volunteersNumber = prompt("How many humans wish to volunteer?");
    var numberEntries = volunteersNumber;
    for (var i = 0; i < numberEntries; i++){
        folksWhoHelp();
    }
}

var volNameArray = [];
var volPhoneArray = [];
var volAddressArray = [];

function folksWhoHelp() {
    var volName = prompt("What's this volunteer's name?");
    volNameArray.push(volName);
    var volPhone = prompt("What's this volunteer's phone number?");
    volPhoneArray.push(volPhone);
    var volAddress = prompt("What's this volunteer's address?");
    volAddressArray.push(volAddress);
}

countVolunteers();
console.log(volNameArray);
console.log(volPhoneArray);
console.log(volAddressArray);


// function HumanUnit(attributes) {
//     // constructor functions leverage a special keyword: `this`
//     // ctrl/cmd + tab
//     this.race = 'Human'
//     this.name = attributes.name
//     this.height = attributes.height
//     this.weight = attributes.weight
//     this.origin = 'Earth'
// }


// Trying to model it off var Units below

// var victimsToHelp = {      // info constructor
//     victim: function(attributes){
//         return {
//             name:  attributes.name,
//             phone: attributes.phone,
//             address: attributes.address
//         }
//     }
// }


// var Units = {
//     human: function(attributes) {
//         return {
//             race: 'Human',
//             name: attributes.name,
//             height: attributes.height,
//             weight: attributes.weight,
//             origin: 'Earth'
//         }
// }
// }



//       _==/           i     i           \==_
//      /XX/            |\___/|            \XX\
//    /XXXX\            |XXXXX|            /XXXX\
//   |XXXXXX\_         _XXXXXXX_         _/XXXXXX|
//  XXXXXXXXXXXxxxxxxxXXXXXXXXXXXxxxxxxxXXXXXXXXXXX
// |XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX|
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// |XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX|
//  XXXXXX/^^^^"\XXXXXXXXXXXXXXXXXXXXX/^^^^^\XXXXXX
//   |XXX|       \XXX/^^\XXXXX/^^\XXX/       |XXX|
//     \XX\       \X/    \XXX/    \X/       /XX/
//        "\       "      \X/      "       /"