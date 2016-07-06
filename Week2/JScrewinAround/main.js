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

 var userString = prompt("Enter a word or phrase: ");
 var userChar = prompt("Now enter a single character in that word or phrase");
countChar(userString, userChar);
function countChar(string, char){
    var charCount = 0;
    for (var string = 0; string < string.length -1; string++){
        if (string == char){
            charCount++;
        }
        return charCount;
    }
    window.alert("The string you entered was: " + string);
    window.alert("That character appears " + charCount + " times.");
}

countChar(userString, userChar);


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



var score = 75; // Score
var msg; // Message
if (score>= 50) { // If score is 50 or higher
msg = 'Congratulations!';
msg += ' Proceed to the next round . ' 
};
var el = document.getElementById('answer ' ) ; 
el.textContent = msg;