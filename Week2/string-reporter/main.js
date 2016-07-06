// - Create an html file and js file and add a script tag to include the js file as before.
// - Prompt the user to enter any word using the prompt function.
// - Report back information in a single alert dialog about the word they entered. Use variables and string concatenation (+) to combine string values to be alerted. charAt, toLowerCase, toUpperCase, and 
// substring are string functions. Look for some examples online and test things out in the console to see if you can figure out the syntax for using these functions.
//   - The word they entered, verbatim
//   - How many characters are in it (length property)
//   - The word in lowercase (toLowerCase)
//   - The word in uppercase (toUpperCase)
//   - The word in a sentence
//   - The subword from the 2nd to the 4th character, inclusive (substring)

// - The alert's output might look like this: 
// <pre>
// You entered: Mango 
// There are 5 characters in the word. 
// The third character is 'n' 
// Lowercase: mango 
// Uppercase: MANGO 
// Example: I have wanted a Mango since I was a little boy. 
// Subword: ang

// EXERCISE COMPRETE
    
var userWord = prompt("Enter any single word.");
displayWordProps(userWord);  // passing a variable by reference
function displayWordProps(enterWord) {
    window.alert("You entered: " + enterWord + "\n" +
    "There are " + enterWord.length + " characters in the word." + "\n" +
    "The third character is '" + enterWord.charAt(2) + "'" + "\n" +
    "Lowercase: " + enterWord.toLowerCase() + "\n" +
    "Uppercase: " + enterWord.toUpperCase() + "\n" +
    "Example: My favorite food is " + enterWord + "\n" +
    "Subword: " + enterWord.substring(1,4)
    );
}

// Can also do it this way

function displayWordProps(enterWord) {
    var enterWord = prompt("Enter any single word.");
    
    window.alert("You entered: " + enterWord + "\n" +
    "There are " + enterWord.length + " characters in the word." + "\n" +
    "The third character is '" + enterWord.charAt(2) + "'" + "\n" +
    "Lowercase: " + enterWord.toLowerCase() + "\n" +
    "Uppercase: " + enterWord.toUpperCase() + "\n" +
    "Example: My favorite food is " + enterWord + "\n" +
    "Subword: " + enterWord.substring(1,4)
    );
}


// String.substring( from [, to ] )

