// - Write a function called letterCapitalize which takes a single string parameter and capitalizes the first letter of each word in the string. You can assume that words in the input string will be 
// separated by only one space.

function letterCapitalize (string) {
    var string = prompt ("Type a sentence.")
        var splitString = string.split(' ')
        
        
        for var (splitString = 0; i < splitString.length; i++){
            
        }
}




// var csvCarString = myFavoriteCar.split(' ').join(',')


function teleFono (nombre) {
   var nombre = prompt ("Enter your phone number like: XXX-XXX-XXXX")
       if(nombre.charAt(3) === '-' && nombre.charAt(7) === '-'){
           return true;
       }
       else {
           return false;
       }
}