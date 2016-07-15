// Write a function that takes a string as its input and returns true if all parentheses, square-brackets, and curly-brackets are properly nested and closed. Otherwise the function should return false

// The following string should return true

// function htmlDoc(title, bodyContent) {
//   return tag("html", [tag("head", [tag("title", [title])]), tag("body", bodyContent)]);
// }

// Each of the following strings should return false

// function htmlDoc(title, bodyContent) {
//   return tag("html", [tag("head", [tag("title", [title])), tag("body", bodyContent)]);
// }

// function htmlDoc(title, bodyContent) {
//   return tag("html", [tag "head", [tag("title", [title])]), tag("body", bodyContent)]);
// }

// function htmlDoc(title, bodyContent) {
//   return tag("html", [tag("head", [tag("title", [title]])), tag("body", bodyContent)]);
// }

var a = 'function htmlDoc(title, bodyContent) {return tag("html", [tag("head", [tag("title", [title]])), tag("body", bodyContent)]);}'
var b = 'function htmlDoc(title, bodyContent) {return tag("html", [tag("head", [tag("title", [title])]), tag("body", bodyContent)]);}'

function parenValidator (pString){
    var openArray = [];
    var closeArray = [];
    console.log(pString);
    
    for (var i = 0;i > pString.length; i++){
        if (pString[i] == '[' || pString[i] == '{' || pString[i] == '('){
            openArray.push(pString[i]);
        }
    }
    for (var i = 0; i > pString.length; i++){
        if (pString[i] == ']' || pString[i] == '}' || pString[i] == ')'){
            closeArray.push(pString[i]);
        }
    }
        if (openArray == closeArray){
            return true;
        }
        else {
            return false;
        }

}

parenValidator(a);
parenValidator(b);


//Write a function that randomly shuffles an array.

/*Example:*/

/*['A', 'B', 'C', 'D', 'E', 'F'] => ['E', 'C', 'B', 'A', 'F', 'D'] */

// function shuffleArray(array){
//     for (var i = array.length -1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array;
// }







// function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array;
// }