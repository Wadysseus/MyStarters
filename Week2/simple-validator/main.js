// - Create an html file and js file and add a script tag to include the js file as before. (Getting familiar? Good!)
// - Prompt the user to enter their phone number with dashes. (You might want to assure them that it won’t be used for SPAM. Your site probably looks pretty sketchy right now, being a blank page with 
// a prompt for their phone number. I know I wouldn’t enter my phone number...)
// - Tip: You can report simple boolean evaluations of user input by combining boolean operators. 
// e.g. 
// <pre>
// alert(userInput.charAt(0) === 'B' && userInput.length === 7)</pre> will display true if the user enters 'Boulder' or 'Baghdad'.


// - Alert the user if their phone number is valid (just true or false) according to the simple rule that the fourth and eighth characters must be dashes.

// EXERCISE COMPRETE

function teleFono (nombre) {
   var nombre = prompt ("Enter your phone number like: XXX-XXX-XXXX")
       if(nombre.charAt(3) === '-' && nombre.charAt(7) === '-'){
           return true;
       }
       else {
           return false;
       }
}


// - Following the same procedure as #2 and #3 above to prompt and validate the following fields:




// - Tip: While the built-in isNaN method works in most cases to test if a value is a number, it fails on some simple inputs like whitespace. The following function is a more robust implementation for 
// - checking if a string contains a valid number: var isNumber = function(n) { return !isNaN(parseFloat(n)) && isFinite(n); };


//     - birth date
//     - must follow the format xx/xx/xx

// EXERCISE COMPRETE

function cumpleaños () {
    var birthDate = prompt ("Enter your birthdate in the following format: MM/DD/YEAR")
        if(birthDate.charAt(2) === '/' && birthDate.charAt(5) === '/'){
            console.log("Looks like a birthday to my eyes!")
        }
        else {
            console.log("I don't recognize that format.")
        }
    }


//     - postal code
//     - must follow the format xxxxx OR xxxxx-xxxx

// EXERCISE COMPRETE

function goingPostal () {
    var zipCode = prompt ("Enter your zip code in one of the following formats: xxxxx or xxxxx-xxxx")
        if(zipCode.length === 5 || zipCode.charAt(5) === '-' && zipCode.length === 10){
            console.log("Looks like a zip code to my eyes!")
        }
        else {
            console.log("I don't recognize that format.")
        }
    }


//     - state abbreviation
//     - must be two characters
//     - must be all caps

// EXERCISE COMPRETE

function enterState () {
    var yourState = prompt ("Enter your state in the following format (all caps): XX")
        if(yourState.length === 2 && yourState == yourState.toUpperCase()){
            console.log("Looks like a state to my eyes!")
        }
        else {
            console.log("I don't recognize that format.")
        }
    }


//     - married
//     - must be yes or no
//     - may be any capitalization: YES, Yes, yes

// EXERCISE COMPRETE

function marriedQuery () {
    var marriedState = prompt ("Are you married? Answer with 'yes' or 'no' (caps irrelevant).")
        if(marriedState.toUpperCase() == 'YES' || marriedState.toUpperCase() == 'NO'){
            console.log("Looks like a married status to my eyes!")
        }
        else {
            console.log("I don't recognize that format.")
        }
    }

// Joe S's code
// function teleFono () {

//     var nombre = prompt ("Enter your phone number like: 'XXX-XXX-XXXX'")
//       if(nombre.charAt(3) === '-' && nombre.charAt(7) === '-'){
//          window.alert('true');
//       }
//       else {
//           window.alert('false');
//       }
// }