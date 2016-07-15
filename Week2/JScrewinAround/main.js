// You can get the Nth character, or letter, from a string by writing "string".charAt(N), similar to how you get its length with "s".length. The returned value will be a string containing only one 
// character (for example, "b"). The first character has position zero, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its 
// characters have positions 0 and 1.

// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” 
// characters). Rewrite countBs to make use of this new function.

// Your code here.

//  console.log(countBs("BBC"));
//  → 2
//  console.log(countChar("kakkerlak", "k"));
//  → 4

//  var userString = prompt("Enter a word or phrase: ");
//  var userChar = prompt("Now enter a single character in that word or phrase");
// function countChar(string, char){
//     var string = userString;
//     var char = userChar
//     var charCount = 0;
//     for (var i = 0; i < string.length -1; i++){
//         if (string[i] == char){
//             charCount++;
//         }
//     }
//     alert("The string you entered was: " + string);
//     alert("That character appears " + charCount + " times.");
// }

// countChar();

// THIS ONE FUXXING WORX!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 
function countChar(){
    var userString = prompt("Enter a word or phrase: ");
    var userChar = prompt("Now enter a single character in that word or phrase");    var charCount = 0;
    for (var i = 0; i < userString.length; i++){
        if (userString[i] == userChar){
            charCount++;
        }
    }
    alert("The string you entered was: " + userString);
    alert("That character appears " + charCount + " times.");
}


// var userWord = prompt("Enter any single word.");
// displayWordProps(userWord);  // passing a variable by reference
// function displayWordProps(enterWord) {
//     window.alert("You entered: " + enterWord + "\n" +
//     "There are " + enterWord.length + " characters in the word." + "\n" +
//     "The third character is '" + enterWord.charAt(2) + "'" + "\n" +
//     "Lowercase: " + enterWord.toLowerCase() + "\n" +
//     "Uppercase: " + enterWord.toUpperCase() + "\n" +
//     "Example: My favorite food is " + enterWord + "\n" +
//     "Subword: " + enterWord.substring(1,4)
//     );
// }




// function countChar(string, char){
//     var charCount = string.length() - string.replace(char, "").length();
    
//     window.alert("The string you entered was: " + string);
//     window.alert("That character appears " + charCount + " times.");
// }

//Snippet from EJS?

// var score = 75; // Score
// var msg; // Message
// if (score>= 50) { // If score is 50 or higher
// msg = 'Congratulations!';
// msg += ' Proceed to the next round . ' 
// };
// var el = document.getElementById('answer ' ) ; 
// el.textContent = msg;




// Cat Array from EJS

// The solution for the cat problem talks about a 'set' of names. A set is a collection of values in which no value may occur more than once. If names are strings, can you think of a way to use an object 
// to represent a set of names?

// Show how a name can be added to this set, how one can be removed, and how you can check whether a name occurs in it.

// //var catArr = []

// //catArr.push("Snuggles", "Olaf", "Grendel", "BEOWULF", "Hankette", "Blanket")
// //catArr.splice(3,2, deadCats)  //will remove the last two kitties (and put them into an array called deadCats?)



// Write a function range that takes one argument, a positive number, and returns an array containing all numbers from 0 up to and including the given number.

// An empty array can be created by simply typing []. Also remember that adding properties to an object, and thus also to an array, can be done by assigning them a value with the = operator. The 
// length property is automatically updated when elements are added.

// //var posNum = 42


// //function range(posNum){
// //    var numArr = []
// //    for (var i = 0; i < posNum; i++){
// //        numArr[i] = i;
// //    }
// //    return numArr;
// //}


// function range(upto) {
//   var result = [];
//   for (var i = 0; i <= upto; i++)
//     result[i] = i;
//   return result;
// }


// Squirrelanthropy - Skiouranthropy

// //var journal = [];

// //function addEntry(events, didITurnIntoASquirrel) {
// //  journal.push({
// //    events: events,
// //    squirrel: didITurnIntoASquirrel
// //  });
// //}

// //addEntry(["work", "touched tree", "pizza", "running",
// //          "television"], false);
// //addEntry(["work", "ice cream", "cauliflower", "lasagna",
//           "touched tree", "brushed teeth"], false);
// addEntry(["weekend", "cycling", "break", "peanuts",
//           "beer"], true);

// Phi stats table

// function phi(table) {
//   return (table[3] * table[0] - table[2] * table[1]) /
//     Math.sqrt((table[2] + table[3]) *
//               (table[0] + table[1]) *
//               (table[1] + table[3]) *
//               (table[0] + table[2]));
// }

// console.log(phi([76, 9, 4, 1]));

// Journal event tally 2x2 compiler

// function hasEvent(event, entry) {
//   return entry.events.indexOf(event) != -1;
// }

// function tableFor(event, journal) {
//   var table = [0, 0, 0, 0];
//   for (var i = 0; i < journal.length; i++) {
//     var entry = journal[i], index = 0;
//     if (hasEvent(event, entry)) index += 1;
//     if (entry.squirrel) index += 2;
//     table[index] += 1;
//   }
//   return table;
// }

// console.log(tableFor("pizza", JOURNAL));

