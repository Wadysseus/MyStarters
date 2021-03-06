// - Write a function called 'tripleFive' which loops three times using a for loop. Each iteration of the loop, output 'Five!' using console.log.
//     - tripleFive() 
//     - Five! Five! Five!

// EXERCISE COMPRETE

// function tripleFive()
// {
//     for (var i = 0; i < 3; i++){
//         console.log("Five!")
//     }
// }

// tripleFive()



// - Write a function called 'lastLetter' which takes a single string argument and returns the last character in the string.
//     - lastLetter('hello') should return 'o'
//     - lastLetter('island') should return 'd'

// EXERCISE COMPRETE

// function lastLetter(string)
// {
//     var lastChar = string.slice(-1);
//     return lastChar;
// return string[string.length-1];  // simpler way of doing this
// }

// lastLetter()



// - Write a function called 'square' which takes a single argument which is a number, and returns number * number.
//     - square(3) should return 9
//     - square(5) should return 25

// EXERCISE COMPRETE

// function square(x) {
//     var product = x * x;
//     return product;
// }

// square()


// ALTERNATE VICTORY - RE-READ THIS

// function power(base, exponent) {
//   if (exponent == undefined)
//     exponent = 2;
//   var result = 1;
//   for (var count = 0; count < exponent; count++)
//     result *= base;
//   return result;
// }





// - Write a function called 'negate' which takes a single number argument and returns the negative of that number.
//     - negate(5) should return -5
//     - negate(-8) should return 8

// EXERCISE COMPRETE

// function negate(x) {
//     var difference = x - (2 * x);
//     return difference;
// }

// negate()



// - Write a function called 'toArray' which takes three arguments and returns an array with each of those arguments as items.
//     - toArray(1, 4, 5) should return [1, 4, 5]
//     - toArray(8, 9, 10) should return [8, 9, 10]

// EXERCISE COMPRETE

// function toArray(x, y, z){
//     var thisArray = [x, y, z];
//     return thisArray;
// ALTERNATE VICTORY -    return [x, y, z];
// }

// toArray()



// - Write a function called 'startsWithA' which takes a single string argument and returns true if the given string's first letter is 'A' and false otherwise.
//     - startsWithA('aardvark') should return true
//     - startsWithA('bear') should return false

// EXERCISE COMPRETE - but come back and fix it with .toLowerCase() if you have time

// function startsWithA(string) {
//     if(string.charAt(0) == "a" || string.charAt(0) == "A"){
//         return true;
//     }
//     else{
//         return false;
//     }
// }



// - Write a function called 'excite' which takes a single string argument and returns the given string plus three exclamation marks.
//     - excite('yes') should return 'yes!!!'
//     - excite('go') should return 'go!!!'

// EXERCISE COMPRETE

// function excite(string) {
//     return string + '!!!';
// }

// excite()



// - Write a function called 'sun' which takes a single string argument and returns true if the string contains the word 'sun' within it. You may use the indexOf method that is built-in to strings, or you can do it manually with a for loop.
//     - sun('sundries') should return true
//     - sun('asunder') should return true
//     - sun('catapult') should return false

// EXERCISE COMPRETE

//str.indexOf(searchValue[, fromIndex])

// function sun(string) {
//     if (string.indexOf("sun") == -1){
//         return false;
//     }
//     else {
//         return true;
//     }
// }

// sun()



// - Write a function called 'tiny' which takes a single number argument and returns true if the number is between 0 and 1.
//     - tiny(0.3) should return true
//     - tiny(14) should return false
//     - tiny(-5) should return false

// EXERCISE COMPRETE

// function tiny(x){
//     if (x < 1 && x > 0){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// tiny()

// - Write a function called 'getSeconds' which takes a single string argument in the format 'MM:SS' (minutes, and seconds) and returns the total number of seconds represented by that timespan.
//     - getSeconds('01:30') should return 90
//     - getSeconds('10:25') should return 625


function getSeconds(time){
    var timeMaster = time.split(':');  // : is the delimiter 
    var minutes = timeMaster[0] * 60;
    var seconds = timeMaster[1] * 1;
    return minutes + seconds;
    // var segments = time.split(':');
    // segments[0]*1*60+segments[1]*1;
}


