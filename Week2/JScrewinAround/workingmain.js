// - Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.
//     - <code>totalLetters(['javascript', 'is', 'awesome'])</code> should return 19. 
//     - <code>totalLetters(['what', 'happened', 'to', 'my', 'function'])</code> should return 24. 

//  COME BACK TO THIS, IS NO FINISH

var firstArr = ['javascript', 'is', 'awesome']
var secondArr = ['what', 'happened', 'to', 'my', 'function']

function totalLetters(stringArray){
    var totalString = stringArray.join();
    var noComma ="";
    totalString = totalString.split(',').join(noComma);
    return totalString.length;
}




// function totalLetters(stringArray){
//     var totalChars = 0;
//     for (var i = 0; i < stringArray; i++){
//         totalChars = totalChars + stringArray[i].slice.length;
//     }
//     return totalChars;
// }

totalLetters(firstArr);

// function countChar(){
//     var userString = prompt("Enter a word or phrase: ");
//     var userChar = prompt("Now enter a single character in that word or phrase");    var charCount = 0;
//     for (var i = 0; i < userString.length; i++){
//         if (userString[i] == userChar){
//             charCount++;
//         }
//     }
//     alert("The string you entered was: " + userString);
//     alert("That character appears " + charCount + " times.");
// }



// How to get highest value in an array

// function getMaxOfArray(numArray) {
//   return Math.max.apply(null, numArray);
// }