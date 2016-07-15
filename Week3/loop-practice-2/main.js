var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot']


// Problems:
// ---------
// rat
// cat
// butterfly
// marmot
// ocelot
// </pre>

// <em>Solution:</em>
// <pre>
// for(var i=0; i &lt; animals.length; i++) {
//  console.log(animals[i]);
// }




// - <code>rat cat butterfly marmot</code>
// COMPRETE
var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot']
function sadArcher (animArray) {
    for (var i = 0; i < animArray.length-1; i++){
        console.log(animArray[i])
    }
}



// - <code>rat butterfly ocelot</code>
// COMPRETE
function skipAnimal (animArray) {
    for (var i = 0; i < animArray.length; i+=2){
        console.log(animArray[i])
    }
}



// - <code>ocelot marmot butterfly cat rat</code>
//  COMPRETE
function reverseAnimal (animArray) {
    var reverseArray = [];
    for (var i = animArray.length -1; i >= 0; i--){
        reverseArray.push(animArray[i]);
    }
    return reverseArray;
}



// - <code>rat cat cat butterfly butterfly marmot marmot ocelot</code>

// This is closer, but still not right.

function doubleAnimal (animArray) {
    var doubleArray = [];
    for (var i = 1; i < animArray.length -2; i++) {
        doubleArray.splice(animArray[i + 1], 0);
    }
    console.log(doubleArray);
};


// array.splice(start, deleteCount[, item1[, item2[, ...]]])



//Not a good solution. Was thinking of trying to push the current index of animArray to current index +1.
//It seems like push always appends it to the end of the array. Need to find something different to use.

// function doubleAnimal (animArray) {
//     var doubleArray = animArray;
//     for (var i = 1; i < animArray.length -2; i++){
//         doubleArray.push(animArray[i]);
//     }
//     return doubleArray;
// }