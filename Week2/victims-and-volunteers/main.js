// - First prompt the user to ask how many disaster victims they wish to enter.
// - For each disaster victim that will be added, prompt the user to enter their name, phone number, and street. You don't need to validate the information. Add each newly entered user to three arrays, 
// one for each piece of information, using array.push. <em>Think!</em> How will you know how many times to prompt the user for a name/phone/street? How can you make this dynamic so that it works for 
// any number of people?
// - Repeat steps 1 and 2, but this time you are asking for volunteers. You'll need a separate set of arrays.

var victimNumber = prompt("How many folks are messed up?")
countVictims(victimNumber)
function countVictims(numberEntries){
    for (var numberEntries = 0; numberEntries < numberEntries -1 ; numberEntries++){
        folksToHelp();
    }
}

function folksToHelp(attributes) {      // info constructor
    this.name = attributes.name
    this.phone = attributes.phone
    this.address = attributes.address
}

// function HumanUnit(attributes) {
//     // constructor functions leverage a special keyword: `this`
//     // ctrl/cmd + tab
//     this.race = 'Human'
//     this.name = attributes.name
//     this.height = attributes.height
//     this.weight = attributes.weight
//     this.origin = 'Earth'
// }


// helpingFolks(victimNumber)





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



